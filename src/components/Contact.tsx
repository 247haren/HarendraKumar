import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message 
            and let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card border-0 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      required 
                      className="transition-all duration-300 focus:shadow-card"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      required 
                      className="transition-all duration-300 focus:shadow-card"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className="transition-all duration-300 focus:shadow-card"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    required 
                    className="transition-all duration-300 focus:shadow-card"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    className="transition-all duration-300 focus:shadow-card resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6 font-display">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, creative ideas, 
                or partnerships. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card shadow-card transition-all duration-300 hover:shadow-elegant">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Email</h4>
                  <a 
                    href="mailto:alex@example.com" 
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    alex@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card shadow-card transition-all duration-300 hover:shadow-elegant">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    +1 (234) 567-8890
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-card shadow-card transition-all duration-300 hover:shadow-elegant">
                <div className="bg-accent/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Location</h4>
                  <span className="text-muted-foreground">San Francisco, CA (PST)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card rounded-lg shadow-card">
              <h4 className="font-semibold text-primary mb-3">Response Time</h4>
              <p className="text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent 
                matters, please don't hesitate to call directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;