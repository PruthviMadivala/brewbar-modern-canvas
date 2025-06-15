
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const menuItems = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav className="w-full sticky top-0 z-30 bg-brewbar-bg/90 backdrop-blur shadow-bb-soft transition-all">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brewbar-brown tracking-wider select-none">BrewBar</span>
        </div>
        <div className="hidden md:flex gap-8 items-center font-medium text-brewbar-brown">
          {menuItems.map((item, idx) => (
            <a key={idx} href={item.href} className="relative px-2 py-1 transition-colors rounded hover:bg-brewbar-accent/20">
              {item.label}
            </a>
          ))}
          <Button className="ml-4 rounded-full bg-brewbar-accent text-brewbar-brown font-semibold px-6 py-2 shadow hover:bg-brewbar-brown hover:text-brewbar-cream transition-colors" size="lg">
            <ShoppingCart className="inline mr-2" size={18} />
            Order Now
          </Button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center px-2 py-1 rounded-full hover:bg-brewbar-cream focus:outline-none transition"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <Menu className="text-brewbar-brown" size={28} />
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-brewbar-bg px-6 pb-4 pt-2">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="block py-2 text-brewbar-brown font-medium hover:bg-brewbar-accent/20 rounded transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="mt-2 w-full rounded-full bg-brewbar-accent text-brewbar-brown font-semibold shadow hover:bg-brewbar-brown hover:text-brewbar-cream" size="lg">
            <ShoppingCart className="inline mr-2" size={18} />
            Order Now
          </Button>
        </div>
      )}
    </nav>
  );
}
