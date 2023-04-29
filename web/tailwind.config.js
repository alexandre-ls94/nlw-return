module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // criando uma cor padrão para o projeto
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6'
        }
      },
      // sobrescreve o rounded-md que por padrão é 6px
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
