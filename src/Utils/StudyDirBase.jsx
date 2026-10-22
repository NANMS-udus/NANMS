import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_STU_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_STU_SUPABASE_PUBLISHABLE_KEY;

export const studyDirBase = createClient(supabaseUrl, supabaseKey);