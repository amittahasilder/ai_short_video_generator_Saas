


/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_2QVYHDgmXTw4@ep-summer-dawn-a4lnm5i1-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
  },
};






// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   dialect: "postgresql",
//   schema: "./src/schema.ts",
//   out: "./drizzle",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
// });




















// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   dialect: "postgresql",
//   schema: "./src/schema.ts",
//   out: "./drizzle",
// });
