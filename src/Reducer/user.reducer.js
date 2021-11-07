const user_reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return { ...state, user: action.payload };
		case 'SET_USER_AVATAR':
			return { ...state, avatarImg: action.payload };
		case 'REMOVE_USER_AVATAR':
			const filteredAvatars = state.filteredUserAvatars.filter(
				(avatar) => avatar.id !== action.payload
			);
			return { ...state, filteredUserAvatars: filteredAvatars };
		case 'TOGGLE_NEW_AVATAR_CHOSEN':	
			return {
				...state,
				newAvatar: {
					...state.newAvatar,
					[action.payload.type]: action.payload.value,
				},
			};

		default:
			return { ...state };
	}
};

export default user_reducer;
