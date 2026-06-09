import Image from "next/image";

const SPECIALS = [
  {
    featured: true,
    badge: "Chef's Pick",
    category: "Signature",
    title: "Flame-Grilled Wagyu Steak",
    desc: "Premium A5 wagyu seared to perfection, served with truffle mash, seasonal vegetables, and our house red wine reduction.",
    price: "$68",
    img: "/images/special-1.jpg",
    alt: "Flame grilled wagyu steak with truffle mash",
  },
  {
    category: "Seafood",
    title: "Pan-Seared Salmon",
    desc: "Atlantic salmon with lemon butter, capers, and roasted asparagus.",
    price: "$42",
    img: "/images/special-2.jpg",
    alt: "Pan seared salmon with lemon butter",
  },
  {
    badge: "New",
    category: "Pasta",
    title: "Lobster Linguine",
    desc: "Fresh lobster tossed in saffron cream sauce with handmade pasta.",
    price: "$52",
    img: "/images/special-3.jpg",
    alt: "Lobster linguine in saffron cream",
  },
  {
    category: "Appetizer",
    title: "Burrata & Heirloom Tomato",
    desc: "Creamy burrata with vine-ripened tomatoes, basil oil, and aged balsamic.",
    price: "$24",
    img: "/images/special-4.jpg",
    alt: "Burrata and heirloom tomato salad",
  },
];

export default function Specials() {
  return (
    <section className="specials section section--lazy" id="specials">
      <div className="section__inner">
        <header className="section-header">
          <span className="section-header__tagline">Today&apos;s Specials</span>
          <h2 className="section-header__title">Crafted with Passion</h2>
          <p className="section-header__desc">
            Our chefs create seasonal masterpieces using only the freshest
            ingredients, designed to delight every palate.
          </p>
          <div className="section-header__divider" />
        </header>

        <div className="grid-1-2-3">
          {SPECIALS.map((item) => (
            <article
              key={item.title}
              className={`specials__card card-hover ${item.featured ? "specials__card--featured" : ""}`}
            >
              {item.badge && (
                <span className="specials__card-badge">{item.badge}</span>
              )}
              <div className="specials__card-img img-fill">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes={item.featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"}
                  quality={85}
                />
              </div>
              <div className="specials__card-body">
                <span className="specials__card-category">{item.category}</span>
                <h3 className="specials__card-title">{item.title}</h3>
                <p className="specials__card-desc">{item.desc}</p>
                <div className="specials__card-footer">
                  <span className="specials__card-price">{item.price}</span>
                  <a href="#reservation" className="specials__card-btn">
                    Order Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
