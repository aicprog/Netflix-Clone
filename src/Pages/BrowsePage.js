import React, {useState} from 'react'
import {
	Content,
	Footer,
	ReturnedColumns,
	Banner,
	CardPlaceholder,
	AvatarContent,
} from '../Components';
import LANDING_PAGE_DATA from '../fixtures/landingFooterData.json'
import styled from 'styled-components/macro'
import { useMoviesContext } from '../Context/movies.context';
import { useUserContext } from '../Context/user.context';


const BrowsePage = () => {


	const [chooseAvatar, setChooseAvatar] = useState(false);
	const { newAvatar } = useUserContext();


	//choosing an avatar
	if (!chooseAvatar && !newAvatar.changeOccurred) {
		return (
			<AvatarWrapper>
				{/* <img className="nav-logo" src={logo} alt="Netflix Logo" /> */}
				<AvatarContent setChooseAvatar={setChooseAvatar} />
			</AvatarWrapper>
		);
	}

	return (
		<span>
			<InnerContent />
		</span>
	);
};

const InnerContent = () =>{
	const {dataLoading} = useMoviesContext()
	const innerRef = React.useRef(null);




	const {
		menuItemChosen: {type, name},
		[type]: menuItemMovies,
		menuItemUrl,
		fetchMovies,
		currentPage,
	} = useMoviesContext();




	//if a menu item is clicked on
	if(type.length > 0){
		return (
			<MenuWrapper>
				<h1>
					<span className="menu">{name}</span>
				</h1>

				<ReturnedColumns
					movies={menuItemMovies}
					getMovies={fetchMovies}
					menuItemUrl={menuItemUrl}
					menuItemChosen={type}
					currentPage={currentPage}
					menuName={name}
				/>
			</MenuWrapper>
		);
	}
	return (
		<Wrapper ref={innerRef}>
			{dataLoading ? <CardPlaceholder/>: <Banner/>}
			<Content />
			<Footer footerData={LANDING_PAGE_DATA} />
		</Wrapper>
	);
}

export default BrowsePage

const AvatarWrapper = styled.div`
	background-color: blac;
	width: 100vw;
	height: 100vh;
	z-index: 200000000000000000000000000000;
	padding: 2rem;
	.nav-logo {
		/* object-fit: cover; */
		height: 25px;
		width: 100px;
		cursor: pointer;

		@media (max-width: 450px) {
			width: 50px;
			height: 20px;
		}
	}
`;

const Wrapper = styled.div`
	position: relative;
	overflow-y: hidden;
`;

const MenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	

	h1 {
		padding: 6rem 0rem 0rem 4rem;
		margin-bottom: -4rem;
		color: rgba(255, 255, 255, 1);

		.menu {
			color: rgba(255, 255, 255, 0.8);
		}
	}
`;