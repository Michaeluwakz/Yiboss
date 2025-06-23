'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Sparkles, Wand2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { suggestMenuCustomization, type SuggestMenuCustomizationOutput } from '@/ai/flows/suggest-menu-customization';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  eventType: z.string().min(1, 'Please select an event type.'),
  dietaryRestrictions: z.string().min(1, 'Please enter dietary restrictions.'),
  preferences: z.string().min(1, 'Please enter your food preferences.'),
});

const popularChoices = 'Grilled Salmon, Caprese Skewers, Mini Quiches, Beef Sliders, Chocolate Lava Cakes';

export function AiMenu() {
  const [suggestion, setSuggestion] = useState<SuggestMenuCustomizationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventType: '',
      dietaryRestrictions: 'None',
      preferences: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestion(null);

    try {
      const result = await suggestMenuCustomization({
        ...values,
        popularChoices: popularChoices,
      });
      setSuggestion(result);
    } catch (e) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to get suggestions. Please try again.',
      });
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-menu" className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 md:px-6">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-semibold">AI-Powered Suggestions</div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Design Your Perfect Menu</h2>
          <p className="text-muted-foreground md:text-lg">
            Need inspiration? Use our AI tool to generate custom menu ideas. Just tell us about your event, and we'll craft suggestions tailored to your taste.
          </p>
        </div>

        <Card className="shadow-xl border-accent/20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <Wand2 className="text-primary" />
                  Menu Idea Generator
                </CardTitle>
                <CardDescription>Fill in the details below to get started.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an event type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Wedding">Wedding</SelectItem>
                          <SelectItem value="Corporate Event">Corporate Event</SelectItem>
                          <SelectItem value="Private Party">Private Party</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dietaryRestrictions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dietary Needs</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., vegetarian, gluten-free, nut allergy" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Food Preferences & Themes</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Italian cuisine, spicy food, casual BBQ theme" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex-col items-start gap-4">
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                  {isLoading ? 'Generating...' : 'Get Suggestions'}
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
                {isLoading && (
                   <div className="w-full space-y-2 p-4 border border-dashed rounded-lg">
                     <Skeleton className="h-4 w-3/4" />
                     <Skeleton className="h-4 w-full" />
                     <Skeleton className="h-4 w-5/6" />
                   </div>
                )}
                {suggestion && (
                  <Card className="w-full bg-primary/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">Your Custom Menu Suggestion</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground whitespace-pre-wrap">{suggestion.menuSuggestions}</p>
                    </CardContent>
                  </Card>
                )}
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
