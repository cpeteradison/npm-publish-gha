# tiny-slug

[![npm version](https://img.shields.io/npm/v/tiny-slug.svg)](https://www.npmjs.com/package/tiny-slug)
[![CI](https://github.com/peteradison/npm-publish-gha/actions/workflows/ci.yml/badge.svg)](https://github.com/peteradison/npm-publish-gha/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../LICENSE)

Tiny zero-dependency slugify utility for strings.

## Install

```bash
npm install tiny-slug
```

## Usage

```js
import { slugify } from "tiny-slug";

slugify("Hello World!");
// "hello-world"

slugify("Crème brûlée");
// "creme-brulee"
```

## Options

```js
slugify("Hello World", { replacement: "_" });
// "hello_world"

slugify("Hello World", { preserveCase: true });
// "Hello-World"
```

Supported options:

- `replacement`: string used between words, default `"-"`
- `preserveCase`: keeps the original letter casing when `true`
- `trim`: removes leading and trailing separators, default `true`

## Development

```bash
npm run build
npm test
```

## License

MIT
