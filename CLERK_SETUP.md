# Clerk authentication — how to test

## What was wrong (fixed)

1. **Sign-up required username + phone** → Google OAuth opened a broken “extra fields” page and user never finished, so Dashboard showed **0 users**.
2. Conflicting redirect env vars and aggressive CSS broke Clerk UI.
3. Header used **modal** sign-in (worse for Google OAuth). Now uses full pages `/sign-in` and `/sign-up`.

Clerk instance is now configured for:

- Email + password
- Google OAuth
- No required username / phone

## How to test (local)

1. Restart frontend so env changes load:

```bash
cd frontend
npm run dev
```

2. Open **http://localhost:3000/sign-up** (hard refresh: `Ctrl+Shift+R`).

3. Try **either**:

### A) Google

- Click **Continue with Google**
- Pick account
- You should land on `/register` with a profile icon in the header

### B) Email + password

- Enter email + password (min 8 chars)
- Complete sign-up
- Header shows profile icon

4. Confirm user exists:

- Clerk Dashboard → **Users** (Development instance)
- Or CLI: `clerk users list`

## Dashboard tip

Top-left of Clerk Dashboard must say **Development** (not Production).  
This project only has a **development** instance configured.

## Allowed URLs (Dashboard)

Clerk → **Configure** → **Domains / Paths** (names vary):

- App URL: `http://localhost:3000`
- Sign-in: `/sign-in`
- Sign-up: `/sign-up`
- After auth: `/register`

If Google still fails on a custom domain later, add that domain in Clerk Allowed origins.

## Env files (frontend)

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/register"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/register"
```

Backend needs the same `CLERK_SECRET_KEY` for API token verification.
