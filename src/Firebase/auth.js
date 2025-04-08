import { auth, db } from '../Firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

// ----- Registration Functions -----

// Create a new user using email and password, and create a Firestore document.
export const doCreateUserWithEmailAndPassword = async (
  email,
  password,
  phonePrefix,
  phoneNumber
) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const payload = {
    email,
    phoneNumber: phonePrefix + phoneNumber,
    createdAt: serverTimestamp(),
  };
  await setDoc(doc(db, 'users', userCredential.user.uid), payload);
  return userCredential;
};

// Create/sign in with Google and create a Firestore document.
export const doCreateUserWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const payload = {
    email: result.user.email,
    phoneNumber: result.user.phoneNumber ? result.user.phoneNumber : '',
    createdAt: serverTimestamp(),
  };
  await setDoc(doc(db, 'users', result.user.uid), payload);
  return result;
};

// Create/sign in with Facebook and create a Firestore document.
export const doCreateUserWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const payload = {
    email: result.user.email,
    phoneNumber: result.user.phoneNumber ? result.user.phoneNumber : '',
    createdAt: serverTimestamp(),
  };
  await setDoc(doc(db, 'users', result.user.uid), payload);
  return result;
};

// ----- Login Functions -----

// Log in an existing user using email and password.
export const doLoginUserWithEmail = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential;
};

// Log in with Google without creating a new Firestore document.
export const doLoginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

// Log in with Facebook without creating a new Firestore document.
export const doLoginWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

// ----- Sign Out Function -----

// Sign out the currently authenticated user.
export const doSignOut = async () => {
  await signOut(auth);
};
