import { Phone, MapPin, Instagram, Clock, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { siteConfig } from '../config/siteConfig';

const ContactPage = () => {
  return (
    <main className="pt-20" data-testid="contact-page">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
              İletişim
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-['Outfit'] mb-6">
              Bizimle İletişime Geçin
            </h1>
            <p className="text-lg text-muted-foreground">
              Sorularınız ve danışmanlık talepleriniz için bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone Card */}
              <a 
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="block p-6 rounded-2xl border bg-card hover:shadow-lg transition-shadow group"
                data-testid="contact-phone-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground font-['Outfit'] mb-1">
                      Telefon
                    </h3>
                    <p className="text-2xl font-bold text-primary">
                      {siteConfig.phone}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Haftanın 7 günü ulaşabilirsiniz
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>

              {/* WhatsApp Card */}
              <a 
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl border bg-[#25D366]/5 hover:bg-[#25D366]/10 border-[#25D366]/20 transition-colors group"
                data-testid="contact-whatsapp-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground font-['Outfit'] mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-lg text-[#25D366] font-medium">
                      Hızlı mesaj gönderin
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Anında cevap alın
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>

              {/* Instagram Card */}
              <a 
                href={`https://instagram.com/${siteConfig.instagramSales}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl border bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 hover:from-purple-500/10 hover:via-pink-500/10 hover:to-orange-500/10 transition-colors group"
                data-testid="contact-instagram-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground font-['Outfit'] mb-1">
                      Instagram
                    </h3>
                    <p className="text-lg text-foreground font-medium">
                      @{siteConfig.instagramSales}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Takip edin, güncel kalın
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>

              {/* Address Card */}
              <div className="p-6 rounded-2xl border bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground font-['Outfit'] mb-1">
                      Adres
                    </h3>
                    <p className="text-muted-foreground">
                      {siteConfig.address || "Adres bilgisi yakında eklenecek"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-2xl border bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground font-['Outfit'] mb-1">
                      Çalışma Saatleri
                    </h3>
                    <p className="text-muted-foreground">
                      Pazartesi - Cumartesi: 09:00 - 19:00
                    </p>
                    <p className="text-muted-foreground">
                      Pazar: Randevulu görüşme
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border bg-muted">
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Konum"
                  data-testid="contact-map"
                />
              </div>

              {/* Quick CTA */}
              <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                <h3 className="text-xl font-bold font-['Outfit'] mb-3">
                  Hemen Ulaşın
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Danışmanlık için hemen iletişime geçin. Size en kısa sürede dönüş yapacağız.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </Button>
                  </a>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
                    <Button variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                      <Phone className="w-4 h-4" />
                      Ara
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
