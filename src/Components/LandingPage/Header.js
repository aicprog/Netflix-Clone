import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import {LANDING_PAGE, SIGN_IN} from '../../constants/routes'

//styling
import logo from '../../assets/logo.svg'
import styled from 'styled-components/macro';
import { Dropdown } from '../../Components';


const Header = () => {
    return (
			<Background>
				<Container>
					<Frame>
						<Logo to={LANDING_PAGE}>
							<img src={logo} alt="netflix" />
						</Logo>
						<Dropdown top="24.5px" right="170px" beforeX="-110%" afterX="15%" />
						<ButtonLink to={SIGN_IN}>Sign In</ButtonLink>
						
					</Frame>
				</Container>
			</Background>
		);
}

export default Header

//styled components

export const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
	display: flex;
	flex-direction: column;
	background: url(${({ src }) => src });
	overflow-x: hidden;


`;

export const Container = styled.div`
	margin: 0 40px;
	height: 100px;
	align-items: center;
    padding: 1.5rem 1rem;
    max-width: 100%;



	@media (max-width: 1000px) {
		margin: 0 30px;
	}
`;
const Frame = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100%;
`;
const Logo = styled(RouterLink)`
    display: flex;

	img {
        width: 22%;
		@media (min-width: 1000px) {
			width: 15.5%;
		}
		@media (max-width: 550px) {
			width: 25%;
		}
	}
`;


const ButtonLink = styled(RouterLink)`
	display: block;
	background-color: #e50914;
	width: 84px;
	height: fit-content;
	color: white;
	border: 0;
	font-size: 15px;
	border-radius: 3px;
	padding: 8px 17px;
	cursor: pointer;
	text-decoration: none;

    position: absolute;
    right: 57px;
    top: 1.5rem;

	&:hover {
		background: #f40612;
	}
`;
