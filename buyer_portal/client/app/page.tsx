'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <section className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              Premium buyer experience
            </p>
            <div className="space-y-4">
              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
                Shop smarter with a modern marketplace experience.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Browse top deals, shop curated collections, and manage orders with a polished buyer portal inspired by leading marketplaces.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/login" className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand/90">
                Sign in
              </Link>
              <Link href="/register" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
                Create account
              </Link>
            </div>
          </section>
          <section className="relative rounded-[2rem] bg-gradient-to-br from-white via-slate-100 to-brand/10 p-8 shadow-glass ring-1 ring-slate-200/50">
            <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
            <div className="relative space-y-6">
              <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Flash Sale</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">Up to 60% off selected items</p>
                  </div>
                  <div className="rounded-3xl bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">Limited time</div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-slate-950/95 p-6 text-white shadow-xl shadow-slate-950/10 ring-1 ring-white/10">
                  <p className="text-sm text-slate-400">Trending now</p>
                  <p className="mt-3 text-3xl font-semibold">Smartphones</p>
                </div>
                <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm text-slate-500">Top rated</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-900">Home appliances</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.75rem] bg-white p-5 text-center shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm text-slate-500">Free shipping</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">1.8K+</p>
                </div>
                <div className="rounded-[1.75rem] bg-white p-5 text-center shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm text-slate-500">Daily deals</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">34</p>
                </div>
                <div className="rounded-[1.75rem] bg-white p-5 text-center shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm text-slate-500">Top sellers</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">12</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
