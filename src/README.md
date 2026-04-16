# slugify-lite

Tiny zero-dependency slugify utility for strings.

## Install

```bash
npm install slugify-lite
```

## Usage

```js
import { slugify } from "slugify-lite";

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
