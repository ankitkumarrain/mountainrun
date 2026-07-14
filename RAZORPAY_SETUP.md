# Razorpay + Database Setup

## 1. Frontend env

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_API_URL="http://127.0.0.1:49154"
```

## 2. Backend env

Create `backend/.env`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/mountainrun?schema=public"
PORT=49154
FRONTEND_URL="http://127.0.0.1:49160"
RAZORPAY_KEY_ID="rzp_test_xxxxxxxxxx"
RAZORPAY_KEY_SECRET="xxxxxxxxxx"
RAZORPAY_WEBHOOK_SECRET="choose-a-strong-secret"
```

Use Razorpay **Test Mode** keys while developing. Replace with Live Mode keys only after test payments work.

## 3. Database

```bash
npm run api:prisma:migrate
npm run api:prisma:seed
```

The seed creates the demo events used by the frontend registration form.

## 4. Run locally

Frontend:

```bash
npm run dev -- --hostname 127.0.0.1 --port 49160
```

Backend:

```bash
npm run api:build
cd backend
$env:PORT="49154"; node dist/server.js
```

## 5. Razorpay webhook

For local testing, expose the backend with a tunnel such as ngrok and set the Razorpay webhook URL to:

```text
https://YOUR-TUNNEL-DOMAIN/api/payments/webhook
```

Recommended events:

```text
payment.captured
order.paid
```

Use the same `RAZORPAY_WEBHOOK_SECRET` in Razorpay Dashboard and `backend/.env`.

## Flow

1. User submits `/register`.
2. Backend creates registration.
3. Backend creates Razorpay Order.
4. Frontend opens Razorpay Checkout with UPI enabled.
5. Checkout returns payment id, order id, and signature.
6. Backend verifies signature and marks payment as `PAID`.
7. Webhook is the backup confirmation path.
