'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function Booking() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent!",
      description: "Thank you for your interest. We will get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };


  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Let's Plan Your Event</h2>
            <p className="text-muted-foreground md:text-lg">
              Ready to experience the Yiboss difference? Fill out the form, and our event coordinator will get in touch to discuss your catering needs and provide a personalized quote.
            </p>
            <div className="space-y-2 pt-4">
              <p><strong>Email:</strong> contact@yibosscatering.com</p>
              <p><strong>Phone:</strong> (123) 456-7890</p>
            </div>
          </div>
          <Card className="shadow-xl border-accent/20">
            <CardHeader>
              <CardTitle className="font-headline">Booking Inquiry</CardTitle>
              <CardDescription>We'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required/>
                  </div>
                </div>
                <div className="space-y-2">
                   <Label htmlFor="event-type">Event Type</Label>
                   <Input id="event-type" placeholder="e.g., Wedding, Corporate Lunch" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your event..." className="min-h-[100px]" required/>
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Inquiry</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
