const apiKey = process.env.REACT_APP_MOVIES_API_KEY;


export const base_img_url = 'https://image.tmdb.org/t/p/original/';

export const search_url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&include_adult=false&query=`

export const urlRequests = [
	{
		netflixOriginals: {
			id: 0,
			title: 'Netflix Originals',
			type: 'netflixOriginals',
			url: `/discover/tv?api_key=${apiKey}&with_networks=213`,
			isLargeRow: true,
		},
		trending: {
			id: 1,
			title: 'Trending',
			type: 'trending',
			url: `/trending/all/week?api_key=${apiKey}&language=en-US`,
		},
		actionMovies: {
			id: 2,
			title: 'Action Movies',
			type: 'actionMovies',
			url: `/discover/movie?api_key=${apiKey}&with_genres=28`,
		},
		comedyMovies: {
			id: 3,
			title: 'Comedy Movies',
			type: 'comedyMovies',
			url: `/discover/movie?api_key=${apiKey}&with_genres=35`,
		},
		horrorMovies: {
			id: 4,
			title: 'Horror Movies',
			type: 'horrorMovies',
			url: `/discover/movie?api_key=${apiKey}&with_genres=27`,
		},
		romanceMovies: {
			id: 5,
			title: 'Romance Movies',
			type: 'romanceMovies',
			url: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
		},
		documentaries: {
			id: 6,
			title: 'Documentaries',
			type: 'documentaries',
			url: `/discover/movie?api_key=${apiKey}&with_genres=99`,
		},
	},
];