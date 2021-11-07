import React, {useState, useEffect} from 'react'
import { useMoviesContext } from '../../Context/movies.context';
import { base_img_url } from '../../Requests/requests';
import styled from 'styled-components';



const Banner = () => {
    const {netflixOriginals} = useMoviesContext();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
			const movie =
				netflixOriginals[
					Math.floor(Math.random() * (netflixOriginals.length - 1) + 1)
				];

			setMovie(movie);
		}, [netflixOriginals]);


    function truncate(str, number){
        return str?.length > number ? str.substring(0, number - 1) + "..." : str;
    }

		// if (dataLoading) {
		// 	return <CardPlaceholder />;
		// }

    
    return (
			<BannerWrapper
				style={{
					backgroundSize: 'cover',
					backgroundImage: `linear-gradient(
						to bottom,
						rgba(0, 0, 0, 0.35),
						rgba(0, 0, 0, 0.1),
						rgba(0, 0, 0, 0.35)
					),url(${base_img_url}${movie?.backdrop_path})`,
					backgroundPosition: 'center center',
				}}
			>
				<ContentWrapper>
					<BannerContents>
						<h1 className="banner-title">
							{movie?.title || movie?.name || movie?.original_name}
						</h1>
						<div className="banner-buttons">
							<BannerButton> Play </BannerButton>
							<BannerButton> My List</BannerButton>
						</div>
						<h1 className="banner-description">
							{truncate(movie?.overview, 200)}
						</h1>
					</BannerContents>
				</ContentWrapper>
				<Fade />
			</BannerWrapper>
		);
}

export default Banner

const BannerWrapper = styled.header`
	color: white;
	object-fit: cover;
	height: 648px;
	position: relative;
	overflow-y: hidden;

	//margin-bottom: -1rem;

	@media (min-width: 1500px) {
		height: 55vw;
	}

	@media (max-width: 300px) {
		height: 400px;
	}
`;



const ContentWrapper = styled.div`
	height: 75%;
	display: flex;
	align-items: center;
	padding-left: 35px;
	overflow-y: hidden;

	@media (max-width: 300px) {
		padding-left: 15px;
	}
`;

const BannerContents = styled.div`
	margin-left: 30px;
	height: 190px;

	
	// padding-top: 180px;

	.banner-title {
		font-size: 5rem;
		font-weight: 800;
		padding-bottom: 0.3rem;

		@media (max-width: 1200px) {
			font-size: 3.5rem;
		}

		@media (max-width: 800px) {
			font-size: 2.5rem;
		}
		@media (max-width: 450px) {
			font-size: 1.5rem;
		}
	}

	.banner-description {
		width: 45rem;
		line-height: 1.3;
		padding-top: 0rem;
		font-size: 1.4rem;
		max-width: 480px;
		height: 80px;

		@media (max-width: 1650px) {
			font-size: 1.1rem;
		}
		@media (max-width: 800px) {
			font-size: 1rem;
			max-width: 250px;
		}
		@media (max-width: 450px) {
			display: none;
		}
	}

	@media (max-width: 450px) {
		margin-left: 0px;
	}
`;
const BannerButton = styled.button`
	cursor: pointer;
	color: #fff;
	outline: none;
	border: none;
	font-weight: 700;
	border-radius: 0.2vw;
	padding: 2rem;
	margin-right: 1rem;
	padding-top: 0.5rem;
	background-color: rgba(51, 51, 51, 0.7);
	padding-bottom: 0.5rem;

	:hover {
		color: #000;
		background-color: #e6e6e6;
		transition: all 0.2s;
	}

	@media (max-width: 450px) {
		padding: 1rem;
	}
`;

const Fade = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10.4rem;
    width: 100%;
    background-image: linear-gradient(
        180deg, 
        transparent, 
        rgba(37,37,37, 0.61),
        #111
    );

`
