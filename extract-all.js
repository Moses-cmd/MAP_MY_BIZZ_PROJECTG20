// extract-all.js
import supabase from "../supabaseClient.js";
import fs from "fs";
import { createObjectCsvWriter } from "csv-writer";


const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// 🔹 Get all tables
async function getAllTableNames() {
  const { data, error } = await supabase.rpc("get_tables_in_schema", {
    schema_name: "public",
  });
  if (error) throw error;
  return data;
}

// 🔹 Extract table data
async function extractTableData(tableName) {
  console.log(`Extracting data from: ${tableName}...`);
  const { data, error } = await supabase.from(tableName).select("*");

  if (error) {
    console.error(`❌ Error extracting ${tableName}:`, error.message);
    return null;
  }

  return data;
}

// 🔹 Save data to CSV
async function saveToCSV(tableName, data) {
  if (!data || data.length === 0) {
    console.log(`⚠️ No data found for ${tableName}`);
    return;
  }

  const headers = Object.keys(data[0]).map((key) => ({
    id: key,
    title: key,
  }));

  const csvWriter = createObjectCsvWriter({
    path: `${tableName}.csv`,
    header: headers,
  });

  await csvWriter.writeRecords(data);
  console.log(`✅ Saved ${data.length} records to ${tableName}.csv`);
}

// 🔹 Main
async function extractAllTables() {
  try {
    const tables = await getAllTableNames();
    console.log(`📋 Found ${tables.length} tables:`, tables);

    for (const table of tables) {
      const data = await extractTableData(table);
      if (data) {
        await saveToCSV(table, data);
      }
    }

    console.log("🎉 All tables exported successfully!");
  } catch (err) {
    console.error("❌ Extraction failed:", err.message);
  }
}

extractAllTables();
