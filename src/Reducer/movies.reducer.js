const movies_reducer = (state, action) =>{
    switch (action.type) {
			case 'TOGGLE_LOADING_TRUE':
				return { ...state, dataLoading: true };
			case 'TOGGLE_LOADING_FALSE':
				return { ...state, dataLoading: false };
			case 'FETCH_MOVIES':
				if (action.payload.type !== state.menuItemChosen.type) {
					return {
						...state,
						[action.payload.type]: action.payload.movies,
						queryString: '',
						queriedMovies: [],
						menuItemChosen: {
							type: action.payload.menuType,
							name: action.payload.menuName,
						},
						menuItemUrl: action.payload.url,
						currentPage: 1,
						dataLoading: false,
					};
				}
				const type = `${action.payload.type}`;
				return {
					...state,
					[action.payload.type]: [...state[type], ...action.payload.movies],
					queryString: '',
					queriedMovies: [],
					menuItemChosen: {
						type: action.payload.menuType,
						name: action.payload.menuName,
					},
					menuItemUrl: action.payload.url,
					dataLoading: false,
				};
			case 'SET_QUERY':
				return {
					...state,
					queryString: action.payload,
					menuItemChosen: false,
					dataLoading: false,
				};
			case 'SET_MENU_ITEM':
				return {
					...state,
					menuItemChosen: {
						type: action.payload.menuType,
						name: action.payload.menuName,
					},
					menuItemUrl: action.payload.url,
					dataLoading: false,
				};
			case 'INCREASE_PAGE':
				return {
					...state,
					currentPage: state.currentPage + 1,
					dataLoading: false,
				};
			case 'MENU_ITEM_CHECK':
				if (action.payload.type !== state.menuItemChosen.type) {
					return {
						...state,
						nowPlaying: [],
						topRated: [],
						originals: [],
						popular: [],
						currentPage: 1,
						dataLoading: false,
					};
				}
				return {
					...state,
				};
			case 'SEARCH_MOVIES':
				if (action.payload.query !== state.queryString) {
					return {
						...state,
						queriedMovies: action.payload.movies,
						queryString: action.payload.query,
						dataLoading: false,
					};
				}
				return {
					...state,
					queriedMovies: [...state.queriedMovies, ...action.payload.movies],
					queryString: action.payload.query,
					dataLoading: false,
				};
			case 'RESET_QUERIED_MOVIES':
				return {
					...state,
					queryString: '',
					queriedMovies: [],
					dataLoading: false,
				};
			case 'RESET_MENU_MOVIES':
				return {
					...state,
					menuItemChosen: { name: '', type: '' },
					menuItemUrl: '',
					dataLoading: false,
				};
			case 'SET_MOVIE_FOR_MOVIE_CONTENT':
				return {
					...state,
					movieChosen: action.payload,
					dataLoading: false,
				};

			default:
				return { ...state };
		}
}


export default movies_reducer;