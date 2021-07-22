const tailwindcss = require("tailwindcss");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "peach-puff": "#FFD7BA",
        "champagne-pink": "#FFE5D9",
        "regal-blue": "#243C5A",
        "dark-cornflower-blue": "#023E8A",
        "burly-wood": "#E7BC91",
        "antique-white": "#FFEDD8",
        "cafe-du-lait": "#A47148",
        "cof-fee": "#8A5A44",
        "coff-ee": "#774936",
        "brown-sugar": "#9D6B53",
        "sapphire-blue": "#0E6BA8",
        "royal-blue": "#0A2472",
        "honolulu-blue": "#386FA4",
        "star-command": "#0077B6",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
