import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email must be less than 255 characters'),
  company: z.string().trim().max(100, 'Company name must be less than 100 characters').optional(),
  website: z.string().trim().max(255, 'Website URL must be less than 255 characters').optional(),
  budget: z.string().trim().max(100, 'Budget description must be less than 100 characters').optional(),
  goals: z.string().trim().min(1, 'Project goals are required').max(2000, 'Project goals must be less than 2000 characters'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be less than 2000 characters'),
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
