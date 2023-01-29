import { clientAuth } from "../../firebase-client/firebase-client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase-admin";


export async function signInWithEmailAndPw(email: string, password: string) {
    console.log("called: signInWithEmailAndPw")
    try {
        let user = await signInWithEmailAndPassword(clientAuth, email, password);
        console.log("login success");
        return [user, null];
    } catch (err) {
        let error = err as FirebaseError
        console.log("login fail: " + error.code);
        return [null, error.code]
    }
}