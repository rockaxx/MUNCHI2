// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDxopvw9g0vSqh64ZH0gqQMpfo2JUHfmHg',
  authDomain: 'munchi-854cc.firebaseapp.com',
  projectId: 'munchi-854cc',
  storageBucket: 'munchi-854cc.firebasestorage.app',
  messagingSenderId: '667402968488',
  appId: '1:667402968488:web:b645a5698ab52da3ea119d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
