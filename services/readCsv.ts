import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { sql } from "drizzle-orm";

// Assuming you have a 'securities' table defined

export async function importCSVToDB(filePath: string) {
  const file = Bun.file(filePath);
  const content = await file.text();

  // Parse CSV
  const rows = content.split("\n").map((row) => {
    // Handle commas within quoted fields
    const regex = /(".*?"|[^",]+)(?=\s*,|\s*$)/g;
    return (
      row.match(regex)?.map((field) => field.replace(/^"|"$/g, "").trim()) || []
    );
  });

  const headers = rows.shift(); // Remove and store headers

  // Prepare the data for insertion
  const data = rows
    .filter((row) => row.length === headers?.length)
    .map((row) => {
      const obj: Record<string, any> = {};
      headers?.forEach((header, index) => {
        let value = row[index];
        // Convert numeric strings to numbers
        if (!isNaN(Number(value))) {
          value = Number(value);
        }
        // Convert date strings to Date objects
        else if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
          value = new Date(value);
        }
        obj[header] = value;
      });
      return obj;
    });

  // Perform bulk insert
  try {
    await db.insert(securities).values(data).run();
    console.log(`Inserted ${data.length} rows successfully.`);
  } catch (error) {
    console.error("Error inserting data:", error);
  }
}

// Usage
// importCSVToDB('./path/to/your/csvfile.csv');
