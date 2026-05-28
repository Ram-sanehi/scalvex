import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { AIChatbot } from './AIChatbot';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/918220963388?text=Hi%20Ram,%20I%2520visited%2520your%2520website%2520and%2520would%2520like%2520to%2520discuss%2520a%2520web%2520design/SEO%2520project."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 sm:p-3.5 rounded-full shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center animate-bounce-subtle group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.392 9.806-9.8.001-2.618-1.01-5.08-2.859-6.93C16.378 2.071 13.911 1.05 11.9 1.05c-5.399 0-9.796 4.394-9.799 9.8-.002 1.84.484 3.637 1.409 5.22l-.993 3.626 3.714-.974zm11.367-5.462c-.32-.16-1.89-.933-2.185-1.041-.295-.108-.51-.163-.724.162-.215.324-.83.162-.83.162-.215-.24-.492-.486-.87-.788-.415-.333-.902-.682-1.077-.978-.175-.296-.019-.456.142-.616.144-.144.32-.374.48-.561.16-.188.214-.32.32-.533.107-.214.054-.401-.027-.561-.08-.16-.724-1.745-.993-2.392-.262-.631-.53-.545-.724-.555-.187-.01-.401-.012-.615-.012-.215 0-.564.08-.86.401-.296.324-1.129 1.101-1.129 2.68 0 1.578 1.155 3.104 1.316 3.32.16.216 2.274 3.47 5.507 4.87 2.7.175 3.25.14 3.75-.078.68-.297 1.89-1.08 2.185-2.11.295-1.03.295-1.91.207-2.11-.088-.201-.303-.32-.624-.48z"/>
        </svg>
        <span className="hidden sm:inline-block absolute right-full mr-3 bg-card text-foreground text-xs font-semibold px-3 py-1.5 rounded-lg border border-border shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with Ram
        </span>
      </a>

      {/* Mobile Sticky CTA Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border p-3.5 flex items-center justify-between md:hidden shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
        <div className="flex flex-col text-left">
          <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider leading-none mb-1">Direct Founder Line</span>
          <span className="text-xs font-bold text-foreground leading-none">Get a Free Web Audit</span>
        </div>
        <a
          href="https://wa.me/918220963388?text=Hi%20Ram,%20I'd%20like%20to%20get%20a%20free%20website%20audit%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-white px-5 py-2.5 rounded-lg text-xs font-bold shadow-md hover:bg-accent/90 active:scale-95 transition-all flex items-center gap-2"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.392 9.806-9.8.001-2.618-1.01-5.08-2.859-6.93C16.378 2.071 13.911 1.05 11.9 1.05c-5.399 0-9.796 4.394-9.799 9.8-.002 1.84.484 3.637 1.409 5.22l-.993 3.626 3.714-.974zm11.367-5.462c-.32-.16-1.89-.933-2.185-1.041-.295-.108-.51-.163-.724.162-.215.324-.83.162-.83.162-.215-.24-.492-.486-.87-.788-.415-.333-.902-.682-1.077-.978-.175-.296-.019-.456.142-.616.144-.144.32-.374.48-.561.16-.188.214-.32.32-.533.107-.214.054-.401-.027-.561-.08-.16-.724-1.745-.993-2.392-.262-.631-.53-.545-.724-.555-.187-.01-.401-.012-.615-.012-.215 0-.564.08-.86.401-.296.324-1.129 1.101-1.129 2.68 0 1.578 1.155 3.104 1.316 3.32.16.216 2.274 3.47 5.507 4.87 2.7.175 3.25.14 3.75-.078.68-.297 1.89-1.08 2.185-2.11.295-1.03.295-1.91.207-2.11-.088-.201-.303-.32-.624-.48z"/>
          </svg>
          Chat & Book
        </a>
      </div>

      {/* Floating AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default Layout;
