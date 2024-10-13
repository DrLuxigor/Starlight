"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { signOut } from "../lib/auth/client/client-auth";

export default function AccountMenu() {
  let [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div
      className="relative cursor-pointer rounded-lg p-1 hover:bg-gray-500 hover:bg-opacity-50"
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? (
        <ChevronDownIcon width={"24px"} height={"24px"} />
      ) : (
        <ChevronUpIcon width={"24px"} height={"24px"} />
      )}
      {expanded ? (
        <div className="absolute right-0 top-8 flex w-48 flex-col gap-2 rounded-lg bg-slate-700 shadow-lg">
          <div className="px-4 py-1">Account</div>
          <div
            className="cursor-pointer px-4 py-1 hover:bg-gray-500 hover:bg-opacity-50"
            onClick={signOut}
          >
            Sign Out
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
