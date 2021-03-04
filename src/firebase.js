import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyCRQL9-whlgRRcBOMLuGsDs4ljrKvcGEVs",
    authDomain: "treinazap-c3af4.firebaseapp.com",
    projectId: "treinazap-c3af4",
    storageBucket: "treinazap-c3af4.appspot.com",
    messagingSenderId: "1043770735339",
    appId: "1:1043770735339:web:f3958d2e3c5259478a9cae"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
