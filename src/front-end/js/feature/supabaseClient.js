const SUPABASE_URL = 'https://nzfpvklltvyxrdnvzxvs.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56ZnB2a2xsdHZ5eHJkbnZ6eHZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NDU2MDgsImV4cCI6MjA1MzEyMTYwOH0.mAqbvBfN6pswFTx16JVCVmkCLmWgJ8v6_2Scu30Z6rQ'

let supabase

if (!supabase) {
  supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
}

export default supabase