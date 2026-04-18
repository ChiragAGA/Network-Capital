Network Capital (Phase 2)

🚀 Setup Guide

1. Supabase

Create a new Supabase project.

Run the provided database.sql file to initialize schema.

Enable Google Auth in the Supabase Authentication settings.

2. Environment Variables

Create a .env.local file at the root of your Next.js project:

NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

Important: Only use the anon key here. The service role key must never be exposed in client code.

3. Local Development

Install dependencies:

npm install

Start the dev server:

npm run dev

4. Deployment

Push your code to GitHub.

Import the repository into Vercel.

Add the same environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY) in Vercel Project Settings → Environment Variables.

Trigger a redeploy to ensure Vercel installs fresh dependencies.

5. Testing

Sign up with Google.

Add a contact.

Verify dashboard loads and CRUD operations work.

6. iPhone Shortcut

Open the deployed site in Safari.

Tap Share → Add to Home Screen.

🔍 Features

Search by:

Name

Company

Skills

Qualifications

Hometown

City

Core functionality:

Contact CRUD (Create, Read, Update, Delete)

Dashboard basics

⚠️ Notes

If dependencies change, delete and regenerate the lockfile (package-lock.json or yarn.lock) to avoid stale packages.

Ensure all imports use @/lib/supabase instead of deprecated auth-helpers.

Keep environment variables consistent between local and Vercel.
