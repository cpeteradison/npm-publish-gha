const DEFAULT_REPLACEMENT = "-";

function escapeForRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeReplacement(value) {
  return typeof value === "string" ? value : DEFAULT_REPLACEMENT;
}

export function slugify(input, options = {}) {
  const replacement = normalizeReplacement(options.replacement);
  const preserveCase = options.preserveCase === true;
  const trim = options.trim !== false;

  let value = String(input ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");

  if (!preserveCase) {
    value = value.toLowerCase();
  }

  value = value
    .replace(/['"]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, replacement);

  if (replacement.length > 0) {
    const escaped = escapeForRegex(replacement);
    value = value.replace(new RegExp(`${escaped}{2,}`, "g"), replacement);

    if (trim) {
      value = value.replace(new RegExp(`^${escaped}|${escaped}$`, "g"), "");
    }
  }

  return value;
}

export default slugify;
