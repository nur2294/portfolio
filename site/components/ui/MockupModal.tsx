"use client";

import { useEffect, useState } from "react";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface MockupModalProps {
  src: string;
  title: string;
  mockups?: { label: string; src: string }[];
  onClose: () => void;
}

export default function MockupModal({ src, title, mockups, onClose }: MockupModalProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const { t } = useLanguage();

  const screens = mockups && mockups.length > 0
    ? mockups
    : [{ label: "Preview", src }];

  const current = screens[activeIdx];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveIdx((i) => Math.min(i + 1, screens.length - 1));
      if (e.key === "ArrowLeft") setActiveIdx((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, screens.length]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
      style={{ background: "rgba(10,15,30,0.94)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full flex flex-col"
        style={{ maxWidth: "1300px", height: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toolbar */}
        <div
          className="flex items-center gap-3 px-5 py-3 rounded-t-2xl flex-shrink-0"
          style={{ background: "#1e293b", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* Dots */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
          </div>

          {/* Tab switcher (if multiple screens) */}
          {screens.length > 1 && (
            <div className="flex items-center gap-1 flex-shrink-0">
              {screens.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                  style={
                    i === activeIdx
                      ? { background: "rgba(201,168,76,0.20)", color: "#e2c47a", border: "1px solid rgba(201,168,76,0.35)" }
                      : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.45)", border: "1px solid transparent" }
                  }
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}

          {/* URL bar */}
          <div
            className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs overflow-hidden"
            style={{ background: "#0f172a", color: "#64748b", minWidth: 0 }}
          >
            <span className="flex-shrink-0">🔒</span>
            <span className="truncate" style={{ color: "#94a3b8" }}>
              {title} — {current.label}
            </span>
          </div>

          {/* Arrow nav */}
          {screens.length > 1 && (
            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={() => setActiveIdx((i) => Math.max(i - 1, 0))}
                disabled={activeIdx === 0}
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-25"
                style={{ background: "rgba(255,255,255,0.08)", color: "white" }}
              >
                <ChevronLeft size={14} />
              </button>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)", minWidth: 32, textAlign: "center" }}>
                {activeIdx + 1} / {screens.length}
              </span>
              <button
                onClick={() => setActiveIdx((i) => Math.min(i + 1, screens.length - 1))}
                disabled={activeIdx === screens.length - 1}
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-25"
                style={{ background: "rgba(255,255,255,0.08)", color: "white" }}
              >
                <ChevronRight size={14} />
              </button>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={current.src}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-80"
              style={{ background: "rgba(201,168,76,0.15)", color: "#e2c47a", border: "1px solid rgba(201,168,76,0.25)" }}
            >
              <ExternalLink size={12} />
              {t.portfolio.fullscreen}
            </a>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all hover:opacity-80"
              style={{ background: "rgba(239,68,68,0.15)", color: "#ef4444" }}
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* iframe */}
        <div
          key={current.src}
          className="flex-1 rounded-b-2xl overflow-hidden"
          style={{ background: "#0f172a" }}
        >
          <iframe
            src={current.src}
            className="w-full h-full"
            style={{ border: "none" }}
            title={current.label}
          />
        </div>

        {/* Hint */}
        <p className="text-center text-xs mt-2.5" style={{ color: "rgba(255,255,255,0.20)" }}>
          {screens.length > 1 ? t.portfolio.hintMulti : ""}{t.portfolio.hintClose}
        </p>
      </div>
    </div>
  );
}
