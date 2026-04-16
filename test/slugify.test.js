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
