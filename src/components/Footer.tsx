import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
                CAPACITI
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Empowering digitally marginalized youth with technical competencies 
                and workplace readiness across Africa.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/capacitiza"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-smooth"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://x.com/capacitiza"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-smooth"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://www.instagram.com/capacitiza"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-smooth"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://za.linkedin.com/company/capacitiza"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-smooth"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#impact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                    Our Impact
                  </a>
                </li>
                <li>
                  <a href="#stories" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-primary-foreground/80" />
                  <div className="text-primary-foreground/80">
                    19 Ameshoff St<br />
                    Braamfontein<br />
                    Johannesburg, 2000
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary-foreground/80" />
                  <span className="text-primary-foreground/80">+27 (21) 409 7000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary-foreground/80" />
                  <span className="text-primary-foreground/80">reception@uvuafrica.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 CAPACITI - Part of UVU Africa Group. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;