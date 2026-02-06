
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';

interface CaseStudyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    outcome: string;
    context: string;
    problem: string;
    goal: string;
    strategy: string;
    execution: string;
    type: string;
    tools: string[];
    detailedCase?: React.ReactNode;
  };
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ open, onOpenChange, project }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-2xl p-0 bg-background border border-border rounded-xl shadow-lg"
        style={{ maxHeight: '80vh', minHeight: '400px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
      >
        <Card className="bg-background border border-border rounded-xl shadow-md mx-auto mt-6 mb-6 max-w-2xl" style={{ overflow: 'hidden' }}>
          <CardContent
            className="p-8 font-sans blog-fonts prose prose-lg prose-accent prose-primary prose-headings:font-bold prose-headings:mt-6 prose-headings:mb-2 prose-ul:pl-6 prose-ol:pl-6 prose-hr:my-6 prose-p:mb-4 prose-li:mb-2 prose-strong:text-primary prose-blockquote:bg-muted/40 prose-blockquote:p-4 prose-blockquote:rounded-lg prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:mb-6 prose-blockquote:text-muted-foreground"
            style={{
              overflowY: 'auto',
              maxHeight: 'calc(80vh - 120px)',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style>{`
              .blog-fonts::-webkit-scrollbar { display: none; }
            `}</style>
            <h1 className="text-4xl font-bold mb-6">Case Study: {project.title}</h1>
            <hr />
            <h2>Project Overview</h2>
            <p><strong>{project.title}</strong> is a digital platform designed to help investment firms present their services, portfolio strategies, and performance insights in a clear, credible, and data-driven manner. The project focused on building a high-trust online presence that simplifies complex financial information while enabling seamless client engagement.</p>
            <hr />
            <h2>Challenges</h2>
            <ul>
              <li><strong>Trust & Credibility Gap:</strong> Financial platforms require strong credibility. The existing presence lacked authority and professional polish.</li>
              <li><strong>Complex Financial Data Representation:</strong> Investment strategies and performance metrics were difficult for non-technical users to understand.</li>
              <li><strong>Poor User Experience:</strong> Cluttered navigation made it hard for users to access critical information quickly.</li>
              <li><strong>Scalability Limitations:</strong> The system needed to support future expansion such as analytics dashboards and client portals.</li>
              <li><strong>Performance & Security Expectations:</strong> High performance and security were mandatory due to the sensitive nature of financial data.</li>
            </ul>
            <hr />
            <h2>Solution</h2>
            <ul>
              <li>A professional, minimal UI to establish trust</li>
              <li>Structured content to simplify financial concepts</li>
              <li>Secure, extensible architecture</li>
              <li>Data visualization for clarity and engagement</li>
            </ul>
            <hr />
            <h2>Approach</h2>
            <ol>
              <li><strong>Requirement Analysis:</strong> Identified core user personas including retail and institutional investors.</li>
              <li><strong>UX & Information Architecture:</strong> Designed intuitive navigation with a focus on clarity and conversions.</li>
              <li><strong>Design System:</strong> Established consistent typography, color hierarchy, and layout for a premium brand feel.</li>
              <li><strong>Modular Development:</strong> Built reusable components to ensure maintainability and scalability.</li>
              <li><strong>Performance & Security Optimization:</strong> Applied best practices for fast load times and secure data handling.</li>
            </ol>
            <hr />
            <h2>Implementation</h2>
            <ul>
              <li>Built a responsive web application optimized for desktop and mobile devices.</li>
              <li>Developed dynamic sections for investment strategies, portfolio performance, and market insights.</li>
              <li>Integrated charts and visual indicators for effective financial data communication.</li>
              <li>Implemented SEO best practices and accessibility standards.</li>
              <li>Deployed using a CI/CD pipeline for smooth updates and version control.</li>
            </ul>
            <hr />
            <h2>Outcome & Impact</h2>
            <ul>
              <li><strong>Increased Client Trust:</strong> Professional design and transparent data presentation.</li>
              <li><strong>Higher User Engagement:</strong> Improved content structure and interactivity.</li>
              <li><strong>Improved Lead Conversion:</strong> Simplified navigation and clear call-to-actions.</li>
              <li><strong>Future-Ready Platform:</strong> Capable of supporting advanced features like real-time analytics.</li>
            </ul>
            <hr />
            <h2>Key Performance Metrics</h2>
            <ul>
              <li><strong>Page Load Time:</strong> ~40% improvement</li>
              <li><strong>Average Session Duration:</strong> +35%</li>
              <li><strong>Bounce Rate:</strong> −25%</li>
              <li><strong>Lead Conversion Rate:</strong> +30%</li>
              <li><strong>Lighthouse Performance Score:</strong> 95+</li>
            </ul>
            <hr />
            <h2>Technology Stack</h2>
            <ul>
              <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Tailwind CSS / Custom CSS, Chart.js / Recharts</li>
              <li><strong>Backend:</strong> Node.js, Express.js</li>
              <li><strong>Database:</strong> MongoDB / PostgreSQL</li>
              <li><strong>DevOps & Tools:</strong> Git & GitHub, CI/CD (GitHub Actions), Docker, Nginx</li>
              <li><strong>Security & Performance:</strong> HTTPS (SSL), JWT Authentication, Rate Limiting, Lazy Loading & Code Splitting</li>
            </ul>
            <hr />
            <h2>Conclusion</h2>
            <p>The <strong>{project.title}</strong> project successfully transformed a complex financial service into a clear, scalable, and high-trust digital platform. By combining strong UX design, modern technologies, and performance optimization, the solution delivers immediate business value and long-term scalability.</p>
            <DialogClose asChild>
              <button className="mt-8 px-4 py-2 rounded bg-accent text-accent-foreground hover:bg-accent/80 transition">Close</button>
            </DialogClose>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
