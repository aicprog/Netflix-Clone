import React from 'react'
import styled from 'styled-components/macro'
import { headerLinks } from '../../constants/headerLinks';

const MoviesSidebar = ({ toggleBrowse, handleMenuClick }) => {

	return (
		<SidebarWrapper toggleBrowse={toggleBrowse}>
			<aside>
				<div className="arrow" />
				<div className="topbar" />
				<ul className="menu">
					{headerLinks.map((headerLink, index) => (
						<li
							key={headerLink.id}
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
			</aside>
		</SidebarWrapper>
	);
};

export default MoviesSidebar;






const SidebarWrapper = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
	position: absolute;
	top: 30px;
	//margin-left: 140px;
	margin-left: -67px;
	display: ${({ toggleBrowse }) => (toggleBrowse ? 'flex' : 'none')};
	//padding: 2rem 0rem;
	.arrow {
		position: absolute;
		top: -14px;
		left: 50%;
		border-width: 7px;
		margin-left: -7px;
		border-color: transparent transparent #e5e5e5;
		border-style: solid;
		height: 0;
		width: 0;
	}

	.topbar {
		height: 2px;
		position: absolute;
		left: 0;
		right: 0;
		background: #e5e5e5;
	}

	aside {
		background-color: #000;
		opacity: 0.9;
		width: 260px;
		height: 300px;
		border-radius: 0.15rem;
		display: flex;
		justify-content: center;
		//padding: 1rem 0rem;

		.menu {
			width: 100%;
			list-style-type: none;
			display: flex;
			flex-direction: column;
			border-radius: 2px;
			//margin-top: 1rem;
			padding-inline-start: 0px;
		}

		li {
			display: block;
			font-size: 1rem;
			transition: all 0.3s linear;
			height: 25%;
			display: flex;
			justify-content: center;
			align-items: center;

			:hover {
				background: #111//#b3b3b3;
				//padding: 1rem 0;
			}
		}
	}

	@media (max-width: 450px) {
		left: -5.5px;
	}


`;





