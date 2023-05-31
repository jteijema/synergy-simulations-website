# synergy-simulations
This repo serves as the output webserver for the ASReview Simulation Project, which uses a Docker image to run large-scale ASReview simulations. This repository only hosts the webserver, which is used to display the results of the simulations.The images are hosted on a separate persistent host, together with the simulation results. 

The Docker image is hosted on Docker Hub, and can be found at [jteijema/asreview-simulation-project](https://github.com/jteijema/asreview-simulation-project).

## Quick Start

To get started with this project, fire up a browser and go to http://jteijema.github.io/synergy-simulations.

## Citation
All future work using these results should either cite the persistent file storage location or the following paper:

```
@article{teijema20223synergy,
  title={Expansive Empirical Examination: Large-Scale Simulation Study of Active Learning Strategies in Systematic Reviews},
  author={Jelle Jasper Teijema, Jonathan de Bruin, and Rens van de Schoot},
```

## License

This project is licensed under the terms of the Apache-2.0 license. See the LICENSE.md file for details.
