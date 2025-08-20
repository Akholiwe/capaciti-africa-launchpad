import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="CAPACITI empowering African youth with digital skills"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="absolute inset-0 gradient-hero opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <span className="text-sm font-medium">🌍 Transforming Africa's Digital Future</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Africa's
            <span className="block gradient-accent bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Building digital skills for sustainable economic growth across Africa through 
            innovative training programs and strategic partnerships.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-secondary">6,500+</div>
              <div className="text-sm text-white/80">Youth Trained</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-secondary">90%</div>
              <div className="text-sm text-white/80">Placement Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-secondary">150%</div>
              <div className="text-sm text-white/80">Salary Increase</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto font-semibold"
            >
              Explore Programs
              <ArrowRight size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Play size={20} />
              Watch Stories
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;