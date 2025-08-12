import { useState } from 'react';
import { QuestionCard } from '@/components/assessment/QuestionCard';
import { ResultsVisualization } from '@/components/assessment/ResultsVisualization';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAssessment } from '@/hooks/useAssessment';
import { AssessmentResults } from '@/types/assessment';

const Assessment = () => {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<AssessmentResults | null>(null);

  const {
    currentQuestion,
    currentAnswer,
    progress,
    updateAnswer,
    goToNext,
    goToPrevious,
    canGoNext,
    canGoPrevious,
    isComplete,
    calculateResults
  } = useAssessment();

  const handleAnswerSelect = (answer: string | number) => {
    if (currentQuestion) {
      updateAnswer(currentQuestion.id, answer);
    }
  };

  const handleNext = () => {
    if (isComplete) {
      const calculatedResults = calculateResults();
      setResults(calculatedResults);
      setShowResults(true);
    } else {
      goToNext();
    }
  };

  const handleStartOver = () => {
    window.location.href = '/';
  };

  if (showResults && results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Brand & Storytelling Strategist Assessment Results
              </h1>
              <p className="text-muted-foreground">
                Your comprehensive career readiness analysis
              </p>
            </div>
            
            <ResultsVisualization results={results} />
            
            <div className="text-center mt-8">
              <Button 
                onClick={handleStartOver}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow px-8 py-3"
              >
                Take Assessment Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Brand & Storytelling Strategist Assessment
            </h1>
            <p className="text-muted-foreground mb-6">
              Discover if brand strategy is the right career path for you
            </p>
            
            <ProgressBar 
              current={progress.currentQuestion} 
              total={progress.totalQuestions}
              className="max-w-md mx-auto"
            />
            
            <div className="text-sm text-muted-foreground mt-2">
              Estimated time remaining: {Math.round(progress.estimatedTimeRemaining)} minutes
            </div>
          </div>

          {currentQuestion ? (
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={currentAnswer}
              onAnswerSelect={handleAnswerSelect}
              onNext={handleNext}
              onPrevious={goToPrevious}
              canGoNext={currentAnswer !== null}
              canGoPrevious={canGoPrevious}
            />
          ) : (
            <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-center text-foreground">
                  Assessment Complete!
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  onClick={handleNext}
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-glow px-8 py-3"
                >
                  View Your Results
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;