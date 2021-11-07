import React, {useState, useEffect} from 'react'
import { useMoviesContext } from '../../Context/movies.context'
import { CardPlaceholder, ImgCard } from '..';
import styled from 'styled-components'



const ReturnedColumns = ({ movies, getMovies, menuItemUrl = '', queryString = '', menuItemChosen='', menuName=''}) => {
	const { currentPage, increasePage } = useMoviesContext();
	const [loading, setLoading] = useState(true)


    useEffect(() => {
                if (currentPage === 1) {
                    window.scrollTo(0, 0);
                }
    });
    
	useEffect(() => {
		const event = window.addEventListener('scroll', () => {
			if (
				(window.innerHeight + window.scrollY) >=
				document.body.scrollHeight - 2
			) {
                increasePage()
			}
		})
		return () => window.removeEventListener('scroll', event);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		//searchMovies(queryString, page);
		if (queryString) {
			getMovies(queryString, currentPage).then(() => {
				setLoading(false);
			});
		} else {
			getMovies(
				`${menuItemUrl}&page=${currentPage}`,
				menuItemChosen,
				menuItemChosen,
				menuName
			).then(() => {
				setLoading(false);
			});
		}
	}, [currentPage, menuItemChosen]);

	if(loading){
		return <CardPlaceholder/>
	}



	return (
		<QueriedRowContainer>
			{movies.map((movie) => (
				<ImgCard movie={movie} isLargeRow={true} key={movie.id * Math.random()}/>
			))}
		</QueriedRowContainer>
	);
};

export default ReturnedColumns;


const QueriedRowContainer = styled.div`
	display: grid;
	grid-template-columns: 300px repeat(auto-fill, 250px) 200px;
	margin-top: 10rem;

	grid-row-gap: 1.5rem;
	justify-items: center;

	.loading {
		width: 6rem;
		height: 6rem;
		margin: 0 auto;
		margin-top: 10rem;
		border-radius: 50%;
		border: 4px solid #ccc;
		border-top-color: var(--clr-primary-5);
		animation: spinner 0.6s linear infinite;
	}
	@media (max-width: 1270px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	@media (max-width: 851px) {
		grid-template-columns: repeat(3, 220px);
	}
	@media (max-width: 651px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 300px) {
		display: flex;
		flex-direction: column;
	}
`;

//const ImageCard = styled(ImgCard)``;