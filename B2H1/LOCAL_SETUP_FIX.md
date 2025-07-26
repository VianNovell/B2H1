# Local Setup Fix - Missing Files Error

## Issue
You're getting a "404: Not Found" error because some files didn't transfer properly from Replit to your local environment.

## Quick Fix (5 minutes)

### Step 1: Verify File Structure
Make sure these files exist in your local project:

```
client/src/lib/
├── queryClient.ts
└── utils.ts
```

### Step 2: If queryClient.ts is Missing
Create `client/src/lib/queryClient.ts` with this content:

```typescript
import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
```

### Step 3: If utils.ts is Missing
Create `client/src/lib/utils.ts` with this content:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Step 4: Verify Components Directory
Make sure you have the `client/src/components/ui/` directory with all shadcn components.

### Step 5: Check vite.config.ts
Make sure your `vite.config.ts` has the correct path aliases:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
```

### Step 6: Check tsconfig.json
Verify your `tsconfig.json` has the correct path mapping:

```json
{
  "compilerOptions": {
    // ... other options
    "baseUrl": ".",
    "paths": {
      "@/*": ["./client/src/*"],
      "@assets/*": ["./attached_assets/*"]
    }
  }
}
```

## Alternative: Re-download from Replit

If files are still missing:
1. Go back to Replit
2. Download the project again as ZIP
3. Extract and compare with your current local files
4. Copy any missing files

## Test the Fix

After creating the missing files:

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Start development
npm run dev
```

The error should be resolved and your website should load properly at `http://localhost:5000`.