import { initializeApp } from "firebase/app";
import FirebaseContext from "./context";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDLuS0gr3ileqR8UUn5_hG9Ahn4QaF-T0g",
    authDomain: "frost-box-c5396.firebaseapp.com",
    databaseURL: "https://frost-box-c5396-default-rtdb.firebaseio.com",
    projectId: "frost-box-c5396",
    storageBucket: "frost-box-c5396.appspot.com",
    messagingSenderId: "708255696362",
    appId: "1:708255696362:web:bb274ba116c36fe93a5e93"
};
 
class Firebase {
    constructor(){
        const app = initializeApp(firebaseConfig);
        this.db = getDatabase(app);
    }
}
 
const firebase = new Firebase();
export { FirebaseContext };
export default firebase;