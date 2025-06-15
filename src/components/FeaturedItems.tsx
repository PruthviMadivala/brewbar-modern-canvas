
import { Coffee, Star } from "lucide-react";
import React from "react";

const featured = [
  {
    name: "Signature Espresso",
    desc: "Rich, bold, caramel notes.",
    price: "$4.00",
    icon: Coffee,
    stars: 5,
  },
  {
    name: "Velvet Latte",
    desc: "Velvety steamed milk, subtle sweetness.",
    price: "$4.50",
    icon: Coffee,
    stars: 5,
  },
  {
    name: "Cold Brew Bliss",
    desc: "Cold-steeped, ultra-smooth finish.",
    price: "$4.75",
    icon: Coffee,
    stars: 4,
  },
  {
    name: "Golden Cappuccino",
    desc: "Creamy foam, golden dust.",
    price: "$4.25",
    icon: Coffee,
    stars: 5,
  },
];

export default function FeaturedItems() {
  return (
    <section id="menu" className="py-16 bg-brewbar-cream">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-brewbar-brown text-center mb-10 tracking-tight">Featured Coffees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {featured.map((item, idx) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow-bb-card flex flex-col items-center p-6 transition hover:shadow-lg cursor-pointer hover:scale-105 duration-200 group"
            >
              <div className="bg-brewbar-accent/40 rounded-full p-3 mb-4 group-hover:bg-brewbar-accent animate-fade-in">
                <item.icon className="text-brewbar-brown" size={32} />
              </div>
              <div className="text-xl font-semibold text-brewbar-brown mb-2">{item.name}</div>
              <div className="text-sm text-brewbar-brown/70 mb-2">{item.desc}</div>
              <div className="flex items-center mb-3">
                {Array.from({ length: 5 }).map((_, i) =>
                  <Star
                    key={i}
                    size={18}
                    className={
                      "mx-0.5 " + (i < item.stars ? "text-brewbar-accent" : "text-gray-300")
                    }
                    fill={i < item.stars ? "#E1B07E" : "none"}
                  />
                )}
              </div>
              <span className="font-bold text-brewbar-brown text-lg">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
