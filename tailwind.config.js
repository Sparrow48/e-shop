module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        135: "40rem",
        "10px": "-10px",
        "16px": "-16px",
      },
      fontFamily: {
        logo: "'Aclonica', sans-serif",
      },
      gridTemplateColumns: {
        cart_title: "350px 1fr 1fr 1fr auto",
      },
    },
  },

  plugins: [],
};
