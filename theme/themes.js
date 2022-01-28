const styles = {
    fonts: {
      heading: `"Source Code Pro", monospace`,
      primary: `"Source Code Pro", monospace`,
    },
  };
  // Dark Theme
  export const darkTheme = {
    title: "Dark",
    primary: `rgba(35,35,35, 0.3)`,
    secondary: `rgb(255, 115, 0)`,
    info: `rgb(255, 115, 0)`,
    dark: `black`,
    text: `#fff`,
    bgColor: `linear-gradient(
      344deg,
      rgba(30, 30, 30, 1) 0%,
      rgba(45, 45, 45, 1) 100%
    )`,
    ...styles,
  };
  
  // Light Theme
  export const lightTheme = {
    title: "Light",
    primary: `rgba(220,220,220, 0.3)`,
    secondary: `rgb(6, 6, 6)`,
    info: `black`,
    dark: `black`,
    text: `#000`,
    bgColor: `linear-gradient(344deg, #FCFCFC 0%, #F9F9F9 100%);`,
    ...styles,
  };
  