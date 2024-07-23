import { expect, test, describe } from "bun:test";
import type { StockPricePost } from "../db/schema";
import { convertToObjectArray } from "../services/convertToObjectArray";

describe("convertToObjectArray", () => {
  test("should handle empty content", () => {
    const content = "dsadsadhilekhbtrkjehjbtklj";
    const result = convertToObjectArray(content);
    expect(result).toHaveLength(0);
  });

  //   test("should handle various valid timestamp formats", () => {
  //     const testCases = [
  //       {
  //         input: "As of 2024-07-22T14:59:53.766341",
  //         expected: "2024-07-22 14:59:53",
  //       },
  //       {
  //         input: "As of 2024-07-22 T14:59:53.766341",
  //         expected: "2024-07-22 14:59:53",
  //       },
  //       {
  //         input: "As of 2024-07-22T14:59:53.766",
  //         expected: "2024-07-22 14:59:53",
  //       },
  //       {
  //         input: "As of 2024-07-22 T14:59:53.766",
  //         expected: "2024-07-22 14:59:53",
  //       },
  //       {
  //         input: "As of 2024-07-22T14:59:53",
  //         expected: "2024-07-22 14:59:53",
  //       },
  //       {
  //         input: "As of 2024-07-22 T14:59:53",
  //         expected: "2024-07-22 14:59:53",
  //       },
  //       {
  //         input: "As of 2023-07-23 15:30:00",
  //         expected: "2023-07-23 15:30:00",
  //       },
  //       {
  //         input: "As of 07/23/2023 15:30:00",
  //         expected: "2023-07-23 15:30:00",
  //       },
  //       {
  //         input: "As of 23-07-2023 15:30:00",
  //         expected: "2023-07-23 15:30:00",
  //       },
  //       {
  //         input: "As of 2023-07-23",
  //         expected: "2023-07-23 00:00:00",
  //       },
  //     ];

  //     testCases.forEach(({ input, expected }, index) => {
  //       const content = `
  // ${input}
  // | 1 | ABC | 100.50 | 1000 | 0.50 | 0.50% | 100.00 | 101.00 | 99.00 | 100.25 | 5000 | 100.00 |
  //       `;

  //       const result = convertToObjectArray(content);

  //       console.log(`Test case ${index + 1}:`);
  //       console.log(`Input: ${input}`);
  //       console.log(`Result:`, result);

  //       expect(result, `Failed for input: ${input}`).toHaveLength(1);
  //       if (result.length > 0) {
  //         expect(
  //           result[0].timestamp,
  //           `Timestamp mismatch for input: ${input}`
  //         ).toBe(expected);
  //       }
  //     });
  //   });

  //   // ... (keep the other tests as they were)

  //   test("should return empty array for invalid timestamp", () => {
  //     const content = `
  // As of Invalid Date Format
  // | 1 | ABC | 100.50 | 1000 | 0.50 | 0.50% | 100.00 | 101.00 | 99.00 | 100.25 | 5000 | 100.00 |
  //     `;

  //     const result = convertToObjectArray(content);

  //     expect(result).toHaveLength(0);
  //   });

  //   test("should return empty array for missing timestamp", () => {
  //     const content = `
  // | 1 | ABC | 100.50 | 1000 | 0.50 | 0.50% | 100.00 | 101.00 | 99.00 | 100.25 | 5000 | 100.00 |
  //     `;

  //     const result = convertToObjectArray(content);

  //     expect(result).toHaveLength(0);
  //   });

  //   test("should correctly parse numeric values", () => {
  //     const content = `
  // As of 2023-07-23 15:30:00
  // | 1 | ABC | 100.50 | 1000 | 0.50 | 0.50% | 100.00 | 101.00 | 99.00 | 100.25 | 5000 | 100.00 |
  //     `;

  //     const result = convertToObjectArray(content);

  //     expect(result).toHaveLength(1);
  //     expect(result[0]).toEqual({
  //       timestamp: "2023-07-23 15:30:00",
  //       symbol: "ABC",
  //       ltp: 100.5,
  //       ltv: 1000,
  //       pointChange: 0.5,
  //       percentChange: 0.5,
  //       openPrice: 100.0,
  //       highPrice: 101.0,
  //       lowPrice: 99.0,
  //       avgTradedPrice: 100.25,
  //       volume: 5000,
  //       previousClosing: 100.0,
  //     });
  //   });

  //   test("should handle comma-separated numeric values", () => {
  //     const content = `
  // As of 2023-07-23 15:30:00
  // | 1 | ABC | 1,100.50 | 1,000 | 0.50 | 0.50% | 1,000.00 | 1,101.00 | 999.00 | 1,050.25 | 5,000 | 1,000.00 |
  //     `;

  //     const result = convertToObjectArray(content);

  //     expect(result).toHaveLength(1);
  //     expect(result[0].ltp).toBe(1100.5);
  //     expect(result[0].ltv).toBe(1000);
  //     expect(result[0].volume).toBe(5000);
  //   });

  //   test("should handle backslash in percentage values", () => {
  //     const content = `
  // As of 2023-07-23 15:30:00
  // | 1 | ABC | 100.50 | 1000 | 0.50 | 0.50\\ | 100.00 | 101.00 | 99.00 | 100.25 | 5000 | 100.00 |
  //     `;

  //     const result = convertToObjectArray(content);

  //     expect(result).toHaveLength(1);
  //     expect(result[0].percentChange).toBe(0.5);
  //   });

  //   test("should handle missing values", () => {
  //     const content = `
  // As of 2023-07-23 15:30:00
  // | 1 | ABC | 100.50 | | 0.50 | 0.50% | 100.00 | | 99.00 | 100.25 | | 100.00 |
  //     `;

  //     const result = convertToObjectArray(content);

  //     expect(result).toHaveLength(1);
  //     expect(result[0].ltv).toBeUndefined();
  //     expect(result[0].highPrice).toBeUndefined();
  //     expect(result[0].volume).toBeUndefined();
  //   });

  //   test("should skip lines with only dashes", () => {
  //     const content = `
  // As of 2023-07-23 15:30:00
  // | 1 | ABC | 100.50 | 1000 | 0.50 | 0.50% | 100.00 | 101.00 | 99.00 | 100.25 | 5000 | 100.00 |
  // | 2 | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
  // | 3 | XYZ | 50.75 | 500 | -0.25 | -0.49% | 51.00 | 51.50 | 50.50 | 50.80 | 2000 | 51.00 |
  //     `;

  //     const result = convertToObjectArray(content);

  //     expect(result).toHaveLength(2);
  //     expect(result[0].symbol).toBe("ABC");
  //     expect(result[1].symbol).toBe("XYZ");
  //   });

  //   test("should handle empty content", () => {
  //     const content = "";
  //     const result = convertToObjectArray(content);
  //     expect(result).toHaveLength(0);
  //   });

  //   test("should handle content with no valid data lines", () => {
  //     const content = "As of 2023-07-23 15:30:00\nNo valid data lines here";
  //     const result = convertToObjectArray(content);
  //     expect(result).toHaveLength(0);
  //   });
});
