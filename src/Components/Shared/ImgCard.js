import React from 'react';
import styled from 'styled-components/macro';
import { ImagePlaceholder } from '..';
import { base_img_url } from '../../Requests/requests';
import placeholder from '../../assets/placeholder.svg';

const ImgCard = ({ isLargeRow = false, movie }) => {
	//console.log(movie)
	const { title, poster_path, backdrop_path } = movie;

	//console.log(poster_path === null);
	if (poster_path === null && isLargeRow) {
		return <ImagePlaceholder name={title} />;
	}
	return (
		<Img
			isLargeRow={isLargeRow}
			src={`${base_img_url}${isLargeRow ? poster_path : backdrop_path}`}
			alt={title}
			onError={(e) => {
				e.target.onerror = null;
				e.target.src = placeholder;
			}}
		/>
	);
};

export default ImgCard;

const Img = styled.img`
	object-fit: contain; //keeps aspect ratio
	max-height: ${({ isLargeRow }) => (isLargeRow ? '250px' : '150px')}; //150px;
	transition: transform 450ms;
	margin-right: 10px;
	border-radius: 0.25rem;
	cursor: pointer;

	:hover ~ img {
		transform: translateX(7%);
	}

	@media (max-width: 851px) {
		width: ${({ isLargeRow }) => (isLargeRow ? '250px' : '200px')};
	}
`;
