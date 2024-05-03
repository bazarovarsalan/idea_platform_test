export function wordHelper(quantity: number): string {
  const words = ["пересадка", "пересадки", "пересадок"];
  quantity = Math.abs(quantity) % 100;
  let num = quantity % 10;
  if (quantity === 0) return "Без пересадок";
  if (quantity > 10 && quantity < 20)
    return quantity.toString() + " " + words[2];
  if (num > 1 && num < 5) return quantity.toString() + " " + words[1];
  if (num === 1) return quantity.toString() + " " + words[0];
  return quantity.toString() + " " + words[2];
}
