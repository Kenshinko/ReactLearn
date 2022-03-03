// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS4hq26E_e3sqZTJbm5KSGoAvoNHRDdBk",
  authDomain: "mymessenger-c7f67.firebaseapp.com",
  databaseURL: "https://mymessenger-c7f67-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mymessenger-c7f67",
  storageBucket: "mymessenger-c7f67.appspot.com",
  messagingSenderId: "424737371030",
  appId: "1:424737371030:web:23b32ad406a0f33f16e3b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
export const logIn = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
export const logOut = () => signOut(auth);

export const db = getDatabase(app);

export const chatsRef = ref(db, "chats");
export const getChatsRefById = (chatId) => ref(db, `chats/${chatId}`);

export const messagesRef = ref(db, "messages");
export const getMessageListRefByChatId = (chatId) => ref(db, `messages/${chatId}/messageList`);
export const getMessagesRefByChatId = (chatId) => ref(db, `messages/${chatId}`);
export const getMessageRefById = (chatId, MessId) => ref(db, `messages/${chatId}/messageList/${MessId}`);