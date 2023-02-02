"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

function setTheme() {
  if (typeof window !== "undefined") {
    let theme = localStorage.getItem("theme");
    if ((theme && theme === "light") || theme === "dark") {
      if (theme === "dark") {
        document.getElementsByTagName("html")[0].classList.add("dark");
      } else {
        document.getElementsByTagName("html")[0].classList.remove("dark");
      }
    } else {
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
      className="cursor-pointer rounded-lg p-2 hover:bg-slate-800 hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10"
      onClick={toggleTheme}
    >
      <div className="hidden text-white dark:block">
        <SunIcon className="h-6 w-6"></SunIcon>
      </div>
      <div className="text-slate-800 dark:hidden">
        <MoonIcon className="h-6 w-6"></MoonIcon>
      </div>
    </div>
  );
}
