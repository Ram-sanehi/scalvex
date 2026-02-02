import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';
import { Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email must be less than 255 characters'),
  company: z.string().trim().max(100, 'Company name must be less than 100 characters').optional(),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be less than 2000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data,
      });

      if (error) throw error;

      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. We'll get back to you within 24-48 hours.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Something went wrong',
        description: 'Please try again or email us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Get in Touch</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Tell us about your project and we'll get back to you within 24–48 hours.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <FadeInSection>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                    <p className="text-muted-foreground mb-8">
                      Ready to discuss your project? Fill out the form or reach out directly.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <a 
                          href="mailto:hello@edgeservices.in" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          hello@edgeservices.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Response Time</h3>
                        <p className="text-muted-foreground">
                          We typically respond within 24–48 hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      * Calendar booking for calls will be available soon.
                    </p>
                  </div>
                </div>
              </FadeInSection>

              {/* Contact Form */}
              <FadeInSection delay={100}>
                <div className="lg:col-span-2">
                  <Card>
                    <CardContent className="p-8">
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid sm:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Name *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your name" {...field} />
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
                                  <FormLabel>Email *</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="your@email.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company (optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your company name" {...field} />
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
                                <FormLabel>Message *</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us about your project..."
                                    className="min-h-[150px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                            {isSubmitting ? (
                              'Sending...'
                            ) : (
                              <>
                                <Send className="h-4 w-4 mr-2" />
                                Send Message
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
