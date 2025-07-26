# Quick Environment Setup

## Error: DATABASE_URL must be set

This is expected! You need to set up your environment variables locally.

## Step 1: Create .env file (30 seconds)

In your terminal in VS Code:

```bash
cp .env.example .env
```

## Step 2: Get Free Database (2 minutes)

### Option A: Neon Database (Recommended)
1. Go to [neon.tech](https://neon.tech)
2. Sign up with GitHub
3. Create project: "back2health"
4. Copy the connection string (starts with `postgresql://`)

### Option B: Quick Local Testing (Skip database for now)
You can temporarily disable database requirement:

Edit `server/db.ts` and comment out the error:
```typescript
// throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
```

## Step 3: Edit .env file

Open `.env` file in VS Code and add:

```env
# For Neon Database:
DATABASE_URL=your_neon_connection_string_here

# For Resend Email (use your existing key):
RESEND_API_KEY=your_resend_key_here

# Other variables (keep as is):
PGHOST=your_pg_host
PGPORT=5432
PGUSER=your_pg_user
PGPASSWORD=your_pg_password
PGDATABASE=your_pg_database
NODE_ENV=development
PORT=5000
```

## Step 4: Test

```bash
npm run dev
```

## Quick Test Without Database

If you want to test the frontend immediately:

1. Comment out the database error in `server/db.ts`
2. The website will load but appointment booking won't work
3. All other features (design, navigation, forms) will work

## Next: Get Your Resend API Key

From your Replit environment or resend.com dashboard.