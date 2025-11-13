# Storybook Base

[![Chromatic](https://github.com/tennex/storybook-base/actions/workflows/chromatic.yml/badge.svg)](https://github.com/tennex/storybook-base/actions/workflows/chromatic.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A foundational setup for Storybook projects, built with [React](https://react.dev), [Typescript](https://www.typescriptlang.org/), [Storybook](https://storybook.js.org/), and [Vite](https://vite.dev/). This template provides a streamlined development environment for building and documenting UI components efficiently.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (latest version)
- [Git](https://git-scm.com/)

A code editor like [VS Code](https://code.visualstudio.com/) is also recommended for the best development experience.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/tennex/storybook-base.git
```

### 2. Navigate to the Project Directory

```bash
cd storybook-base
```

### 3. Install Dependencies

```bash
npm install
```

## Available Scripts

This project includes several scripts to help with development:

- **`npm run dev`**: Starts the Storybook development server at `http://localhost:6006`.
- **`npm run build`**: Builds a static version of the Storybook UI into the `storybook-static` directory.
- **`npm run lint`**: Lints the project files using ESLint and Stylelint.
- **`npm run test`**: Runs tests using Vitest.

## Project Structure

Here is an overview of the project's structure:

```
storybook-base/
├── .storybook/      # Storybook configuration files
├── docs/            # Documentation files for Storybook
├── src/             # Application source code
│   ├── assets/      # Static assets like images and fonts
│   ├── components/  # Reusable UI components
│   ├── modules/     # Larger full-screen components such as header, modals etc.
│   └── views/       # Full-page examples or layouts
└── package.json     # Project dependencies and scripts
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
