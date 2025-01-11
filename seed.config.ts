import { SeedPg } from '@snaplet/seed/adapter-pg'
import { defineConfig } from '@snaplet/seed/config'
import { Client } from 'pg'

export default defineConfig({
  adapter: async () => {
    const client = new Client({
      connectionString:
        'postgresql://postgres:upq!mrj@QGF6kje3fyu@db.uptbnkyvqdefgkwrfgim.supabase.co:5432/postgres',
    })
    await client.connect()
    return new SeedPg(client)
  },
  select: ['!*', 'public.*'],
})
