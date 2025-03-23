module.exports = {
    theme: {
      extend: {
        animation: {
          gradientMove: "gradientMove 8s linear infinite",
        },
        keyframes: {
          gradientMove: {
            "0%": { backgroundPosition: "0%" },
            "100%": { backgroundPosition: "400%" },
          },
        },
      },
    },
  };
  