export function ozToMl(value: string | undefined | null): string {
  if (!value) return 'по вкусу';

  const cleanValue = value.toLowerCase().replace(/[a-z]/g, '').trim();
  const parts = cleanValue.split(' ');

  let result = 0;

  if (parts.length === 2) {
    const [whole, fraction] = parts;
    const [num, den] = fraction.split('/');
    result = Number(whole) + Number(num) / Number(den);
  } else if (parts[0]?.includes('/')) {
    const [num, den] = parts[0].split('/');
    result = Number(num) / Number(den);
  } else {
    result = Number(parts[0]);
  }

  const ml = Math.round(result * 29.573); // 1 oz = 29.573 ml
  return `${ml} ml`;
}
