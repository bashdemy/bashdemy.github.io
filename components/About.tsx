import PropTypes from 'prop-types';
import Card from './ui/Card';
import Tag from './ui/Tag';
import ProfileImage from './ui/ProfileImage';
import SectionIntro from './ui/SectionIntro';
import { SKILLS_DATA, STRENGTHS_DATA } from '../constants/about';

const SkillsSection = () => (
  <Card>
    <h3 className="text-2xl font-semibold text-theme-primary mb-6 font-heading">
      Skills & Technologies
    </h3>
    <div className="space-y-6">
      {Object.entries(SKILLS_DATA).map(([category, skillList]) => (
        <div key={category}>
          <h4 className="text-lg font-medium text-theme-accent mb-3 font-heading">
            {category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {skillList.map(skill => (
              <Tag
                key={skill}
                tone="accent"
                variant="solid"
                className="px-3 py-1 rounded-full text-sm shadow-sm"
              >
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Card>
);

const About = ({ id }: { id: string }) => {
  return (
    <section id={id} className="section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <SectionIntro
                title="Bazhena Dementyeva"
                subtitle="(think zh=&quot;g&quot; as in &quot;genre,&quot; for advanced users. Otherwise, &quot;Maria&quot; is perfectly acceptable.)"
                align="left"
                className="mb-6"
                subtitleClassName="text-sm opacity-80"
              />
              <div className="space-y-2">
                <p className="text-theme-accent font-semibold text-xl font-heading">
                  Software Engineer
                </p>
                <p className="text-sm text-theme-secondary font-body opacity-80">
                  Sydney, Australia • She/Her
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <ProfileImage />
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Card>
                <h3 className="text-2xl font-semibold text-theme-primary mb-6 font-heading">
                  About
                </h3>
                <p className="text-theme-secondary mb-6 leading-relaxed font-body description">
                  Engineer focused on automating routine tasks, building
                  reliable software, and scaling systems that matter. I take a{' '}
                  <strong>full-stack</strong>, generalist approach but am always
                  ready to dive deep into problems when needed.
                </p>

                <p className="text-theme-secondary mb-6 leading-relaxed font-body description">
                  My experience includes <strong>Java</strong> (with{' '}
                  <strong>Spring Boot</strong>) and <strong>JavaScript</strong>{' '}
                  (with <strong>React</strong> and <strong>NextJS</strong>). I
                  build resilient, user-focused applications, optimize{' '}
                  <strong>cloud infrastructure</strong> (mostly{' '}
                  <strong>AWS</strong>), and have a strong interest in practical{' '}
                  <strong>AI</strong> and automation, including nocode and
                  lowcode solutions. I&apos;m committed to making tech more
                  inclusive, with a focus on supporting women in the industry.
                </p>

                <p className="text-theme-secondary mb-6 leading-relaxed font-body description">
                  I also believe building software should be fun. The process
                  should feel collaborative and creative, and the result should
                  bring people joy while staying reliable and thoughtful.
                </p>

                <h4 className="text-lg font-semibold text-theme-primary mb-4 font-heading">
                  Key Strengths
                </h4>
                <ul className="space-y-3 text-theme-secondary font-body">
                  {STRENGTHS_DATA.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <span
                        className="text-theme-accent mr-3 mt-1"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            <div className="space-y-6">
              <SkillsSection />
              <Card>
                <h4 className="text-lg font-semibold text-theme-primary mb-4 font-heading">
                  Professional Identity
                </h4>
                <p className="text-theme-secondary text-sm leading-relaxed font-body opacity-90">
                  Professionally, I go by <strong>Bazhena Dementyeva</strong>. I
                  also respond to <strong>Maria Dementyeva</strong> or
                  <strong> Maria Demy</strong>, and online I’m
                  <strong> bashdemy</strong>.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  id: PropTypes.string.isRequired,
};

export default About;
