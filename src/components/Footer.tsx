import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Medium from '@/components/ui/medium';

const Footer = () => {
  const currentYear = 2026; // Updated year

  return (
    <footer className="bg-primary text-primary-foreground text-sm">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-primary-foreground tracking-tight">Scalvex</h3>
            <p className="text-primary-foreground/70 max-w-sm text-sm leading-relaxed mb-5">
              Scalvex builds modern websites designed to improve visibility, strengthen credibility, and help service businesses grow online.
            </p>
            <p className="text-primary-foreground/75 text-xs">
              Direct inquiries: <a href="mailto:ram@scalvex.in" className="underline hover:text-accent transition-colors duration-200">ram@scalvex.in</a>
            </p>
          </div>

          {/* Solutions / What We Do */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-primary-foreground">
              What We Do
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Growth Websites', path: '/growth-websites' },
                { name: 'Website Optimization', path: '/website-optimization' },
                { name: 'Visibility & SEO', path: '/visibility-seo' },
                { name: 'Performance Improvements', path: '/performance-improvements' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Work', path: '/work' },
                { name: 'Process', path: '/process' },
                { name: 'About', path: '/about' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-primary-foreground">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 text-xs"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 text-xs"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-xs text-center md:text-left">
              © {currentYear} Scalvex. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://medium.com/@vish6933"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Medium"
              >
                <Medium className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ram-sanehi-437707282/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/Vishwakarm4095"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/its_scalvex/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586723681789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
