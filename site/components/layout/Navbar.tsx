"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/blog", label: t.nav.blog },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(30,58,95,0.10)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between" style={{ height: "72px" }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-xl overflow-hidden transition-transform group-hover:scale-105 shrink-0"
            style={{ border: "2px solid rgba(30,58,95,0.20)" }}
          >
            <Image
              src="/images/nur-asiltas.jpg"
              alt="Nur Asıltaş"
              width={40}
              height={40}
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 28%" }}
            />
          </div>
          <div>
            <span className="font-semibold text-base" style={{ color: "#1e3a5f", fontFamily: "Inter, sans-serif" }}>
              Nur Asıltaş
            </span>
            <p className="text-xs leading-none" style={{ color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>
              {lang === "en" ? "Software Engineer" : "Yazılım Mühendisi"}
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                pathname === link.href
                  ? "text-white"
                  : "text-gray-600 hover:text-navy"
              )}
              style={
                pathname === link.href
                  ? { background: "#1e3a5f", color: "white" }
                  : {}
              }
            >
              {link.label}
            </Link>
          ))}

          {/* Language toggle */}
          <div
            className="ml-2 flex items-center rounded-lg overflow-hidden"
            style={{ border: "1.5px solid rgba(30,58,95,0.20)", background: "rgba(30,58,95,0.04)" }}
          >
            {(["tr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                style={
                  lang === l
                    ? { background: "#1e3a5f", color: "white" }
                    : { color: "#1e3a5f", background: "transparent" }
                }
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            className="ml-3 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #c9a84c 0%, #e2c47a 100%)",
              boxShadow: "0 2px 12px rgba(201,168,76,0.30)",
            }}
          >
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile right: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <div
            className="flex items-center rounded-lg overflow-hidden"
            style={{ border: "1.5px solid rgba(30,58,95,0.20)", background: "rgba(30,58,95,0.04)" }}
          >
            {(["tr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider transition-all"
                style={
                  lang === l
                    ? { background: "#1e3a5f", color: "white" }
                    : { color: "#1e3a5f", background: "transparent" }
                }
              >
                {l}
              </button>
            ))}
          </div>
          <button
            className="p-2 rounded-lg transition-colors"
            style={{ color: "#1e3a5f" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.nav.menuToggle}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-white border-t",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        style={{ borderColor: "#e2e8f0" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-3 rounded-xl text-sm font-medium transition-all",
                pathname === link.href
                  ? "text-white"
                  : "text-gray-600"
              )}
              style={pathname === link.href ? { background: "#1e3a5f", color: "white" } : {}}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-5 py-3 rounded-xl text-sm font-semibold text-white text-center"
            style={{ background: "linear-gradient(135deg, #c9a84c 0%, #e2c47a 100%)" }}
          >
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
