import React, {useState} from 'react'
import {
	Content,
	Footer,
	ReturnedColumns,
	Navbar,
	Banner,
	CardPlaceholder,
	AvatarContent,
} from '../Components';
import LANDING_PAGE_DATA from '../fixtures/landingFooterData.json'
import styled from 'styled-components/macro'
import { useMoviesContext } from '../Context/movies.context';
import logo from '../assets/logo.svg'
import { useUserContext } from '../Context/user.context';


const BrowsePage = () => {


	const [chooseAvatar, setChooseAvatar] = useState(false);
	const { newAvatar } = useUserContext();



	

	if (!chooseAvatar && !newAvatar.changeOccurred) {

		return (
			<AvatarWrapper>
				<img className="nav-logo" src={logo} alt="Netflix Logo" />
				<AvatarContent setChooseAvatar={setChooseAvatar} />
			</AvatarWrapper>
		);
	}
	return (
		<span>
			<Navbar />
			<InnerContent />
		</span>
	);
};

const InnerContent = () =>{
	const {dataLoading} = useMoviesContext()
	const innerRef = React.useRef(null);




	const {
		queriedMovies,
		queryString,
		searchQueriedMovies,
		menuItemChosen: {type, name},
		[type]: menuItemMovies,
		menuItemUrl,
		fetchMovies,
		currentPage,
	} = useMoviesContext();




	//if a query is made
	if (queryString.length > 0) {
		return (
			<QueryWrapper>
				<h1>Results for <span className="query">{queryString}</span></h1>
				<ReturnedColumns
					movies={queriedMovies}
					getMovies={searchQueriedMovies}
					queryString={queryString}
					currentPage={currentPage}
				/>
			</QueryWrapper>
		);
	}

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
const QueryWrapper = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		padding: 6rem 0rem 0rem 4rem;
		margin-bottom: -4rem;
		color: rgba(255, 255, 255, 1);

		.query {
			color: rgba(255, 255, 255, 0.8);
		}
	}
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