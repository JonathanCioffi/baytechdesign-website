"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface DropdownItem {
  label: string;
  href: string;
}

function Dropdown({
  label,
  items,
  open,
  onToggle,
  onClose,
}: {
  label: string;
  items: DropdownItem[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [open, onClose]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text-body hover:text-accent-gold transition-colors"
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
        <div className="absolute top-full left-0 mt-1 w-56 rounded bg-bg-white border border-border-light shadow-lg py-1 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-text-body hover:text-accent-gold hover:bg-bg-light transition-colors"
              onClick={onClose}
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

  const closeDropdown = () => setOpenDropdown(null);

  return (
    <nav className="sticky top-0 z-50 border-b border-border-light bg-bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Bay Tech Design Group"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Dropdown
              label="The Story"
              items={storyItems}
              open={openDropdown === "story"}
              onToggle={() => toggle("story")}
              onClose={closeDropdown}
            />
            <Dropdown
              label="Consulting Services"
              items={servicesItems}
              open={openDropdown === "services"}
              onToggle={() => toggle("services")}
              onClose={closeDropdown}
            />
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 text-sm font-medium text-text-body hover:text-accent-gold transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-text-body hover:text-accent-gold"
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
        <div className="md:hidden border-t border-border-light bg-bg-white">
          <div className="px-4 py-3 space-y-1">
            <p className="px-3 pt-2 pb-1 text-xs font-semibold text-text-light uppercase tracking-wider">
              The Story
            </p>
            {storyItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm text-text-body hover:text-accent-gold"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pt-3 pb-1 text-xs font-semibold text-text-light uppercase tracking-wider">
              Consulting Services
            </p>
            {servicesItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm text-text-body hover:text-accent-gold"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-3 py-2 text-sm text-text-body hover:text-accent-gold"
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
