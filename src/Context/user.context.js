import React, {createContext, useContext, useReducer} from 'react'

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

	const [state, dispatch] = useReducer(reducer, initialState)



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

