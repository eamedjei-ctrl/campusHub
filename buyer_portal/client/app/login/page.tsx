'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-brand/70 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl ring-1 ring-white/10 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <section className="space-y-6">
            <div className="max-w-xl space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                <span className="h-2.5 w-2.5 rounded-full bg-brand" />
                Buyer login
              </div>
              <h1 className="text-5xl font-semibold tracking-tight">Welcome Back!</h1>
              <p className="text-lg leading-8 text-slate-300">
                Sign in to continue shopping, track orders, and manage your wishlist with a premium marketplace experience.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Secure login</p>
                <p className="mt-3 text-base text-slate-300">JWT authentication and encrypted password storage.</p>
              </div>
              <div className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Fast access</p>
                <p className="mt-3 text-base text-slate-300">Quick access to your orders, cart, and personalized deals.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand/20 via-white/80 to-white/90 p-8 shadow-glass">
              <div className="absolute -right-16 top-8 h-36 w-36 rounded-full bg-slate-50/20 blur-3xl" />
              <div className="relative space-y-4">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Fast cart</p>
                <h2 className="text-3xl font-semibold text-slate-950">Browse top deals instantly</h2>
                <p className="text-slate-600">Discover trending products, flash sales, and handpicked collections curated for your lifestyle.</p>
              </div>
            </div>
          </section>
          <section className="rounded-[2rem] bg-slate-950/95 p-8 shadow-xl shadow-black/20 ring-1 ring-white/10">
            <div className="mb-8 space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-brand">Sign in</p>
              <h2 className="text-3xl font-semibold">Access your buyer account</h2>
              <p className="text-sm text-slate-400">Secure sign in with email, phone, or social login options.</p>
            </div>
            <form className="space-y-5">
              <label className="block text-sm text-slate-300">
                <span>Email or phone number</span>
                <input type="text" placeholder="you@example.com" className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30" />
              </label>
              <label className="block text-sm text-slate-300">
                <div className="mb-3 flex items-center justify-between text-slate-300">
                  <span>Password</span>
                  <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="text-sm text-slate-400 underline decoration-dashed underline-offset-4 hover:text-white">
                    {showPassword ? 'Hide' : 'Show'} password
                  </button>
                </div>
                <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30" />
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-400">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-brand focus:ring-brand" />
                  Remember me
                </label>
                <Link href="#" className="text-brand hover:text-white">
                  Forgot password?
                </Link>
              </div>
              <button type="submit" className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand/90">
                Login
              </button>
            </form>
            <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-500">
              <span className="h-px flex-1 bg-slate-700/80" />
              Or continue with
              <span className="h-px flex-1 bg-slate-700/80" />
            </div>
            <div className="grid gap-3">
              <button className="flex items-center justify-center gap-3 rounded-full border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 transition hover:border-brand/40 hover:text-white">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">G</span>
                Continue with Google
              </button>
              <button className="flex items-center justify-center gap-3 rounded-full border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 transition hover:border-brand/40 hover:text-white">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">GH</span>
                Continue with GitHub
              </button>
              <button className="flex items-center justify-center gap-3 rounded-full border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 transition hover:border-brand/40 hover:text-white">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">F</span>
                Continue with Facebook
              </button>
            </div>
            <p className="mt-6 text-center text-sm text-slate-400">
              New to marketplace?{' '}
              <Link href="/register" className="text-brand hover:text-white">
                Register
              </Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
