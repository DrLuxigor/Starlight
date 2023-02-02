import { cookies } from "next/headers";
import { verifySession } from "../lib/auth/server/server-auth";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function SignInButton() {
  return (
    <Link
      href="/login"
      className="button bg-indigo-500 text-white hover:bg-indigo-600 dark:hover:bg-indigo-400"
    >
      Sign In
    </Link>
  );
}

export default async function AccountComponent() {
  const nextCookies = cookies();
  var decoded = await verifySession(nextCookies.get("session"));
  console.log("descoded: " + decoded?.email)

  if (!decoded) {
    return <SignInButton />;
  }

  return <div className="cursor-pointer hover:bg-gray-500 hover:bg-opacity-50 flex items-center rounded-md">
    <UserCircleIcon width={"32px"} height={"32px"}/>
    </div>
}
