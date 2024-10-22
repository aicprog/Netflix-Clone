import React, { useRef, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Row } from '../../Components';
// import { useMoviesContext } from '../../Context/movies.context';
import { urlRequests } from '../../Requests/requests';

const Content = () => {
	const sections = Object.keys(urlRequests[0]);
	// const {closeMovieContent } = useMoviesContext();
	// const [index, setIndex] = React.useState(-1);
	const wrapperRef = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	// const handleClick = (e, id) => {
	// 	if (index !== id) {
	// 		closeMovieContent();
	// 		setIndex(id);
	// 	}
	// };
	return (
		<Wrapper ref={wrapperRef}>
			{sections.map((section) => {
				const { id, title, type, url, isLargeRow } = urlRequests[0][section];
				return (
					<section
						key={id}
						// onClick={(e) => handleClick(e, id)}
						// className={`${index === id && isMovieContentOpen ? 'active' : ''}`}
					>
						<Row
							title={title}
							fetchUrl={url}
							type={type}
							isLargeRow={isLargeRow}
						/>
						{/* {isMovieContentOpen && <MovieContent />} */}
					</section>
				);
			})}

			{/* {isMovieContentOpen && <MovieContent containerRef={wrapperRef} />} */}
		</Wrapper>
	);
};

export default Content;

const Wrapper = styled.div`
	margin-top: -20vh;
	z-index: 999;

	@media (max-width: 1650px) {
		margin-top: -15vh;
	}

	.active {
		margin-bottom: 558px;
		transition: all 0.5 ease-in-out;
	}
`;
