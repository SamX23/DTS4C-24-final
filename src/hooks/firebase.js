import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  apiKey,
  appId,
  authDomain,
  databaseURL,
  measurementId,
  messagingSenderId,
  projectId,
  storageBucket,
} from "./env";

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

// Get a list of cities from your database
async function getWishlist(db) {
  const wishlistCol = collection(db, "movie-wishlist");
  const wishlistSnapshot = await getDocs(wishlistCol);
  const wishlistList = wishlistSnapshot.docs.map((doc) => doc.data());
  return wishlistList;
}

export { auth, getWishlist, provider };
