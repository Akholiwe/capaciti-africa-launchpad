import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Chanel Oldfield",
      role: "Head of CAPACITI",
      initials: "CO"
    },
    {
      name: "Kelly Maroon", 
      role: "Head of Career Education",
      initials: "KM"
    },
    {
      name: "Nasheeta Du Toit",
      role: "Head of Talent",
      initials: "ND"
    },
    {
      name: "Chesarae K Pillay",
      role: "Partnership Lead",
      initials: "CP"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
              Leadership Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Meet Our Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced leadership team is dedicated to empowering 
              Africa's youth through innovative education and career development.
            </p>
          </div>

          {/* Leadership Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="p-8 text-center shadow-card border-0 bg-card hover:shadow-elegant transition-smooth group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  {leader.initials}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {leader.name}
                </h3>
                <p className="text-muted-foreground">
                  {leader.role}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;