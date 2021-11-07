import React from 'react'
import {Footer, HeroFeature, Jumbotron, WelcomeForm} from '../Components/'
import {Accordion} from '../Components/'
import styled from 'styled-components'
import LANDING_PAGE_DATA from '../fixtures/landingFooterData.json';

const LandingPage = () => {
    return (
			<Wrapper>
				<HeroFeature />
				<Jumbotron />
				<Accordion />
				<WelcomeForm borderBottom={true} />
				<Footer footerData={LANDING_PAGE_DATA} />
			</Wrapper>
		);
}

export default LandingPage


const Wrapper = styled.div`
	position: relative;
	overflow-x: hidden;
`;