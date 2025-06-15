
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-brewbar-bg">
      <div className="container flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80"
          alt="Cozy BrewBar vibe"
          className="rounded-2xl shadow-bb-soft w-full md:w-[380px] h-64 md:h-[320px] object-cover mb-4 md:mb-0 animate-fade-in"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-brewbar-brown mb-4">About BrewBar</h2>
          <p className="text-brewbar-brown/80 text-lg mb-4">
            BrewBar was born from a love of exceptional coffee and the warmth of community. Our mission is simple: craft every cup with passion, source only the finest beans, and create spaces that are as inviting as the aroma of fresh espresso.
          </p>
          <p className="text-brewbar-brown text-base">
            Whether you're catching up with friends or finding a quiet corner for yourself, BrewBar is your daily ritual, your cozy escape, and your premium coffee destination.
          </p>
        </div>
      </div>
    </section>
  );
}
