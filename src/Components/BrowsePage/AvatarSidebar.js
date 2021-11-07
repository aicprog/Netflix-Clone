import React from 'react'
import styled from 'styled-components/macro'
import { useUserContext } from '../../Context/user.context'




const AvatarSidebar = ({ toggleAvatar}) => {
	const { filteredUserAvatars, setUserAvatar, toggleNewAvatarChosen } =
		useUserContext();

	const handleClick = (avatar) =>{
		setUserAvatar(avatar); 
		toggleNewAvatarChosen('chosen', true);
		toggleNewAvatarChosen('changeOccurred', true);
		

	}
	return (
		<Wrapper toggleAvatar={toggleAvatar}>
			<aside>
				<div className="arrow" />
				<div className="topbar" />
				{filteredUserAvatars.map((avatar) => (
					<AvatarContent key={avatar.id} onClick={() => handleClick(avatar.img)}>
						<img src={avatar.img} alt={avatar.alt} />
						<p>{avatar.name}</p>
					</AvatarContent>
				))}
			</aside>
		</Wrapper>
	);
};

export default AvatarSidebar


const Wrapper = styled.div`
	text-align: center;
	justify-content: center;
	position: absolute;
	top: 79px;
	right: 5px;
	display: ${({ toggleAvatar }) => (toggleAvatar ? 'flex' : 'none')};


	.arrow {
		position: absolute;
		top: -14px;
		left: 80%;
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
		width: 150px;
		height: auto;
		background-color: #000;
		opacity: 0.9;
		border-radius: 2px;
	}
`;

const AvatarContent = styled.div`
	display: flex;
	padding: 1rem 0rem 0.5rem 1rem;
	align-items: center;
	cursor: pointer;

	img {
		border-radius: 0.2rem;
		height: 25px;
		width: 25px;
		margin-right: 0.5rem;
		
	}
	p {
		color: #fff;
	}

	:hover {
		background: #111//#b3b3b3;
		//padding: 1rem 0;
	}
`;


