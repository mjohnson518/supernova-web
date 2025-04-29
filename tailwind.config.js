/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#D1D5DB', // text-gray-300
            a: {
              color: '#60A5FA', // text-blue-400
              '&:hover': {
                color: '#93C5FD', // text-blue-300
              },
              textDecoration: 'none',
            },
            h1: {
              color: '#60A5FA', // text-blue-400
              fontWeight: '700',
            },
            h2: {
              color: '#93C5FD', // text-blue-300
              fontWeight: '600',
              borderBottomWidth: '1px',
              borderColor: '#1F2937', // border-gray-800
            },
            h3: {
              color: '#93C5FD', // text-blue-300
              fontWeight: '600',
            },
            h4: {
              color: '#93C5FD', // text-blue-300
              fontWeight: '600',
            },
            blockquote: {
              color: '#9CA3AF', // text-gray-400
              borderLeftColor: '#374151', // border-gray-700
              fontStyle: 'normal',
              backgroundColor: '#1F2937', // bg-gray-800
              borderRadius: '0.25rem',
              padding: '0.75rem 1rem',
            },
            code: {
              color: '#F9A8D4', // text-pink-300
              backgroundColor: '#1F2937', // bg-gray-800
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
              '&::before': {
                content: '""',
              },
              '&::after': {
                content: '""',
              },
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              color: '#D1D5DB', // text-gray-300
              backgroundColor: '#1F2937', // bg-gray-800
              borderWidth: '1px',
              borderColor: '#374151', // border-gray-700
              borderRadius: '0.375rem',
            },
            strong: {
              color: '#FFFFFF', // white
              fontWeight: '600',
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              display: 'block',
              overflowX: 'auto',
              margin: '1.5rem 0',
              borderWidth: '1px',
              borderColor: '#374151', // border-gray-700
              borderStyle: 'solid',
              borderRadius: '0.375rem',
              backgroundColor: '#1F2937', // bg-gray-800
            },
            thead: {
              backgroundColor: '#111827', // bg-gray-900
              color: '#93C5FD', // text-blue-300
              fontWeight: '600',
              borderBottomWidth: '1px',
              borderBottomColor: '#374151', // border-gray-700
            },
            'thead th': {
              verticalAlign: 'bottom',
              padding: '0.75rem 1rem',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              fontWeight: '600',
              letterSpacing: '0.025em',
              textTransform: 'uppercase',
              color: '#93C5FD', // text-blue-300
              borderRightWidth: '1px',
              borderRightColor: '#374151', // border-gray-700
              backgroundColor: '#111827', // bg-gray-900
            },
            'thead th:last-child': {
              borderRightWidth: '0',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: '#374151', // border-gray-700
              '&:hover': {
                backgroundColor: '#172233', // hover shade
              },
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: '#1a202c', // bg-gray-800
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              padding: '0.75rem 1rem',
              borderRightWidth: '1px',
              borderRightColor: '#374151', // border-gray-700
              verticalAlign: 'top',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              whiteSpace: 'normal',
              color: '#D1D5DB', // text-gray-300
            },
            'tbody td:last-child': {
              borderRightWidth: '0',
            },
            hr: {
              borderColor: '#374151', // border-gray-700
              margin: '2rem 0',
            },
            ol: {
              li: {
                '&::marker': {
                  color: '#93C5FD', // text-blue-300
                },
              },
            },
            ul: {
              li: {
                '&::marker': {
                  color: '#93C5FD', // text-blue-300
                },
              },
            },
            img: {
              borderRadius: '0.375rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // Make sure dark mode is enabled and always applied
  darkMode: 'class',
  safelist: [
    // Add any classes that might be dynamically generated here
    {
      pattern: /bg-(gray|blue|red|green|pink)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /text-(gray|blue|red|green|pink)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /border-(gray|blue|red|green|pink)-(100|200|300|400|500|600|700|800|900)/,
    },
    'prose', 'prose-invert', 'max-w-none', 'markdown-table',
  ],
} 