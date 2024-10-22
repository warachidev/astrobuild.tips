module.exports = {
  content: ["./src/**/*/*.{astro,html,js,jsx,tsx,vue,svelte}"],
  theme: {
    extend: {
      animation: {
        border: "background ease infinite",
      },
      keyframes: {
        background: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
