import React, {useEffect, useState} from 'react'
import styled from 'styled-components/macro'
import logo from '../../assets/logo.svg';

import { ImSearch } from 'react-icons/im';
import { MoviesSidebar } from '../../Components';
import {RiArrowDownSFill} from 'react-icons/ri'
import { headerLinks } from '../../constants/headerLinks';
import { useMoviesContext } from '../../Context/movies.context';
import { Link } from 'react-router-dom';
import AvatarSidebar from '../BrowsePage/AvatarSidebar';
import { useUserContext } from '../../Context/user.context';
import {AiFillCaretDown} from 'react-icons/ai'


const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
	const [toggleBrowse, setToggleBrowse] = useState(false)
	const [toggleSearch, setToggleSearch] = useState(false)
	const [toggleAvatar, setToggleAvatar] = useState(false)
	const [query, setQuery] = useState('')
	const [currentIndex, setCurrentIndex] = useState(false)
	//const [avatarClicked, setAvatarClicked] = useState(false);
		

	const { searchQueriedMovies, resetQueriedMovies, resetMenuMovies, setMenuItem, menuItemCheck } =
		useMoviesContext();

	const { avatarImg } = useUserContext();

    useEffect(() => {
        const scrollListener = window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setShowNav(true)
            
            }else {setShowNav(false)}
        })
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, [])

	const handleSubmitQuery = (e) =>{
		const query = e.target.value;
		setCurrentIndex(null)
		setQuery(query);
		searchQueriedMovies(query);
		
		if (query.length <= 0) {
			goHome();
		}


	}

	const goHome = () =>{
		setCurrentIndex(null);
		setQuery('');
		resetQueriedMovies()
		resetMenuMovies()
		setToggleSearch(false);
	}

	const handleMenuClick = (index, url, name, type) =>{
		resetQueriedMovies()
		setCurrentIndex(index)
		setQuery('')
		setMenuItem(type, name, url);
		menuItemCheck(type)
		setToggleSearch(false);

	}


	// if (avatarClicked) {
	// 	return <LoadingAvatar/>;
	// }

    return (
			<Nav showNav={showNav}>
				<WrapperLeft>
					<Link to="/browse" onClick={goHome}>
						<img className="nav-logo" src={logo} alt="Netflix Logo" />
					</Link>
					<ul className="menu">
						{headerLinks.map((headerLink, index) => (
							<li
								key={headerLink.id}
								className={`${
									currentIndex === headerLink.id ? 'disabled' : 'enabled'
								}`}
								onClick={() => {
									handleMenuClick(
										index,
										headerLink.url,
										headerLink.link,
										headerLink.type
									);
								}}
							>
								{headerLink.link}
							</li>
						))}
					</ul>
					<button
						className="browse"
						onMouseOver={() => {
							setToggleBrowse(true);
						}}
						onMouseLeave={() => {
							setToggleBrowse(false);
						}}
					>
						Browse
						<MoviesSidebar
							toggleBrowse={toggleBrowse}
							handleMenuClick={handleMenuClick}
						/>
						<RiArrowDownSFill />
					</button>
				</WrapperLeft>

				<WrapperRight togglesearch={toggleSearch}>
					<ImSearch
						onClick={() => {
							setToggleSearch((prevState) => {
								return !prevState;
							});
						}}
					/>
					<SearchForm togglesearch={toggleSearch}>
						<input
							placeholder="Titles, people, genres"
							value={query}
							onChange={handleSubmitQuery}
						></input>
					</SearchForm>

					<div className="whitespace" />
					<button
						className="avatar-button"
						onMouseOver={() => setToggleAvatar(true)}
						onMouseLeave={() => setToggleAvatar(false)}
					>
						<img className="nav-avatar" src={avatarImg} alt="Netflix Logo" />
						<AvatarSidebar
							toggleAvatar={toggleAvatar}
							//avatarClicked={avatarClicked}
							//setAvatarClicked={setAvatarClicked}
						/>
						<DownIcon className="updown-icon" />
					</button>
				</WrapperRight>
			</Nav>
		);


}




export default Navbar


