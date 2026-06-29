'use client';

import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-sky-100 px-6 py-10">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-white/95 p-8 shadow-panel md:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[2rem] bg-slate-950/95 p-8 text-white shadow-xl shadow-slate-950/10 ring-1 ring-white/10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full bg-seller-brand/10 px-4 py-2 text-sm text-seller-brand">
              <span className="h-2.5 w-2.5 rounded-full bg-seller-brand" />
              Business registration
            </div>
            <h1 className="text-4xl font-semibold">Create your seller account</h1>
            <p className="max-w-lg text-slate-300">
              Register your store details and unlock a powerful vendor dashboard designed for marketplace sellers.
            </p>
          </div>
          <div className="mt-10 space-y-6 rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">What you get</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• Professional product and order management</li>
                <li>• Store analytics and customer insights</li>
                <li>• Inventory controls and discount tools</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/80 p-4">
                <p className="text-sm text-slate-400">Fast approvals</p>
                <p className="mt-2 text-2xl font-semibold">Quick onboarding</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-4">
                <p className="text-sm text-slate-400">Secure login</p>
                <p className="mt-2 text-2xl font-semibold">JWT & hashed passwords</p>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="rounded-[2rem] bg-slate-950/95 p-8 text-white shadow-xl shadow-slate-950/10 ring-1 ring-white/10">
            <h2 className="text-3xl font-semibold">Seller registration</h2>
            <p className="mt-3 text-sm text-slate-400">Register your business, verify your email, and launch your store with a modern seller portal.</p>
          </div>
          <form className="grid gap-4 rounded-[2rem] bg-slate-950/95 p-8 text-white shadow-xl shadow-slate-950/10 ring-1 ring-white/10">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                <span>Business Name</span>
                <input type="text" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
              </label>
              <label className="block text-sm text-slate-300">
                <span>Owner Name</span>
                <input type="text" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                <span>Phone Number</span>
                <input type="tel" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
              </label>
              <label className="block text-sm text-slate-300">
                <span>Email</span>
                <input type="email" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
              </label>
            </div>
            <label className="block text-sm text-slate-300">
              <span>Business Address</span>
              <input type="text" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
            </label>
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="block text-sm text-slate-300">
                <span>Country</span>
                <input type="text" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
              </label>
              <label className="block text-sm text-slate-300">
                <span>Region</span>
                <input type="text" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
              </label>
              <label className="block text-sm text-slate-300">
                <span>City</span>
                <input type="text" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                <span>Store Name</span>
                <input type="text" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
              </label>
              <label className="block text-sm text-slate-300">
                <span>Business Type</span>
                <input type="text" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                <span>Business Registration #</span>
                <input type="text" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
              </label>
              <label className="block text-sm text-slate-300">
                <span>Tax Number</span>
                <input type="text" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                <span>Password</span>
                <input type="password" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
              </label>
              <label className="block text-sm text-slate-300">
                <span>Confirm Password</span>
                <input type="password" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
              </label>
            </div>
            <label className="inline-flex items-center gap-3 text-sm text-slate-300">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-seller-brand focus:ring-seller-brand" />
              I accept the terms and conditions
            </label>
            <button type="submit" className="mt-4 rounded-full bg-seller-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-seller-brand/90">
              Register as Seller
            </button>
            <p className="text-center text-sm text-slate-400">
              Already registered?{' '}
              <Link href="/login" className="text-seller-brand hover:text-white">
                Login now
              </Link>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
