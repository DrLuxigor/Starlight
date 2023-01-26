"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

function setTheme() {
  if (typeof window !== "undefined") {
    console.log("setting theme");
    let theme = localStorage.getItem("theme");
    if ((theme && theme === "light") || theme === "dark") {
      if (
        theme === "dark") {
        document.getElementsByTagName("html")[0].classList.add("dark");
      } else {
        document.getElementsByTagName("html")[0].classList.remove("dark");
      }
    } else {
      console.log("calling toggleTheme()")
      toggleTheme();
    }
  }
}

function toggleTheme() {
  let theme = localStorage.getItem("theme");
  if ((theme && theme === "light") || theme === "dark") {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  } else {
    let prefDark = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefDark.matches) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
  theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.getElementsByTagName("html")[0].classList.add("dark");
  } else {
    document.getElementsByTagName("html")[0].classList.remove("dark");
  }
}

export default function ThemeToggler() {
  useEffect(() => {
    setTheme();
    return () => {};
  }, []);
  return (
    <div
      className="p-2 hover:bg-opacity-10 hover:bg-slate-800 dark:hover:bg-opacity-10 dark:hover:bg-white rounded-lg cursor-pointer"
      onClick={toggleTheme}
    >
      <div className="hidden dark:block text-white">
        <SunIcon className="w-6 h-6"></SunIcon>
      </div>
      <div className="dark:hidden text-slate-800">
        <MoonIcon className="w-6 h-6"></MoonIcon>
      </div>
    </div>
  );
}
