"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"

interface NavItem {
  name: string
  href: string
  active?: boolean
}

const navItems: NavItem[] = [
  { name: "Accueil", href: "/" },
  { name: "A propos", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Projets", href: "/#portfolio" },
  { name: "Support", href: "/#support" },
  { name: "Contact", href: "/#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Dynamic Island Header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
        <div
          className={`relative transition-all duration-500 ease-out ${isExpanded ? "scale-100" : "scale-100"
            }`}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Main Island Container */}
          <div
            className={`
              relative flex items-center gap-1
              bg-[#0a0a0a]/90 backdrop-blur-2xl
              border border-white/10
              shadow-2xl shadow-black/50
              transition-all duration-500 ease-out
              ${isExpanded
                ? "rounded-[28px] px-2 py-2"
                : isScrolled
                  ? "rounded-full px-2 py-1.5"
                  : "rounded-[24px] px-2 py-2"
              }
            `}
          >
            {/* Logo Section - Always visible */}
            <Link
              href="/"
              className={`
                flex items-center gap-2.5 pl-2 pr-3
                transition-all duration-300
                ${isExpanded ? "pr-4" : ""}
              `}
            >
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white font-bold text-sm">
                  <Image src="/images/logo.jpg" alt="Logo" width={20} height={20} style={{ width: "auto", height: "auto" }} />
                </span>
                {/* Pulsing dot indicator */}
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#F97316] rounded-full border-2 border-[#0a0a0a] animate-pulse" />
              </div>
              <span className={`
                font-semibold text-white text-base tracking-tight whitespace-nowrap
                transition-all duration-300
                ${isScrolled && !isExpanded ? "hidden" : "block"}
              `}>
                Deep-Technologies
              </span>
            </Link>

            {/* Separator */}
            <div className={`
              w-px h-6 bg-white/10 mx-1
              transition-all duration-300
              ${isExpanded ? "opacity-100" : "opacity-50"}
            `} />

            {/* Navigation Items */}
            <nav className="flex items-center">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-5 py-2.5 text-base font-medium rounded-full
                    transition-all duration-300 ease-out
                    whitespace-nowrap
                    ${item.active
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                    }
                    ${isScrolled && !isExpanded && index > 2 ? "hidden" : "block"}
                  `}
                >
                  {item.name}
                  {item.active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#F97316] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Separator */}
            <div className={`
              w-px h-6 bg-white/10 mx-1
              transition-all duration-300
              ${isExpanded ? "opacity-100" : "opacity-50"}
            `} />

            {/* CTA Button */}
            <Button
              asChild
              size="default"
              className={`
                bg-[#F97316] hover:bg-[#ea580c] text-white
                rounded-full font-semibold text-base
                shadow-lg shadow-orange-500/25
                transition-all duration-300
                ${isExpanded ? "px-5" : "px-4"}
              `}
            >
              <Link href="#contact" className="flex items-center gap-1">
                Devis
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-r from-blue-500/20 via-transparent to-orange-500/20 blur-xl opacity-50" />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-4 left-4 right-4 z-50 lg:hidden">
        <div className={`
          flex items-center justify-between
          bg-[#0a0a0a]/95 backdrop-blur-2xl
          border border-white/10
          rounded-2xl px-4 py-3
          shadow-2xl shadow-black/50
          transition-all duration-300
          ${isOpen ? "rounded-b-none border-b-0" : ""}
        `}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center">
              <span className="text-white font-bold">D</span>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#F97316] rounded-full border-2 border-[#0a0a0a]" />
            </div>
            <span className="font-semibold text-white text-base">Deep-Technologies</span>
          </Link>

          {/* Menu Button */}
          <button
            className={`
              p-2.5 rounded-full transition-all duration-300
              ${isOpen
                ? "bg-white/10 rotate-90"
                : "bg-white/5 hover:bg-white/10"
              }
            `}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`
            overflow-hidden transition-all duration-400 ease-out
            bg-[#0a0a0a]/95 backdrop-blur-2xl
            border border-white/10 border-t-0
            rounded-b-2xl
            ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <nav className="flex flex-col p-3 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center justify-between
                  px-4 py-3.5 rounded-xl
                  text-base font-medium
                  transition-all duration-200
                  ${item.active
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {item.name}
                {item.active && (
                  <span className="w-2 h-2 bg-[#F97316] rounded-full" />
                )}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Button
              asChild
              className="mt-2 bg-[#F97316] hover:bg-[#ea580c] text-white rounded-xl font-semibold text-base h-12"
            >
              <Link href="#contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                Demander un devis
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>
    </>
  )
}
