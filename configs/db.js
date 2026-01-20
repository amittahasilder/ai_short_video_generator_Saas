import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(NEXT_PUBLIC_DRIZZLE_DATABASE_URL);
const db = drizzle(sql);


// import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";

// const sql = neon(process.env.DATABASE_URL);
// export const db = drizzle(sql);


