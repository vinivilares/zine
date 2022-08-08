import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: `${process.env.APIKEY}`,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINSENDERID,
    appId: process.env.APPID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }