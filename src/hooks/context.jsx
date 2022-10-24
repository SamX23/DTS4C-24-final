import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useMemo } from "react";
import { toast } from "react-toastify";
import { toastProperties } from "../constants/toastProperties";
import { auth, provider } from "./firebase";
import { useMovieStore } from "./store";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const dispatch = useMovieStore((state) => state.dispatch);
  const user = useMovieStore((state) => state.user);

  const login = async ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => dispatch({ type: "LOGIN", data: user.accessToken }))
      .catch(({ message }) => toast.error(message, toastProperties));

  const logout = () =>
    signOut(auth)
      .then(() => dispatch({ type: "LOGOUT" }))
      .catch(({ message }) => toast.error(message, toastProperties));

  const register = async ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Account Created", toastProperties);
        login({ email, password });
      })
      .catch(({ message }) => toast.error(message, toastProperties));

  const loginWithGoogle = async () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      register,
      loginWithGoogle,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
