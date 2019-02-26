# Contribution Guidelines

Styled System has a [Code of Conduct][].
Please review and help enforce this code of conduct to help us foster an open and inclusive project.

[code of conduct]: ./CODE_OF_CONDUCT.MD

## How to Contribute

Feel free to contribute by opening and commenting on issues, helping answer questions, updating docs, or opening a pull request.
For quick bug fixes or PRs that address an open issue, feel free to open a PR.
If you'd like to suggest a new feature or change to the API, please open an issue for discussion first.

## Pull Requests

To submit a pull request, follow these steps

1. Fork this repo
2. Clone the fork of the repo
3. Create a branch for your change
4. Install dependencies with `npm install`
5. Ensure tests are passing by running `npm test`
6. If you're fixing a bug, it's recommended to write a failing test before writing any code.
7. Make changes locally and commit them
8. Try to make sure tests still pass and that there's 100% coverage
9. Push your branch to origin
10. Open a pull request in this repository with a clear title and description and link to any relevant issues
11. Wait for a maintainer to review your PR


## Documentation Site

The documentation site is a separate package in the `docs/` folder.

To view the documentation site locally, run the following:

```sh
cd docs
npm install
npm start
```

## Architecture

Styled system is intentionally decoupled from React and the CSS-in-JS libraries it works with. It's a very small library of utility functions that accept `props` as the single argument and returns CSS style objects.

To avoid additional build tools, the entire source code is in a single `src/index.js` file, with the core part of the library at the top and built-in style functions below. This allows users of this library to take advantage of features like tree-shaking in webpack.

### Subpackages

The `packages/` folder contains other npm packages and experiments related to the core library.
Many of these have been made redundant by upstream changes in libraries like `styled-components` and `emotion`, but can be forked or used as a reference point for people using Styled System.
