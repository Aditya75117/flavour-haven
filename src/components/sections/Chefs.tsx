import Image from "next/image";

const CHEFS = [
  {
    name: "Marco Bellini",
    role: "Head Chef",
    desc: "With 20 years of Michelin-star experience, Marco brings Italian soul to every plate.",
    img: "/images/chef-1.jpg",
  },
  {
    name: "Aiko Tanaka",
    role: "Pastry Chef",
    desc: "Aiko's desserts are edible art — blending French technique with Japanese precision.",
    img: "/images/chef-2.jpg",
  },
  {
    name: "Carlos Rivera",
    role: "Sous Chef",
    desc: "Carlos infuses bold Latin flavors into modern dishes with flair and creativity.",
    img: "/images/chef-3.jpg",
  },
];

export default function Chefs() {
  return (
    <section className="chefs section section--lazy" id="chefs">
      <div className="section__inner">
        <header className="section-header">
          <span className="section-header__tagline">Meet the Team</span>
          <h2 className="section-header__title">Masters of the Kitchen</h2>
          <p className="section-header__desc">
            Our chefs are the heartbeat of Flavour Haven — blending tradition
            with innovation to create dishes you&apos;ll remember forever.
          </p>
          <div className="section-header__divider" />
        </header>

        <div className="grid-1-2-3">
          {CHEFS.map((chef) => (
            <article className="chefs__card" key={chef.name}>
              <div className="chefs__card-img img-fill img-fill--rounded">
                <Image
                  src={chef.img}
                  alt={`${chef.name} — ${chef.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                  quality={85}
                />
                <div className="chefs__card-socials">
                  <a href="#" aria-label={`${chef.name} Instagram`}>📷</a>
                  <a href="#" aria-label={`${chef.name} Twitter`}>🐦</a>
                </div>
              </div>
              <h3 className="chefs__card-name">{chef.name}</h3>
              <span className="chefs__card-role">{chef.role}</span>
              <p className="chefs__card-desc">{chef.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
