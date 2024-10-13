import { cookies } from "next/headers";
import { verifySession } from "../lib/auth/server/server-auth";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import AccountMenu from "./AccountMenu";

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
  console.log("descoded: " + decoded?.email);

  if (!decoded) {
    return <SignInButton />;
  }

  return (
    <div className="flex items-center">
      <div className="flex cursor-pointer items-center rounded-md hover:bg-gray-500 hover:bg-opacity-50">
        <UserCircleIcon width={"32px"} height={"32px"} />
      </div>
      <AccountMenu/>
    </div>
  );
}
