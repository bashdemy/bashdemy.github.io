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
          subtitle="Thoughts on software engineering, AI integration, women in tech, and the intersection of technology with life."
          align="center"
        />

        <div className="text-center">
          <Card className="inline-block max-w-2xl">
            <p className="text-theme-secondary mb-4 font-body">
              Writing content coming soon...
            </p>
            <p className="text-sm text-theme-muted font-body">
              I&apos;m working on sharing thoughts about software engineering, AI
              integration, and women in tech.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;
