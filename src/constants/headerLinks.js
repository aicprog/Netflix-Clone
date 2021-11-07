const apiKey = process.env.REACT_APP_MOVIES_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3'

export const headerLinks = [
	{
		id: 0,
		link: 'Originals',
		type: 'originals',
		url: `${baseUrl}/discover/tv?api_key=${apiKey}&with_networks=213`,
	},
	{
		id: 1,
		link: 'Trending',
		type: 'trendingNow',
		url: `${baseUrl}/trending/all/week?api_key=${apiKey}&language=en-US`,
	},
	{
		id: 2,
		link: 'Now Playing',
		type: 'nowPlaying',
		url: `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US`,
	},
	{
		id: 3,
		link: 'Top Rated',
		type: 'topRated',
		url: `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US`,
	},
];
