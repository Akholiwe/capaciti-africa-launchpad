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

          {/* Interactive Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-primary">Over 10+ Years of Innovation</h3>
            
            {/* Interactive Timeline */}
            <div className="relative max-w-5xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}
                  >
                    {/* Content Card */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <Card className="p-6 shadow-card border-0 bg-card hover:shadow-elegant transition-all duration-300 group-hover:scale-105 cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="secondary" className="text-xs font-semibold">
                            {milestone.year}
                          </Badge>
                        </div>
                        <p className="text-secondary/80 leading-relaxed">
                          {milestone.event}
                        </p>
                      </Card>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 group-hover:bg-primary-glow"></div>
                      <div className="absolute inset-0 w-6 h-6 bg-primary/30 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Spacer */}
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
              
              {/* Floating Year Indicator */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="default" className="bg-primary text-white shadow-lg">
                  2010 - 2025
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