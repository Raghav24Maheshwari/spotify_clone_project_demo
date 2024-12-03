module.exports = {
    mode: "jit",
    content: [
        "./src/**/*.{js,ts,jsx,tsx,html,mdx}", 
        "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}"
      ],
      
    darkMode: "class",
    theme: {
      screens: { md: { max: "1050px" }, sm: { max: "550px" } },
      extend: {
        colors: {
          gray: {
            100: "#F4F6FA",
            200: "#E5E7EB",
            400: "#BBBABB",
            600: "#808080",
            700: "#666666",
            "900_02": "#212121",
            "200_01": "#EEEEEE",
            "700_90": "#66666690",
            "50_01": "#F9FAFB",
            "900_75": "#21212175",
            "900_63": "#21212163",
            "200_02": "#E8E8E8",
            "300_01": "#D6DCE5",
          },
          white: { A700: "#FFFFFF" },
          red: { 700: "#DC362E", "700_66": "#dc362e66", "700_19": "#dc362e19" },
          black: { 900: "#000000", "900_66": "#00000066", "900_7e": "#0000007e" },
          light_blue: { 800: "#006FCF", 900: "#006491", "800_01": "#007FB6" },
          blue_gray: { "900_01": "#323232", "800_01": "#383F4F" },
          light_green: { 900: "#2F8900", "900_66": "#2f890066" },
          green: { 50: "#E6FAE6", 200: "#A5CA96" },
          blue: { 50: "#E5F2FF", 100: "#C9E6FF", 900: "#1434CB" },
          deep_orange: { 50: "#FFE1E0", "50_01": "#FFE2E0" },
          deep_purple: { 500: "#7745AF" },
          amber: { 500: "#FDC40E" },
        },
        boxShadow: { xs: "0px 2px  20px 0px #b7b7b714" },
        fontFamily: { qanelas: "Qanelas", roboto: "Roboto", gtwalsheimpro: "GT Walsheim Pro", inter: "Inter" },
        opacity: { 0.6: 0.6, 0.3: 0.3, 0.1: 0.1 },
        backgroundImage: { gradient: "linear-gradient(90deg, #007FB6 -42.81%, #C08CFB 99.99%, #C08CFB 99.99%)" },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };