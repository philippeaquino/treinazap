import firebase from 'firebase';	

const firebaseConfig = {	
   apiKey: "AIzaSyDy-a-n00XzBU0gMCNZHnlOqiRQqmsLbFw",
    authDomain: "mendeszap-369b1.firebaseapp.com",
    projectId: "mendeszap-369b1",
    storageBucket: "mendeszap-369b1.appspot.com",
    messagingSenderId: "368175648975",
    appId: "1:368175648975:web:337d3a6cb4f04ad66ba7ba"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
