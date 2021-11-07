const loading_reducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_LOADING_TRUE':
			return { ...state, dataLoading: true };
		case 'TOGGLE_LOADING_FALSE':
			return { ...state, dataLoading: false };
		default:
			return { ...state };
	}
};

export default loading_reducer;
