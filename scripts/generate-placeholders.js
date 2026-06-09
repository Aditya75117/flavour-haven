const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "images");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const images = {
  "hero-bg": { w: 1920, h: 1080, bg: "#3d2b1f", fg: "#e8a317" },
  "reservation-bg": { w: 1920, h: 1080, bg: "#4a1a0a", fg: "#d4a017" },
  "about-1": { w: 600, h: 340, bg: "#5c3a21", fg: "#ffc107" },
  "about-2": { w: 280, h: 280, bg: "#6d4c2e", fg: "#ffa726" },
  "about-3": { w: 280, h: 280, bg: "#4e342e", fg: "#ffb74d" },
  "special-1": { w: 600, h: 450, bg: "#3e2723", fg: "#ff8f00" },
  "special-2": { w: 600, h: 450, bg: "#4a2c17", fg: "#ffa000" },
  "special-3": { w: 600, h: 450, bg: "#5d3a1a", fg: "#ffb300" },
  "special-4": { w: 600, h: 450, bg: "#3b1e08", fg: "#ffc107" },
  "chef-1": { w: 400, h: 530, bg: "#2c1810", fg: "#e8a317" },
  "chef-2": { w: 400, h: 530, bg: "#3d261a", fg: "#ffab00" },
  "chef-3": { w: 400, h: 530, bg: "#4e342e", fg: "#ffc107" },
  "avatar-1": { w: 100, h: 100, bg: "#5c3a21", fg: "#ffa726" },
  "avatar-2": { w: 100, h: 100, bg: "#6d4c2e", fg: "#ffb74d" },
  "avatar-3": { w: 100, h: 100, bg: "#4e342e", fg: "#ffc107" },
  "gallery-1": { w: 600, h: 600, bg: "#3e2723", fg: "#ff8f00" },
  "gallery-2": { w: 400, h: 400, bg: "#4a2c17", fg: "#ffa000" },
  "gallery-3": { w: 400, h: 400, bg: "#5d3a1a", fg: "#ffb300" },
  "gallery-4": { w: 400, h: 400, bg: "#3b1e08", fg: "#ffc107" },
  "gallery-5": { w: 400, h: 400, bg: "#2c1810", fg: "#e8a317" },
  "gallery-6": { w: 400, h: 400, bg: "#3d261a", fg: "#ffab00" },
  "gallery-7": { w: 400, h: 400, bg: "#4e342e", fg: "#ffc107" },
};

for (let i = 1; i <= 8; i++) {
  images[`menu-${i}`] = { w: 160, h: 160, bg: "#3e2723", fg: "#ffa726" };
}

Object.entries(images).forEach(([name, { w, h, bg, fg }]) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <rect width="100%" height="100%" fill="${bg}"/>
  <text x="50%" y="50%" fill="${fg}" font-family="Georgia,serif" font-size="${Math.min(w, h) * 0.08}" text-anchor="middle" dominant-baseline="middle">${name}</text>
</svg>`;
  fs.writeFileSync(path.join(dir, `${name}.jpg`), svg);
  console.log(`Created ${name}.jpg (${w}x${h})`);
});

console.log("\nDone! Replace these SVG placeholders with real .jpg images for production.");
