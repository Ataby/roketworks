import { createUserWithEmailAndPassword,GoogleAuthProvider,sendEmailVerification,signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";



import { auth } from "./firebase";


export const doCreateUserWithEmailAndPassword = async (email, passw) => {
  return createUserWithEmailAndPassword(auth, email, passw);
};

export const doSignInWithEmailAndPassword = async (email, passw) => {
  return signInWithEmailAndPassword(auth, email, passw);
};

// export const doSignInWithGoogle = async (email, passw) => {
// const provider = new GoogleAuthProvider();
// const result = await signInWithPopup(auth,provider);
//   return result;
// };

export const doSignOut = async () => {
  return auth.signOut();
};

// export const doPasswordReset = async  (email) => {
//   return sendPasswordResetEmail(auth,email);
// };

// export const doPasswordUpdate = async (passw) => {
//   return updatePassword(auth.currentUser, passw);
// };

// export const doSendEmailVerification=()=> {
//       return sendEmailVerification(auth.currentUser, {
//             url: `${window.location.origin}/home`
//       })
// }