import fs from 'fs';
import path from 'path';

const placeholders = [
  { name: 'logo.svg', section: 'Header/Footer', desktop: '200x50 px', mobile: '160x40 px', ratio: '4:1', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' },
  { name: 'favicon.svg', section: 'Meta', desktop: '64x64 px', mobile: '64x64 px', ratio: '1:1', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' },
  { name: 'hero_vsl_poster.svg', section: 'Hero', desktop: '720x1280 px', mobile: '1080x1920 px', ratio: '9:16', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' },
  ...Array.from({ length: 8 }).map((_, i) => ({ name: `print_marketplace_0${i + 1}.svg`, section: 'Prova de Mercado', desktop: '800x600 px', mobile: '800x600 px', ratio: '4:3', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' })),
  ...Array.from({ length: 12 }).map((_, i) => ({ name: `gallery_${String(i + 1).padStart(2, '0')}.svg`, section: 'Galeria', desktop: '800x800 px', mobile: '800x800 px', ratio: '1:1', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' })),
  { name: 'product_reveal_desktop.svg', section: 'Product Reveal', desktop: '1600x1200 px', mobile: '-', ratio: '4:3', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' },
  { name: 'product_reveal_mobile.svg', section: 'Product Reveal', desktop: '-', mobile: '1080x1350 px', ratio: '4:5', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' },
  { name: 'tour_poster.svg', section: 'Tour', desktop: '1920x1080 px', mobile: '1080x608 px', ratio: '16:9', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' },
  ...Array.from({ length: 12 }).map((_, i) => ({ name: `bonus_${String(i + 1).padStart(2, '0')}.svg`, section: 'Bônus', desktop: '800x600 px', mobile: '800x600 px', ratio: '4:3', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' })),
  { name: 'course_mockup.svg', section: 'Curso', desktop: '800x600 px', mobile: '800x600 px', ratio: '4:3', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' },
  { name: 'calculator_mockup.svg', section: 'Ferramentas', desktop: '800x600 px', mobile: '800x600 px', ratio: '4:3', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' },
  { name: 'guide_mockup.svg', section: 'Ferramentas', desktop: '800x600 px', mobile: '800x600 px', ratio: '4:3', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' },
  ...Array.from({ length: 8 }).map((_, i) => ({ name: `whatsapp_0${i + 1}.svg`, section: 'Prova Social', desktop: '400x800 px', mobile: '400x800 px', ratio: '1:2', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' })),
  ...Array.from({ length: 6 }).map((_, i) => ({ name: `testimonial_0${i + 1}.svg`, section: 'Prova Social', desktop: '200x200 px', mobile: '200x200 px', ratio: '1:1', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' })),
  { name: 'authority_photo.svg', section: 'Autoridade', desktop: '800x800 px', mobile: '800x800 px', ratio: '1:1', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' },
  { name: 'guarantee_badge.svg', section: 'Garantia', desktop: '400x400 px', mobile: '400x400 px', ratio: '1:1', bg: 'transparent', text: '#ffffff', border: '#ff6b00' },
  { name: 'og_image.svg', section: 'Meta', desktop: '1200x630 px', mobile: '1200x630 px', ratio: '1200:630', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' },
  { name: 'exit_popup.svg', section: 'Exit Popup', desktop: '800x800 px', mobile: '800x800 px', ratio: '1:1', bg: '#1e1e1e', text: '#ffffff', border: '#ff6b00' },
];

const dir = path.join(process.cwd(), 'public', 'placeholders');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

placeholders.forEach(p => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
    <rect width="100%" height="100%" fill="${p.bg}" stroke="${p.border}" stroke-width="4" stroke-dasharray="10,10" />
    <g fill="${p.text}" font-family="sans-serif" text-anchor="middle">
      <text x="50%" y="40%" font-size="32" font-weight="bold">${p.name.replace('.svg', '').toUpperCase()}</text>
      <text x="50%" y="50%" font-size="24">Seção: ${p.section}</text>
      <text x="50%" y="60%" font-size="20">Desktop: ${p.desktop} | Mobile: ${p.mobile}</text>
      <text x="50%" y="70%" font-size="20">Proporção: ${p.ratio}</text>
    </g>
  </svg>`;
  fs.writeFileSync(path.join(dir, p.name), svg);
});

console.log('SVGs gerados com sucesso!');
