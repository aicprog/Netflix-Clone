import React, {
	useEffect,
	useContext,
	createContext,
	useReducer,
} from 'react';
import {auth, createUserProfileDocument} from '../Firebase/firebase.utils'

//reducer
import reducer from "../Reducer/user.reducer"

import { BROWSE } from '../constants/routes';

//initial state 
const initialState = {
    user: []
}

//create context 
const AuthContext = createContext();

//provider that uses context
export const FirebaseAuthProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
            checkUserAuth();
        }, [])//loggedIn]);

    //check to see if user is authorized
    const checkUserAuth = () => {
            return auth.onAuthStateChanged(async (userAuth) => {
                if (userAuth) {
                    //setLoggedIn(true);
                    const userRef = await createUserProfileDocument(userAuth);
                    userRef.onSnapshot((snapshot) => {
                        dispatch({type: "SET_USER", action: {id: snapshot.id, ...snapshot.data()}})
                        //setIsLoading(false);
                    });
                } else {
                }
            });
        };

    	const signInUser = async (email, password) => {
				//setError(false);
				try {
					await auth.signInWithEmailAndPassword(email, password);
                    window.location.href = BROWSE;
					//localStorage.setItem('userLoggedIn', true);
				} catch (error) {
					console.log(error);
					//setError(true);
				}
			};

			const signOutUser = () => {
				auth.signOut().then(() => {
                    window.location.href="/"
                    //setLoggedIn(false)
                });
				//localStorage.setItem('userLoggedIn', false);
				//setWaiting(false);
				//unsubscribeFromAuth();
			};


    return(
        <AuthContext.Provider value={{...state, signInUser, signOutUser}}>
            {children}
        </AuthContext.Provider>
    )
}


//export 
export const useFirebaseAuthProvider = () =>{
    return useContext(AuthContext)
}