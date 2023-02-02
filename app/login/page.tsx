"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithEmailAndPw } from "../../lib/auth/client/client-auth";
import { UserCredential } from "firebase/auth";

function validateRequest() {
  let form = document.getElementById("loginform") as HTMLFormElement;
  let valid = form.checkValidity();
  if (valid) return true;

  form.reportValidity();
  return false;
}

export default function LoginPage() {
  let [email, setEmail] = useState<string>("");
  let [password, setPassword] = useState<string>("");
  let [remember, setRemember] = useState<boolean>(false);
  let [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const router = useRouter();

  const handleSubmit = async () => {
    let valid = validateRequest();

    if (valid) {
      await login();
    } else {
    }
  };

  const login = async () => {
    let [user, error] = await signInWithEmailAndPw(email, password);
    if (user) {
      setErrorMessage(undefined);
      user = user as UserCredential;
      let token = await user.user.getIdToken(true);
      let response = await fetch("/api/auth/request-session", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (response.status == 200) {
        console.log("Hello? " + remember);
        localStorage.setItem("autoLogin", remember + "");
        router.push("/");
      }
    } else if (error) {
      error = error as string;
      setErrorMessage(error);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[length:100%_100%] bg-no-repeat lg:dark:bg-[url('/bgs/login-bg.svg')]">
      <div className="flex rounded-2xl border-indigo-100 backdrop-blur-md dark:border-slate-700 md:border md:shadow-2xl">
        <div className="hidden min-h-full w-52 items-center justify-center rounded-l-2xl bg-indigo-500 bg-[url('/bgs/x.svg')] bg-cover bg-no-repeat lg:flex xl:w-80">
          <StarIcon className="h-12 w-12 text-white"></StarIcon>
        </div>
        <div className="flex flex-col items-center gap-8 px-8 py-16 sm:px-16 sm:py-32">
          <h1 className="text-2xl">Sign In</h1>
          <form className="flex w-80 flex-col gap-8 sm:w-96" id="loginform">
            <input
              id="email"
              className="rounded-lg bg-inherit focus:ring-indigo-500"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="user@example.com"
              required
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative flex flex-col">
              <input
                id="password"
                className="rounded-lg bg-inherit focus:ring-indigo-500"
                type="password"
                placeholder="Password"
                required
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link
                href=""
                className="absolute right-0 top-full cursor-pointer text-end text-gray-400 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="mr-2 h-5 w-5 rounded bg-inherit text-indigo-500 focus:ring-indigo-500"
                onChange={(e) => setRemember(e.target.checked)}
              ></input>
              <label>Remember me</label>
            </div>
            {errorMessage ? (
              <div>
                <p className="text-red-600">{errorMessage}</p>
              </div>
            ) : (
              <></>
            )}
            <input
              type="button"
              value="Sign In"
              className="button bg-indigo-500 text-white hover:bg-indigo-600 dark:hover:bg-indigo-400"
              onClick={handleSubmit}
            />
          </form>
          <div className="flex w-80 items-center gap-2 sm:w-96">
            <div className="flex-grow border-b border-b-gray-400"></div>
            <a className="text-gray-400">or sign in with</a>
            <div className="flex-grow border-b border-b-gray-400"></div>
          </div>
          <div className="grid w-80 grid-cols-2 gap-4 sm:w-96">
            <div className="button relative flex items-center justify-center border bg-white font-semibold text-black hover:bg-gray-100 hover:bg-opacity-80">
              <svg
                className="h-6 w-6"
                viewBox="0 0 20 20"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
                  fill="#34A853"
                ></path>
                <path
                  d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"
                  fill="#EA4335"
                ></path>
              </svg>

              <a className="w-full text-center">Google</a>
            </div>
            <div className="button relative flex items-center justify-center border bg-white font-semibold text-black hover:bg-gray-100 hover:bg-opacity-80">
              <img
                src="https://github.com/favicon.ico"
                className="absolute left-4 h-6 w-6"
                alt="github logo"
              />
              <a className="w-full text-center">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
