export interface SlugifyOptions {
  /** Character to replace non-alphanumeric sequences. Defaults to `"-"`. */
  replacement?: string;
  /** Preserve original casing. Defaults to `false`. */
  preserveCase?: boolean;
  /** Strip leading/trailing replacement characters. Defaults to `true`. */
  trim?: boolean;
}

export declare function slugify(input: unknown, options?: SlugifyOptions): string;
export default slugify;
