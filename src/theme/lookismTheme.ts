// Theme constants and color palette

export const LOOKISM_COLORS = {
  // Backgrounds
  bgDark: '#111111',
  bg: '#18181B',
  bgLight: '#1F2933',
  bgPanel: '#27272A',
  
  // Text
  textMain: '#F9FAFB',
  textMuted: '#9CA3AF',
  textDim: '#6B7280',
  
  // Neon Accents
  accentBlue: '#3F4E72',
  accentBlueLight: '#5A6B8C',
  accentPink: '#FF3478',
  accentCyan: '#5CE1E6',
  accentYellow: '#FACC15',
  accentPurple: '#A855F7',
  
  // Borders
  borderStrong: '#E5E7EB',
  borderMuted: '#4B5563',
  borderDark: '#374151',
} as const;

export const LOOKISM_SECTIONS = {
  HERO: { id: 'home', episode: 'Episode 1', title: 'Introduction' },
  ABOUT: { id: 'about', episode: 'Episode 2', title: 'Backstory' },
  EXPERIENCE: { id: 'experience', episode: 'Episode 3', title: 'Work in Progress' },
  SKILLS: { id: 'skills', episode: 'Episode 4', title: 'Skill Tree' },
  EDUCATION: { id: 'education', episode: 'Episode 5', title: 'Training Arc' },
  AWARDS: { id: 'awards', episode: 'Episode 6', title: 'Achievements' },
  CONTACT: { id: 'contact', episode: 'Author\'s Notes', title: 'Contact' },
} as const;

export const SFX_LABELS = {
  WHOOSH: 'WHOOSH',
  CLICK: 'CLICK',
  LEVEL_UP: 'LEVEL UP',
  NEXT: 'NEXT',
  BRRR: 'BRRR',
  IMPACT: 'IMPACT!',
  FOCUS: 'FOCUS',
  POWER: 'POWER',
} as const;

export type SFXLabel = typeof SFX_LABELS[keyof typeof SFX_LABELS];

