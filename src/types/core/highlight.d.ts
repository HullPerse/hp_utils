export interface HighlightRange {
  start: number;
  end: number;
  kind?: "match" | "spell-warn" | "spell-error";
}

export interface HighlightToken {
  text: string;
  highlighted: boolean;
  kind?: HighlightRange["kind"];
}