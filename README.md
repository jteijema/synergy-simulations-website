# synergy-simulations
![img](https://zenodo.org/badge/DOI/10.5281/zenodo.10841480.svg)

This repo serves as the output webserver for the ASReview Simulation Project, which uses a Docker image to run large-scale ASReview simulations. This repository only hosts the webserver, which is used to display the results of the simulations.The images are hosted on a separate persistent host, together with the simulation results. 

The Docker image is hosted on Docker Hub, and can be found at [jteijema/asreview-simulation-project](https://github.com/jteijema/asreview-simulation-project).

## Quick Start

To get started with this project, fire up a browser and go to http://jteijema.github.io/synergy-simulations-website.


### Local website

The website is currently hosted by GitHub. However, with an eye on persistency, the website is also easily hosted locally. To run the website locally, clone this repository and run the following command in the root directory:

```bash
python -m http.server 8080
```

The website is now available at http://localhost:8080.


## Citation
All future work using these results should either cite the persistent file storage location or the following paper:

```
@article{teijema2023synergy,
  title={Expansive Empirical Examination: Large-Scale Simulation Study of Active Learning Strategies in Systematic Reviews},
  author={Jelle Jasper Teijema, Jonathan de Bruin, and Rens van de Schoot},
```

## License

This project is licensed under the terms of the Attribution 4.0 International (CC BY 4.0). See the LICENSE file for details.
