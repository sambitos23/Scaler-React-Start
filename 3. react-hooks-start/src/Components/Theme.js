import React, { useContext, createContext, useState } from "react";

// useContext => It makes a global state.
// Prop drilling is too difficult also create varnabilites. That's why we use context.

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext(themes);
// createContext => It is provide two things
// 1. Provider => It is used to provide the value to the component
// 2. Consumer => It is used to consume the value from the component

const Theme = () => {
  return (
    <ThemeContext.Provider value={themes}>
      {/* value is important otherwise it will not work */}
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  const [background, setBackground] = useState(theme.dark.background);
  const [foreground, setForeground] = useState(theme.dark.foreground);
  return (
    <>
      <h1>Theme Example</h1>
      <button
        onClick={() => {
          setBackground(theme.light.background);
          setForeground(theme.light.foreground);
        }}
        style={{ background: background, color: foreground }}
      >
        I am styled by theme context!
      </button>
    </>
  );
};

export default Theme;
