import Image from "next/image";

const FEATURES = [
  { icon: "🔥", title: "Wood Fired", text: "Authentic flavors" },
  { icon: "🌿", title: "Farm Fresh", text: "Local ingredients" },
  { icon: "👨‍🍳", title: "Expert Chefs", text: "Award winning" },
  { icon: "🍷", title: "Fine Wine", text: "Curated cellar" },
];

export default function About() {
  return (
    <section className="about section section--lazy" id="about">
      <div className="split-grid">
        <div className="about__images">
          <div className="about__img-wrapper img-fill img-fill--rounded">
            <Image
              src="/images/about-1.jpg"
              alt="Restaurant interior with warm lighting and elegant table settings"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              quality={85}
            />
          </div>
          <div className="about__img-wrapper img-fill img-fill--rounded">
            <Image
              src="/images/about-2.jpg"
              alt="Chef preparing a dish with fresh ingredients"
              fill
              sizes="(max-width: 992px) 50vw, 25vw"
              quality={85}
            />
          </div>
          <div className="about__img-wrapper img-fill img-fill--rounded">
            <Image
              src="/images/about-3.jpg"
              alt="Beautifully plated gourmet dish"
              fill
              sizes="(max-width: 992px) 50vw, 25vw"
              quality={85}
            />
          </div>
          <div className="about__badge">
            <span className="about__badge-number">25</span>
            <span className="about__badge-text">Years of Excellence</span>
          </div>
        </div>

        <div className="about__content">
          <span className="content-tagline">Our Story</span>
          <h2 className="content-title">
            A Legacy of Taste &amp; Tradition
          </h2>
          <p className="content-desc about__desc">
            Since 1999, Flavour Haven has been a sanctuary for food lovers.
            Our chefs blend time-honored techniques with modern creativity,
            transforming the finest local produce into unforgettable dining
            experiences. Every dish is a tribute to the art of cooking.
          </p>
          <div className="about__features">
            {FEATURES.map((f) => (
              <div className="about__feature" key={f.title}>
                <div className="about__feature-icon">{f.icon}</div>
                <div>
                  <h4 className="about__feature-title">{f.title}</h4>
                  <p className="about__feature-text">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#menu" className="btn-primary">
            Discover Our Menu
          </a>
        </div>
      </div>
    </section>
  );
}
