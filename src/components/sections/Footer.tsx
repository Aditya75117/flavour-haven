const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Specials", href: "#specials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservations", href: "#reservation" },
];

const HOURS = [
  { day: "Monday – Friday", time: "11 AM – 11 PM" },
  { day: "Saturday", time: "10 AM – 12 AM" },
  { day: "Sunday", time: "10 AM – 10 PM" },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <span className="footer__logo">
            Flavour<span>Haven</span>
          </span>
          <p className="footer__brand-desc">
            A culinary destination where passion meets plate. Join us for an
            unforgettable journey through flavor, craft, and warmth.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Quick Links</h3>
          <nav className="footer__links">
            {QUICK_LINKS.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Opening Hours</h3>
          <div className="footer__hours">
            {HOURS.map((h) => (
              <div className="footer__hour-item" key={h.day}>
                <span>{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Newsletter</h3>
          <div className="footer__newsletter">
            <p>
              Subscribe for exclusive offers, new menu announcements, and
              insider events.
            </p>
            <form className="footer__newsletter-form" action="#">
              <input type="email" placeholder="Your email" aria-label="Email for newsletter" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Flavour Haven. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
