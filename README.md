# William Horne - Personal Portfolio & Interactive CV

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)
[![Node.js CI](https://github.com/TheLimeGuy/williamhorne-portfolio/actions/workflows/node.js.yml/badge.svg)](https://github.com/TheLimeGuy/williamhorne-portfolio/blob/main/.github/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/TheLimeGuy/williamhorne-portfolio/branch/main/graph/badge.svg)](https://codecov.io/gh/TheLimeGuy/williamhorne-portfolio)

Welcome to the official repository for my personal portfolio website. This project serves as a live, interactive resume and a showcase for my web development projects and skills. It is currently under active development.

🔗 **Live Site:** [**wwhorne.co.za**](https://wwhorne.co.za) (Deployment in progress)

---

## About The Project

This portfolio is designed from the ground up to be a clean, modern, and responsive platform to detail my professional background and technical abilities. The development process itself is a demonstration of best practices, including version control, automated CI/CD pipelines, and a phased development strategy starting with a front-end MVP.

## Tech Stack

The project is being built with a modern and scalable technology stack:

* **Frontend:**
    * **React** - A JavaScript library for building user interfaces.
    * **TypeScript** - For strong typing and improved developer experience.
    * **Vite** - A next-generation frontend tooling for a blazing fast development experience.
    * **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
    * **Flowbite React** - An open-source component library built on top of Tailwind CSS.
* **Backend (Planned):**
    * **Node.js** with **Express** - For the server-side API.
    * **PostgreSQL** - As the relational database.
* **DevOps & Testing:**
    * **Vitest** & **React Testing Library** - For robust unit and component testing.
    * **Docker** - For containerizing the application for consistent deployments.
    * **GitHub Actions** - For automating the CI/CD pipeline (linting, testing, building).

## Key Features

This repository demonstrates a professional approach to modern web development:

* **Automated CI/CD:** Every push to `main` triggers a GitHub Actions workflow that automatically lints, builds, and runs the entire test suite.
* **Test-Driven Principles:** The project is configured with Vitest for unit testing and includes a coverage threshold of 80% to ensure code quality and reliability.
* **Protected `main` Branch:** Direct pushes to the `main` branch are blocked. All changes must go through a pull request, ensuring code is reviewed and passes all automated checks before being merged.
* **Scalable Architecture:** The project is structured with separate `frontend` and (future) `backend` directories, anticipating a full-stack architecture.

## Getting Started

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository**
    ```sh
    git clone https://github.com/william-wayne-horne/williamhorne-portfolio.git
    ```
2.  **Navigate to the frontend directory**
    ```sh
    cd williamhorne-portfolio/frontend
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Run the development server**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Contact

**William (Liam) Horne**

* **LinkedIn:** [https://www.linkedin.com/in/william-wayne-horne/](https://www.linkedin.com/in/william-wayne-horne/)
* **Email:** [liam.horne73@gmail.com](mailto:liam.horne73@gmail.com)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
