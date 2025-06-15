
import { Star } from "lucide-react";
import React from "react";

const testimonials = [
  {
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Emily R.",
    stars: 5,
    quote: "BrewBar's atmosphere is unmatched! I come for the coffee and stay for the cozy vibes and friendly staff.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/74.jpg",
    name: "Daniel M.",
    stars: 5,
    quote: "Their Velvet Latte is the smoothest in town, and the space is always welcoming. Love every visit.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sophia K.",
    stars: 4,
    quote: "Top-notch espresso and a perfect place to get work done. The staff truly care about every detail.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-brewbar-cream">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-brewbar-brown text-center mb-10">What Our Customers Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-bb-card p-8 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition duration-200 group"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 border-4 border-brewbar-accent object-cover shadow"
              />
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className={idx < t.stars ? "text-brewbar-accent" : "text-gray-300"}
                    fill={idx < t.stars ? "#E1B07E" : "none"}
                  />
                ))}
              </div>
              <p className="text-brewbar-brown text-center italic mb-2">"{t.quote}"</p>
              <span className="font-semibold text-brewbar-brown">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
