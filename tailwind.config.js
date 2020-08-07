module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.html"],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      body: ["Varta", "sans-serif"],
      display: ["Varta", "sans-serif"],
      title: ["Heebo", "sans-serif"],
      paragraph: ["Buenard", "serif"],
    },

    extend: {
      spacing: {
        "14": "3.5rem",
        "22": "5.5rem",
        "28": "7rem",
        "36": "9rem",
        "60": "15rem",
        "70": "17rem",
        "72": "18rem",
        "73": "19rem",
        "74": "20rem",
        "84": "21rem",
        "96": "24rem",
        "100": "28rem",
        "102": "30rem",
        "103": "31rem",
        "104": "32rem",
      },
      colors: {
        shamrock: {
          "100": "#EDF5F0",
          "200": "#D2E7D9",
          "300": "#B6D9C3",
          "400": "#80BC95",
          "500": "#499F68",
          "600": "#428F5E",
          "700": "#2C5F3E",
          "800": "#21482F",
          "900": "#16301F",
        },
        spring: {
          "100": "#E9FFF0",
          "200": "#C9FEDA",
          "300": "#A9FDC4",
          "400": "#68FC97",
          "500": "#27FB6B",
          "600": "#23E260",
          "700": "#179740",
          "800": "#127130",
          "900": "#0C4B20",
        },

        isabelline: {
          "100": "#FDFDFD",
          "200": "#FBFAF9",
          "300": "#F9F6F5",
          "400": "#F4F0EE",
          "500": "#EFE9E7",
          "600": "#D7D2D0",
          "700": "#8F8C8B",
          "800": "#6C6968",
          "900": "#484645",
        },
        blue: {
          "100": "#EBF2F7",
          "200": "#CEDFEC",
          "300": "#B1CCE0",
          "400": "#76A5C8",
          "500": "#3B7FB1",
          "600": "#35729F",
          "700": "#234C6A",
          "800": "#1B3950",
          "900": "#122635",
        },
        "light-blue": {
          "100": "#F4FAFE",
          "200": "#E3F2FE",
          "300": "#D3EAFD",
          "400": "#B1DAFB",
          "500": "#90CAF9",
          "600": "#82B6E0",
          "700": "#567995",
          "800": "#415B70",
          "900": "#2B3D4B",
        },
        "aquamarine": "#03a9f4",
      },
    },
  },
  variants: {},
  plugins: [],
};
