import React, {createContext, useEffect, useState, useContext, useReducer} from 'react'
import { useFirebaseAuthProvider } from './auth.context';
import reducer from '../Reducer/user.reducer'
import { avatarData } from '../constants/avatarData';
//create context 
const UserContext = createContext();

const initialState ={
	avatarImg: null,
	userAvatars: avatarData,
	filteredUserAvatars: avatarData,
	newAvatar: {chosen: false, changeOccurred: false}, 
}
//provider 
export const UserProvider = ({ children }) => {
	//get info from auth provider
	const { user, signInUser, signOutUser } = useFirebaseAuthProvider();
	const [state, dispatch] = useReducer(reducer, initialState)
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		setCurrentUser(user);
	}, [currentUser]);

	const setUserAvatar = (avatar) =>{
		dispatch({ type: 'SET_USER_AVATAR', payload: avatar });
	}

	const removeUserAvatar = (id) =>{
		dispatch({ type: 'REMOVE_USER_AVATAR', payload: id });
	}
	const toggleNewAvatarChosen = (type, value) =>{
		dispatch({ type: 'TOGGLE_NEW_AVATAR_CHOSEN', payload: {type, value}});
	}

	return (
		<UserContext.Provider
			value={{
				...state,
				currentUser,
				signInUser,
				signOutUser,
				setUserAvatar,
				removeUserAvatar,
				toggleNewAvatarChosen,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};


export const useUserContext = () => {
	return useContext(UserContext);
};

