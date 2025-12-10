# Calvin Jarrod Danker - Lookism-Style Portfolio

A dark, gritty personal portfolio website inspired by the Korean webtoon **Lookism**. Built with React, TypeScript, Vite, and Tailwind CSS for deployment to AWS S3 + CloudFront.

## 🎭 Lookism-Inspired Design

This portfolio captures the dramatic, urban aesthetic of the webtoon Lookism:

- **Dark, Noir Atmosphere**: Deep blacks, urban grays, dramatic shadows
- **Bold Line Art**: Sharp borders, high-contrast panels
- **Neon Accents**: Cyan, pink, and yellow highlights for impact
- **Comic Panel Structure**: Each section is a stacked webtoon panel
- **SFX Elements**: Korean manhwa-style sound effects (WHOOSH, CLICK, LEVEL UP)
- **Strong Typography**: Bold, uppercase headings with impact
- **Dramatic Shadows**: Heavy shadows and spotlight effects

## ✨ Features

- **7 Episodes**: Portfolio structured like webtoon chapters
- **Comic Panels**: Lookism-style panels with corner accents
- **SFX Tags**: Animated sound effect badges
- **Neon Text Effects**: Glowing accent text
- **Speed Lines**: Dynamic dividers between sections
- **Dark Theme**: Complete dark mode design
- **Fully Responsive**: Optimized for all devices
- **Type-Safe**: Built with TypeScript
- **Production Ready**: Static build for AWS hosting

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Custom Lookism theme
- **PostCSS** - CSS processing

## 📋 Sections (Episodes)

1. **Episode 1: Introduction** - Hero section with stats
2. **Episode 2: Backstory** - About me
3. **Episode 3: Work in Progress** - Experience
4. **Episode 4: Skill Tree** - Technical skills
5. **Episode 5: Training Arc** - Education
6. **Episode 6: Achievements** - Awards
7. **Author's Notes** - Contact information

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server
npm run dev
```

Visit `http://localhost:5173`

### Production Build

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── theme/
│   │   └── lookismTheme.ts      # Color palette and constants
│   ├── components/
│   │   ├── NavbarLookism.tsx    # Episode-style navigation
│   │   ├── ComicPanel.tsx       # Lookism panel wrapper
│   │   ├── SFXTag.tsx           # Sound effect badges
│   │   ├── SectionTitleLookism.tsx  # Episode titles
│   │   ├── NeonAccentText.tsx   # Glowing text component
│   │   ├── DynamicDivider.tsx   # Speed line dividers
│   │   └── FooterLookism.tsx    # Dark footer
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── AwardsSection.tsx
│   │   └── ContactSection.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # Lookism custom styles
├── tailwind.config.js          # Lookism color palette
├── index.html
├── package.json
└── README.md
```

## 🎨 Lookism Theme

### Color Palette

```javascript
// Backgrounds
'lookism-bg-dark': '#111111'
'lookism-bg': '#18181B'
'lookism-bg-light': '#1F2933'

// Neon Accents
'lookism-accent-cyan': '#5CE1E6'
'lookism-accent-pink': '#FF3478'
'lookism-accent-yellow': '#FACC15'

// Text
'lookism-text-main': '#F9FAFB'
'lookism-text-muted': '#9CA3AF'
```

### Custom Components

**ComicPanel**
```tsx
<ComicPanel 
  title="Section Title"
  sfx={SFX_LABELS.WHOOSH}
  glowColor="cyan"
>
  {/* Content */}
</ComicPanel>
```

**SFXTag**
```tsx
<SFXTag label={SFX_LABELS.CLICK} variant="pink" size="md" />
```

**NeonAccentText**
```tsx
<NeonAccentText color="cyan">Highlighted Text</NeonAccentText>
```

**DynamicDivider**
```tsx
<DynamicDivider variant="speed" />  // Speed lines
<DynamicDivider variant="impact" /> // Impact dots
<DynamicDivider variant="simple" /> // Simple line
```

## 🎯 Key Design Elements

### Comic Panel Styling
- Bold 3px borders
- Strong box shadows (offset style)
- Corner accent lines
- Hover effects (glow + lift)

### Typography
- **Display**: Bebas Neue (episode titles)
- **Heading**: Oswald (section headers)
- **Body**: Inter (content text)

### Effects
- Neon glow on hover
- Speed lines animation
- Dramatic shadows
- Noise/grain overlay
- Gradient scrollbar

## 🚀 Deployment to AWS

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with static files.

### S3 Setup

1. Create S3 bucket
2. Enable static website hosting
3. Upload `dist/` contents
4. Set bucket policy for public read

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::your-bucket-name/*"
  }]
}
```

### CloudFront Setup

1. Create CloudFront distribution
2. Point to S3 bucket
3. Configure SSL certificate
4. Set error pages to redirect to `index.html`

## ⚙️ Customization

### Update Theme Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  lookism: {
    'accent-cyan': '#YOUR_COLOR',
    'accent-pink': '#YOUR_COLOR',
    // ...
  }
}
```

### Add New SFX

Edit `src/theme/lookismTheme.ts`:

```typescript
export const SFX_LABELS = {
  WHOOSH: 'WHOOSH',
  YOUR_SFX: 'YOUR_SFX',
  // ...
};
```

### Modify Content

Edit section files in `src/sections/` to update:
- Personal information
- Experience details
- Skills and tech stack
- Contact information

## 📱 Responsive Design

- **Mobile**: Touch-optimized, vertical scrolling
- **Tablet**: Adjusted grid layouts
- **Desktop**: Full dramatic impact with wide panels

## 🎭 Visual Effects

- Background noise/grain
- Radial spotlight gradients
- Speed line animations
- Neon glow shadows
- Comic panel hover effects
- Smooth scroll behavior

## 💡 Future Enhancements

- Dark/light mode toggle (currently dark only)
- More SFX animations
- Project showcase section
- Blog with webtoon-style posts
- Character illustrations
- Parallax scrolling effects

## 📄 License

MIT License - Free to use for personal portfolios

## 📧 Contact

**Calvin Jarrod Danker**
- Email: calvindanker@gmail.com
- Location: Johor Bahru, Malaysia
- Phone: +60 19 070 0513

---

Built with React, TypeScript, and Tailwind CSS
Inspired by the Korean webtoon **Lookism** by Park Tae-jun
