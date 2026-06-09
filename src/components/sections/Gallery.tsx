import Image from "next/image";

const GALLERY_ITEMS = [
  { img: "/images/gallery-1.jpg", alt: "Signature appetizer plating" },
  { img: "/images/gallery-2.jpg", alt: "Wine cellar selection" },
  { img: "/images/gallery-3.jpg", alt: "Dessert artistry" },
  { img: "/images/gallery-4.jpg", alt: "Restaurant terrace at sunset" },
  { img: "/images/gallery-5.jpg", alt: "Fresh ingredients display" },
  { img: "/images/gallery-6.jpg", alt: "Chef in action" },
  { img: "/images/gallery-7.jpg", alt: "Cocktail crafting" },
];

export default function Gallery() {
  return (
    <section className="gallery section section--lazy" id="gallery">
      <div className="section__inner">
        <header className="section-header section-header--light">
          <span className="section-header__tagline">Our Gallery</span>
          <h2 className="section-header__title">A Visual Feast</h2>
          <p className="section-header__desc">
            Peek into the world of Flavour Haven — our dishes, our space,
            and the moments that make dining unforgettable.
          </p>
          <div className="section-header__divider" />
        </header>

        <div className="gallery__grid">
          {GALLERY_ITEMS.map((item, i) => (
            <div className="gallery__item img-fill img-fill--rounded" key={i}>
              <Image
                src={item.img}
                alt={item.alt}
                fill
                sizes={i === 0 ? "(max-width: 768px) 50vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                quality={85}
              />
              <div className="gallery__item-overlay">
                <div className="gallery__item-overlay-icon">+</div>
                <span>View</span>
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <a href="#" className="btn-outline--light">Follow Us @FlavourHaven</a>
        </div>
      </div>
    </section>
  );
}
