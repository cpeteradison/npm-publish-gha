# GitHub Actions npm Publish Workflow

Generic GitHub Actions workflow for publishing npm packages with trusted publishing.

Copy [`./.github/workflows/publish.yml`](./.github/workflows/publish.yml) into your own repository and edit the config values at the top of the file to match your project.

## Before You Use It

Make sure your project has:

- a valid npm package
- GitHub Actions enabled
- npm trusted publishing configured for the repo on npm
- a folder to publish from
- a valid `package.json` in that publish folder

If you publish from `dist/`, your build must create `dist/package.json`.

## What You Edit Once

Update the `env:` block near the top of the workflow for your repo:

- `PUBLISH_PATH`
- `PACKAGE_JSON_PATH`
- `NODE_VERSION`
- `REGISTRY_URL`
- `INSTALL_COMMAND`
- `BUILD_COMMAND`
- `TEST_COMMAND`
- `GIT_TAG_PREFIX`

## What The Workflow Supports

- npm trusted publishing with GitHub OIDC
- custom `install`, `build`, and `test` commands
- custom `PUBLISH_PATH` and `PACKAGE_JSON_PATH`
- npm dist-tags such as `latest` and `next`
- optional git tag creation after publish

## Quick Start

1. Copy [`./.github/workflows/publish.yml`](./.github/workflows/publish.yml) into your repo.
2. Edit the `env:` values in the workflow for your project layout.
3. Run your build locally and confirm the publish folder is correct.
4. Run the workflow from GitHub Actions.

The manual release form only asks for:

- `dist_tag`
- `npm_access`
- `push_git_tag`

At release time, the workflow expects:

- `PUBLISH_PATH` exists
- `PUBLISH_PATH/package.json` exists
- `PACKAGE_JSON_PATH` exists and contains the version to tag

## Default Config

- `PUBLISH_PATH`: `dist`
- `PACKAGE_JSON_PATH`: `src/package.json`
- `NODE_VERSION`: `24`
- `REGISTRY_URL`: `https://registry.npmjs.org`
- `INSTALL_COMMAND`: `npm ci`
- `BUILD_COMMAND`: `npm run build --if-present`
- `TEST_COMMAND`: `npm test`
- `GIT_TAG_PREFIX`: `v`

These defaults fit projects that keep source package metadata in `src/` and publish built output from `dist/`.

## Release Inputs

- `dist_tag`: `latest`
- `npm_access`: `public`
- `push_git_tag`: `true`

## Example Layout

```text
.
├── src/
│   ├── index.js
│   ├── package.json
│   └── README.md
├── dist/
├── test/
└── .github/workflows/publish.yml
```

This repo includes a small sample package in [`./src/`](./src/). Package-specific docs live in [`./src/README.md`](./src/README.md).

## License

MIT
