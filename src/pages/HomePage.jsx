import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Shield, Briefcase, Car, Home, Map, TrendingUp, Headphones } from 'lucide-react';
import { Button } from '../components/ui/button';
import { siteConfig } from '../config/siteConfig';

const iconMap = {
  Award, Users, Shield, Briefcase, Car, Home, Map, TrendingUp, Headphones
};

const HomePage = () => {
  return (
    <main data-testid="home-page">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center pt-20"
        data-testid="hero-section"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={siteConfig.heroImages[0]}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70 mb-4 animate-fade-in-up">
              Premium Hizmet
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-primary-foreground font-['Outfit'] leading-[1.1] mb-6 animate-fade-in-up delay-100">
              Güvenilir Araç ve Gayrimenkul Danışmanlığı
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-xl mb-8 animate-fade-in-up delay-200">
              {siteConfig.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a 
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-btn"
              >
                <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 h-14 px-8 text-base">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp ile İletişim
                </Button>
              </a>
              <a 
                href={`https://instagram.com/${siteConfig.instagramSales}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-instagram-btn"
              >
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 h-14 px-8 text-base">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-background" data-testid="services-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
              Hizmetlerimiz
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-['Outfit'] mb-4">
              Profesyonel Danışmanlık
            </h2>
            <p className="text-muted-foreground text-lg">
              Araç ve gayrimenkul alanında uzman ekibimizle yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.slice(0, 3).map((service, index) => {
              const Icon = iconMap[service.icon] || Car;
              return (
                <div 
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300"
                  data-testid={`service-card-${service.id}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold font-['Outfit']">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-primary-foreground/80 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/hizmetler" data-testid="view-all-services-btn">
              <Button size="lg" variant="outline" className="gap-2">
                Tüm Hizmetleri Gör
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 md:py-28 bg-muted/30" data-testid="why-us-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src={siteConfig.gallery.vehicles[0]}
                    alt="Premium Araç"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={siteConfig.gallery.land[0]}
                    alt="Arsa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={siteConfig.gallery.realEstate[0]}
                    alt="Lüks Ev"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src={siteConfig.gallery.realEstate[1]}
                    alt="Modern Villa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                Neden Biz?
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-['Outfit'] mb-6">
                Neden Bizi Tercih Etmelisiniz?
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Sektördeki deneyimimiz ve müşteri odaklı yaklaşımımızla fark yaratıyoruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {siteConfig.trustFactors.map((factor, index) => {
                  const Icon = iconMap[factor.icon] || Shield;
                  return (
                    <div 
                      key={index}
                      className="flex gap-4"
                      data-testid={`trust-factor-${index}`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 font-['Outfit']">
                          {factor.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {factor.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-28 bg-background" data-testid="gallery-preview-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                Galeri
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-['Outfit']">
                Çalışmalarımızdan Kareler
              </h2>
            </div>
            <Link to="/galeri" data-testid="view-gallery-btn">
              <Button variant="outline" className="gap-2">
                Tüm Galeri
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...siteConfig.gallery.vehicles.slice(0, 2), ...siteConfig.gallery.realEstate.slice(0, 2)].map((img, index) => (
              <div 
                key={index}
                className="aspect-square rounded-xl overflow-hidden group"
              >
                <img
                  src={img}
                  alt={`Galeri ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground" data-testid="cta-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Outfit'] mb-6">
              Hemen İletişime Geçin
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Araç ve gayrimenkul yatırımlarınız için profesyonel danışmanlık almak ister misiniz? 
              WhatsApp veya telefon üzerinden bize ulaşın.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-whatsapp-btn"
              >
                <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 h-14 px-8">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp ile Mesaj At
                </Button>
              </a>
              <a 
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                data-testid="cta-phone-btn"
              >
                <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 h-14 px-8">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteConfig.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
