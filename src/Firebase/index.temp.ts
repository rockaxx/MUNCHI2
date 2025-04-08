import { app, db, storage } from '../Firebase/firebase.config';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  UserCredential,
} from 'firebase/auth';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import React from 'react';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { toast } from 'react-toastify';
import { shuffleItems } from '../utils/functions';

// ----------------- Image Upload Functions -----------------

export const firebaseUploadImage = (
  imageFile: File,
  promise: (flag: boolean) => void,
  progressHandler: (status: string) => void,
  action: (downloadUrl: string | null) => void,
  to: string
): void => {
  promise(true);
  // Optionally, you might call progressHandler('0%') here.
  toast.info(`Upload started.....`, {
    icon: <MdOutlineCloudUpload className="text-blue-600" />,
  });
  const storageRef = ref(storage, `Images/${to}/${Date.now()}-${imageFile.name}`);
  const uploadPhoto = uploadBytesResumable(storageRef, imageFile);
  uploadPhoto.on(
    'state_changed',
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      progressHandler(`Upload status: ${progress}%`);
    },
    (error) => {
      console.error(error);
      toast.error('Error while uploading, Try again🤗');
      action(null);
      setTimeout(() => {
        promise(false);
      }, 3000);
    },
    () => {
      getDownloadURL(uploadPhoto.snapshot.ref).then((downloadUrl) => {
        action(downloadUrl);
        promise(false);
        toast.success('Photo Uploaded Successfully😊');
      });
    }
  );
};

export const firebaseRemoveUploadedImage = (
  imageFile: string,
  imageHandler: (url: string | null) => void,
  promise: (flag: boolean) => void
): void => {
  const dummy =
    'https://firebasestorage.googleapis.com/v0/b/bentilzone-restaurant.appspot.com/o/Images';
  promise(true);
  toast.info(`Removing Image.....`, {
    icon: <MdOutlineCloudUpload className="text-blue-600" />,
    autoClose: 1500,
    toastId: 'remove-image',
  });
  if (imageFile.includes(dummy)) {
    const deleteRef = ref(storage, imageFile);
    deleteObject(deleteRef).then(() => {
      imageHandler(null);
      promise(false);
      toast.success('Photo removed Successfully😊', {
        autoClose: 2000,
        toastId: 'remove-image',
      });
    });
  } else {
    imageHandler(null);
    promise(false);
    toast.success('Photo removed Successfully😊', {
      autoClose: 2000,
      toastId: 'remove-image',
    });
  }
};

export const silentRemoveUploadedImage = (imageFile: string): void => {
  const deleteRef = ref(storage, imageFile);
  deleteObject(deleteRef).then(() => {});
};

// ----------------- Firestore Product Functions -----------------

export const firebaseSaveProduct = async (data: any): Promise<void> => {
  await setDoc(doc(db, 'Food', `${Date.now()}`), data, {
    merge: true,
  });
};

// ----------------- Authentication Functions -----------------

// Authenticate user using a provider.
// For more precise types, you might define a custom interface for userData.
export const AUTHPROVIDER = async (provider: any): Promise<{ refreshToken: string; userData: any }> => {
  const firebaseAuth = getAuth(app);
  const result = await signInWithPopup(firebaseAuth, provider);
  const { refreshToken, providerData } = result.user;
  // Add provider data to user
  await firebaseAddUser(providerData[0]);
  const userData = await firebaseGetUser(providerData[0].uid);
  return { refreshToken, userData };
};

// Signup with email and password.
export const EMAILSIGNUP = async (email: string, password: string): Promise<UserCredential> => {
  const firebaseAuth = getAuth(app);
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

// Signin with email and password.
export const EMAILSIGNIN = async (email: string, password: string): Promise<any> => {
  const firebaseAuth = getAuth(app);
  const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
  const user = result.user.providerData[0];
  return firebaseGetUser(user.uid);
};

// Log in with Google without creating a new Firestore document.
export const doLoginWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(getAuth(app), provider);
};

// Log in with Facebook without creating a new Firestore document.
export const doLoginWithFacebook = async (): Promise<UserCredential> => {
  const provider = new FacebookAuthProvider();
  return signInWithPopup(getAuth(app), provider);
};

// Sign out the currently authenticated user.
export const firebaseLogout = async (): Promise<void> => {
  await getAuth(app).signOut();
};

// ----------------- Cart and Food Operations -----------------

export const firebaseFetchFoodItems = async (): Promise<any[]> => {
  const items = await getDocs(
    query(collection(db, 'Food'), orderBy('id', 'desc'))
  );
  return shuffleItems(items.docs.map((doc) => doc.data()));
};

export const firebaseAddToCart = async (data: any): Promise<void> => {
  await setDoc(doc(db, 'CartItems', `${data.id}`), data, { merge: true });
};

export const firebaseFetchAllCartItems = async (): Promise<any[]> => {
  const items = await getDocs(
    query(collection(db, 'CartItems'), orderBy('id', 'desc'))
  );
  return shuffleItems(items.docs.map((doc) => doc.data()));
};

export const firebaseUpdateCartItem = async (data: any): Promise<void> => {
  await setDoc(doc(db, 'CartItems', `${data.id}`), data, { merge: true });
};

export const firebaseDeleteCartItem = async (item: any): Promise<void> => {
  await deleteDoc(doc(db, 'CartItems', `${item.id}`));
};

export const firebaseEmptyCart = async (): Promise<void> => {
  await deleteDoc(doc(db, 'CartItems'));
};

export const firebaseEmptyUserCart = async (cartItems: any[]): Promise<void> => {
  for (const item of cartItems) {
    await firebaseDeleteCartItem(item);
  }
};

// ----------------- Admin/User Management -----------------

export const firebaseAddUser = async (data: any): Promise<void> => {
  // Check if user already exists.
  const existingUser = await firebaseGetUser(data.uid);
  if (existingUser.length === 0) {
    await setDoc(doc(db, 'Users', `${data.uid}`), data, { merge: true });
  }
};

export const firebaseGetUser = async (uid: string): Promise<any[]> => {
  const userSnapshot = await getDocs(query(collection(db, 'Users')));
  const users = userSnapshot.docs.map((doc) => doc.data());
  return users.filter((user) => user.uid === uid);
};

export const firebaseUpdateUser = async (data: any): Promise<void> => {
  await setDoc(doc(db, 'Users', `${data.uid}`), data, { merge: true });
};

export const firebaseGetAllUsers = async (): Promise<any[]> => {
  const usersSnapshot = await getDocs(query(collection(db, 'Users')));
  return usersSnapshot.docs.map((doc) => doc.data());
};

export const firebaseDeleteFood = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, 'Food', `${id}`));
};
