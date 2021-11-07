import React from 'react'
import styled from 'styled-components/macro';
import {AiOutlineRight} from 'react-icons/ai'
import { Link as RouterLink } from 'react-router-dom';
import {SIGN_IN } from '../../constants/routes';



const WelcomeForm = ({borderBottom}) => {



    return (
			<Container borderBottom={borderBottom}>
				<Text>
					Ready to watch? Enter your email to create or restart your membership.
				</Text>
				<InputWrapper>
					<Input placeholder="Email address" />
						<Button to={SIGN_IN}>
							Get Started
							<IconRight />
						</Button>
				</InputWrapper>
				<Break />
			</Container>
		);
}

export default WelcomeForm


const Container = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	flex-wrap: wrap;
	padding-bottom: 70px;
	border-bottom: ${({ borderBottom }) =>
		borderBottom === true ? '8px solid #222' : ''};


	@media (max-width: 950px) {
		flex-direction: column;
		align-items: center;
	}
`;
const InputWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1.3rem;

	@media(max-width: 950px){
		flex-direction: column;
		align-items: center;
		width: 95%;
		height: 50px;
		padding-top: 25px;
	}
`;
const Input = styled.input`
	max-width: 450px;
	width: 100%;
	border: 0;
	padding: 10px;
	height: 70px;
	box-sizing: border-box;

	@media (max-width: 1400px) {
		height: 60px;
	}

	@media (max-width: 950px) {
		height: 50px;
		font-size: 16px;
		margin-top: 2rem;
		padding: 15px;
	}

	@media (max-width: 550px) {
		padding: 12px;
	}
`;
const Button = styled(RouterLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70px;
	background: rgba(229, 9, 20, 0.9);
	color: white;
	text-transform: uppercase;
	padding: 0 32px;
	font-size: 26px;
	border: 0;
	cursor: pointer;
	text-decoration: none;

	img {
		margin-left: 10px;
		filter: brightness(0) invert(1);
		width: 24px;

		@media (max-width: 1000px) {
			width: 16px;
		}
	}

	&:hover {
		background: rgba(229, 9, 20, 1);
	}

	@media (max-width: 1400px) {
		height: 60px;
		font-size: 18px;
	}

	@media (max-width: 950px) {
		height: 50px;
		font-size: 12px;
		padding: 0.875rem 0;
		font-weight: bold;
		width: 140px;
		margin: 20px auto;
		text-align: center;
		font-weight: normal;
		border-radius: 4px;
	}
`;

const IconRight = styled(AiOutlineRight)`
	font-size: 1.5rem;
	margin-left: 8px;

	@media (max-width: 1400px) {
		font-size: 1.1rem;
	}

	@media (max-width: 950px) {
		font-size: 0.8rem;
	}
`;

const Break = styled.div`
	flex-basis: 100%;
	height: 0;

`;
const Text = styled.p`
    font-size: 19.2px;
  color: white;
  text-align: center;

 @media (max-width: 950px) {
	 max-width: 80%;
 }

  /* @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  } */
`;
