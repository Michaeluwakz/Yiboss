import Image from 'next/image';

const images = [
  { src: 'https://i.ibb.co/7d1YH8rC/image.png', alt: 'Platter of appetizers', hint: 'appetizer platter' },
  { src: 'https://i.ibb.co/270rNwV3/image.png', alt: 'Main course dish', hint: 'gourmet dish' },
  { src: 'https://i.ibb.co/Nnd0b5nY/image.png', alt: 'Dessert table', hint: 'dessert buffet' },
  { src: 'https://i.ibb.co/4ZDR9fFL/image.png', alt: 'Wedding reception setup', hint: 'wedding reception' },
  { src: 'https://i.ibb.co/Z6DyHGYM/image.png', alt: 'Corporate event catering', hint: 'corporate event' },
  { src: 'https://i.ibb.co/C5tLJq0s/image.png', alt: 'Colorful cocktails', hint: 'cocktails bar' },
];

export function Gallery() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">A Taste of Our Craft</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">Browse our gallery to see the quality and creativity we bring to every event.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group h-64">
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
