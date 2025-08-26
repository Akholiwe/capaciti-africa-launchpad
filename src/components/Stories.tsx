import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const Stories = () => {
  const stories = [
    {
      name: "Akholiwe Mabindisa",
      role: "Cloud Associate",
      quote: "Started with a knowledge fit for a computer, left with a server full of it.",
      story: "Akholiwe quickly mastered key cloud concepts and applied them to real-world projects, paving the way for her tech career.",
      image: "AM"
    },
    {
      name: "Siphelo Nyandana", 
      role: "DevOps Engineer",
      quote: "Grateful to be part of CAPACITI's supportive family.",
      story: "Initially overwhelmed, Siphelo found sense of belonging and secured an internship at Loop—launching a flourishing career.",
      image: "SN"
    },
    {
      name: "Mavuso Wiliams",
      role: "Cloud Associate",
      quote: "Capaciti may be one of the great things to happen to me, giving me sense of supportive and a plartform to challenge myself to grow.",
      story:
        "Through dedication and consistent practice, Mavuso grew confident in his abilities and now thrives in the cloud space.",
      image: "MW",
    },
    {
      name: "Esihle Mbangeleli",
      role: "Cloud Associate",
      quote: "Every challenge is a stepping stone towards growth",
      story: "Through resilience and dedication, Esihle continues to turn opportunities into achievements, shaping a future filled with purpose and impact.",
      image: "EM",
    },   
  ];

  return (
    <section id="stories" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Real Stories, Real Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet some of our graduates who have transformed their lives and 
              are now building successful careers in technology.
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="p-8 shadow-card border-0 bg-card hover:shadow-elegant transition-smooth">
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-primary/60 mb-4" />
                  <blockquote className="text-2xl font-bold text-foreground mb-4 leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {story.story}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {story.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {story.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {story.role}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-card rounded-2xl p-12 shadow-card">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of young Africans who have transformed their lives 
                through our comprehensive tech training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 gradient-hero text-white font-semibold rounded-lg hover:shadow-glow transition-bounce transform hover:scale-105">
                  Start Your Journey
                </button>
                <button className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-smooth">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
