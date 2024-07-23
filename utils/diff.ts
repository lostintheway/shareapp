import type { StockPricePost } from "../db/schema";

// Function to compare two objects ignoring the timestamp key
export function areObjectsEqualIgnoringTimestamp(
  obj1: StockPricePost,
  obj2: StockPricePost
) {
  const { timestamp: _, ...obj1WithoutTimestamp } = obj1;
  const { timestamp: __, ...obj2WithoutTimestamp } = obj2;
  return (
    JSON.stringify(obj1WithoutTimestamp) ===
    JSON.stringify(obj2WithoutTimestamp)
  );
}

// Function to find changed items
export const diffFn = (
  newData?: StockPricePost[],
  previousData?: StockPricePost[]
): StockPricePost[] | undefined => {
  if (!newData) return undefined; // If newData is undefined, return undefined
  if (!previousData) return newData; // If previousData is undefined, return all newData

  return newData.filter((newItem) => {
    const previousItem = previousData.find(
      (item) => item.symbol === newItem.symbol
    );
    return (
      !previousItem || !areObjectsEqualIgnoringTimestamp(newItem, previousItem)
    );
  });
};
