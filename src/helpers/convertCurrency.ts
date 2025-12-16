export default function convertCurrency(val: number) {
  return Intl.NumberFormat().format(val);
}