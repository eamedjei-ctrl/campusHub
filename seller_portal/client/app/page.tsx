import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-seller-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <section className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-seller-brand/10 bg-white/80 px-4 py-2 text-sm text-seller-brand shadow-panel">
              <span className="h-2.5 w-2.5 rounded-full bg-seller-brand" />
              Seller Portal for modern marketplace traders
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Build your seller business with a polished trader dashboard.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                A professional Next.js seller portal, with authentication, product management, analytics, and store settings for marketplace vendors.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/login" className="inline-flex items-center justify-center rounded-full bg-seller-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-seller-brand/20 transition hover:bg-seller-brand/90">
                Go to Login
              </Link>
              <Link href="/register" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Register as Seller
              </Link>
            </div>
          </section>
          <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-seller-brand/10 via-white to-slate-100 p-8 shadow-panel">
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_60%)]" />
            <div className="relative space-y-6">
              <div className="rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm uppercase tracking-[0.24em] text-seller-brand">Seller Portal</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-950">Welcome Back, Seller</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">Manage products, orders, inventory, and analytics from one unified workspace.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-seller-brand/5 p-5">
                  <p className="text-sm text-slate-600">Total products</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950">124</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm text-slate-600">Pending orders</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950">18</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm text-slate-600">Revenue</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950">$23.8K</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm text-slate-600">Store rating</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950">4.9 ★</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
