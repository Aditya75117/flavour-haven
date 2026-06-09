export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <span className="content-tagline hero__tagline">Welcome to Flavour Haven</span>
        <h1 className="hero__title">
          Where Every Bite <br />
          Tells a <span>Story</span>
        </h1>
        <p className="content-desc hero__desc">
          Indulge in a culinary journey crafted with the finest seasonal
          ingredients, passionate chefs, and a warm ambiance that feels
          like home.
        </p>
        <div className="hero__actions">
          <a href="#menu" className="hero__btn-primary">
            Explore Menu
          </a>
          <a href="#reservation" className="hero__btn-outline">
            Reserve a Table
          </a>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-indicator-line" />
      </div>
    </section>
  );
}
