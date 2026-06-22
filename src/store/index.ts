import { create } from 'zustand';
import { Category, Scenario, CustomBot, UserProfile, ConversationHistory, Message } from '../types';

interface AppState {
  // Theme state
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;

  // Navigation state (Stack-based navigation for back buttons)
  currentScreen: string;
  navigationStack: string[];
  setScreen: (screen: string) => void;
  pushScreen: (screen: string) => void;
  popScreen: () => void;

  // User state
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;

  // Categories & Scenarios
  categories: Category[];
  scenarios: Scenario[];
  activeScenario: Scenario | null;
  setActiveScenario: (scenario: Scenario | null) => void;

  // Chat & Call state
  messages: Message[];
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  clearMessages: () => void;
  isAiTyping: boolean;
  setIsAiTyping: (typing: boolean) => void;
  callDuration: number;
  incrementCallDuration: () => void;
  resetCallDuration: () => void;

  // Custom Bots state
  customBots: CustomBot[];
  activeBot: CustomBot | null;
  setActiveBot: (bot: CustomBot | null) => void;
  addCustomBot: (name: string, personaPrompt: string, goal: string) => void;
  deleteCustomBot: (id: string) => void;

  // History state
  history: ConversationHistory[];
  addHistoryEntry: (entry: ConversationHistory) => void;

  // Active Chat Session Metadata
  activeSessionScore: number | null;
  activeSessionFeedback: string | null;
  setActiveSessionResults: (score: number, feedback: string) => void;
}

const seedCategories: Category[] = [
  { id: 'cat-daily', name: 'Daily Life', iconName: 'MessageSquare' },
  { id: 'cat-work', name: 'Work & Professional', iconName: 'Briefcase' },
  { id: 'cat-travel', name: 'Travel & Transport', iconName: 'Compass' },
  { id: 'cat-food', name: 'Food & Dining', iconName: 'Utensils' },
  { id: 'cat-rel', name: 'Relationships', iconName: 'Users' },
  { id: 'cat-emergency', name: 'Emergencies', iconName: 'AlertTriangle' },
];

