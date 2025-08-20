import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
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
              >
                Explore Programs
                <ArrowRight size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Play size={20} />
                Watch Stories
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