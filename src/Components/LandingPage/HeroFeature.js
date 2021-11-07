import React from 'react'
import styled from 'styled-components/macro'
import {WelcomeForm, FeatureContainer} from '../../Components';
import Header from './Header';

const HeroFeature = () => {
    return (
			<FeatureContainer>
				<Header />
				<Title>Unlimited movies, TV shows, and more.</Title>
				<Subtitle>Watch anywhere. Cancel any time.</Subtitle>
				<WelcomeForm />
			</FeatureContainer>
		);
}

export default HeroFeature


export const Container = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	border-bottom: 8px solid #222;
	text-align: center;
	padding: 105px 45px;

	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.35),
			rgba(0, 0, 0, 0.1),
			rgba(0, 0, 0, 0.35)
		),
		url(${({ background }) => background});

	@media (max-width: 550px) {
		padding: 15px 45px;
	}
`;


export const Title = styled.h1`
	color: white;
	max-width: 660px;
	font-size: 4rem;
	font-weight: 600;
	margin: auto;

	padding-top: 150px;


	@media (max-width: 950px) {
		font-size: 45px;
	}
`;
export const Subtitle = styled.h3`
	color: white;
	font-size: 26px;
	font-weight: normal;
	margin: 16px auto;

	@media (max-width: 600px) {
		font-size: 18px;
	}
`;

