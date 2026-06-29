'use client';

import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-surface text-slate-900 px-6 py-10">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-white/95 p-8 shadow-panel md:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[2rem] bg-gradient-to-br from-brand/90 to-slate-950 p-10 text-white shadow-xl shadow-black/10 ring-1 ring-white/10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              Buyer registration
            </div>
            <h1 className="text-4xl font-semibold">Create your account</h1>
            <p className="max-w-lg text-base leading-7 text-slate-200">
              Join now to access fast shipping, personalized recommendations, and a premium shopping dashboard.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Safe checkout</p>
                <p className="mt-3 text-base leading-6 text-slate-200">Secure payments and fast order tracking.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Personalized deals</p>
                <p className="mt-3 text-base leading-6 text-slate-200">Recommendations tailored to your browsing style.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/40 ring-1 ring-slate-200/50">
            <h2 className="text-3xl font-semibold text-slate-950">Register as a buyer</h2>
            <p className="mt-3 text-sm text-slate-600">Create an account using email, phone, or profile details to begin shopping.</p>
          </div>
          <form className="grid gap-4 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/40 ring-1 ring-slate-200/50">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-700">
                <span>First Name</span>
                <input type="text" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
              <label className="block text-sm text-slate-700">
                <span>Last Name</span>
                <input type="text" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-700">
                <span>Username</span>
                <input type="text" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
              <label className="block text-sm text-slate-700">
                <span>Email</span>
                <input type="email" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-700">
                <span>Phone Number</span>
                <input type="tel" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
              <label className="block text-sm text-slate-700">
                <span>Profile Picture (optional)</span>
                <input type="url" placeholder="Image URL" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-700">
                <span>Password</span>
                <input type="password" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
              <label className="block text-sm text-slate-700">
                <span>Confirm Password</span>
                <input type="password" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
            </div>
            <label className="block text-sm text-slate-700">
              <span>Country</span>
              <input type="text" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </label>
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="block text-sm text-slate-700">
                <span>Region</span>
                <input type="text" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
              <label className="block text-sm text-slate-700">
                <span>City</span>
                <input type="text" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
              <label className="block text-sm text-slate-700">
                <span>Delivery Address</span>
                <input type="text" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20" />
              </label>
            </div>
            <label className="inline-flex items-center gap-3 text-sm text-slate-700">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 bg-white text-brand focus:ring-brand" />
              I accept the terms and conditions
            </label>
            <button type="submit" className="mt-4 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand/90">
              Register
            </button>
            <p className="text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-brand hover:text-brand/80">
                Login
              </Link>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
