import React from 'react'
import styled from 'styled-components/macro'
import { useMoviesContext } from '../../Context/movies.context';
import { useUserContext } from '../../Context/user.context';
import { history } from '../../Components';

const LoadingAvatar = ({children}) => {
    const { avatarImg, newAvatar, toggleNewAvatarChosen } = useUserContext();
    const { resetQueriedMovies, resetMenuMovies } = useMoviesContext();


    React.useEffect(() => {
			if (newAvatar.chosen) {
				resetQueriedMovies();
				resetMenuMovies();
				setTimeout(() => {
					history.push({
						pathname: '/browse',
					});
					toggleNewAvatarChosen('chosen', false);
				}, 1000);
			}
		}, [newAvatar.chosen]);

    if(newAvatar.chosen){

        return (
					<Container>
						<div className="wrapper">
							<div className="loading">
								<img src={avatarImg} alt="avatar_image" />
								<div className="bulletouter">
									<div className="bullettinner"></div>
									<div className="mask"></div>
									<div className="dot"></div>
					
								</div>
							</div>
						</div>
					</Container>
				);
    }
    
    return (<>{children}</>)
    
}

export default LoadingAvatar

const Container = styled.div`
	@keyframes loadinganim {
		0% {
			transform: rotate(360deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	img {
		width: 65px;
		height: 65px;
		border-radius: 8px;
		position: absolute;
		z-index: 2;
		right: 48%;
		top: 47%;
	}

	.wrapper {
		background: transparent;
		width: 100vw;
		height: 100vh;
		color: white;
		text-align: center;
		display: table;
	

		.loading {
			display: table-cell;
			width: 100%;
			font-size: 12px;
			font-weight: bold;
			text-transform: uppercase;
			letter-spacing: 3px;
			vertical-align: middle;
			font-family: helvetica, sans-serif;
			position: relative;

			.bulletouter {
				animation: loadinganim 1s infinite;
				animation-timing-function: linear;
				animation-direction: reverse;
				width: 180px;
				height: 187px;
				background: #e50914;
				border-radius: 50%;
				margin: 0 auto;

				.bullettinner {
					position: relative;
					left: -5px;
					width: 175px;
					height: 175px;
					background: black;
					border-radius: 50%;
					margin: 0 auto;
				}
				.mask {
					position: relative;
					left: -19px;
					top: -33px;
					width: 90px;
					height: 15px;
					background: black;
					transform: rotate(45deg);
				}
				.dot {
					position: relative;
					left: 55px;
					top: -20px;
					width: 13px;
					height: 13px;
					background: #e50914;
					border-radius: 50%;
				}
			}
			p {
				padding-top: 23px;
			}
		}
	}
`;
