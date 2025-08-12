import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/types/assessment";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | number | null;
  onAnswerSelect: (answer: string | number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

export const QuestionCard = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious
}: QuestionCardProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-card to-card/80 border-border/50 shadow-elegant">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-xl text-foreground leading-relaxed">
          {question.text}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-3">
          {question.options?.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === (question.type === 'likert' ? index : option) ? "default" : "outline"}
              className={cn(
                "w-full justify-start text-left h-auto py-4 px-6 transition-all duration-300",
                selectedAnswer === (question.type === 'likert' ? index : option)
                  ? "bg-gradient-to-r from-primary to-accent shadow-glow"
                  : "hover:bg-secondary/50 hover:border-primary/30"
              )}
              onClick={() => onAnswerSelect(question.type === 'likert' ? index : option)}
            >
              <span className="text-sm font-medium">{option}</span>
            </Button>
          ))}
        </div>

        <div className="flex justify-between pt-6 border-t border-border/30">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="px-8"
          >
            Previous
          </Button>
          
          <Button
            onClick={onNext}
            disabled={!canGoNext}
            className="px-8 bg-gradient-to-r from-primary to-accent hover:shadow-glow"
          >
            {canGoNext ? 'Next' : 'Select an answer'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};