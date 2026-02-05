
export interface ProjectAssessment {
  score: number;
  reasoning: string;
  alignment: 'High' | 'Medium' | 'Low';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum Section {
  HERO = 'hero',
  PHILOSOPHY = 'philosophy',
  CRAFT = 'craft',
  GATEKEEPER = 'gatekeeper',
  CONTACT = 'contact'
}
