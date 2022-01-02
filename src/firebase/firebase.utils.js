import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config= {
    apiKey: "AIzaSyDiN4N2J9C_ILV51q3KnqocIZ7jHfRw58Y",
    authDomain: "sparkleista-e6817.firebaseapp.com",
    projectId: "sparkleista-e6817",
    storageBucket: "sparkleista-e6817.appspot.com",
    messagingSenderId: "46939768967",
    appId: "1:46939768967:web:667df98c011c1970945022",
    measurementId: "G-NQJ8DT4PFK"
  };

  export const createUserProfileData = async(userAuth,additionalData)=>{
    if(!userAuth)
    return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get(); 
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
        ...additionalData}
        )

      }
      catch(error){
        console.log(error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore= firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);

  export default firebase;