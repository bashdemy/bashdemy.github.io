import PropTypes from 'prop-types';

const SKILLS_DATA = {
  Frontend: ['React', 'NextJS', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  Backend: ['Java Spring Boot', 'Node.js', 'Go', 'Python', 'RESTful APIs'],
  'Cloud & DevOps': ['AWS', 'Docker', 'GitHub Actions', 'CI/CD'],
  Database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Design'],
  'AI & Automation': [
    'OpenAI APIs',
    'Anthropic',
    'Cognition',
    'Perplexity',
    'Google AI',
    'AI Integration',
  ],
  'No-Code/Low-Code': ['Platform Development', 'Workflow Automation'],
  Other: ['Linux', 'Bash', 'Performance Optimization', 'Troubleshooting'],
};

const STRENGTHS_DATA = [
  'Full-Stack Generalist: End-to-end development, balancing broad vision with technical depth',
  'Automation & AI: Integrating <strong>AI</strong> (<strong>OpenAI</strong>, <strong>Anthropic</strong>, <strong>Cognition</strong>, <strong>Perplexity</strong>, <strong>Google AI</strong>) and automation to streamline workflows',
  'Robust Delivery: Building reliable <strong>React</strong> UIs, <strong>Spring Boot</strong> backends, and seamless APIs',
  'No-Code & Low-Code: Experience developing no-code/low-code software platforms to accelerate delivery and empower teams',
  'Startup Agility: Startup experience—adaptable, resourceful, and comfortable moving fast with changing priorities',
  'DevOps & Microservices: <strong>CI/CD</strong> pipelines, cloud-native services, and resilient deployments',
  'Data & Visualization: Real-time dashboards and database optimization for clear insights',
  'Mentorship & Inclusion: Supporting diverse teams and effective technical communication',
  'Community Engagement: Advocate for women in tech and more welcoming engineering spaces',
];

const ProfileImage = () => {
  const handleImageError = e => {
    e.target.style.display = 'none';
    const fallback = e.target.nextElementSibling;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  return (
    <div className="relative mb-8">
      <img
        src="/profile-picture.JPG"
        alt="Maria (Bazhena) Dementyeva"
        className="profile-picture"
        loading="eager"
        decoding="sync"
        onError={handleImageError}
      />
      <div
        className="profile-picture bg-gradient-to-br from-theme-accent to-theme-primary flex items-center justify-center text-theme-accent text-4xl font-bold font-heading"
        style={{ display: 'none' }}
      >
        MD
      </div>
    </div>
  );
};

const SkillsSection = () => (
  <div className="card">
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
              <span
                key={skill}
                className="px-3 py-1 bg-theme-accent text-white rounded-full text-sm font-medium font-mono tech-label shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const About = ({ id }) => {
  return (
    <section id={id} className="section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h3 className="text-4xl font-bold text-theme-primary mb-3 font-heading">
                  Bazhena Dementyeva
                </h3>
                <p className="text-sm text-theme-secondary font-body opacity-80">
                  (think zh="g" as in "genre," for advanced users. Otherwise,
                  "Maria" is perfectly acceptable.)
                </p>
              </div>
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
              <div className="card">
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
                  <strong>AI</strong> and automation—including nocode and
                  lowcode solutions. I'm committed to making tech more
                  inclusive, with a focus on supporting women in the industry.
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
                      <span dangerouslySetInnerHTML={{ __html: strength }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <h4 className="text-lg font-semibold text-theme-primary mb-4 font-heading">
                  Professional Identity
                </h4>
                <p className="text-theme-secondary text-sm leading-relaxed font-body opacity-90">
                  I use <strong>Bazhena Dementyeva</strong> in most professional
                  settings, and I also answer to <strong>Maria Dementyeva</strong>
                  {' '}or <strong>Maria Demy</strong>. Online, I'm
                  {' '}<strong>bashdemy</strong>.
                </p>
              </div>
            </div>
            <SkillsSection />
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
