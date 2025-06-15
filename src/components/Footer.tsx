
import { MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import React from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Twitter", href: "#", icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="bg-brewbar-brown py-10 text-brewbar-cream mt-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-bold text-2xl tracking-wider">BrewBar</span>
          <span className="flex items-center gap-2 text-brewbar-accent mt-1 text-sm">
            <MapPin size={16} /> 123 Coffee Lane, Brewtown
          </span>
          <span className="text-brewbar-cream/70 text-sm">hello@brewbar.com</span>
          <span className="text-brewbar-cream/70 text-sm">© {new Date().getFullYear()} BrewBar</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="hover:underline text-brewbar-cream/90 hover:text-brewbar-accent text-md transition">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="hover:text-brewbar-accent transition-colors">
                <s.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
