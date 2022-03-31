import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { useMoviesContext } from '../../Context/movies.context';
import { base_img_url } from '../../Requests/requests';
import { MdOutlineClose } from 'react-icons/md';

const MovieContent = () => {
	const { location, movieChosen, closeMovieContent } = useMoviesContext();
	const container = useRef(null);

	useEffect(() => {
		const { y } = location;
		container.current.style.top = `${y}px`;
		const scrollTo = y - 300;
		window.scrollTo({ top: scrollTo, behavior: 'smooth' });
	}, [location, movieChosen]);

	return (
		<Content ref={container}>
			<Background background={`${base_img_url}${movieChosen.backdrop_path}`}>
				<div className="left"></div>
				<div className="right"></div>
			</Background>
			<ContentContainer className="content-container">
				<InnerContent>
					<h1>{movieChosen.title ? movieChosen.title : movieChosen.name}</h1>
					<p>{movieChosen.overview.substring(0, 150)}</p>
					<CloseIcon onClick={closeMovieContent} />
					<PlayButton>Play</PlayButton>
				</InnerContent>
			</ContentContainer>
		</Content>
	);
};

export default MovieContent;

const Content = styled.div`
	//margin-top: 40px;
	height: 548px;
	width: 100%;
	left: 0;
	right: 0;
	position: absolute;
	z-index: 1000;
`;
const Background = styled.div`
	display: flex;
	height: 100%;

	.left {
		background: black;
		width: 30%;
		position: relative;

		:before {
			content: '';
			position: absolute;
			background-image: linear-gradient(to right, #000, transparent);
			top: 0;
			bottom: 0;
			left: 100%;
			width: 275px;
		}
	}

	.right {
		background: green;
		width: 70%;
		background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.35),
				rgba(0, 0, 0, 0.1),
				rgba(0, 0, 0, 0.35)
			),
			url(${({ background }) => background});
		background-size: cover;
	}
`;

const ContentContainer = styled.div`
	color: white;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 30px;
`;

const InnerContent = styled.div`
	width: 30%;

	h1 {
		font-size: 3rem;
	}

	p {
		line-height: 1.6rem;
		color: rgba(255, 255, 255, 0.6);
		margin-top: 2.5em;
	}

	@media (max-width: 650px) {
		width: 60%;
		margin-left: 1.5rem;
		h1 {
			font-size: 1.5rem;
		}

		p {
			line-height: 1.4rem;
			color: rgba(255, 255, 255, 0.6);
			margin-top: 2.5em;
		}
	}
`;

const CloseIcon = styled(MdOutlineClose)`
	position: absolute;
	right: 1.5rem;
	top: 2rem;
	font-size: 2rem;
	cursor: pointer;
`;

const PlayButton = styled.button`
	cursor: pointer;
	color: #fff;
	outline: none;
	border: none;
	font-weight: 700;
	border-radius: 0.2vw;
	padding: 2rem;
	margin-right: 1rem;
	padding-top: 0.5rem;
	background-color: rgba(51, 51, 51, 0.7);
	padding-bottom: 0.5rem;
	margin-top: 1.5rem;

	:hover {
		color: #000;
		background-color: #e6e6e6;
		transition: all 0.2s;
	}

	@media (max-width: 450px) {
		padding: 1rem;
	}
`;
