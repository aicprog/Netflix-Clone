import React from 'react'
import { useMoviesContext } from '../Context/movies.context';
import styled from 'styled-components/macro'
import {ReturnedColumns} from '../Components';


const SearchPage = () => {

    	const {
		queriedMovies,
		queryString,
		searchQueriedMovies,
		currentPage,
	} = useMoviesContext();


		return (
			<QueryWrapper>
				<h1>Results for <span className="query">{queryString}</span></h1>
				<ReturnedColumns
					movies={queriedMovies}
					getMovies={searchQueriedMovies}
					queryString={queryString}
					currentPage={currentPage}
				/>
			</QueryWrapper>
		);
	}

export default SearchPage

const QueryWrapper = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		padding: 6rem 0rem 0rem 4rem;
		margin-bottom: -4rem;
		color: rgba(255, 255, 255, 1);

		.query {
			color: rgba(255, 255, 255, 0.8);
		}
	}
`;
