import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Medium from '@/components/ui/medium';

const Footer = () => {
  const currentYear = 2024; // Updated year

  return (
    <footer className="bg-primary text-primary-foreground text-sm">
      <div className="container-custom py-3 md:py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-2 text-primary-foreground">Scalvex</h3>
            <p className="text-primary-foreground/80 max-w-md text-sm mb-2">
              SEO-driven websites for service businesses that want consistent leads. 
              Built with performance and visibility from day one.
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Email: <a href="mailto:scalvex1@gmail.com" className="underline hover:text-accent">scalvex1@gmail.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-2 text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-1">
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
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-2 text-primary-foreground">
              Legal
            </h4>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/privacy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 pt-4 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-primary-foreground/80 text-xs text-center md:text-left">
              © {currentYear} Scalvex. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://medium.com/@scalvex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Medium"
              >
                <Medium className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
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
