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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
              Our Story
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              15 Years of Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Established in 2010, CAPACITI is a leading non-profit digital talent accelerator 
              in South Africa delivering demand-driven technical training to unemployed youth.
            </p>
          </div>

          {/* Mission, Vision, Ethos */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center shadow-card border-0 bg-card hover:shadow-elegant transition-smooth">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-4 border-background"></div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                      <Card className="p-6 shadow-card border-0 bg-card">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="outline" className="text-primary border-primary/30">
                            {milestone.year}
                          </Badge>
                        </div>
                        <p className="text-foreground font-medium leading-relaxed">
                          {milestone.event}
                        </p>
                      </Card>
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