import { Question } from '@/types/assessment';

export const questions: Question[] = [
  // Psychometric Questions - Interest Scale
  {
    id: 'p1',
    text: 'How much do you enjoy creating compelling narratives that emotionally connect with audiences?',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'psychometric',
    wiscarDimension: 'interest'
  },
  {
    id: 'p2',
    text: 'I often find myself analyzing brands and their stories when I encounter advertisements or marketing content.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'psychometric',
    wiscarDimension: 'interest'
  },
  {
    id: 'p3',
    text: 'Understanding consumer psychology and what motivates people fascinates me.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'psychometric',
    wiscarDimension: 'interest'
  },

  // Psychometric Questions - Personality Compatibility
  {
    id: 'p4',
    text: 'When facing a complex problem, I prefer to explore multiple creative solutions rather than follow a single logical path.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'psychometric',
    wiscarDimension: 'cognitive'
  },
  {
    id: 'p5',
    text: 'I work well in collaborative environments and enjoy building on others\' ideas.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'psychometric',
    wiscarDimension: 'skill'
  },
  {
    id: 'p6',
    text: 'I remain calm and focused when working with ambiguous or constantly changing requirements.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'psychometric',
    wiscarDimension: 'cognitive'
  },

  // Psychometric Questions - Motivation
  {
    id: 'p7',
    text: 'What primarily motivates you in your career?',
    type: 'multiple-choice',
    options: [
      'Making a meaningful impact through storytelling',
      'Recognition and professional advancement',
      'Financial rewards and job security',
      'Creative freedom and self-expression',
      'Building relationships and collaborating with others'
    ],
    category: 'psychometric',
    wiscarDimension: 'will'
  },
  {
    id: 'p8',
    text: 'When starting a new project, I feel energized by the challenge and possibilities ahead.',
    type: 'likert',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    category: 'psychometric',
    wiscarDimension: 'will'
  },

  // Technical & Aptitude Questions
  {
    id: 't1',
    text: 'A successful brand story typically follows which narrative structure?',
    type: 'multiple-choice',
    options: [
      'Problem → Solution → Benefits',
      'Hero → Challenge → Transformation → Resolution',
      'Features → Advantages → Benefits',
      'Attention → Interest → Desire → Action',
      'Awareness → Consideration → Purchase → Loyalty'
    ],
    category: 'technical',
    wiscarDimension: 'skill'
  },
  {
    id: 't2',
    text: 'Which brand archetype would be most suitable for a startup focused on environmental sustainability?',
    type: 'multiple-choice',
    options: [
      'The Rebel - challenging the status quo',
      'The Caregiver - nurturing and protecting',
      'The Hero - overcoming challenges',
      'The Sage - seeking truth and wisdom',
      'The Creator - building something new'
    ],
    category: 'technical',
    wiscarDimension: 'skill'
  },
  {
    id: 't3',
    text: 'In brand storytelling, emotional connection is typically more important than rational benefits.',
    type: 'yes-no',
    options: ['True', 'False'],
    category: 'technical',
    wiscarDimension: 'skill'
  },

  // Scenario-based Questions
  {
    id: 's1',
    text: 'A client wants to rebrand their traditional law firm to appeal to younger entrepreneurs. They\'ve always been seen as conservative and formal. What would be your primary approach?',
    type: 'multiple-choice',
    options: [
      'Focus on their experience and track record with established businesses',
      'Develop a story about innovation and understanding modern business challenges',
      'Emphasize their stability and traditional values',
      'Create content showcasing their legal expertise and credentials',
      'Position them as disruptors in the legal industry'
    ],
    category: 'technical',
    wiscarDimension: 'real-world'
  },
  {
    id: 's2',
    text: 'You\'re tasked with creating a brand story for a new app that helps people meditate. The market is crowded with meditation apps. How do you differentiate through storytelling?',
    type: 'multiple-choice',
    options: [
      'Focus on the app\'s superior features and technology',
      'Tell stories about the founder\'s personal meditation journey',
      'Create content about the science and benefits of meditation',
      'Develop narratives around users\' transformation stories',
      'Position the app as the most affordable option in the market'
    ],
    category: 'technical',
    wiscarDimension: 'real-world'
  },

  // Learning Ability Questions
  {
    id: 'l1',
    text: 'When receiving feedback on your creative work, how do you typically respond?',
    type: 'multiple-choice',
    options: [
      'I appreciate it and actively seek ways to improve',
      'I consider it but prefer to stick to my original vision',
      'I find it difficult to accept but try to be open',
      'I use it as an opportunity to explain my creative choices',
      'I prefer to get multiple opinions before making changes'
    ],
    category: 'psychometric',
    wiscarDimension: 'ability'
  },
  {
    id: 'l2',
    text: 'How comfortable are you with learning new tools and technologies for brand storytelling?',
    type: 'likert',
    options: ['Very Uncomfortable', 'Uncomfortable', 'Neutral', 'Comfortable', 'Very Comfortable'],
    category: 'psychometric',
    wiscarDimension: 'ability'
  },

  // Real-world Alignment Questions
  {
    id: 'r1',
    text: 'Brand strategists often work with tight deadlines and changing requirements. How well do you handle this type of environment?',
    type: 'likert',
    options: ['Very Poorly', 'Poorly', 'Adequately', 'Well', 'Very Well'],
    category: 'psychometric',
    wiscarDimension: 'real-world'
  },
  {
    id: 'r2',
    text: 'You\'re presenting a brand story concept to a client and they reject it completely, asking for something "totally different." Your response would be:',
    type: 'multiple-choice',
    options: [
      'Ask detailed questions to understand their vision and start fresh',
      'Explain why your concept is strategically sound and try to convince them',
      'Propose a compromise that incorporates elements of both visions',
      'Request more time to develop multiple alternative concepts',
      'Suggest involving other stakeholders to get more perspective'
    ],
    category: 'psychometric',
    wiscarDimension: 'real-world'
  }
];