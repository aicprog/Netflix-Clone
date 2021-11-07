import React, {useState} from 'react'
import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import { FeatureContainer, Footer } from '../Components';
import signInFooterData from '../fixtures/signInFooterData.json';
import { Link as RouterLink } from 'react-router-dom';
import { history } from '../Components';
//assets
import fb_logo from "../assets/fb-logo.png";
import logo from "../assets/logo.svg";

import {LANDING_PAGE} from '../constants/routes'


const SignInPage = () => {
	//use state for username and password 
	const [state, setState] = useState({email: "", password: ""})


	const handleInputChange = (e) =>{
		const value = e.target.value 
		const name = e.target.name

		setState((prevState) =>{
			return(
				{...prevState, [name]: value}
			)
		})
	}

	const handleSubmit = (e) =>{
		e.preventDefault()
		//window.location.href = '/browse';
		 history.push('/browse');
	}

    return (
			<MainContainer>
				<Logo to={LANDING_PAGE}>
					<img src={logo} alt="netflix" className="logo_img" />
				</Logo>
				<Form>
					<Title>Sign In</Title>
					<FormInput
						placeholder="Email or phone number"
						name="email"
						value={state.email}
						onChange={handleInputChange}
					/>
					<FormInput
						placeholder="Password"
						name="password"
						type="password"
						value={state.password}
						onChange={handleInputChange}
					/>
				<FormSubmit onClick={handleSubmit}>Sign In</FormSubmit>
					<FormHelp>
						<p>
							<input type="checkbox" /> Remember me
						</p>
						<p>Need help?</p>
					</FormHelp>
					<FormText>
						<div className="facebook-login">
							<img src={fb_logo} alt="" className="fb-logo" />
							<p>Login with Facebook</p>
						</div>
						<div className="signUp">
							<p>New to Netflix? </p>
							<FormLink to="/signup"> Sign up now</FormLink>
						</div>
						<div className="captcha">
							<span>
								This page is protected by Google reCAPTCHA to ensure you're not
								a bot. <a href="/">Learn More</a>
							</span>
						</div>
					</FormText>
				</Form>
				<FooterWrapper>
					<Footer footerData={signInFooterData} />
				</FooterWrapper>
			</MainContainer>
		);
}

export default SignInPage

const MainContainer = styled(FeatureContainer)`
	padding-bottom: 0px;
	margin-bottom: 0;
	border-bottom: 0px;
	text-align: left;
	display: flex;
	flex-direction: column;

	@media (max-width: 750px) {
		background: #000;
		padding: 50px 0px;
	}

	@media (max-width: 550px) {
		padding: 50px 0px;
	}
`;

const Logo = styled(RouterLink)`
	display: flex;
	padding-left: 16px;
	margin-left: 20px;
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	padding-top: 22px;

	.logo_img {
		height: 45px;
		width: 167px;
	}


`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	min-height: 660px;
	background-color: rgba(0, 0, 0, 0.65);
	border-radius: 5px;
	width: 100%;
	margin: auto;
	max-width: 450px;
	padding: 60px 68px 40px;
	margin-bottom: 100px;

	@media (max-width: 750px) {
		background: #000;
		min-height: 75vh;
		min-width: 100vw;
		border-bottom: 1px solid #b3b3b3;
		padding-bottom: 0;
		min-height: 545px;
		margin-bottom: 0px;
		
	}
`;
const Title = styled.h1`
	font-size: 32px;
	color: #fff;
	margin-top: 0;
	margin-bottom: 28px;
`;
const FormSubmit = styled.button`
	width: 100%;
	border-radius: 4px;
	font-size: 16px;
	padding: 1rem;
	background: #e50914;
	opacity: 0.95;
	border: none;
	color: #fff;
	font-weight: 700;
	margin-top: 24px;
	margin-bottom: 12px;
	cursor: pointer;

	:hover{
		opacity: 1;
	}
`;

const FormHelp = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	color: #b3b3b3;

	p {
		font-weight: 500;
		color: #b3b3b3;
		font-size: 13px;
	}

	input{
		background: #fff;
	}
`;

const FormInput = styled.input`
	height: 40px;
	width: 100%;
	border-radius: 3px;
	color: #fff;
	background: #333;
	border: 1px solid #333;
	padding-left: 15px;
	box-sizing: border-box;
	outline: none;
	margin-bottom: 1rem;
	`

const FormText = styled.p`
	.facebook-login {
		display: flex;
		width: 100%;
		padding-top: 3.5rem;
		align-items: center;

		p {
			color: #737373;
			cursor: pointer;
			font-size: 13px;
			font-weight: 500;
		}
		.fb-logo {
			width: 20px;
			margin-right: 10px;
		}
	}

	.signUp {
		display: flex;
		color: #737373;
		margin-top: 1rem;
		font-size: 16px;
		font-weight: 500;
	}

	.captcha {
		margin-top: 11px;
		font-size: 13px;
		color: #8c8c8c;

		a {
			text-decoration: none;
			border: none;
			color: #0071eb;
			cursor: pointer;
		}
	}
`;

const FormLink = styled(Link)`
	text-decoration: none;

	&&&{
		color:  #fff;
		padding-left: 4px;
	}
`;

const FooterWrapper = styled.div`
	background-color: rgba(0, 0, 0, 0.55);
	text-align: left;
	position: relative;
	
`;
