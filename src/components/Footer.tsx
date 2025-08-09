import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-display">Harendra Kumar</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Full-Stack Developer & UI/UX Designer passionate about creating 
              exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
              <li>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:alex@example.com"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>alex@example.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 flex items-center justify-center space-x-1">
            <span>© 2024 Harendra Kumar. Made with</span>
            <Heart className="w-4 h-4 text-accent" />
            <span>and lots of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;