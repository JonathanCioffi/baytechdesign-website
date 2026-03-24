"use client";

import Link from "next/link";
import { useState } from "react";

interface DropdownItem {
  label: string;
  href: string;
}

function Dropdown({
  label,
  items,
  open,
  onToggle,
}: {
  label: string;
  items: DropdownItem[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-56 rounded-lg bg-bg-card border border-glass-border shadow-xl py-1 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-card-hover transition-colors"
              onClick={onToggle}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Nav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const storyItems: DropdownItem[] = [
    { label: "Your Project Realized", href: "/your-project-realized" },
    { label: "Meet Jonathan", href: "/meet-jonathan" },
  ];

  const servicesItems: DropdownItem[] = [
    { label: "Control Programming", href: "/services/control-programming" },
    { label: "DSP Programming", href: "/services/dsp-programming" },
    { label: "Design Build Solutions", href: "/services/design-build" },
  ];

  const toggle = (name: string) =>
    setOpenDropdown((prev) => (prev === name ? null : name));

  return (
    <nav className="sticky top-0 z-50 border-b border-glass-border bg-glass backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-accent-blue">Bay Tech</span>{" "}
              <span className="text-accent-gold">Design Group</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Dropdown
              label="The Story"
              items={storyItems}
              open={openDropdown === "story"}
              onToggle={() => toggle("story")}
            />
            <Dropdown
              label="Services"
              items={servicesItems}
              open={openDropdown === "services"}
              onToggle={() => toggle("services")}
            />
            <Link
              href="/contact"
              className="ml-2 rounded-lg bg-accent-blue px-4 py-2 text-sm font-semibold text-white hover:bg-accent-blue/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-glass-border bg-bg-card">
          <div className="px-4 py-3 space-y-1">
            <p className="px-3 pt-2 pb-1 text-xs font-semibold text-text-muted uppercase tracking-wider">
              The Story
            </p>
            {storyItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pt-3 pb-1 text-xs font-semibold text-text-muted uppercase tracking-wider">
              Services
            </p>
            {servicesItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-2 rounded-lg bg-accent-blue px-4 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
