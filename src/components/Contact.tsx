import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our programs? Want to partner with us? 
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-card border-0 bg-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="Enter your email" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Enquiry Type
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select enquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="programme">Programme</SelectItem>
                      <SelectItem value="partner">Partnership</SelectItem>
                      <SelectItem value="hiring">Hiring</SelectItem>
                      <SelectItem value="funding">Funding</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your enquiry..." 
                    rows={5}
                  />
                </div>

                <Button variant="hero" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="p-8 shadow-card border-0 bg-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Address</div>
                      <div className="text-muted-foreground">
                        19 Ameshoff St, Braamfontein<br />
                        Johannesburg, 2000
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <div className="text-muted-foreground">+27 (21) 409 7000</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground">reception@uvuafrica.com</div>
                    </div>
                  </div>
                </div>
              </Card>

             {/* Social Media */}
<Card className="p-8 shadow-card border-0 bg-card">
  <h3 className="text-2xl font-bold text-foreground mb-6">Follow Us</h3>
  <div className="flex gap-4">
    <a
      href="https://www.facebook.com/uvuafrica"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        console.log('Facebook link clicked', e);
        window.open('https://www.facebook.com/uvuafrica', '_blank');
      }}
      className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground 
                 rounded-lg flex items-center justify-center text-primary transition-smooth"
    >
      <Facebook size={20} />
    </a>
    <a
      href="https://x.com/UVUAfrica/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        console.log('Twitter link clicked', e);
        window.open('https://x.com/UVUAfrica/', '_blank');
      }}
      className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground 
                 rounded-lg flex items-center justify-center text-primary transition-smooth"
    >
      <Twitter size={20} />
    </a>
    <a
      href="https://www.instagram.com/uvuafrica/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        console.log('Instagram link clicked', e);
        window.open('https://www.instagram.com/uvuafrica/', '_blank');
      }}
      className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground 
                 rounded-lg flex items-center justify-center text-primary transition-smooth"
    >
      <Instagram size={20} />
    </a>
    <a
      href="https://www.linkedin.com/company/capacitiza/posts/?feedView=all"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        console.log('LinkedIn link clicked', e);
        window.open('https://www.linkedin.com/company/capacitiza/posts/?feedView=all', '_blank');
      }}
      className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground 
                 rounded-lg flex items-center justify-center text-primary transition-smooth"
    >
      <Linkedin size={20} />
    </a>
  </div>
</Card>


              {/* Newsletter */}
              <Card className="p-8 shadow-card border-0 bg-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Get first access to events and insights from CAPACITI.
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button variant="hero">Subscribe</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
