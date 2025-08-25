import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, Target, Heart } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2010", event: "Organization founded under UVU Africa" },
    { year: "2011", event: "Trained hundreds in Web Development" },
    { year: "2015", event: "Launched digital career accelerators & entrepreneurship incubation" },
    { year: "2016", event: "Secured R85 million (~$5.7M) Jobs Fund Grant for 3,000 ICT Jobs" },
    { year: "2018", event: "#LoanFree campaign — canceled student loans for 2018–2020 cohorts" },
    { year: "2023", event: "Partnered with Ardagh Group for global excellence in CT project" },
    { year: "2024", event: "Launched first Tech Accelerator in Gqeberha via Jobs Fund" },
    { year: "2025", event: "Achieved training of 6,500 youth with a 90% placement rate" },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      description: "Democratize tech careers and foster inclusive societies throughout Africa via quality education."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Vision", 
      description: "Empower digitally marginalized youth with technical competencies and workplace readiness that go beyond mere job placement."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ethos",
      description: "Built on respect, excellence, and constant innovation to nurture a future-ready workforce."
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-8">
              About Capaciti
            </h2>
            <p className="text-lg text-secondary/80 leading-relaxed max-w-3xl mx-auto">
              Established in 2010, CAPACITI, part of the UVU Africa Group, is at the forefront of 
              preparing young individuals for the tech sector. CAPACITI has emerged as one of South 
              Africa's leading digital talent accelerators, annually training and placing approximately 
              1000 unemployed youth. As a non-profit organisation, CAPACITI leverages partner investments to 
              deliver demand-driven, targeted technical training that positively impacts lives.
            </p>
          </div>

          {/* Mission, Vision, Ethos */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">{value.title}</h3>
                <p className="text-secondary/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Interactive Horizontal Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-primary">Over 10+ Years of Innovation</h3>
            
            {/* Interactive Horizontal Timeline */}
            <div className="relative overflow-x-auto pb-8">
              <div className="flex items-start justify-between min-w-max gap-6 px-4">
                {/* Timeline line */}
                <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-full"></div>
                
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex flex-col items-center text-center min-w-[160px] relative group cursor-pointer">
                    {/* Interactive Timeline Dot */}
                    <div className="relative z-10 mb-4">
                      <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-all duration-300 group-hover:bg-primary-glow"></div>
                      <div className="absolute inset-0 w-6 h-6 bg-primary/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Year Badge */}
                    <Badge variant="secondary" className="mb-3 text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {milestone.year}
                    </Badge>
                    
                    {/* Event Card */}
                    <Card className="p-4 shadow-card border-0 bg-card hover:shadow-elegant transition-all duration-300 group-hover:scale-105 max-w-[180px]">
                      <p className="text-sm text-secondary/80 leading-relaxed">
                        {milestone.event}
                      </p>
                    </Card>
                    
                    {/* Connecting line to dot */}
                    <div className="absolute top-6 w-px h-8 bg-primary/30 group-hover:bg-primary transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
              
              {/* Timeline Progress Indicator */}
              <div className="absolute -top-4 left-4">
                <Badge variant="default" className="bg-primary text-white shadow-lg">
                  2010 - 2025 Journey
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;