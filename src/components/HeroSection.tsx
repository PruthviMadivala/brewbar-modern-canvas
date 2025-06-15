
import { Button } from "@/components/ui/button";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center" style={{
      background: 'linear-gradient(0deg, rgba(250,246,241,0.95) 40%, rgba(250,246,241,0.7) 100%), url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat'
    }}>
      <div className="container px-6 flex flex-col items-center justify-center text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-brewbar-brown drop-shadow mb-4 animate-fade-in">Brewed with Passion</h1>
        <p className="text-xl md:text-2xl text-brewbar-brown/80 mb-8 max-w-xl animate-fade-in">Discover a new standard of coffee, crafted from the finest beans and served in a space that's as warm as your first sip.</p>
        <Button size="lg" className="rounded-full font-semibold px-8 py-3 bg-brewbar-accent text-brewbar-brown shadow-bb-card hover:bg-brewbar-brown hover:text-brewbar-cream transition">
          Order Now
        </Button>
      </div>
    </section>
  );
}
