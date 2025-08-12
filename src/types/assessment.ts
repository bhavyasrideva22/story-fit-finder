export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'likert' | 'yes-no' | 'scenario';
  options?: string[];
  category: 'psychometric' | 'technical' | 'wiscar';
  wiscarDimension?: 'will' | 'interest' | 'skill' | 'cognitive' | 'ability' | 'real-world';
}

export interface Answer {
  questionId: string;
  value: string | number;
}

export interface AssessmentResults {
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorld: number;
  };
  overallScore: number;
  recommendation: 'yes' | 'no' | 'maybe';
  insights: {
    strengths: string[];
    growthAreas: string[];
    nextSteps: string[];
  };
}

export interface UserProgress {
  currentQuestion: number;
  totalQuestions: number;
  answers: Answer[];
  startTime: Date;
  estimatedTimeRemaining: number;
}