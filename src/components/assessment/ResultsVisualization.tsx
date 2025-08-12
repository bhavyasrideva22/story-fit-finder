import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AssessmentResults } from '@/types/assessment';

interface ResultsVisualizationProps {
  results: AssessmentResults;
}

export const ResultsVisualization = ({ results }: ResultsVisualizationProps) => {
  const radarData = [
    { dimension: 'Will', score: results.wiscarScores.will, fullMark: 100 },
    { dimension: 'Interest', score: results.wiscarScores.interest, fullMark: 100 },
    { dimension: 'Skill', score: results.wiscarScores.skill, fullMark: 100 },
    { dimension: 'Cognitive', score: results.wiscarScores.cognitive, fullMark: 100 },
    { dimension: 'Ability', score: results.wiscarScores.ability, fullMark: 100 },
    { dimension: 'Real-World', score: results.wiscarScores.realWorld, fullMark: 100 },
  ];

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'yes': return 'bg-green-500';
      case 'maybe': return 'bg-yellow-500';
      case 'no': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getRecommendationText = (recommendation: string) => {
    switch (recommendation) {
      case 'yes': return 'Highly Recommended';
      case 'maybe': return 'Consider with Development';
      case 'no': return 'Explore Alternatives';
      default: return 'Unknown';
    }
  };

  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-foreground mb-4">Your Assessment Results</CardTitle>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-6xl font-bold text-primary">{results.overallScore}%</div>
            <Badge 
              className={`${getRecommendationColor(results.recommendation)} text-white px-6 py-2 text-lg`}
            >
              {getRecommendationText(results.recommendation)}
            </Badge>
          </div>
        </CardHeader>
      </Card>

      <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">WISCAR Framework Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis 
                  dataKey="dimension" 
                  tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
                />
                <PolarRadiusAxis 
                  domain={[0, 100]} 
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-lg text-foreground flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Your Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {results.insights.strengths.map((strength, index) => (
                <li key={index} className="text-foreground/90 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {strength}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-lg text-foreground flex items-center">
              <span className="text-yellow-500 mr-2">⚡</span>
              Growth Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {results.insights.growthAreas.map((area, index) => (
                <li key={index} className="text-foreground/90 flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {area}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
        <CardHeader>
          <CardTitle className="text-lg text-foreground flex items-center">
            <span className="text-blue-500 mr-2">🚀</span>
            Recommended Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            {results.insights.nextSteps.map((step, index) => (
              <li key={index} className="text-foreground/90 flex items-start">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};