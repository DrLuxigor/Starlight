"use client";

import { autoSignIn } from "../lib/auth/client/client-auth"
export default function AutoLogin() {
    if(localStorage !== undefined) {
        let remember = localStorage.getItem("autoLogin");
        console.log("trying to login automatically...");
        console.log("autologin: " + remember)
        if(remember === "true") {
            autoSignIn();
        }
    }
    
    return <></>
}