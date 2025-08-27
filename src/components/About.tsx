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
            
            {/* Enhanced Horizontal Timeline */}
            <div className="relative">
              {/* Timeline Container with Horizontal Scroll */}
              <div className="overflow-x-auto pb-8">
                <div className="relative flex items-start min-w-max px-8 py-8">
                  {/* Horizontal Timeline Line */}
                  <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-pink via-purple to-salmon rounded-full shadow-sm"></div>
                  
                  {/* Timeline Items */}
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex flex-col items-center group" style={{ minWidth: '320px', marginRight: index < milestones.length - 1 ? '2rem' : '0' }}>
                      {/* Timeline Dot */}
                      <div className="relative z-20 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple to-pink rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:shadow-glow mb-8">
                        <div className="text-white text-lg">{milestone.icon}</div>
                        <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-purple/30 to-pink/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Milestone Card */}
                      <Card className="w-full p-6 shadow-card border-0 bg-card hover:shadow-elegant transition-all duration-300 group-hover:scale-[1.02] min-h-[320px] relative">
                        {/* Year Badge - Prominent Display */}
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="secondary" className="text-2xl font-bold px-4 py-2 bg-gradient-to-r from-purple to-pink text-white shadow-lg">
                            {milestone.year}
                          </Badge>
                          <Badge variant="outline" className="text-xs font-medium border-purple/30 text-purple">
                            {milestone.category}
                          </Badge>
                        </div>
                        
                        {/* Title */}
                        <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple transition-colors duration-300 leading-tight">
                          {milestone.title}
                        </h4>
                        
                        {/* Main Event Description */}
                        <p className="text-base text-muted-foreground leading-relaxed mb-4 font-medium">
                          {milestone.event}
                        </p>
                        
                        {/* Additional Details */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.details}
                        </p>
                        
                        {/* Decorative Element */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Card>
                      
                      {/* Connection Line to Next Item */}
                      {index < milestones.length - 1 && (
                        <div className="absolute top-16 -right-4 w-8 h-1 bg-gradient-to-r from-purple to-pink z-10 rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Scroll Indicator */}
              <div className="flex justify-center mt-6">
                <div className="bg-card rounded-full px-6 py-3 shadow-card border border-border">
                  <div className="text-sm text-muted-foreground flex items-center gap-3">
                    <span className="text-purple font-bold">←</span>
                    <span className="font-medium">Scroll horizontally to explore our 15-year journey</span>
                    <span className="text-purple font-bold">→</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timeline Summary */}
            <div className="mt-16 text-center">
              <Card className="p-8 shadow-elegant border-0 bg-gradient-to-r from-pink/10 via-purple/10 to-salmon/10 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple via-transparent to-pink"></div>
                </div>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="w-6 h-6 text-purple" />
                  <Badge variant="default" className="bg-gradient-to-r from-purple to-pink text-white shadow-lg text-lg px-6 py-3 font-bold">
                    2010 - 2025: 15 Years of Excellence
                  </Badge>
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  From Vision to Impact
                </h4>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  From a small training organization to Africa's leading digital talent accelerator, 
                  our journey reflects unwavering commitment to empowering youth through technology education. 
                  Each milestone represents lives transformed, careers launched, and communities strengthened.
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
