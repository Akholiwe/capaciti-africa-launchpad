import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Chanel Oldfield",
      role: "Head of CAPACITI",
      initials: "CO",
      image: "/lovable-uploads/723dce67-142e-4e3e-abca-85fbc9175ce7.png"
    },
    {
      name: "Kelly Maroon", 
      role: "Head of Career Education",
      initials: "KM",
      image: "/lovable-uploads/e4614412-60ff-48d2-9df1-bfd188510ce9.png"
    },
    {
      name: "Nasheeta Du Toit",
      role: "Head of Talent",
      initials: "ND",
      image: "/lovable-uploads/89598ba6-39b7-4156-acca-497dc8a04405.png"
    },
    {
      name: "Chesarae K Pillay",
      role: "Partnership Lead",
      initials: "CP",
      image: "/lovable-uploads/6798e105-3bb3-4e18-866a-ddac10e61d15.png"
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
                {leader.image ? (
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-smooth">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-3xl mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    {leader.initials}
                  </div>
                )}
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