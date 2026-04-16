import test from "node:test";
import assert from "node:assert/strict";

import slugify, { slugify as namedSlugify } from "../src/index.js";

test("slugifies a basic title", () => {
  assert.equal(slugify("Hello World!"), "hello-world");
});

test("removes accents and punctuation", () => {
  assert.equal(slugify("Crème brûlée, anyone?"), "creme-brulee-anyone");
});

test("handles German accented characters", () => {
  assert.equal(slugify("Frühstück im Büro"), "fruhstuck-im-buro");
});

test("drops emoji from the slug", () => {
  assert.equal(slugify("Coffee ☕ time"), "coffee-time");
});

test("supports a custom replacement character", () => {
  assert.equal(slugify("Hello World", { replacement: "_" }), "hello_world");
});

test("preserves case when requested", () => {
  assert.equal(namedSlugify("Hello World", { preserveCase: true }), "Hello-World");
});

test("returns an empty slug for blankish input", () => {
  assert.equal(slugify("   ---   "), "");
});

test("preserves non-latin letters", () => {
  assert.equal(slugify("Привет мир"), "привет-мир");
  assert.equal(slugify("مرحبا بالعالم"), "مرحبا-بالعالم");
});

test("dot as separator: basic", () => {
  assert.equal(slugify("Hello World", { replacement: "." }), "hello.world");
});

test("dot as separator: collapses consecutive separators", () => {
  assert.equal(slugify("Hello   World!!!", { replacement: "." }), "hello.world");
});

test("dot as separator: trims leading and trailing dots", () => {
  assert.equal(slugify("...Hello World...", { replacement: "." }), "hello.world");
});

test("dot as separator: preserves existing dots in input", () => {
  assert.equal(slugify("file.name.js", { replacement: "." }), "file.name.js");
});

test("dot as separator: with trim disabled", () => {
  assert.equal(slugify("Hello World", { replacement: ".", trim: false }), "hello.world");
  assert.equal(slugify("  Hello  ", { replacement: ".", trim: false }), ".hello.");
});

test("handles non-string input", () => {
  assert.equal(slugify(42), "42");
  assert.equal(slugify(null), "");
  assert.equal(slugify(undefined), "");
});

test("handles empty replacement by joining tokens", () => {
  assert.equal(slugify("Hello World", { replacement: "" }), "helloworld");
});

test("strips smart quotes without creating separators", () => {
  assert.equal(slugify("it\u2019s alive"), "its-alive");
  assert.equal(slugify("\u201CHello World\u201D"), "hello-world");
});

test("null or invalid replacement falls back to default", () => {
  assert.equal(slugify("Hello World", { replacement: null }), "hello-world");
  assert.equal(slugify("Hello World", { replacement: 42 }), "hello-world");
  assert.equal(slugify("Hello World", { replacement: undefined }), "hello-world");
});
