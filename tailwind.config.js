// Reference copy of the runtime config. The site loads Tailwind via the Play
// CDN (index.html <script src="https://cdn.tailwindcss.com">), which reads
// config from an inline `tailwind.config = {...}` script tag at runtime, not
// from this file. Keep both in sync if either changes.
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0C1F18',
        paper: '#FCFBF8',
        surface: '#FFFFFF',
        rule: '#DFE4E0',
        ruleStrong: '#C3CCC6',
        brand: '#0B6B4F',
        brandDeep: '#08543E',
        muted: '#58655D',
        flag: '#9B2C1F',
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.021em' }],
        h2: ['2rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        h3: ['1.375rem', { lineHeight: '1.3' }],
        h4: ['1.0625rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.55' }],
      },
      borderRadius: {
        control: '6px',
        card: '10px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(12,31,24,0.05)',
        overlay: '0 24px 48px -16px rgba(12,31,24,0.18)',
      },
    },
  },
};
