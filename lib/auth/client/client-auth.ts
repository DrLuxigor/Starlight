import { clientAuth } from "../../firebase-client/firebase-client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

export async function signInWithEmailAndPw(email: string, password: string) {
  try {
    let user = await signInWithEmailAndPassword(clientAuth, email, password);
    return [user, null];
  } catch (err) {
    let error = err as FirebaseError;
    return [null, error.code];
  }
}

export async function signOut() {
  clientAuth.signOut();
}
