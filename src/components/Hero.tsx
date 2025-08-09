import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
            Hi, I'm <span className="text-accent">Harendra Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-body leading-relaxed">
            Full-Stack Developer & UI/UX Designer crafting digital experiences that make a difference
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-accent transition-colors duration-300 animate-scale-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-accent transition-colors duration-300 animate-scale-in"
              style={{ animationDelay: '0.8s' }}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="text-white/70 hover:text-accent transition-colors duration-300 animate-scale-in"
              style={{ animationDelay: '1s' }}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-accent transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;