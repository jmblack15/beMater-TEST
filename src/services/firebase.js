import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDGI0yXw9I01UC-t81uGK6IjJvrFNFUV-A",
  authDomain: "bemaster-test-b9883.firebaseapp.com",
  projectId: "bemaster-test-b9883",
  storageBucket: "bemaster-test-b9883.appspot.com",
  messagingSenderId: "1078060979900",
  appId: "1:1078060979900:web:4598fb37a0a1bd7df562b9",
  measurementId: "G-9WF3DM49ET"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginEmailPassword = async (infoLog) => {
  const { email, password } = infoLog
  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    return userCredentials.user
  } catch (error) {
    return false
  }
}