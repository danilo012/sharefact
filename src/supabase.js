import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dgxldofzgosnhclamzhi.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRneGxkb2Z6Z29zbmhjbGFtemhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5MzU3MTYsImV4cCI6MTk5NzUxMTcxNn0.amHF8aMQ-N2zeadKjnsD1u4Gd3fP-ekEcHMBzeUtvbc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;











