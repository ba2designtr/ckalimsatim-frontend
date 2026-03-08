import { useState } from 'react';
import { X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const allImages = [
    ...siteConfig.gallery.vehicles.map(img => ({ src: img, category: 'vehicles', label: 'Araç' })),
    ...siteConfig.gallery.realEstate.map(img => ({ src: img, category: 'realEstate', label: 'Emlak' })),
    ...siteConfig.gallery.land.map(img => ({ src: img, category: 'land', label: 'Arsa' })),
    ...siteConfig.gallery.office.map(img => ({ src: img, category: 'office', label: 'Ofis' })),
  ];

  const filteredImages = activeTab === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeTab);

  const tabs = [
    { id: 'all', label: 'Tümü' },
    { id: 'vehicles', label: 'Araçlar' },
    { id: 'realEstate', label: 'Emlak' },
    { id: 'land', label: 'Arsa' },
    { id: 'office', label: 'Ofis' },
  ];

  return (
    <main className="pt-20" data-testid="gallery-page">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
              Galeri
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-['Outfit'] mb-6">
              Çalışmalarımızdan Kareler
            </h1>
            <p className="text-lg text-muted-foreground">
              Premium araç, lüks gayrimenkul ve yatırımlık arsalardan örnekler.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
                data-testid={`gallery-tab-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image)}
                data-testid={`gallery-image-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="gallery-lightbox"
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.label}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
};

export default GalleryPage;
