// console.log(
//   "| 1 | ABC | 100.50 | 1000 | 0.50 | 0.50% | 100.00 | 101.00 |".length
// );

const match = [
  "2023-01-01T00:00:00.000Z",
  "2023-01-01 T00:00:00.000Z",
  "dsasa",
];

for (let i = 0; i <= match.length; i++) {
  const timestamp = new Date(match[i]);
  console.log(timestamp);
}
