import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, BarChart3, Cloud, Headphones, MapPin, DollarSign } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Development",
      description: "Frontend & Backend development, modern frameworks, and project-based learning.",
      status: "Popular",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI / Machine Learning",
      description: "Predictive models, deep learning, and real-world applications.",
      status: "New",
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Data cleaning, visualization, Excel, SQL, Python, and insight-driven projects.",
      status: "Popular",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Computing",
      description: "AWS/Azure infrastructure, DevOps tools, and scalable application deployment.",
      status: "New",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Tech Support",
      description: "IT troubleshooting, hardware/software support, helpdesk systems, and ticketing.",
      status: "Popular",
      color: "bg-teal-500/10 text-teal-600"
    }
  ];

  const openings = [
    {
      title: "IT Demand Learnership Programmes 2025",
      location: "Cape Town",
      stipend: "ZAR 4,000–5,000",
      type: "Learnership"
    },
    {
      title: "Graduate Accelerator Programmes 2025",
      location: "Johannesburg", 
      stipend: "ZAR 4,000–5,000",
      type: "Accelerator"
    }
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
              Training Programs
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Comprehensive Tech Training
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CAPACITI offers various comprehensive, hands-on training tracks designed 
              to prepare you for in-demand tech careers.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {programs.map((program, index) => (
              <Card key={index} className="p-8 shadow-card border-0 bg-card hover:shadow-elegant transition-smooth group cursor-pointer">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${program.color}`}>
                  {program.icon}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {program.title}
                  </h3>
                  <Badge 
                    variant={program.status === "New" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {program.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {program.description}
                </p>
                <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-smooth">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>

          {/* Current Openings */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Current Opportunities
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {openings.map((opening, index) => (
                <Card key={index} className="p-8 shadow-card border-0 bg-card hover:shadow-elegant transition-smooth">
                  <div className="mb-6">
                    <Badge variant="secondary" className="mb-3">
                      {opening.type}
                    </Badge>
                    <h4 className="text-2xl font-bold text-foreground mb-3">
                      {opening.title}
                    </h4>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{opening.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span>Monthly Stipend: {opening.stipend}</span>
                    </div>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    Contact us for application details
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Note: At the moment, there are no additional job openings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;