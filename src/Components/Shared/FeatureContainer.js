import React from 'react'
import styled from 'styled-components/macro'
import homeBg from '../../assets/home-bg.jpg';

const FeatureContainer = ({children, className}) => {
    return (
        <Container background={homeBg} className={className}>
            {children}
        </Container>
    )
}

export default FeatureContainer

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 8px solid #222;
	text-align: center;
	padding: 105px 0;
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
