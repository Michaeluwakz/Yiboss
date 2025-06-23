import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Header() {
  return (
    <header className="w-full bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-4 font-headline text-2xl font-bold text-foreground" prefetch={false}>
          <Image src="https://i.ibb.co/LDn9vJbS/APARTMENT-9.png" alt="APARTMENT-9" width={64} height={64} className="h-16 w-16" />
          <span>Yiboss Catering</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-lg font-medium text-muted-foreground">
          <Link href="#services" className="hover:text-primary transition-colors" prefetch={false}>Services</Link>
          <Link href="#gallery" className="hover:text-primary transition-colors" prefetch={false}>Gallery</Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors" prefetch={false}>Testimonials</Link>
          <Link href="#contact" className="hover:text-primary transition-colors" prefetch={false}>Contact</Link>
        </nav>
        <Button asChild className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="#contact">Book Now</Link>
        </Button>
      </div>
    </header>
  );
}
