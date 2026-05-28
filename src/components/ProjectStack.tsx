import { Link } from 'react-router-dom';

interface Project {
  title: string;
  liveUrl?: string;
  outcome: string;
  context: string;
  problem: string;
  goal: string;
  strategy: string;
  execution: string;
  type: string;
  tools: string[];
  link?: string;
  image?: string;
  featured?: boolean;
}

interface ProjectStackProps {
  projects: Project[];
}

// Responsive disables sticky/fold on mobile
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

const ProjectStack: React.FC<ProjectStackProps> = ({ projects }) => {
  return (
    <section className="relative w-full max-w-6xl mx-auto">
      {projects.map((project, idx) => (
        <div
          key={project.title}
          className={`project-stack-card z-${projects.length - idx} w-full mb-0 ${!isMobile ? 'sticky' : ''}`}
          style={{
            top: !isMobile ? `${idx * 80}px` : undefined,
            height: isMobile ? '480px' : '660px',
            marginBottom: isMobile ? '48px' : '0',
          }}
        >
          <div className="w-full h-full bg-card border border-border/50 hover:border-accent/40 rounded-2xl shadow-[0_2px_8px_-3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(59,175,218,0.06)] transition-all duration-500 overflow-hidden flex flex-col group/card relative">
            {/* Soft background blue gradient highlight on hover */}
            <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            
            <div
              className="w-full bg-muted overflow-hidden relative z-10"
              style={{ aspectRatio: '16/7', minHeight: isMobile ? 180 : 260, maxHeight: isMobile ? 200 : 320, position: 'relative' }}
            >
              <img
                src={project.image || '/aim.png'}
                alt={`${project.title} website screenshot`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-[1.03]"
                style={{ objectPosition: 'top center', display: 'block' }}
                loading="lazy"
                draggable={false}
              />
              {project.featured && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  Featured Project
                </span>
              )}
            </div>
            
            {/* Case Study Summary */}
            <div className="w-full px-8 py-6 flex flex-col gap-2 border-t border-border/50 bg-card relative z-10">
              <div className="flex items-center gap-3 mb-1">
                <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-wide">
                  {project.type}
                </span>
                {project.link ? (
                  <Link
                    to={project.link}
                    className="ml-auto whitespace-nowrap px-4 py-1.5 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-md hover:scale-105 transition-all duration-300 text-xs font-semibold"
                  >
                    View Case Study
                  </Link>
                ) : null}
              </div>
              <div className="text-lg font-bold text-foreground group-hover/card:text-accent transition-colors duration-300">{project.title}</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium mb-2">{project.outcome}</div>
              
              {/* Strategic Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-xs text-muted-foreground border-t border-border/40 pt-4">
                <div><span className="font-semibold text-foreground">Challenge:</span> {project.problem}</div>
                <div><span className="font-semibold text-foreground">Objective:</span> {project.goal}</div>
                <div><span className="font-semibold text-foreground">Approach:</span> {project.strategy}</div>
                <div><span className="font-semibold text-foreground">Execution:</span> {project.execution}</div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border/20">
                {project.tools.map((tool) => (
                  <span 
                    key={tool} 
                    className="text-[10px] font-semibold text-muted-foreground/80 bg-muted/40 border border-border/40 px-2 py-0.5 rounded tracking-wide transition-colors duration-300 hover:text-accent hover:border-accent/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectStack;
