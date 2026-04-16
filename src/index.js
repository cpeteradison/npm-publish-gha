const DEFAULT_REPLACEMENT = "-";

function escapeForCharClass(value) {
  return value.replace(/[-\\\]^]/g, "\\$&");
}

function normalizeReplacement(value) {
  return typeof value === "string" && value.length > 0 ? value : DEFAULT_REPLACEMENT;
}

export function slugify(input, options = {}) {
  const replacement = normalizeReplacement(options.replacement);
  const preserveCase = options.preserveCase === true;
  const trim = options.trim !== false;
  const escapedReplacement = escapeForCharClass(replacement);

  let value = String(input ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");

  if (!preserveCase) {
    value = value.toLowerCase();
  }

  value = value
    .replace(/['"]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, replacement)
    .replace(new RegExp(`${escapedReplacement}{2,}`, "g"), replacement);

  if (trim) {
    value = value.replace(
      new RegExp(`^${escapedReplacement}|${escapedReplacement}$`, "g"),
      "",
    );
  }

  return value;
}

export default slugify;
