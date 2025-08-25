import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Award, Building } from "lucide-react";
import awsLogo from "@/assets/logos/aws-logo.png";
import microsoftLogo from "@/assets/logos/microsoft-logo.png";
import ibmLogo from "@/assets/logos/ibm-logo.png";
import absaLogo from "@/assets/logos/absa-logo.png";
import naspersLogo from "@/assets/logos/naspers-logo.png";
import media24Logo from "@/assets/logos/media24-logo.png";
import investecLogo from "@/assets/logos/investec-logo.png";
import courseraLogo from "@/assets/logos/coursera-logo.png";

const Impact = () => {
  const metrics = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "1,200+",
      label: "Lives Transformed",
      description: "Through comprehensive training programs"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "87%",
      label: "Job Placement Rate",
      description: "Within 6 months post-training"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "150%",
      label: "Average Salary Increase",
      description: "For program graduates"
    },
    {
      icon: <Building className="w-8 h-8" />,
      number: "15+",
      label: "Industry Partners",
      description: "Supporting our mission"
    }
  ];

  const partners = [
    { name: "Absa", logo: absaLogo },
    { name: "Naspers", logo: naspersLogo },
    { name: "Media24", logo: media24Logo },
    { name: "AWS", logo: awsLogo },
    { name: "Investec", logo: investecLogo },
    { name: "SAYouth", logo: null },
    { name: "YES4Youth", logo: null },
    { name: "Micseta", logo: null },
    { name: "Microsoft", logo: microsoftLogo },
    { name: "Ardagh", logo: null },
    { name: "IBM", logo: ibmLogo },
    { name: "Coursera", logo: courseraLogo },
    { name: "EXL", logo: null }
  ];

  return (
    <section id="impact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
              Our Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Transforming Lives Through Tech
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our results speak for themselves. See how we're making a difference 
              in the lives of young Africans and their communities.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-8 text-center shadow-card border-0 bg-card hover:shadow-elegant transition-smooth">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 text-primary">
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {metric.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {metric.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Partners Section */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Trusted by Leading Organizations
            </h3>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                {partners.map((partner, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth h-20"
                  >
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-h-12 max-w-full object-contain filter brightness-75 hover:brightness-100 transition-smooth"
                      />
                    ) : (
                      <div className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-smooth">
                        {partner.name}
                      </div>
                    )}
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

export default Impact;