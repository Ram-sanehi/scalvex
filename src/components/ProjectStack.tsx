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
          <div className="w-full h-full bg-card border border-border rounded-2xl shadow-md overflow-hidden flex flex-col">
            <div
              className="w-full bg-muted"
              style={{ aspectRatio: '16/7', minHeight: isMobile ? 180 : 260, maxHeight: isMobile ? 200 : 320, position: 'relative' }}
            >
              <img
                src={project.image || '/aim.png'}
                alt={`${project.title} website screenshot`}
                className="w-full h-full object-cover"
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
            <div className="w-full px-8 py-7 flex flex-col gap-2 border-t border-border bg-card">
              <div className="flex items-center gap-3 mb-1">
                <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-wide">
                  {project.type}
                </span>
                {project.link ? (
                  <Link
                    to={project.link}
                    className="ml-auto whitespace-nowrap px-4 py-1.5 rounded bg-accent text-accent-foreground hover:bg-accent/80 transition text-xs font-semibold shadow-sm"
                  >
                    View Case Study
                  </Link>
                ) : null}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">{project.title}</div>
              <div className="text-base text-muted-foreground mb-1">{project.outcome}</div>
              <div className="text-sm text-muted-foreground mb-1 font-medium">Approach</div>
              <ul className="text-muted-foreground text-xs list-disc list-inside space-y-1 mb-1">
                <li><span className="font-medium">Context:</span> {project.context}</li>
                <li><span className="font-medium">Problem:</span> {project.problem}</li>
                <li><span className="font-medium">Goal:</span> {project.goal}</li>
                <li><span className="font-medium">Strategy:</span> {project.strategy}</li>
                <li><span className="font-medium">Execution:</span> {project.execution}</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded opacity-80">{tool}</span>
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
