import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});
=======
});
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
