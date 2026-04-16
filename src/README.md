# ultra-tiny-slugify

[![npm version](https://img.shields.io/npm/v/ultra-tiny-slugify.svg)](https://www.npmjs.com/package/ultra-tiny-slugify)
[![bundle size](https://img.shields.io/bundlephobia/minzip/ultra-tiny-slugify?color=blue)](https://bundlephobia.com/package/ultra-tiny-slugify)
[![CI](https://github.com/cpeteradison/npm-publish-gha/actions/workflows/ci.yml/badge.svg)](https://github.com/cpeteradison/npm-publish-gha/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../LICENSE)

Tiny zero-dependency slugify utility for strings.

## Install

```bash
npm install ultra-tiny-slugify
```

## Usage

```js
import { slugify } from "ultra-tiny-slugify";

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
