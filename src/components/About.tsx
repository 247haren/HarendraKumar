import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "AWS", "Docker", "GraphQL", "Tailwind CSS", "Figma", 
    "Git", "Jest", "Express.js", "Next.js"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-display">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience 
                building scalable web applications and intuitive user interfaces. My 
                journey began with a curiosity about how things work under the hood, 
                which led me to pursue both technical excellence and design thinking.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest design trends, 
                contributing to open-source projects, or hiking in the mountains. I 
                believe that the best solutions come from understanding both the 
                technical and human sides of every problem.
              </p>
              <p>
                I specialize in creating digital experiences that are not only 
                functional but also delightful to use. Every project is an 
                opportunity to push boundaries and learn something new.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-primary mb-8 font-display">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="justify-center py-2 px-4 text-sm font-medium bg-card hover:bg-accent hover:text-accent-foreground transition-colors duration-300 shadow-card animate-scale-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;