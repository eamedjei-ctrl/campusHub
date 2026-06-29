'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-800 to-seller-brand/80 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[2rem] bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl md:grid md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <section className="space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <span className="h-2.5 w-2.5 rounded-full bg-seller-success" />
              Seller login
            </div>
            <h1 className="text-4xl font-semibold">Welcome Back, Seller!</h1>
            <p className="max-w-xl text-slate-300">
              Sign in to manage your store, track orders, and grow sales with a professional seller dashboard.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Secure Access</p>
              <p className="mt-3 text-base text-slate-300">Encrypted seller authentication with JWT and role-based access</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Fast onboarding</p>
              <p className="mt-3 text-base text-slate-300">Register your business and unlock a full professional storefront.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-white/5 p-6 ring-1 ring-white/10">
            <div className="absolute -right-12 top-12 h-48 w-48 rounded-full bg-seller-brand/20 blur-3xl" />
            <div className="relative space-y-4">
              <p className="text-sm text-slate-400">Marketplace performance</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="text-sm text-slate-400">Orders Today</p>
                  <p className="mt-3 text-2xl font-semibold">42</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="text-sm text-slate-400">Store Visits</p>
                  <p className="mt-3 text-2xl font-semibold">1.2K</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rounded-[2rem] bg-slate-900/90 p-8 shadow-2xl shadow-black/20 ring-1 ring-white/10">
          <div className="mb-8 space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-seller-brand">Sign in</p>
            <h2 className="text-3xl font-semibold">Trader Authentication</h2>
            <p className="text-sm text-slate-400">Use your seller account to access products, orders, and analytics.</p>
          </div>
          <form className="space-y-4">
            <label className="block text-sm text-slate-300">
              <span>Email</span>
              <input type="email" placeholder="supplier@marketplace.com" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
            </label>
            <label className="block text-sm text-slate-300">
              <div className="mb-2 flex items-center justify-between text-slate-300">
                <span>Password</span>
                <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="text-sm text-slate-400 underline decoration-dashed underline-offset-4 transition hover:text-white">
                  {showPassword ? 'Hide' : 'Show'} password
                </button>
              </div>
              <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-seller-brand focus:ring-2 focus:ring-seller-brand/20" />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-400">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-950 text-seller-brand focus:ring-seller-brand" />
                Remember me
              </label>
              <Link href="#" className="text-seller-brand hover:text-white">
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="w-full rounded-full bg-seller-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-seller-brand/90">
              Login
            </button>
          </form>
          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-500">
            <span className="h-px flex-1 bg-slate-700" />
            Or continue with
            <span className="h-px flex-1 bg-slate-700" />
          </div>
          <div className="grid gap-3">
            <button className="flex items-center justify-center gap-3 rounded-full border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 transition hover:border-seller-brand/40 hover:text-white">
              <span>G</span>
              Continue with Google
            </button>
            <button className="flex items-center justify-center gap-3 rounded-full border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 transition hover:border-seller-brand/40 hover:text-white">
              <span>GH</span>
              Continue with GitHub
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            New seller?{' '}
            <Link href="/register" className="text-seller-brand hover:text-white">
              Register as Seller
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
