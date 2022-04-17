import { initializeApp } from "firebase/app";
import { Game } from "./types/Game";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiGHYh0Xxib7xp7nxfTVsYCb7lzIgrRRw",
  authDomain: "find-letter-4a245.firebaseapp.com",
  projectId: "find-letter-4a245",
  storageBucket: "find-letter-4a245.appspot.com",
  messagingSenderId: "687963933737",
  appId: "1:687963933737:web:685d4a961e2868fb24e038",
  measurementId: "G-EMKV4KLEB4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useFirestore = () => {
  const getGames = async () => {
    const games = collection(db, "games");
    const gamesSnapshot = await getDocs(games);
    const gamesList = gamesSnapshot.docs.map((doc) => doc.data());
    return gamesList;
  };

  const addGame = async (game: any) => {
    const games = collection(db, "games");
    await addDoc(games, game);
  };

  return { addGame, getGames };
};
