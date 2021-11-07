import React from 'react'
import styled from 'styled-components/macro'

const CardPlaceholder = () => {

	const [amount, setAmount] = React.useState(6);

	const checkWindow = () => {
	
		if (window.innerWidth < 1600) {
			setAmount(4);
		}

		if (window.innerWidth < 800) {
			setAmount(3);
		}

		if (window.innerWidth < 600) {
			setAmount(2);
		}
	};

	const array = Array.from(Array(amount).keys());

	React.useEffect(() => {
		checkWindow()
	}, [])

    return (
			<CardPlaceholderWrapper>
				{array.map((index) => (
					<Card key={index}></Card>
				))}
			</CardPlaceholderWrapper>
		);
}

export default CardPlaceholder

const CardPlaceholderWrapper = styled.div`
	display: flex;
	padding: 15rem 3rem;


	@keyframes colorChanger {
		from {
			background-color: #252525;
		}
		to {
			background-color: #5c5a5a;
		}
	}
`;
const Card = styled.div`
	background-color: #252525;
	border-radius: 0.5rem;
	height: 250px;
	width: 250px;
	margin-right: 2rem;
	animation: colorChanger 0.8s infinite;
	animation-fill-mode: both;
    transition: all ease-in-out;


	&:nth-child(1) {
		animation-delay: 0.1s;
	}
	&:nth-child(2) {
		animation-delay: 0.2s;
	}
	&:nth-child(3) {
		animation-delay: 0.3s;
	}
	&:nth-child(4) {
		animation-delay: 0.4s;
	}
	&:nth-child(5) {
		animation-delay: 0.5s;
	}
	&:nth-child(6) {
		animation-delay: 0.6s;
	}
	&:nth-child(7) {
		animation-delay: 0.7s;
	}
`;
