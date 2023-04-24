import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hxdskxiekdqnhcpitkvu.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4ZHNreGlla2RxbmhjcGl0a3Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3NjA0MTksImV4cCI6MTk5NzMzNjQxOX0.fI3vZIfI0ffPa7BxGmOYrhsDHTBSm1OJ8jSKT4EyuqQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;










