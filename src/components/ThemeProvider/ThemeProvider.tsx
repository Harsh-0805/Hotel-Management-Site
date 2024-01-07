"use client";

import React, { useEffect, useState } from "react";
import ThemeContext from "@/context/themeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromStorage: boolean =
    typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme")
      ? JSON.parse(localStorage.getItem("hotel-theme")!)
      : false;
  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);

  // useEffect(() => {
  //   const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  //   setTheme(isDarkTheme);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("darkTheme", darkTheme.toString());
  // }, [darkTheme]);

  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
        <div className="dark:text-white dark:bg-black text-[#1e1e1e]">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
