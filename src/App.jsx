import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function ArjunaFurniture() {
  // Fungsi untuk membuat link WhatsApp dengan pesan custom
  const createWhatsAppLink = (message = "") => {
    const phoneNumber = "6287777314920"; // Nomor WhatsApp tanpa + atau 00
    const defaultMessage = "Halo Arjuna Furniture, saya tertarik dengan produk Anda.";
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div>
      <div className="bg-[#f8f7f6] dark:bg-[#211911] text-[#171411] dark:text-white min-h-screen">
       {/* Header */}
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#8B7355]/10">
  <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

    {/* Logo */}
   <div className="flex items-center">
  <img
    src={`${import.meta.env.BASE_URL}logo.png`}
    alt="Arjuna Furniture Logo"
    className="h-10 w-auto object-contain"
  />
</div>

    {/* CTA */}
    <a
      href={createWhatsAppLink("Halo, saya ingin order furniture custom!")}
      className="bg-[#8B7355] hover:bg-[#7A6348] text-white px-6 py-2 rounded-md text-sm font-semibold tracking-widest uppercase transition-all"
    >
      Order via WhatsApp
    </a>

  </div>
</header>

{/* Hero Section */}
<section className="relative">
  <div className="h-[85vh] w-full relative overflow-hidden">

    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
    

      style={{
  backgroundImage: `url(${import.meta.env.BASE_URL}2.jpeg)`
}}
    />

    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

    

      <h1 className="text-white text-4xl md:text-6xl font-light tracking-[0.2em] mb-4">
        ARJUNA <span className="font-bold">FURNITURE</span>
      </h1>

      <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mb-10 tracking-wide">
        Elegan Home Living
      </p>

      <a
        className="bg-[#8B7355] hover:bg-[#7a6348] text-white px-10 py-4 rounded-lg font-bold tracking-wider transition-all transform hover:scale-105 shadow-xl"
        href={createWhatsAppLink("Halo Arjuna Furniture! Saya tertarik untuk konsultasi dan memesan furniture custom untuk rumah saya.")}
      >
        <div className="flex items-center justify-center gap-3">
          <FaWhatsapp className="text-2xl" />
          ORDER VIA WHATSAPP
        </div>
      </a>

    </div>
  </div>
</section>


        {/* Product Showcase */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-xl">
              <span className="text-[#8B7355] font-bold tracking-[0.3em] uppercase text-sm block mb-4">
                The Selection
              </span>
              <h2 className="text-4xl font-bold">Our Signature Collection</h2>
            </div>
            <p className="text-[#877564] max-w-xs text-sm uppercase tracking-widest leading-relaxed">
              Curated pieces designed to bring timeless luxury to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Card 1 */}
            <ProductCard
              image={`${import.meta.env.BASE_URL}1.jpeg`}

              badge="New Arrival"
              title="Modern Built-In Storage Cabinet"
              description="Custom-built storage cabinet with clean vertical lines and natural wood finish. Designed to maximize space efficiency while maintaining a warm and elegant aesthetic. Perfect for contemporary living rooms or multifunctional spaces."
              whatsappMessage="Halo! Saya tertarik dengan Modern Built-In Storage Cabinet. Bisakah saya mendapatkan info lebih lanjut mengenai harga dan custom design?"
            />

            {/* Product Card 2 */}
            <ProductCard
                  image={`${import.meta.env.BASE_URL}3.jpeg`}
              title="Elegant Arch Wardrobe Set"
              description="A custom wardrobe featuring a signature arched vanity design combined with open shelving and hanging space. Crafted with premium wood textures to create a sophisticated yet functional bedroom statement piece."
              whatsappMessage="Halo! Saya tertarik dengan Elegant Arch Wardrobe Set. Bisakah saya mendapatkan info lebih lanjut mengenai harga dan custom design?"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#fdfcfb] dark:bg-[#211911]/50 py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <FeatureCard icon="✓" title="Premium Quality" description="Only the finest sustainably sourced hardwoods." />
              <FeatureCard icon="⚙️" title="Master Craftsmanship" description="Generations of artisanal expertise in every joint." />
              <FeatureCard icon="🏛️" title="Custom Designs" description="Tailored furniture to fit your unique lifestyle." />
              <FeatureCard icon="🌿" title="Sustainable" description="Eco-friendly materials and ethical production." />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-[#8B7355]/30 text-6xl mb-8">"</div>
            <div className="space-y-16">
              <Testimonial
                quote="The craftsmanship of our new dining table is beyond words. Arjuna Furniture has truly transformed our home into a sanctuary of elegance."
                author="Eleanor Vance, Architectural Digest"
              />
              <div className="w-24 h-px bg-[#8B7355]/20 mx-auto"></div>
              <Testimonial
                quote="Rare to find such attention to detail in modern furniture. Every curve of the Artisan Lounge Chair tells a story of passion and skill."
                author="Julian Brooks, Interior Designer"
              />
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
              <div
                className="md:col-span-8 h-64 md:h-auto overflow-hidden rounded-xl bg-cover bg-center"
              style={{
  backgroundImage: `url(${import.meta.env.BASE_URL}4.jpeg)`
}}

              />
              <div className="md:col-span-4 grid grid-rows-2 gap-6">
                <div
                  className="h-32 md:h-auto overflow-hidden rounded-xl bg-cover bg-center"
               style={{
  backgroundImage: `url(${import.meta.env.BASE_URL}6.jpeg)`
}}

                />
                <div
                  className="h-32 md:h-auto overflow-hidden rounded-xl bg-cover bg-center"
                 style={{
  backgroundImage: `url(${import.meta.env.BASE_URL}7.jpeg)`
}}

                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#8B7355] dark:bg-[#8B7355]/90 text-white text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Transform Your Space Today</h2>
            <p className="text-lg text-white/90 mb-12 font-light">
              Ready to elevate your home with artisan craftsmanship? Start a conversation with our design specialists today.
            </p>
            <a
              className="inline-flex items-center gap-4 bg-white text-[#8B7355] px-12 py-5 rounded-lg font-bold text-lg hover:bg-[#f8f7f6] transition-all shadow-2xl"
              href={createWhatsAppLink("Halo! Saya ingin berkonsultasi dengan design specialist untuk furniture custom. Mohon info lebih lanjut.")}
            >
           <FaWhatsapp className="text-2xl" />

              CONTACT US ON WHATSAPP
            </a>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="bg-white dark:bg-[#211911] py-12 px-4 border-t border-[#8B7355]/10">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
              {/* Logo & Description */}
              <div className="text-center md:text-left">
                 <img
       src={`${import.meta.env.BASE_URL}logo.png`}

        alt="Arjuna Furniture Logo"
        className="h-20 w-auto object-contain"
      />
                <p className="text-[#877564] text-sm max-w-md">
                  Exquisite craftsmanship for elegant living
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4">
                <a
                  href="https://www.tiktok.com/@arjunafurniture.bali7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-[#8B7355]/20 flex items-center justify-center hover:bg-[#8B7355] hover:text-white transition-all"
                  aria-label="TikTok"
                >
                  <FaTiktok className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-[#8B7355]/20 flex items-center justify-center hover:bg-[#8B7355] hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://www.facebook.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-[#8B7355]/20 flex items-center justify-center hover:bg-[#8B7355] hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-[#8B7355]/10">
              <p className="text-xs text-[#877564] uppercase tracking-widest">
                © 2024 Arjuna Furniture. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform md:hidden"
          href={createWhatsAppLink("Halo Arjuna Furniture! Saya ingin bertanya tentang produk furniture Anda.")}
        >
          <FaWhatsapp className="text-3xl" />

        </a>
      </div>
    </div>
  );
}

// Product Card Component
function ProductCard({ image, badge, title, description, whatsappMessage }) {
  // Fungsi untuk membuat link WhatsApp dengan pesan custom
  const createWhatsAppLink = (message) => {
    const phoneNumber = "6287777314920";
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-[#fdfcfb]">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
          style={{ backgroundImage: `url('${image}')` }}
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded">
              {badge}
            </span>
          </div>
        )}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-[#877564] mb-6 max-w-sm">{description}</p>
          <a
            className="inline-flex items-center gap-2 text-[#8B7355] font-bold border-b-2 border-[#8B7355]/20 hover:border-[#8B7355] transition-all pb-1 uppercase tracking-wider text-sm"
            href={createWhatsAppLink(whatsappMessage)}
          >
            <FaWhatsapp />
            Inquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center group">
      <div className="w-16 h-16 bg-white dark:bg-[#211911] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#8B7355]/5 group-hover:bg-[#8B7355] group-hover:text-white transition-all duration-300">
        <span className="text-3xl">{icon}</span>
      </div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-[#877564] px-4">{description}</p>
    </div>
  );
}

// Testimonial Component
function Testimonial({ quote, author }) {
  return (
    <div>
      <p className="text-2xl italic font-light leading-relaxed mb-6">
        "{quote}"
      </p>
      <cite className="not-italic font-bold tracking-[0.2em] uppercase text-xs text-[#8B7355]">
        — {author}
      </cite>
    </div>
  );
}