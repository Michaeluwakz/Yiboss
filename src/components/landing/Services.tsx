import { Heart, Briefcase, PartyPopper } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    description: 'Crafting dream weddings with bespoke menus and flawless service, making your special day truly memorable.'
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Impress your clients and colleagues with professional catering for meetings, conferences, and corporate galas.'
  },
  {
    icon: PartyPopper,
    title: 'Private Parties',
    description: 'Elevate any celebration, from birthdays to anniversaries, with delicious food that delights every guest.'
  }
];

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Our Catering Services</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">We cater to a wide range of events, ensuring a perfect culinary experience for any occasion.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center border-accent/20 shadow-lg hover:shadow-primary/20 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
