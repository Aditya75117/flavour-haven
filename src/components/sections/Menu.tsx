"use client";

import { useState } from "react";
import Image from "next/image";

const CATEGORIES = ["All", "Starters", "Mains", "Desserts", "Drinks"] as const;

type Category = (typeof CATEGORIES)[number];

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  img: string;
  tags: string[];
  category: Category;
}

const MENU_ITEMS: MenuItem[] = [
  {
    name: "Truffle Mushroom Soup",
    desc: "Wild mushroom blend with black truffle oil and crusty bread",
    price: "$16",
    img: "/images/menu-1.jpg",
    tags: ["Vegetarian"],
    category: "Starters",
  },
  {
    name: "Tuna Tartare",
    desc: "Fresh yellowfin tuna with avocado, sesame, and wasabi aioli",
    price: "$22",
    img: "/images/menu-2.jpg",
    tags: ["Gluten-free"],
    category: "Starters",
  },
  {
    name: "Filet Mignon",
    desc: "8oz center-cut tenderloin with béarnaise and roasted garlic",
    price: "$58",
    img: "/images/menu-3.jpg",
    tags: ["Signature"],
    category: "Mains",
  },
  {
    name: "Duck Confit",
    desc: "Slow-cooked leg with cherry gastrique and pomme purée",
    price: "$44",
    img: "/images/menu-4.jpg",
    tags: [],
    category: "Mains",
  },
  {
    name: "Grilled Octopus",
    desc: "Charred octopus with chimichurri, fingerling potatoes, and olives",
    price: "$28",
    img: "/images/menu-7.jpg",
    tags: ["Gluten-free"],
    category: "Mains",
  },
  {
    name: "Crème Brûlée",
    desc: "Classic vanilla custard with caramelized sugar and fresh berries",
    price: "$14",
    img: "/images/menu-5.jpg",
    tags: ["Popular"],
    category: "Desserts",
  },
  {
    name: "Chocolate Fondant",
    desc: "Warm dark chocolate cake with molten center and vanilla gelato",
    price: "$16",
    img: "/images/menu-6.jpg",
    tags: [],
    category: "Desserts",
  },
  {
    name: "Aged Old Fashioned",
    desc: "Barrel-aged bourbon, Angostura bitters, Luxardo cherry",
    price: "$18",
    img: "/images/menu-8.jpg",
    tags: ["Craft"],
    category: "Drinks",
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filtered =
    activeTab === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section className="menu section section--lazy" id="menu">
      <div className="menu__inner">
        <header className="section-header section-header--light">
          <span className="section-header__tagline">Our Menu</span>
          <h2 className="section-header__title">A Feast for the Senses</h2>
          <p className="section-header__desc">
            Each dish on our menu is a carefully crafted balance of flavor,
            texture, and artistry — from appetizers to desserts.
          </p>
          <div className="section-header__divider" />
        </header>

        <div className="menu__tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`menu__tab ${activeTab === cat ? "menu__tab--active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu__grid">
          {filtered.map((item) => (
            <div className="menu__item" key={item.name}>
              <div className="menu__item-img">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={160}
                  height={160}
                  quality={80}
                />
              </div>
              <div className="menu__item-content">
                <div className="menu__item-header">
                  <h3 className="menu__item-name">{item.name}</h3>
                  <span className="menu__item-dots" />
                  <span className="menu__item-price">{item.price}</span>
                </div>
                <p className="menu__item-desc">{item.desc}</p>
                {item.tags.length > 0 && (
                  <div className="menu__item-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="menu__item-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <a href="#menu" className="btn-outline--light">View Full Menu</a>
        </div>
      </div>
    </section>
  );
}
