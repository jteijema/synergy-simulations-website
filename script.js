const folders = document.getElementById("folders");
const imageContainer = document.getElementById("image-container");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

(async function () {
    try {
        const data = await fetch("data.json").then(res => res.json());
        const simulationsCountData = { count: data.count };
        const folderList = data.images;

        const groupedFolderList = createGroupedFolderList(folderList);
        const keysList = Object.keys(groupedFolderList);

        keysList.forEach(key => {
            const listItem = document.createElement("li");
            listItem.textContent = key.replace(/_/g, ' ');
            listItem.addEventListener("click", () => {
                setSelectedGroup(key, groupedFolderList, listItem);
            });
            folders.appendChild(listItem);
        });

        const subtitle = document.getElementById("subtitle");
        subtitle.textContent = `Displaying ${folderList.length} plots made from ${simulationsCountData.count} simulations. (27001 - 65 Walker runs)`;

        setSelectedGroupFromHash(keysList, groupedFolderList, document.createElement("li"));

    } catch (error) {
        console.error("Error fetching data:", error);
    }
})();

function createGroupedFolderList(folderList) {
    /* Group the folders by the first part of their name, which is the name of the simulation. */
    return folderList.reduce((groups, folder) => {
        const match = folder.name.match(/^([\w\s.-]+?)?\s?\d{4}/);
        const key = match ? match[0].trim() : '';


        groups[key] = groups[key] || [];
        groups[key].push(folder);
        return groups;
    }, {});
}

function displayGroupImages(folders) {
    /* Display the images from the selected group. */
    imageContainer.innerHTML = "";
    folders.forEach(folder => {
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("image-wrapper");

        const img = document.createElement("img");
        img.src = folder.imagePath;
        img.alt = "Image from selected folder";
        img.classList.add("group-image");
        img.addEventListener("click", () => {
            lightboxImg.src = folder.imagePath;
            lightbox.style.display = "flex";
        });
        imgWrapper.appendChild(img);
        imageContainer.appendChild(imgWrapper);
    });
}

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

function setSelectedGroup(key, groupedFolderList, listItem) {
    /* Set the selected group and display the images from that group. */
    const folders = groupedFolderList[key];
    if (!folders || !listItem) {
        return;
    }
    if (listItem.classList.contains("selected")) {
        return;
    }
    document.querySelectorAll("#folders li.selected").forEach(el => {
        el.classList.remove("selected");
    });
    listItem.classList.add("selected");
    displayGroupImages(folders);

    window.location.hash = key;
}

function setSelectedGroupFromHash(keysList, groupedFolderList, listItem) {
    /* Set the selected group from the hash in the URL. */
    const selectedKey = window.location.hash.substring(1); // Remove the '#' character
    if (selectedKey && keysList.includes(selectedKey)) {
        setSelectedGroup(selectedKey, groupedFolderList, listItem);
    } else {
        setSelectedGroup(keysList[0], groupedFolderList, listItem);
    }
}
