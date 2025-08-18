import Card from './ui/Card';
import SectionIntro from './ui/SectionIntro';

interface BlogProps {
  id: string;
}

const Blog = ({ id }: BlogProps) => {
  return (
    <section id={id} className="section-padding bg-theme-background-alt">
      <div className="container-custom">
        <SectionIntro
          title="Writing & Thoughts"
          subtitle="Perspectives on software engineering, technical leadership, and building inclusive tech teams."
          align="center"
        />

        <div className="text-center">
          <Card className="inline-block max-w-2xl">
            <p className="text-theme-secondary mb-4 font-body">
              Find my technical writing and industry insights on{' '}
              <a 
                href="https://bashdemy.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-theme-primary hover:text-theme-accent transition-colors font-semibold"
              >
                Substack
              </a>
            </p>
            <p className="text-sm text-theme-muted font-body">
              Topics include software architecture, AI integration, career development in tech, and advocating for diversity in engineering.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;
