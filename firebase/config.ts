// Import the functions you need from the SDKs you need
import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
// @ts-ignore
import { getAuth, Auth, initializeAuth, getReactNativePersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAKhRKx641BNGlim9jdqtqbSdILO3GiLbU",
	authDomain: "tech-challenge-3-9f1ee.firebaseapp.com",
	projectId: "tech-challenge-3-9f1ee",
	storageBucket: "tech-challenge-3-9f1ee.firebasestorage.app",
	messagingSenderId: "855400261531",
	appId: "1:855400261531:web:c0e93d5da639ca250da33e",
	measurementId: "G-LNYKPCEQ07"
};

let app: FirebaseApp
let auth: Auth


if (!getApps().length) {

	const app = initializeApp(firebaseConfig);

	auth = initializeAuth(app, {
		persistence: getReactNativePersistence
	})

} else {
	app = getApp()
	auth = getAuth(app)
}

export { app, auth }