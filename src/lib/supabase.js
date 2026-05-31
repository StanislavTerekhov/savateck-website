import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
  || 'https://kpoatkeucxqbvarilxhr.supabase.co'

const key = import.meta.env.VITE_SUPABASE_ANON_KEY
  || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwb2F0a2V1Y3hxYnZhcmlseGhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5NTI4NTIsImV4cCI6MjA5NDUyODg1Mn0.jUFi6V5WjvnXyr7LuMWrGhHlXilBWqvSX2B_vwSo77Y'

export const supabase = createClient(url, key)
