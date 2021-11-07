import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



//config
const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

//if snapshot does not exist, create one. 
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
          await userRef.set({
              displayName, 
              email, 
              createdAt, 
              ...additionalData
          })  
        } catch(error){
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}


//initalize firebase, auth, and firestore
firebase.initializeApp(config);
export const auth = firebase.auth() 
export const firestore = firebase.firestore()


//provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

//sign in with google
export const signInWithgoogle =() => auth.signInWithPopup(provider)


//export firebase 
export default firebase;