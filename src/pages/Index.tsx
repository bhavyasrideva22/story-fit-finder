import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-assessment.jpg";

const Index = () => {
  const navigate = useNavigate();

  const startAssessment = () => {
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2">
                  Career Assessment Tool
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Should I Become a{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Brand & Storytelling Strategist?
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A comprehensive psychometric assessment to evaluate your readiness and fit for the exciting world of brand strategy and storytelling.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={startAssessment}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-glow text-lg px-8 py-4 h-auto"
                >
                  Start Assessment
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 h-auto border-primary/30 hover:bg-primary/5"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage}
                alt="Brand storytelling strategy visualization"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Discover Section */}
      <section className="py-20 bg-gradient-to-r from-secondary/30 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What You'll Discover
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our scientifically-backed assessment analyzes your personality, skills, and career readiness using the proven WISCAR framework.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <span className="text-primary mr-3 text-2xl">🧠</span>
                  Psychological Fit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Evaluate your personality traits, interests, and motivations against successful brand strategists.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <span className="text-accent mr-3 text-2xl">⚡</span>
                  Technical Readiness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Assess your understanding of brand fundamentals, storytelling frameworks, and strategic thinking.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <span className="text-primary-glow mr-3 text-2xl">🎯</span>
                  Career Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get personalized recommendations, learning paths, and next steps for your career journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                The WISCAR Framework
              </h2>
              <p className="text-xl text-muted-foreground">
                Our assessment evaluates six critical dimensions for career success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  letter: 'W', 
                  title: 'Will', 
                  description: 'Your motivation and persistence for brand storytelling work',
                  color: 'text-red-400'
                },
                { 
                  letter: 'I', 
                  title: 'Interest', 
                  description: 'Your genuine passion for branding and narrative creation',
                  color: 'text-orange-400'
                },
                { 
                  letter: 'S', 
                  title: 'Skill', 
                  description: 'Your current abilities in brand strategy and storytelling',
                  color: 'text-yellow-400'
                },
                { 
                  letter: 'C', 
                  title: 'Cognitive Readiness', 
                  description: 'Your analytical and creative thinking capabilities',
                  color: 'text-green-400'
                },
                { 
                  letter: 'A', 
                  title: 'Ability to Learn', 
                  description: 'Your openness to feedback and learning agility',
                  color: 'text-blue-400'
                },
                { 
                  letter: 'R', 
                  title: 'Real-World Alignment', 
                  description: 'How well you match the day-to-day demands of the role',
                  color: 'text-purple-400'
                }
              ].map((dimension, index) => (
                <Card key={index} className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`text-4xl font-bold ${dimension.color} mr-4`}>
                        {dimension.letter}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {dimension.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {dimension.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Discover Your Potential?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take our comprehensive 15-20 minute assessment and get personalized insights into your brand strategy career readiness.
          </p>
          <Button 
            onClick={startAssessment}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:shadow-glow text-lg px-12 py-4 h-auto"
          >
            Start Your Assessment Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
