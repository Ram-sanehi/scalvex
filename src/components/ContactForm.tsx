import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/validation';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, CheckCircle, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      website: '',
      budget: '',
      goals: '',
      message: '',
      honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Direct call to Supabase Edge Function to deliver the email
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data,
      });

      if (error) throw error;

      setIsSuccess(true);
      form.reset();
      
      toast({
        title: 'Inquiry Sent',
        description: 'Thank you. We have received your project details.',
      });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast({
        title: 'Submission Failed',
        description: 'Please try again or email us directly at ram@scalvex.in.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="border border-accent/30 rounded-3xl bg-card/85 backdrop-blur-sm p-8 sm:p-12 text-center shadow-[0_8px_30px_rgba(59,175,218,0.04)] relative overflow-hidden transition-all duration-500 max-w-xl mx-auto">
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-accent/[0.03] to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 animate-pulse">
            <CheckCircle className="h-8 w-8" />
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-foreground flex items-center gap-2">
            Inquiry Received
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm text-sm sm:text-base">
            Your inquiry has been received successfully. We’ll review your project details and get back to you shortly with some actionable visibility insights.
          </p>

          <Button 
            onClick={() => setIsSuccess(false)} 
            variant="outline" 
            className="rounded-full px-6 border-border/60 hover:bg-accent/5 hover:text-accent font-semibold"
          >
            Send Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative">
        {/* Honeypot field (hidden from users, used to catch bots) */}
        <div className="hidden" aria-hidden="true">
          <FormField
            control={form.control}
            name="honeypot"
            render={({ field }) => (
              <Input tabIndex={-1} autoComplete="off" placeholder="Leave this empty" {...field} />
            )}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Full Name *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    className="rounded-xl border-border/40 focus-visible:ring-accent/25 focus-visible:border-accent bg-card/50 h-11" 
                    aria-required="true"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email Address *</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="rounded-xl border-border/40 focus-visible:ring-accent/25 focus-visible:border-accent bg-card/50 h-11" 
                    aria-required="true"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Company (optional)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your company name" 
                    className="rounded-xl border-border/40 focus-visible:ring-accent/25 focus-visible:border-accent bg-card/50 h-11" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Website URL (optional)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="https://example.com" 
                    className="rounded-xl border-border/40 focus-visible:ring-accent/25 focus-visible:border-accent bg-card/50 h-11" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Project Budget (optional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="rounded-xl border-border/40 focus-visible:ring-accent/25 focus-visible:border-accent bg-card/50 h-11">
                    <SelectValue placeholder="Select a budget range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-card border-border/45">
                  <SelectItem value="under-5k">Under $5,000</SelectItem>
                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value="above-25k">$25,000+</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="goals"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Project Goals *</FormLabel>
              <FormControl>
                <Input 
                  placeholder="e.g. Redesign, increase search rankings, capture more leads" 
                  className="rounded-xl border-border/40 focus-visible:ring-accent/25 focus-visible:border-accent bg-card/50 h-11" 
                  aria-required="true"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Main Message *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us more about your current site challenges and target timeline..." 
                  className="min-h-[120px] rounded-xl border-border/40 focus-visible:ring-accent/25 focus-visible:border-accent bg-card/50 p-4" 
                  aria-required="true"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          size="lg" 
          className="w-full sm:w-auto hover:bg-accent/90 hover:shadow-lg transition-all duration-300 bg-accent text-white px-8 rounded-full font-semibold h-11" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Submit Inquiry
            </span>
          )}
        </Button>
      </form>
    </Form>
  );
};
