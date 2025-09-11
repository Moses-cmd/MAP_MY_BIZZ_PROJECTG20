import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import { createObjectCsvWriter } from 'csv-writer'

const SUPABASE_URL = 'https://your-project-id.supabase.co'
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhb2pyYnZyY2lhd3dxa3lmbHhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyMDc4NjEsImV4cCI6MjA3MTc4Mzg2MX0.h7a0fechNuunOyJH4tckcA6Dc47yoFvAFaS18LvQCiQ"

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

// Get list of all tables in 'public' schema
async function getAllTableNames() {
  const { data, error } = await supabase
    .rpc('get_tables_in_schema', { schema_name: 'public' })

  if (error) throw error
  return data
}

// Fetch all data from a table
async function extractTableData(tableName) {
  console.log(`📥 Extracting data from: ${tableName}...`)
  const { data, error } = await supabase
    .from(tableName)
    .select('*')

  if (error) {
    console.error(`❌ Error extracting ${tableName}:`, error.message)
    return []
  }

  // Add table_name column to each row
  return data.map(row => ({ table_name: tableName, ...row }))
}

// Save all tables into one CSV
async function saveAllToCSV(allData) {
  if (allData.length === 0) {
    console.log(`⚠️ No data found in any table.`)
    return
  }

  // Collect all unique headers
  const headers = [...new Set(allData.flatMap(row => Object.keys(row)))]

  const csvWriter = createObjectCsvWriter({
    path: `all_tables.csv`,
    header: headers.map(key => ({ id: key, title: key })),
  })

  await csvWriter.writeRecords(allData)
  console.log(`✅ Saved ${allData.length} records into all_tables.csv`)
}

// Main function
async function extractAllTables() {
  try {
    const tables = await getAllTableNames()
    console.log(`📋 Found ${tables.length} tables:`, tables)

    let allData = []

    for (const table of tables) {
      const data = await extractTableData(table)
      allData = allData.concat(data)
    }

    await saveAllToCSV(allData)

    console.log('🎉 All tables exported into one CSV successfully!')
  } catch (error) {
    console.error('❌ Extraction failed:', error.message)
  }
}

// Run it
extractAllTables()
