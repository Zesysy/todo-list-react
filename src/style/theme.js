const theme = {
  // Object containing the colors used in the application
  colors: {
    main: "#2E0B4B",
    mainDark: "#281D31",
    mainLight: "#524D67",
    mainLighter: "#785693", // FAE1DF || 5F506B
    textColor: "#170C16",
    whiteColor: "#F2EFE9",
    shadow: "rgba(0,0,0,.2)",
    error: "#D14545",
    validation: "#8BB174", // 94E8B4
  },

  // Object containing the values for managing the responsive of the application
  mediaQueries: {
    smallest: `only screen and (max-width: 25em)`,
    small: `only screen and (max-width: 37.5em)`,
    medium: `only screen and (max-width: 56em)`,
    large: `only screen and (max-width: 80em)`,
    largest: `only screen and (max-width: 90em)`,
  },
};

export default theme;
