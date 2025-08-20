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

          {/* Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-primary">Over 10+ Years of Innovation</h3>
            
            {/* Simple horizontal timeline */}
            <div className="relative overflow-x-auto">
              <div className="flex items-center justify-between min-w-full pb-8">
                {/* Timeline line */}
                <div className="absolute top-8 left-0 right-0 h-0.5 bg-primary/20"></div>
                
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex flex-col items-center text-center min-w-[120px] relative">
                    {/* Year dot */}
                    <div className="w-4 h-4 bg-primary rounded-full mb-4 z-10 border-4 border-white"></div>
                    
                    {/* Year */}
                    <div className="text-lg font-bold text-primary mb-2">{milestone.year}</div>
                    
                    {/* Event */}
                    <div className="text-sm text-secondary/70 max-w-[140px] leading-tight">
                      {milestone.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;