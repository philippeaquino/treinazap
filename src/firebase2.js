import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyDjh0IF1LsnMS7dcKf3Rf2Z04tF6hQ_dfo",
    authDomain: "treinazap.firebaseapp.com",
    projectId: "treinazap",
    storageBucket: "treinazap.appspot.com",
    messagingSenderId: "440247512162",
    appId: "1:440247512162:web:67eb02205337e8e011353b"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
