import React from 'react';
import styled from 'styled-components/macro';

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

	React.useEffect(() => {
		checkWindow();
	}, []);

	return (
		<CardPlaceholderWrapper>
			{Array(amount)
				.fill(amount)
				.map((card, index) => {
					return (
						<Card>
							<div className="product-card-loader-inner"></div>
						</Card>
					);
				})}
		</CardPlaceholderWrapper>
	);
};

export default CardPlaceholder;

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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	margin: 10px 10px;
	padding: 20px 0;
	width: 100%;
	min-width: 130px;
	background-color: rgba(0, 0, 0, 0.1);
	z-index: 1;
	height: 400px;
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
