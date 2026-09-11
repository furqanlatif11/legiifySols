// treats any missing value or literal TODO_VERIFY placeholder as "not yet real" data,
// so trust components never leak unverified placeholder text onto the live page
export function isPlaceholder(value?: string | boolean): boolean {
  if (!value) return true;
  return typeof value === 'string' && value.includes('TODO_VERIFY');
}
