import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import Watermark from "@/components/Watermark";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-accent/10 overflow-hidden">
      {/* Watermarks */}
      <Watermark className="top-32 left-16" size="lg" opacity={0.12} />
      <Watermark className="bottom-24 right-20" size="md" opacity={0.18} />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-secondary/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Empowering Africa's Digital Future
            </h1>
            
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Building digital skills for sustainable economic growth across Africa through 
              innovative training programs and partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-primary hover:bg-primary-light text-white"
                onClick={() => scrollToSection('programs')}
              >
                Explore Programs
                <ArrowRight size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => scrollToSection('stories')}
              >
                <Play size={20} />
                Stories
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="CAPACITI empowering African youth with digital skills"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/20 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-secondary/20 rounded-lg -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