const seedScenarios: Scenario[] = [
  {
    id: 'scen-coffee',
    categoryId: 'cat-daily',
    title: 'Order Filter Coffee in Indiranagar',
    description: 'Walk into a traditional cafe in Bengaluru and order a fresh filter coffee with specific preferences.',
    difficulty: 'beginner',
    isPremium: false,
    personaName: 'Ramesh',
    personaRole: 'Cafe Barista',
    goal: 'Order a strong hot filter coffee with less sugar and ask if they have local snacks like rava idli.',
    openingLine: 'Namaskara! Welcome to Indiranagar Cafe. What can I get for you today, sir?',
    durationMin: 5,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=300&auto=format&fit=crop',
    isHot: true,
  },
  {
    id: 'scen-auto',
    categoryId: 'cat-travel',
    title: 'Negotiating Auto Fare to Vidhana Soudha',
    description: 'Catch an auto-rickshaw and negotiate the fare to the majestic Vidhana Soudha.',
    difficulty: 'intermediate',
    isPremium: false,
    personaName: 'Kempegowda',
    personaRole: 'Auto Driver',
    goal: 'Persuade the driver to go by the meter or agree on a reasonable flat fare of ₹80. Ask about traffic.',
    openingLine: 'Vidhana Soudha? Ha, okay, double traffic is there now. ₹150 charge will be there, come.',
    durationMin: 7,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=300&auto=format&fit=crop',
    isHot: false,
    isNew: true,
  },
  {
    id: 'scen-interview',
    categoryId: 'cat-work',
    title: 'React Dev Interview at a Startup',
    description: 'An interview with a local tech manager. Test your speaking fluency under pressure.',
    difficulty: 'advanced',
    isPremium: true,
    personaName: 'Priya',
    personaRole: 'HR & Tech Manager',
    goal: 'Explain your React 18 expertise, explain dynamic rendering, and negotiate a ₹15 LPA package.',
    openingLine: 'Thanks for joining the call today. Let\'s start with a brief intro of your experience.',
    durationMin: 12,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    isHot: true,
  },
  {
    id: 'scen-dosa',
    categoryId: 'cat-food',
    title: 'Ordering at Vidyarthi Bhavan',
    description: 'Order the famous crispy masala dosa at Bengaluru\'s heritage dining spot.',
    difficulty: 'beginner',
    isPremium: false,
    personaName: 'Manjunath',
    personaRole: 'Vidyarthi Bhavan Server',
    goal: 'Order two butter masala dosas, one single filter coffee, and request extra ghee.',
    openingLine: 'Namaskara! Dosa ready. How many masala dosa do you want?',
    durationMin: 4,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=300&auto=format&fit=crop',
    isHot: false,
  },
  {
    id: 'scen-rent',
    categoryId: 'cat-daily',
    title: 'Renting a 2BHK in Malleshwaram',
    description: 'Discuss rent terms, security deposit, and kitchen space with a traditional landlord.',
    difficulty: 'intermediate',
    isPremium: true,
    personaName: 'Subbanna',
    personaRole: 'House Owner',
    goal: 'Rent a flat. Get the deposit down to 5 months rent instead of 10. Check if non-veg is allowed.',
    openingLine: 'Welcome! Ground floor house is very good, running Kaveri water is there. Rent is ₹25,000.',
    durationMin: 10,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: 'scen-clinic',
    categoryId: 'cat-emergency',
    title: 'Consulting at a Local Clinic',
    description: 'Explain a health emergency clearly to the doctor to get medical relief.',
    difficulty: 'intermediate',
    isPremium: false,
    personaName: 'Dr. Anil',
    personaRole: 'General Physician',
    goal: 'Describe stomach pain after eating street food yesterday, ask about dosage, and request a sick note.',
    openingLine: 'Hello, please sit down. What seems to be the problem today?',
    durationMin: 6,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop',
    isNew: true,
  }
];

const seedHistory: ConversationHistory[] = [
  {
    id: 'hist-1',
    scenarioTitle: 'Order Filter Coffee in Indiranagar',
    scenarioId: 'scen-coffee',
    date: '2026-06-21',
    score: 85,
    durationMin: 4,
    improvementSummary: 'Great vocabulary choice for ordering! Try using more Kannada connection words like "matte" (and) or "saku" (enough) to sound native. Grammar was mostly clean.',
    messages: [
      { id: '1', role: 'assistant', content: 'Namaskara! Welcome to Indiranagar Cafe. What can I get for you today, sir?', timestamp: '21:05' },
      { id: '2', role: 'user', content: 'Hello! I want one filter coffee. Please make it hot and strong.', timestamp: '21:06' },
      { id: '3', role: 'assistant', content: 'Sure, one filter coffee. Do you want sugar in it?', timestamp: '21:06' },
      { id: '4', role: 'user', content: 'Yes, but very little sugar. In Kannada we say, "swalpa sakkare", right?', timestamp: '21:07' },
      { id: '5', role: 'assistant', content: 'Excellent! "Swalpa sakkare" is correct! Anything else with that?', timestamp: '21:07' }
    ]
  },
  {
    id: 'hist-2',
    scenarioTitle: 'React Dev Interview at a Startup',
    scenarioId: 'scen-interview',
    date: '2026-06-18',
    score: 92,
    durationMin: 11,
    improvementSummary: 'Excellent communication! Your technical explanation of reconciliation and fibers was solid. In salary negotiation, you hold your ground nicely.',
    messages: [
      { id: '1', role: 'assistant', content: 'Thanks for joining the call today. Let\'s start with a brief intro of your experience.', timestamp: '14:02' },
      { id: '2', role: 'user', content: 'Hi, I am a frontend developer with 4 years of experience building React applications.', timestamp: '14:03' }
    ]
  }
];

