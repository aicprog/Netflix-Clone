import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useMoviesContext } from '../../Context/movies.context';
import { CarouselSlider } from '../../Components';
import CardPlaceholder from '../Shared/CardPlaceholder';

const Row = ({ title, type, fetchUrl, isLargeRow }) => {
	const {
		[type]: movies,
		fetchMovies,
		dataLoading,
		// toggleLoadingFalse,
	} = useMoviesContext();

	useEffect(() => {
		fetchMovies(fetchUrl, type);
		// .then(() => {
		// 	toggleLoadingFalse();
		// });
	}, [fetchUrl]);

	if (dataLoading || movies.length === 0) {
		return <CardPlaceholder />;
	}

	return (
		<RowContainer>
			<Title>{title}</Title>
			{/* {dataLoading ? (
				<CardPlaceholder />
			) : (
				<CarouselSlider movies={movies} isLargeRow={isLargeRow} />
			)} */}
			<CarouselSlider movies={movies} isLargeRow={isLargeRow} />
		</RowContainer>
	);
};

export default Row;

const RowContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 0;
	padding-right: 0;
	overflow-y: hidden;
`;
const Title = styled.h2`
	color: #fff;
	margin: 0 60px;
	font-size: 1.4vw;
	z-index: 1000;

	@media (max-width: 800px) {
		font-size: 12px;
	}
`;
