import { Leaf, Clock, DollarSign } from 'lucide-react';

const usps = [
  { icon: Leaf, title: 'Fresh Ingredients', description: 'We source the finest local ingredients for vibrant, flavorful dishes.' },
  { icon: Clock, title: 'Punctual Delivery', description: 'Reliable and on-time service, ensuring your event runs smoothly.' },
  { icon: DollarSign, title: 'Affordable Packages', description: 'Premium catering solutions that fit your budget without compromise.' },
];

export function Usp() {
  return (
    <section id="usp" className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {usps.map((usp, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <div className="p-4 bg-primary/10 rounded-full">
                <usp.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-foreground">{usp.title}</h3>
              <p className="text-muted-foreground">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
