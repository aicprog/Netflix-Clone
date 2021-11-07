import React, { useContext, useReducer, useState } from "react";
import axios from "../Requests/axios";
import {search_url} from '../Requests/requests'

//reducer
import reducer from "../Reducer/movies.reducer";

//names here match the request type in Requests file so you can use them dynamically
const initialState = {
	//main page
	netflixOriginals: [],
	trending: [],
	actionMovies: [],
	comedyMovies: [],
	horrorMovies: [],
	romanceMovies: [],
	documentaries: [],
	//queries
	queriedMovies: [],
	queryString: '',
	//menuItem
	menuItemChosen: { name: '', type: '' },
	currentPage: 1,
	nowPlaying: [],
	topRated: [],
	originals: [],
	trendingNow: [],
	menuItemUrl: '',
	//shared
	dataLoading: false,
	//movie for movie content
	movieChosen: [],
};

//create context
const MoviesContext = React.createContext();

export const MoviesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [isMovieContentOpen, setIsMovieContentOpen] = useState(false);
	const [location, setLocation] = useState({})

	const fetchMovies = async (url, type, menuType="", menuName) => {
		toggleLoadingTrue();
		closeMovieContent()
		try {

			const response = await axios.get(url);
			const movies = response.data.results;
			
			dispatch({ type: 'FETCH_MOVIES', payload: { type, movies, url, menuType, menuName }});
		
		} catch (error) {
			console.log(error);
			toggleLoadingFalse()
		}
	};


	const searchQueriedMovies = async (query, page = 1) => {
		closeMovieContent()
		if (query.length > 0) {
			const complete_query = `${search_url}${query}&page=${page}`;

			try {
				const response = await axios.get(complete_query);
				const movies = response.data.results;
				dispatch({ type: 'SEARCH_MOVIES', payload: { query, movies } });

				//dispatch({ type: 'SET_QUERY', payload: query });
			} catch (error) {
				console.log(error);
			}
		}
	};

	const resetQueriedMovies = () =>{
		dispatch({ type: 'RESET_QUERIED_MOVIES' });
	}
	const resetMenuMovies = () =>{
		dispatch({ type: 'RESET_MENU_MOVIES' });
	}

	const setMenuItem = (menuType = '', menuName, url) => {
		dispatch({ type: 'SET_MENU_ITEM', payload: { menuType, menuName, url } });
	};

	const increasePage = () =>{
		dispatch({ type: 'INCREASE_PAGE'});
	}
	const menuItemCheck = (type) =>{
		
		dispatch({ type: 'MENU_ITEM_CHECK', payload: type});
	}
	const toggleLoadingTrue = () =>{
		dispatch({ type: 'TOGGLE_LOADING_TRUE'});
	}
	const toggleLoadingFalse = () =>{
		dispatch({ type: 'TOGGLE_LOADING_FALSE' });
	}

	//movie content
	const openMovieContent = () =>{
		// setLocation(coordinates)
		setIsMovieContentOpen(true);
	}
	const closeMovieContent = () =>{
		setIsMovieContentOpen(false)
	}

	const setMovieContentCoordinates = (coordinates) => {
		setLocation(coordinates);
	};

	const setMovieForMovieContent = (movie) =>{
		dispatch({ type: 'SET_MOVIE_FOR_MOVIE_CONTENT', payload: movie });
	}




	return (
		<MoviesContext.Provider
			value={{
				...state,
				fetchMovies,
				searchQueriedMovies,
				resetQueriedMovies,
				resetMenuMovies,
				setMenuItem,
				increasePage,
				menuItemCheck,
				toggleLoadingTrue,
				toggleLoadingFalse,
				isMovieContentOpen,
				openMovieContent,
				closeMovieContent,
				location,
				setMovieContentCoordinates,
				setMovieForMovieContent,
			}}
		>
			{children}
		</MoviesContext.Provider>
	);
};

// make sure use
export const useMoviesContext = () => {
	return useContext(MoviesContext);
};