const Nav = styled.nav`
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 20px 45px 20px 68px;
	height: 60px;
	background-color: ${({ showNav }) => (showNav ? '#111' : '')};
	z-index: 2000000;
	margin: 0;
	color: #fff;


	/* Animations */
	transition-timing-function: ease-in;
	transition: all 0.5s;

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

	.avatar-button {
		display: block;
		width: 80px;
		height: 80px;
		position: relative;
		background: transparent;
		border: none;

		@media (max-width: 540px) {
			padding: 0;
		}

		:hover {
			svg {
				-webkit-transform: rotate(180deg);
				-moz-transform: rotate(180deg);
				-ms-transform: rotate(180deg);
				-o-transform: rotate(180deg);
				transform: rotate(180deg);
				transition: 0.21s ease-in-out;
			}
		}
	}

	.nav-avatar {
		position: absolute;
		top: 23px;
		left: 25px;
		bottom: 0;
		width: 35px;
		height: 35px;
		border-radius: 6px;
		cursor: pointer;
	}

	@media (max-width: 450px) {
		padding-left: 10px;
		padding-right: 0px;
	}

	@media (max-width: 540px) {
		padding-left: 26px;
		padding-right: 0px;
	}

	@media (max-width: 730px) {
		padding-right: 15px;
	}
`;

const WrapperLeft = styled.div`
	display: flex;
	align-items: center;

	.menu {
		display: flex;
		list-style-type: none;
		justify-content: space-between;
		width: 350px;

		li {
			cursor: pointer;
			color: rgba(255, 255, 255, 0.7);

			:hover {
				opacity: 0.6;
			}
		}

		.disabled {
			pointer-events: none; //This makes it not clickable
			color: rgba(255, 255, 255, 1);
		}

		.enabled {
			pointer-events: visible;
		}

		@media (max-width: 950px) {
			display: none;
		}
	}

	.browse {
		text-decoration: none;
		background: transparent;
		border: none;
		color: #fff;
		position: absolute;
		top: 20px;
		left: 225px;
		cursor: pointer;
		display: none;
		height: 30px;
		//height: 60px;

		svg {
			font-size: 1.2rem;
		}

		@media (max-width: 950px) {
			display: flex;
		}

		@media (max-width: 730px) {
			font-size: 0.7rem;
			left: 180px;
			svg {
				font-size: 0.8rem;
			}
		}
		@media (max-width: 540px) {
			font-size: 0.7rem;
			left: 123px;

			svg {
				font-size: 0.8rem;
			}
		}

		@media (max-width: 450px) {
			display: flex;
			justify-content: center;
			align-items: center;
			left: 80px;
			font-size: 0.8rem;
			top: 15px;
		}
	}

	@media (max-width: 730px) {
		margin-left: -10px;
	}
`;


const WrapperRight = styled.div`
	display: flex;
	width: auto;
	justify-content: space-between;
	align-items: center;

	.whitespace {
		display: ${({ togglesearch }) => (togglesearch ? 'none' : 'static')};
		width: 228px;
	}

	svg {
		position: absolute;
		right: ${({ togglesearch }) => (togglesearch ? '340px' : '160px')}; //315px;
		transition: right ease-in-out 150ms;
		cursor: pointer;

		@media (max-width: 300px) {
			display: none;
		}

		@media (max-width: 730px) {
			font-size: 0.8rem;
			right: ${({ togglesearch }) => (togglesearch ? '265px' : '110px')};
		}
	}

`;

const SearchForm = styled.form`
	display: ${({ togglesearch }) => (togglesearch ? 'flex' : 'none')};
	padding-right: 1.5rem;

	input {
		color: #fff;
		background: #141414;
		border: 1px solid #fff;
		padding: 8.5px 16px 8.5px 12px;
		padding-left: 50px;
		font-size: 0.9rem;
		box-shadow: none;

		:focus {
			outline-width: 0;
		}

		@media (max-width: 300px) {
			display: none;
		}

		@media (max-width: 730px) {
			font-size: 0.8rem;
			padding-left: 30px;
			padding-right: 0px;
		}


	}

	@media (max-width: 730px) {
		padding-right: 1rem;
	}
`;

const DownIcon = styled(AiFillCaretDown)`
	position: absolute;
	top: 2rem;
	left: 4.3rem;
	color: #fff;
	-webkit-transition: 0.21s ease-in;
	-moz-transition: 0.21s ease-in;
	-o-transition: 0.21s ease-in;
	transition: 0.21s ease-in;

`;


