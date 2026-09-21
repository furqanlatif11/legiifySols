// treats missing or explicitly unverified values as unavailable data
export function isPlaceholder(value?: string | boolean): boolean {
  if (!value) return true;
  return typeof value === 'string' && value.includes('UNVERIFIED');
}
