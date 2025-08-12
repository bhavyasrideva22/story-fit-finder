import { useState, useCallback, useMemo } from 'react';
import { Answer, AssessmentResults, UserProgress } from '@/types/assessment';
import { questions } from '@/data/questions';

export const useAssessment = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [startTime] = useState(new Date());

  const progress: UserProgress = useMemo(() => ({
    currentQuestion: currentQuestionIndex + 1,
    totalQuestions: questions.length,
    answers,
    startTime,
    estimatedTimeRemaining: Math.max(0, (questions.length - currentQuestionIndex - 1) * 1.5) // 1.5 min per question
  }), [currentQuestionIndex, answers, startTime]);

  const currentQuestion = questions[currentQuestionIndex];

  const updateAnswer = useCallback((questionId: string, value: string | number) => {
    setAnswers(prev => {
      const existing = prev.find(a => a.questionId === questionId);
      if (existing) {
        return prev.map(a => a.questionId === questionId ? { ...a, value } : a);
      }
      return [...prev, { questionId, value }];
    });
  }, []);

  const goToNext = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [currentQuestionIndex]);

  const goToPrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const calculateResults = useCallback((): AssessmentResults => {
    // Calculate WISCAR scores
    const wiscarScores = {
      will: 0,
      interest: 0,
      skill: 0,
      cognitive: 0,
      ability: 0,
      realWorld: 0
    };

    let psychometricTotal = 0;
    let technicalTotal = 0;
    let psychometricCount = 0;
    let technicalCount = 0;

    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      if (!question) return;

      let score = 0;
      if (typeof answer.value === 'number') {
        score = ((answer.value / (question.options!.length - 1)) * 100);
      } else if (question.type === 'yes-no') {
        score = answer.value === 'True' ? 100 : 0;
      } else {
        // For multiple choice, assign scores based on the "correctness" of the answer
        const correctAnswers: { [key: string]: number } = {
          't1': answer.value === 'Hero → Challenge → Transformation → Resolution' ? 100 : 50,
          't2': answer.value === 'The Rebel - challenging the status quo' ? 100 : 70,
          't3': answer.value === 'True' ? 100 : 0,
          's1': answer.value === 'Develop a story about innovation and understanding modern business challenges' ? 100 : 60,
          's2': answer.value === 'Develop narratives around users\' transformation stories' ? 100 : 70,
          'l1': answer.value === 'I appreciate it and actively seek ways to improve' ? 100 : 70,
          'r2': answer.value === 'Ask detailed questions to understand their vision and start fresh' ? 100 : 80,
          'p7': answer.value === 'Making a meaningful impact through storytelling' ? 100 : 70
        };
        score = correctAnswers[question.id] || 60;
      }

      if (question.category === 'psychometric') {
        psychometricTotal += score;
        psychometricCount++;
      } else if (question.category === 'technical') {
        technicalTotal += score;
        technicalCount++;
      }

      // Add to WISCAR dimension
      if (question.wiscarDimension) {
        wiscarScores[question.wiscarDimension] += score;
      }
    });

    // Normalize WISCAR scores
    const wiscarCounts = {
      will: questions.filter(q => q.wiscarDimension === 'will').length,
      interest: questions.filter(q => q.wiscarDimension === 'interest').length,
      skill: questions.filter(q => q.wiscarDimension === 'skill').length,
      cognitive: questions.filter(q => q.wiscarDimension === 'cognitive').length,
      ability: questions.filter(q => q.wiscarDimension === 'ability').length,
      realWorld: questions.filter(q => q.wiscarDimension === 'real-world').length
    };

    Object.keys(wiscarScores).forEach(key => {
      const k = key as keyof typeof wiscarScores;
      if (wiscarCounts[k] > 0) {
        wiscarScores[k] = wiscarScores[k] / wiscarCounts[k];
      }
    });

    const psychometricScore = psychometricCount > 0 ? psychometricTotal / psychometricCount : 0;
    const technicalScore = technicalCount > 0 ? technicalTotal / technicalCount : 0;
    const overallScore = Math.round((psychometricScore + technicalScore) / 2);

    // Determine recommendation
    let recommendation: 'yes' | 'no' | 'maybe' = 'maybe';
    if (overallScore >= 75 && Object.values(wiscarScores).every(score => score >= 65)) {
      recommendation = 'yes';
    } else if (overallScore < 50 || Object.values(wiscarScores).some(score => score < 40)) {
      recommendation = 'no';
    }

    // Generate insights
    const strengths: string[] = [];
    const growthAreas: string[] = [];
    const nextSteps: string[] = [];

    if (wiscarScores.interest >= 80) strengths.push("Strong passion for brand storytelling and narrative creation");
    if (wiscarScores.will >= 80) strengths.push("High motivation and persistence for strategic brand work");
    if (wiscarScores.skill >= 75) strengths.push("Good foundational skills in brand strategy concepts");
    if (wiscarScores.cognitive >= 75) strengths.push("Excellent balance of creative and analytical thinking");

    if (wiscarScores.skill < 65) growthAreas.push("Develop deeper technical knowledge of brand strategy frameworks");
    if (wiscarScores.realWorld < 65) growthAreas.push("Gain more hands-on experience with client scenarios");
    if (wiscarScores.ability < 70) growthAreas.push("Enhance learning agility and feedback receptiveness");

    if (recommendation === 'yes') {
      nextSteps.push("Begin building a portfolio of brand story projects");
      nextSteps.push("Seek mentorship or internships in brand strategy roles");
      nextSteps.push("Take advanced courses in consumer psychology and narrative design");
    } else if (recommendation === 'maybe') {
      nextSteps.push("Focus on developing your identified growth areas");
      nextSteps.push("Gain practical experience through volunteering or small projects");
      nextSteps.push("Reassess your interest and skills after 6 months of focused development");
    } else {
      nextSteps.push("Consider related fields like content marketing or UX writing");
      nextSteps.push("Explore other creative strategy roles that align better with your strengths");
      nextSteps.push("Build foundational skills before reconsidering brand strategy");
    }

    return {
      psychometricScore: Math.round(psychometricScore),
      technicalScore: Math.round(technicalScore),
      wiscarScores: {
        will: Math.round(wiscarScores.will),
        interest: Math.round(wiscarScores.interest),
        skill: Math.round(wiscarScores.skill),
        cognitive: Math.round(wiscarScores.cognitive),
        ability: Math.round(wiscarScores.ability),
        realWorld: Math.round(wiscarScores.realWorld)
      },
      overallScore,
      recommendation,
      insights: {
        strengths,
        growthAreas,
        nextSteps
      }
    };
  }, [answers]);

  const currentAnswer = answers.find(a => a.questionId === currentQuestion?.id);
  const canGoNext = currentAnswer !== undefined && currentQuestionIndex < questions.length - 1;
  const canGoPrevious = currentQuestionIndex > 0;
  const isComplete = currentQuestionIndex === questions.length - 1 && currentAnswer !== undefined;

  return {
    currentQuestion,
    currentAnswer: currentAnswer?.value || null,
    progress,
    updateAnswer,
    goToNext,
    goToPrevious,
    canGoNext,
    canGoPrevious,
    isComplete,
    calculateResults
  };
};