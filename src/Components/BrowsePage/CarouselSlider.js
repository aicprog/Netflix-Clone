import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { ImgCard } from '../../Components';
import { useMoviesContext } from '../../Context/movies.context';

const scrollByValue = 500;

const CarouselSlider = ({movies, isLargeRow}) => {
	
	const [scrollPosition, setScrollPosition] = useState(0)
	const [padding, setPadding] = useState(true)


	const {
		setMovieForMovieContent,
		openMovieContent,
		setMovieContentCoordinates,
	} = useMoviesContext();

    const listRef = useRef(null);

	const scrollLeft = (e) => {
		// console.log(listRef.current.scrollLeft)
		// listRef.current.scrollLeft === 0 ? setAtZero(true): setAtZero(false)

		//scrollByValue is off by 500 because it is a range from 0-500 and you can't scroll left anymore when you are at 500. So when you start scrolling left, you want to make sure you reset the scrollPosition as soon as it reaches that 0-500 range, or when the value <=500. 
		if (listRef.current.scrollLeft <= scrollByValue) {
			setScrollPosition(0);
		}
		if (listRef.current) {
			listRef.current.scrollBy({
				top: 0,
				left: -scrollByValue,
				behavior: 'smooth',
			});
		}
	};
	const scrollRight = () => {
		setPadding(false)
		//every time you scroll right, you set a new scrollPosition 
		setScrollPosition(listRef.current.scrollLeft);

		//Since it is in the range 0-500, this ensures that once you scroll by once, it meets condition in styled components and the left button shows. 
		if(scrollPosition === 0){
			setScrollPosition(2)
		}

		if (listRef.current) {
			listRef.current.scrollBy({
				top: 0,
				left: scrollByValue,
				behavior: 'smooth',
			});
		}
	};

	const handleMovieClick = (e, movie) =>{
		//setTimeout(() => {
			setMovieForMovieContent(movie)
			getPageOffset(e);


			//console.log(e.currentTarget.parentElement)

			
		//}, 1000);
		
	}

		function getPageOffset(e) {

			//Makes sure the previous movie content is closed so the new y coordinates are accurate.
			setTimeout(() => {
				const { scrollY } = window;
				const y =
					e.target.getBoundingClientRect().top +
					e.target.getBoundingClientRect().height +
					20 +
					scrollY;
				console.log('Y', y);
				setMovieContentCoordinates({ y });
				openMovieContent();
			}, 100);
		}


    return (
			<SlideContainer scrollPosition={scrollPosition} padding={padding}>
				<LeftArrow onClick={scrollLeft} className="left-arrow" />
				<MoviesContainer ref={listRef}>
					{movies.map((movie) => {
						if (movie.poster_path === null || movie.backdrop_path === null) {
							return <span key={movie.id}></span>;
						}
						return (
							<ImageContainer
								key={movie.id}
								onClick={(e) => handleMovieClick(e, movie)}
							>
								<ImgCard isLargeRow={isLargeRow} movie={movie} />
							</ImageContainer>
						);
					})}
				</MoviesContainer>
				<RightArrow onClick={scrollRight} className="right-arrow" />
			</SlideContainer>
		);
}

export default CarouselSlider



const SlideContainer = styled.div`
	display: flex;
	align-items: center;
	overflow-y: auto;
	position: relative;
	padding-left: ${({ padding }) => (padding) ? "60px": "0rem"};

	:hover img {
		transform: translateX(-7%);
	}

	:hover .left-arrow {
		opacity: ${({ scrollPosition }) => (scrollPosition <= 0 ? 0 : 1)};
	}
	:hover .right-arrow {
		opacity: 1;
	}
`;

const LeftArrow = styled(AiOutlineLeft)`
	opacity: 0;
	color: #fff;
	font-size: 2rem;
	transition: display 450ms;

	position: absolute;
	left: 0;
	z-index: 1;
	height: 80%;
	background: rgba(20, 20, 20, 0.5);
	border-radius: 5px;
`;
const RightArrow = styled(AiOutlineRight)`
	opacity: 0;
	font-size: 2rem;
	color: #fff;
	transition: display 450ms;

	position: absolute;
	right: 0px;
	z-index: 1;
	height: 80%;
	background: rgba(20, 20, 20, 0.5);
	border-radius: 5px;
`;

const MoviesContainer = styled.div`
	display: flex;
	overflow-y: hidden;
	overflow-x: scroll;
	padding: 2rem 0px;

	::-webkit-scrollbar {
		display: none;
	}

	.large-row-poster {
		max-height: 250px;

		:hover {
			transform: scale(1.2);
		}
	}


`;

const ImageContainer = styled.div`
	display: flex;
	/* width: 250px; */
	margin-right: 10px;
	border-radius: 0.25rem;
	cursor: pointer;
	transition: transform 450ms;
	height: auto;

	:hover {
		transform: scale(1.1) !important;
		//transform: scale(1.08);
	}

`;

// const Img = styled.img`
// 	object-fit: contain; //keeps aspect ratio
// 	width: 100%;
// 	max-height: 150px;
// 	transition: transform 450ms;
// 	margin-right: 10px;
// 	border-radius: 0.25rem;

// 	:hover {
// 		transform: scale(1.1) !important;
// 		//transform: scale(1.08);
// 	}
// 	:hover ~ img {
// 		transform: translateX(7%);
// 	}

// 	@media(max-width: 851px){
// 		width: 25%;
// 	}
// `;