const getStoredTheme = (): 'light' | 'dark' => {
  const saved = localStorage.getItem('samvad-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return 'light';
};

export const useAppStore = create<AppState>((set, get) => ({
  // Theme state
  theme: getStoredTheme(),
  setTheme: (theme) => {
    localStorage.setItem('samvad-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    set({ theme });
  },
  toggleTheme: () => {
    const next = get().theme === 'light' ? 'dark' : 'light';
    get().setTheme(next);
  },

  // Navigation state
  currentScreen: 'Splash',
  navigationStack: ['Splash'],
  setScreen: (screen) => {
    set({ currentScreen: screen, navigationStack: [screen] });
  },
  pushScreen: (screen) => {
    set((state) => ({
      currentScreen: screen,
      navigationStack: [...state.navigationStack, screen]
    }));
  },
  popScreen: () => {
    const stack = get().navigationStack;
    if (stack.length > 1) {
      const nextStack = [...stack];
      nextStack.pop(); // Remove current
      const prev = nextStack[nextStack.length - 1];
      set({
        currentScreen: prev,
        navigationStack: nextStack
      });
    }
  },

  // User Profile
  profile: {
    displayName: 'Harsha',
    nativeLanguage: 'en',
    learningLanguage: 'kn',
    subscriptionTier: 'free',
    streakCount: 12,
  },
  updateProfile: (updates) => {
    set((state) => ({
      profile: { ...state.profile, ...updates }
    }));
  },

  // Categories & Scenarios
  categories: seedCategories,
  scenarios: seedScenarios,
  activeScenario: null,
  setActiveScenario: (scenario) => set({ activeScenario: scenario }),

  // Chat conversation
  messages: [],
  addMessage: (msg) => {
    const newMsg: Message = {
      id: Math.random().toString(36).substring(7),
      ...msg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    set((state) => ({
      messages: [...state.messages, newMsg]
    }));
  },
  clearMessages: () => set({ messages: [] }),
  isAiTyping: false,
  setIsAiTyping: (typing) => set({ isAiTyping: typing }),
  callDuration: 0,
  incrementCallDuration: () => set((state) => ({ callDuration: state.callDuration + 1 })),
  resetCallDuration: () => set({ callDuration: 0 }),

  // Custom Bots
  customBots: [
    {
      id: 'bot-1',
      name: 'Indiranagar Auto Stand',
      personaPrompt: 'You are an auto driver waiting at Indiranagar Metro Station. You want to charge high fare. Only speak in broken English and Kannada.',
      goal: 'Bargain to go to Koramangala for ₹200. Persuade the user.',
      createdAt: '2026-06-20'
    }
  ],
  activeBot: null,
  setActiveBot: (bot) => set({ activeBot: bot }),
  addCustomBot: (name, personaPrompt, goal) => {
    const newBot: CustomBot = {
      id: 'bot-' + Math.random().toString(36).substring(7),
      name,
      personaPrompt,
      goal,
      createdAt: new Date().toISOString().split('T')[0]
    };
    set((state) => ({
      customBots: [...state.customBots, newBot]
    }));
  },
  deleteCustomBot: (id) => {
    set((state) => ({
      customBots: state.customBots.filter(b => b.id !== id)
    }));
  },

  // History
  history: seedHistory,
  addHistoryEntry: (entry) => {
    set((state) => ({
      history: [entry, ...state.history],
      profile: {
        ...state.profile,
        // Increment streak if last session wasn't today (mock behavior)
        streakCount: state.profile.streakCount + 1
      }
    }));
  },

  // Session score
  activeSessionScore: null,
  activeSessionFeedback: null,
  setActiveSessionResults: (score, feedback) => {
    set({ activeSessionScore: score, activeSessionFeedback: feedback });
  }
}));
