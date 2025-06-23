import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Image src="https://i.ibb.co/LDn9vJbS/APARTMENT-9.png" alt="APARTMENT-9" width={64} height={64} className="h-16 w-16" />
          <span className="font-headline text-xl font-bold">Yiboss Catering</span>
        </div>
        <p className="text-sm text-center">&copy; {new Date().getFullYear()} Yiboss Catering. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>Privacy Policy</Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
