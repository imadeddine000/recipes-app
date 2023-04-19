
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

import { collection,getDocs } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyCZIn0LlYFWZ1hBNii_J734DhJ7B6cjjOw",
  
    authDomain: "ollyfood-d5f9d.firebaseapp.com",
  
    projectId: "ollyfood-d5f9d",
  
    storageBucket: "ollyfood-d5f9d.appspot.com",
  
    messagingSenderId: "357700993827",
  
    appId: "1:357700993827:web:93df56261f9268520f8296",
  
    measurementId: "G-W3PXD1SJ0T"
  
  };
  


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db=getFirestore(app)




export default db;

