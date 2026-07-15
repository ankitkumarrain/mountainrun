# Clerk authentication setup

Mountain Run already wires Clerk on both frontend and backend. You only need real API keys from the Clerk dashboard.

## What is already implemented

### Frontend (`frontend/`)

- `@clerk/nextjs` installed
- `<ClerkProvider>` in `src/app/layout.tsx`
- Route protection via `src/proxy.ts` (Next.js 16 middleware) for `/register` and `/admin`
- Pages: `/sign-in`, `/sign-up`
- Header Sign in / Sign up / `UserButton`
- Registration form sends `Authorization: Bearer <session token>` to the API

### Backend (`backend/`)

- `@clerk/backend` installed
- `requireClerkAuth` verifies Bearer tokens on:
  - `POST /api/registrations`
  - `POST /api/registrations/:id/proof`
  - `POST /api/payments/create-order`
  - `POST /api/payments/verify`
- `requireAdmin` checks Clerk user metadata `role` is `admin` or `super_admin`
- Registrations link users by `clerkId` in Prisma

## 1. Create a Clerk application

1. Open [dashboard.clerk.com](https://dashboard.clerk.com)
2. Create an application (Email + Password is enough)
3. Copy **Publishable key** (`pk_test_...`) and **Secret key** (`sk_test_...`)

## 2. Add keys to env files

### `frontend/.env` (or `.env.local`)

```env
NEXT_PUBLIC_API_URL="http://127.0.0.1:4000"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_xxxxxxxx"
CLERK_SECRET_KEY="sk_test_xxxxxxxx"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/register"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/register"
```

### `backend/.env`

```env
CLERK_SECRET_KEY="sk_test_xxxxxxxx"
CLERK_PUBLISHABLE_KEY="pk_test_xxxxxxxx"
```

Use the **same** Clerk app keys on frontend and backend.

## 3. Clerk Dashboard settings

In Clerk → **Configure** → **Paths** (or similar):

- Sign-in URL: `/sign-in`
- Sign-up URL: `/sign-up`
- After sign-in: `/register`
- After sign-up: `/register`

Allowed origins / redirect URLs:

- `http://localhost:3000`
- `http://127.0.0.1:3000`

## 4. Make an admin user (optional)

1. Sign up once in the app
2. Clerk Dashboard → Users → open that user
3. Public metadata:

```json
{
  "role": "admin"
}
```

## 5. Run the app

```bash
cd backend && npm run dev
```

```bash
cd frontend && npm run dev
```

Open `http://localhost:3000`, click **Sign up**, then go to `/register`.

## Local note without keys

If `CLERK_SECRET_KEY` is missing/placeholder:

- **Backend** (non-production): auth middleware allows requests (dev bypass)
- **Frontend**: Clerk will not work until publishable + secret keys are set

Never deploy production without real Clerk keys.
