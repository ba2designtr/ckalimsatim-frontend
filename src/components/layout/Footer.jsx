import { Link } from 'react-router-dom';
import { Instagram, Phone, MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

const Footer = () => {
  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/hizmetler', label: 'Hizmetler' },
    { href: '/galeri', label: 'Galeri' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground" data-testid="footer">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold tracking-tight font-['Outfit']">
                {siteConfig.name}
              </h3>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a 
                href={`https://instagram.com/${siteConfig.instagramSales}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram Satış"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`https://instagram.com/${siteConfig.instagramPersonal}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram Kişisel"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366]/30 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/50">
              Sayfalar
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/50">
              Hizmetler
            </h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80">Otomobil Alım Satım</li>
              <li className="text-primary-foreground/80">Ev Danışmanlığı</li>
              <li className="text-primary-foreground/80">Arsa Danışmanlığı</li>
              <li className="text-primary-foreground/80">Yatırım Danışmanlığı</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/50">
              İletişim
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`https://instagram.com/${siteConfig.instagramSales}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @{siteConfig.instagramSales}
                </a>
              </li>
              {siteConfig.address && (
                <li className="flex items-start gap-3 text-primary-foreground/80">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.address}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          
          {/* ba2design Credit Button with Animation */}
          <div className="flex items-center gap-3">
            <a 
              href={`https://instagram.com/${siteConfig.footerCredit.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full shimmer-btn text-primary-foreground text-sm font-medium overflow-hidden transition-all hover:scale-105"
              data-testid="footer-credit-instagram"
            >
              <Instagram className="w-4 h-4" />
              <span>{siteConfig.footerCredit.text}</span>
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a 
              href={siteConfig.footerCredit.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground/20 text-primary-foreground/80 text-sm font-medium transition-all hover:bg-primary-foreground/10 hover:text-primary-foreground hover:scale-105"
              data-testid="footer-credit-website"
            >
              <Globe className="w-4 h-4" />
              <span>ba2design.com</span>
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
