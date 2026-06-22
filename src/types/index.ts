export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Scenario {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  isPremium: boolean;
  personaName: string;
  personaRole: string;
  goal: string;
  openingLine: string;
  durationMin: number;
  image?: string;
  isHot?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
}

export interface CustomBot {
  id: string;
  name: string;
  personaPrompt: string;
  goal: string;
  createdAt: string;
}

export interface UserProfile {
  displayName: string;
  nativeLanguage: 'kn' | 'en';
  learningLanguage: 'kn' | 'en';
  subscriptionTier: 'free' | 'premium';
  streakCount: number;
  selectedGoal?: string;
  selectedLevel?: string;
  selectedTime?: string;
}

export interface ConversationHistory {
  id: string;
  scenarioTitle: string;
  scenarioId?: string;
  botId?: string;
  date: string;
  score: number;
  durationMin: number;
  improvementSummary: string;
  messages: Message[];
}
