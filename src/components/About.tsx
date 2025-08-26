import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, Target, Heart, Calendar, Award, Briefcase, Globe } from "lucide-react";

const About = () => {
  const milestones = [
    { 
      year: "2010", 
      title: "Foundation & Early Beginnings",
      event: "Organization founded under UVU Africa with a vision to democratize tech education across the continent",
      icon: <Globe className="w-5 h-5" />,
      category: "Foundation",
      details: "Established as part of UVU Africa Group to address the digital skills gap in South Africa"
    },
    { 
      year: "2011", 
      title: "First Training Programs",
      event: "Successfully trained hundreds of students in Web Development, establishing our core curriculum",
      icon: <Users className="w-5 h-5" />,
      category: "Education",
      details: "Launched comprehensive web development bootcamps with focus on practical, industry-relevant skills"
    },
    { 
      year: "2015", 
      title: "Program Expansion",
      event: "Launched digital career accelerators & entrepreneurship incubation programs",
      icon: <Briefcase className="w-5 h-5" />,
      category: "Growth",
      details: "Expanded beyond basic training to include career development and startup incubation"
    },
    { 
      year: "2016", 
      title: "Major Funding Milestone",
      event: "Secured R85 million (~$5.7M) Jobs Fund Grant for 3,000 ICT Jobs",
      icon: <Award className="w-5 h-5" />,
      category: "Funding",
      details: "Landmark achievement enabling massive scale-up of training programs and job placement initiatives"
    },
    { 
      year: "2018", 
      title: "#LoanFree Initiative",
      event: "Launched #LoanFree campaign — canceled student loans for 2018–2020 cohorts",
      icon: <Heart className="w-5 h-5" />,
      category: "Social Impact",
      details: "Revolutionary approach to education accessibility, removing financial barriers for deserving students"
    },
    { 
      year: "2023", 
      title: "Global Partnerships",
      event: "Partnered with Ardagh Group for global excellence in Cape Town project",
      icon: <Globe className="w-5 h-5" />,
      category: "Partnership",
      details: "International collaboration bringing global standards and opportunities to local talent"
    },
    { 
      year: "2024", 
      title: "Geographic Expansion",
      event: "Launched first Tech Accelerator in Gqeberha via Jobs Fund support",
      icon: <Briefcase className="w-5 h-5" />,
      category: "Expansion",
      details: "Extended reach beyond major metros to serve underrepresented regions"
    },
    { 
      year: "2025", 
      title: "Milestone Achievement",
      event: "Achieved training of 6,500+ youth with a 90% job placement rate",
      icon: <Award className="w-5 h-5" />,
      category: "Impact",
      details: "Reached significant scale while maintaining exceptional outcomes and industry-leading placement rates"
    },
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
    <section id="about" className="py-16 lg:py-24 font-poppins bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-spaceKadet mb-8">
              About Capaciti
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
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
                <div className="w-16 h-16 bg-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-pink">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-purple mb-3">{value.title}</h3>
                <p className="text-salmon/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Interactive Horizontal Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-purple">
              15+ Years of Transformative Impact
            </h3>
            
            {/* Horizontal Timeline */}
            <div className="relative max-w-7xl mx-auto overflow-x-auto pb-8">
              <div className="relative min-w-max px-8">
                {/* Timeline line */}
                <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-pink via-purple to-salmon"></div>
              
                {/* Timeline items */}
                <div className="flex items-start gap-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex flex-col items-center group min-w-[320px]">
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-purple rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:shadow-glow mb-6">
                        <div className="text-white">{milestone.icon}</div>
                        <div className="absolute inset-0 w-16 h-16 bg-purple/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <Card className="w-full p-6 shadow-card border-0 bg-card hover:shadow-elegant transition-all duration-300 group-hover:scale-[1.02] min-h-[280px]">
                        <div className="flex flex-col gap-3 mb-4">
                          <Badge variant="secondary" className="text-lg font-bold group-hover:bg-salmon group-hover:text-white transition-all duration-300 w-fit">
                            {milestone.year}
                          </Badge>
                          <Badge variant="outline" className="text-xs w-fit">
                            {milestone.category}
                          </Badge>
                        </div>
                        
                        <h4 className="text-xl font-bold text-spaceKadet mb-3 group-hover:text-pink transition-colors duration-300 leading-tight">
                          {milestone.title}
                        </h4>
                        <p className="text-base text-muted-foreground leading-relaxed mb-3">
                          {milestone.event}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.details}
                        </p>
                      </Card>
                      
                      {index < milestones.length - 1 && (
                        <div className="absolute top-8 -right-4 w-8 h-0.5 bg-muted z-0"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Scroll indicator */}
              <div className="flex justify-center mt-4">
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>←</span>
                  <span>Scroll horizontally to explore our journey</span>
                  <span>→</span>
                </div>
              </div>
            </div>
            
            {/* Timeline Summary */}
            <div className="mt-16 text-center">
              <Card className="p-8 shadow-card border-0 bg-gradient-to-r from-pink/5 via-purple/5 to-salmon/5">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="w-6 h-6 text-purple" />
                  <Badge variant="default" className="bg-pink text-white shadow-lg text-base px-4 py-2">
                    2010 - 2025: 15 Years of Excellence
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From a small training organization to Africa's leading digital talent accelerator, 
                  our journey reflects unwavering commitment to empowering youth through technology education.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
