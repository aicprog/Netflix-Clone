import React, {useState} from 'react'
import styled from 'styled-components/macro'
import { useUserContext } from '../../Context/user.context'
import { IoMdRemoveCircleOutline } from 'react-icons/io';

const AvatarContent = ({ setChooseAvatar }) => {
	const {
		setUserAvatar,
		filteredUserAvatars,
		removeUserAvatar,
		toggleNewAvatarChosen,
	} = useUserContext();
    const [toggleManageProfile, setToggleManageProfile] = useState(false)

	const hanldeClick = (avatar, id) => {
        if(toggleManageProfile){
			//remove user if there is more than one user
            if(filteredUserAvatars.length <=1){
                setToggleManageProfile(false)
            }else{
                removeUserAvatar(id);
            }
        }
		//set avatar
        else{
			toggleNewAvatarChosen('chosen', true);
			toggleNewAvatarChosen('changeOccurred', true);
            setUserAvatar(avatar);
            setChooseAvatar(true);
        }

	};

	return (
		<Wrapper>
			<h1>{`${toggleManageProfile ? 'Manage Profiles' : "Who's watching"}`}</h1>
			<p>{`${
				filteredUserAvatars.length <= 1 && toggleManageProfile
					? 'You cannot delete your default user account.'
					: ''
			}`}</p>
			<AvatarContainer>
				{filteredUserAvatars.map((avatar) => (
					<Avatar
						key={avatar.id}
						className={`${toggleManageProfile && 'manage-profile'}`}
						background={avatar.img}
						onClick={() => hanldeClick(avatar.img, avatar.id)}
					>
						{toggleManageProfile && <SubtractCircle />}
					</Avatar>
				))}
			</AvatarContainer>
			<button
				className={`manage-button ${
					toggleManageProfile && 'solid-manage-button'
				}`}
				onClick={() => {
					setToggleManageProfile(!toggleManageProfile);
				}}
			>{`${toggleManageProfile ? 'Done' : 'Manage Profiles'}`}</button>
		</Wrapper>
	);
};

export default AvatarContent

const Wrapper = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	h1 {
		color: #fff;
		line-height: 1.2;
		font-size: 3.5vw;
		font-weight: normal;
	}

	.manage-button {
		font-size: 1.3vw;
		border: 1px solid grey;
		padding: 0.5em 1.5em;
		letter-spacing: 2px;
		cursor: pointer;
		background-color: transparent;
		color: gray;
		margin: 2em 0 1em 0;
		min-width: 20px;
		min-height: 30px;

		:hover {
			color: #fff;
			border: 1px solid #fff;
		}

		@media screen and (max-width: 800px) {
			font-size: 13px;
		}
	}

	.solid-manage-button {
		background-color: #fff;
		color: #000;
		font-weight: 500;

		:hover {
			background-color: #c00;
			border: 1px solid #fff;
		}
	}
`;

const AvatarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem 3rem 2.5rem;


`;
const Avatar = styled.div`
	background: url(${({ background }) => background});
	border-radius: 8px;
	cursor: pointer;
	transition: all ease-in;
	width: 10vw;
	max-width: 200px;
	min-width: 84px;
	margin: 0 2vw 0 0;
	border: 4px solid black;
	max-height: 200px;
	min-height: 84px;
	height: 10vw;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;

	&.manage-profile {
		background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.35),
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0.35)
			),
			url(${({ background }) => background});
		background-size: cover;
	}

	:hover {
		border: 3px solid #fff;
	}

`;

const SubtractCircle = styled(IoMdRemoveCircleOutline)`
	color: #fff;
	max-width: 80px;
	max-height: 80px;
	min-height: 25px;
	min-width: 25px;
	width: 33%;
	height: 33%;
`;


