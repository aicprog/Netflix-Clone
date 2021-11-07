import React from 'react'
import styled from 'styled-components/macro'
import placeholder from '../../assets/placeholder.svg'

const ImagePlaceholder = ({name}) => {
    return (
			<Wrapper>
				<h2 className="name">{name}</h2>
				<Placeholder src={placeholder} />
			</Wrapper>
		);
}

export default ImagePlaceholder
const Wrapper = styled.span`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	height: 250px;
	width: 180px;
	background: #000;
	border-radius: 0.25rem;
	margin: auto;
	transition: transform 450ms;


	.name {
		color: #fff;
		width: auto;
		font-size: 1rem;
		padding: 20px 5px;
		margin: auto;
	}

	:hover {
		transform: scale(1.1) !important;
		//transform: scale(1.08);
	}
	:hover ~ img {
		transform: translateX(7%);
	}


`;
const Placeholder = styled.img`
	object-fit: fill;
	width: 100%;
	height: 80%;
	background: #000;
	border-radius: 0.25rem;
	margin: auto;
`;
