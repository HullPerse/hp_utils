export function foldDiacritics(value: string): string {
  return value
    .normalize("NFKD")
    .replaceAll(/\p{Mark}/gu, "")
    .toLocaleLowerCase();
}

const MAX_QUERY_LENGTH = 200;

export function normalizeSearchText(value: string): string {
  return (
    value
      .normalize("NFKD")
      .replaceAll(/\p{Mark}/gu, "")
      .toLowerCase()
      .match(/[\p{Letter}\p{Number}]+/gu)
      ?.join(" ")
      .slice(0, MAX_QUERY_LENGTH) ?? ""
  );
}