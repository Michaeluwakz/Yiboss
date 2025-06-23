import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Services } from '@/components/landing/Services';
import { Usp } from '@/components/landing/Usp';
import { Gallery } from '@/components/landing/Gallery';
import { Testimonials } from '@/components/landing/Testimonials';
import { AiMenu } from '@/components/landing/AiMenu';
import { Booking } from '@/components/landing/Booking';
import { Footer } from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Usp />
        <Separator className="my-12 bg-primary/20" />
        <Gallery />
        <Testimonials />
        <AiMenu />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
