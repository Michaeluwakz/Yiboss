import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  { name: 'Sarah L.', role: 'Bride', text: 'Yiboss Catering made our wedding day perfect. The food was absolutely divine, and the service was impeccable. Our guests are still raving about it!' },
  { name: 'Michael B.', role: 'Event Manager', text: 'For our annual corporate gala, Yiboss delivered beyond expectations. They were professional, punctual, and the menu was a huge hit with our executives.' },
  { name: 'Jessica P.', role: 'Party Host', text: 'I hired them for my 40th birthday, and it was the best decision! The variety and quality of ahe food were outstanding. It made the party so much more special.' }
];

const getInitials = (name: string) => name.split(' ').map((n) => n[0]).join('').toUpperCase();

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">We pride ourselves on creating happy clients and memorable events.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-lg border-accent/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{getInitials(testimonial.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
