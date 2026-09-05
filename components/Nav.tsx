"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#why", label: "چالش‌ها" },
  { href: "#what-is", label: "ایزی‌گلوکو چیست؟" },
  { href: "#specs", label: "مشخصات" },
  { href: "#features", label: "امکانات" },
  { href: "#app", label: "اپلیکیشن" },
  { href: "#faq", label: "سوالات" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-panel mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a href="#top" className="cursor-pointer" aria-label="سیناکر — ایزی‌گلوکو">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="منوی اصلی">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-brand-fg/80 transition duration-200 hover:bg-brand-bg-alt hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="min-h-9 cursor-pointer px-4">
            <a href="#buy">خرید / استعلام</a>
          </Button>
        </div>

        <button
          type="button"
          className="flex size-11 cursor-pointer items-center justify-center rounded-lg text-brand-fg transition duration-200 hover:bg-brand-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      {open ? (
        <div className="glass-panel mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl px-3 py-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-lg px-3 py-3 text-sm font-medium text-brand-fg transition duration-200 hover:bg-brand-bg-alt"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="mt-2 min-h-11 w-full cursor-pointer">
            <a href="#buy" onClick={() => setOpen(false)}>
              خرید / استعلام
            </a>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
