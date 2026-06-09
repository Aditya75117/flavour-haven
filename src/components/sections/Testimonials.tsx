import Image from "next/image";

const REVIEWS = [
  {
    stars: 5,
    text: "An absolutely magical dining experience. The wagyu steak was the best I've ever had — melt-in-your-mouth perfection. The ambiance was intimate yet vibrant.",
    name: "Sarah Mitchell",
    role: "Food Critic, Gourmet Weekly",
    avatar: "/images/avatar-1.jpg",
  },
  {
    stars: 5,
    text: "Flavour Haven is our family's go-to for celebrations. The staff treats you like royalty and every dish is a masterpiece. The chocolate fondant is a must-try!",
    name: "David Chen",
    role: "Regular Guest",
    avatar: "/images/avatar-2.jpg",
  },
  {
    stars: 5,
    text: "From the moment you walk in, you know you're somewhere special. The sommelier paired the perfect wine with each course. Truly world-class.",
    name: "Elena Rodriguez",
    role: "Wine Enthusiast",
    avatar: "/images/avatar-3.jpg",
  },
];

const STATS = [
  { number: "25+", label: "Years Serving" },
  { number: "50K+", label: "Happy Guests" },
  { number: "120+", label: "Menu Items" },
  { number: "15", label: "Awards Won" },
];

export default function Testimonials() {
  return (
    <section className="testimonials section section--lazy" id="testimonials">
      <div className="section__inner">
        <header className="section-header">
          <span className="section-header__tagline">Testimonials</span>
          <h2 className="section-header__title">What Our Guests Say</h2>
          <p className="section-header__desc">
            Don&apos;t just take our word for it — hear from the guests who
            make Flavour Haven their dining destination.
          </p>
          <div className="section-header__divider" />
        </header>

        <div className="grid-1-2-3">
          {REVIEWS.map((review) => (
            <article className="testimonials__card card-hover" key={review.name}>
              <div className="testimonials__card-stars">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonials__card-text">{review.text}</p>
              <div className="testimonials__card-author">
                <div className="testimonials__card-avatar">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={100}
                    height={100}
                    quality={80}
                  />
                </div>
                <div className="testimonials__card-info">
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonials__stats">
          {STATS.map((stat) => (
            <div className="testimonials__stat" key={stat.label}>
              <span className="testimonials__stat-number">{stat.number}</span>
              <span className="testimonials__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
