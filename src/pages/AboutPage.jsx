import { CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { siteConfig } from '../config/siteConfig';

const AboutPage = () => {
  return (
    <main className="pt-20" data-testid="about-page">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
              Hakkımızda
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-['Outfit'] mb-6">
              {siteConfig.about.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {siteConfig.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={siteConfig.about.image}
                  alt="Hakkımızda"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold font-['Outfit']">10+</p>
                <p className="text-sm text-primary-foreground/80">Yıl Deneyim</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="prose prose-lg max-w-none">
                {siteConfig.about.mainText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Values */}
              <div className="mt-8 space-y-3">
                <h3 className="text-lg font-semibold text-foreground font-['Outfit'] mb-4">
                  Değerlerimiz
                </h3>
                {siteConfig.about.values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-['Outfit'] mb-4">
              Rakamlarla Biz
            </h2>
            <p className="text-muted-foreground">
              Güvenilirliğimizi ve deneyimimizi rakamlarla ifade ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary font-['Outfit'] mb-2">10+</p>
              <p className="text-muted-foreground">Yıl Deneyim</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary font-['Outfit'] mb-2">500+</p>
              <p className="text-muted-foreground">Mutlu Müşteri</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary font-['Outfit'] mb-2">1000+</p>
              <p className="text-muted-foreground">Başarılı İşlem</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary font-['Outfit'] mb-2">%98</p>
              <p className="text-muted-foreground">Memnuniyet</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Outfit'] mb-6">
            Bizimle Çalışmak İster misiniz?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Araç ve gayrimenkul danışmanlığı için hemen iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 h-14 px-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp ile İletişim
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
