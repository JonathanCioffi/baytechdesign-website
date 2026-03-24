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
        className="px-4 py-2 hover:opacity-60 transition-opacity"
        style={{
          fontFamily: "adobe-garamond-pro, serif",
          fontSize: "19.2px",
          color: "inherit",
        }}
      >
        {label}
      </button>
      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 shadow-lg py-1 z-50"
          style={{ backgroundColor: "#e0e0db", border: "1px solid #ccc" }}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-5 py-3 hover:opacity-60 transition-opacity"
              style={{
                fontFamily: "adobe-garamond-pro, serif",
                fontSize: "17px",
                color: "inherit",
              }}
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(224, 224, 219, 0.95)" : "transparent",
        color: "#000",
      }}
    >
      {/* Social icons — top left */}
      <div className="absolute top-6 left-6 flex items-center gap-4">
        <a
          href="https://www.instagram.com/baytechdesign/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:opacity-60 transition-opacity"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/BayTechDesignGroup/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:opacity-60 transition-opacity"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="https://twitter.com/baytechdesign"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:opacity-60 transition-opacity"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
      </div>

      {/* Centered logo */}
      <div className="flex justify-center pt-6">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Bay Tech Design Group"
            width={110}
            height={107}
            className="w-[110px] h-auto"
            priority
          />
        </Link>
      </div>

      {/* Centered nav links */}
      <nav className="hidden md:flex justify-center items-center gap-2 mt-4 pb-4">
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
          className="px-4 py-2 hover:opacity-60 transition-opacity"
          style={{
            fontFamily: "adobe-garamond-pro, serif",
            fontSize: "19.2px",
            color: "inherit",
          }}
        >
          Contact Us
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <div className="md:hidden absolute top-6 right-6">
        <button
          className="p-2 text-black hover:opacity-60"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: "#e0e0db", borderTop: "1px solid #ccc" }}>
          <div
            className="px-6 py-4 space-y-1"
            style={{ fontFamily: "adobe-garamond-pro, serif" }}
          >
            <p className="px-2 pt-2 pb-1 text-xs uppercase tracking-wider" style={{ color: "#666" }}>
              The Story
            </p>
            {storyItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-2 py-2 text-black hover:opacity-60"
                style={{ fontSize: "17px" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="px-2 pt-3 pb-1 text-xs uppercase tracking-wider" style={{ color: "#666" }}>
              Consulting Services
            </p>
            {servicesItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-2 py-2 text-black hover:opacity-60"
                style={{ fontSize: "17px" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-2 py-2 text-black hover:opacity-60"
              style={{ fontSize: "17px" }}
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
