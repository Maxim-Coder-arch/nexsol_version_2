export const parsePrice = (priceStr: string): number | null => {
  if (!priceStr) return null;
  
  const match = priceStr.match(/(\d[\d\s]*)/);
  if (!match) return null;
  
  const numberStr = match[1].replace(/\s/g, '');
  const number = parseInt(numberStr, 10);
  
  return isNaN(number) ? null : number;
};