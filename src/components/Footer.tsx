export default function Footer() {
      const domain = import.meta.env.VITE_WP_DOMAIN;
  return (
    <footer>
      <section className="bg-secondary-cream">
        <div className="pt-16 pb-12">
            <img src={`${domain}wp-content/uploads/2026/05/logo_footer.png`} alt="Logo de Voraxathletics footer" className="h-7 mx-auto" />
            <div className="flex justify-center items-center gap-4 pt-16">
                <a href="#"><img className="h-6" src={`${domain}wp-content/uploads/2026/05/fb.png`} alt="Icono de Facebook"/></a>
                <a href="#"><img className="h-6" src={`${domain}wp-content/uploads/2026/05/instagram.png`} alt="Icono de Instagram"/></a>
                <a href="#"><img className="h-7" src={`${domain}wp-content/uploads/2026/05/tiktok.png`} alt="Icono de TikTok"/></a>
            </div>
            <p className="text-center text-third-black font-inter-regular pt-12">Etiam sit amet orci eget eros </p>
        </div>
      </section>
    </footer>
  );
}
