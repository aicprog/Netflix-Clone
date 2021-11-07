import React from 'react'
import styled from 'styled-components/macro';





const Dropdown = ({ top, right, left, bottom, beforeX, afterX }) => {
	return (
		<DropdownWrapper
			top={top}
			right={right}
			left={left}
			bottom={bottom}
			beforeX={beforeX}
			afterX={afterX}
		>
			<div className="wrapper">
				<select className="select">
					<option
						className="option"
						lang="en"
						value="/"
						data-language="en"
						data-country="US"
					>
						English
					</option>
					<option
						className="option"
						lang="es"
						value="/us-es/"
						data-language="es"
						data-country="US"
					>
						Español
					</option>
				</select>
			</div>
		</DropdownWrapper>
	);
};

export default Dropdown


const DropdownWrapper = styled.div`
	position: absolute;
	width: 100px;
	border-radius: 2px;
	width: 100px;
	top: ${({ top }) => (top ? top : null)};
	right: ${({ right }) => (right ? right : null)};
	left: ${({ left }) => (left ? left : null)};
	bottom: ${({ bottom }) => (bottom ? bottom : null)};

	//top: 32px;
	//right: 10px;
	.wrapper {
		:before {
			font-family: 'Font Awesome\ 5 Free';
			content: '\f0ac'; /* FontAwesome Unicode */
			font-weight: 900;
			width: 59px;
			height: auto;
			background-color: transparent;
			color: #fff;
			position: absolute;
			transform: translateY(-40%);
			top: 27%;
			/* transform: translateX(-110%); */
			transform: translateX(${({ beforeX }) => (beforeX ? beforeX : null)});
			font-size: 14px;
		}
		:after {
			font-family: 'Font Awesome\ 5 Free';
			content: '\f0dd'; /* FontAwesome Unicode */
			font-weight: 900;
			width: 59px;
			height: auto;
			background-color: transparent;
			color: #fff;
			position: absolute;
			transform: translateY(-50%);
			top: 12%;
			transform: translateX(${({ afterX }) => (afterX ? afterX : null)});
			/* transform: translateX(15%); */
		}
	}

	.select {
		padding: 0.5rem;
		background: rgba(0, 0, 0, 0.4);
		border: 1px solid #aaa;
		color: #fff;
		font-size: 14px;
		padding-left: 1.675rem;
		padding-right: 1.475rem;
		white-space: nowrap;
		display: flex;
		justify-content: center;
		position: relative;
		appearance: none;
		display: flex;
		justify-content: center;
	}
`;





