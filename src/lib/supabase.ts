import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';

// Lazy initialization to prevent "supabaseUrl is required" error on startup
let supabaseClient: any = null;

export const getSupabase = () => {
  if (!supabaseClient) {
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials are not provided. Storage features will be disabled.');
      return null;
    }
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseClient;
};

export const getSupabaseImageUrl = (path: string) => {
  if (!supabaseUrl || !path) return path;
  // Format: https://[project-id].supabase.co/storage/v1/object/public/[bucket]/[path]
  return `${supabaseUrl}/storage/v1/object/public/images/${path}`;
};
