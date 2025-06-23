import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-foreground">
      <div className="absolute inset-0 bg-black/50 z-0">
        <Image
          src="https://i.ibb.co/BVmD829N/Untitled-design-2.png"
          alt="Elegant event setup"
          data-ai-hint="catering event"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            Exquisite Catering for Unforgettable Moments
          </h1>
          <p className="text-lg md:text-xl text-foreground/90">
            From intimate parties to grand weddings, we deliver culinary excellence and impeccable service tailored to your special occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
