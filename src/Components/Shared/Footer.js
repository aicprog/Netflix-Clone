import React from 'react'
import styled from 'styled-components/macro'
import { Dropdown } from '../../Components';

const Footer = ({ footerData}) => {

	return (
		<Container>
			<Title>Questions? Call 1-844-505-2993</Title>
			<Break />
			<Row>
				{footerData?.map((column) => (
					<Column key={column.id}>
						{column.data.map((link) => (
							<Link key={link.id}>{link.name}</Link>
						))}

					</Column>
				))}

			</Row>
			<Break />
			<Dropdown left="" bottom="2.5rem" beforeX="10%" afterX="135%" />
			{/**<Text>&copy; Netflix United Kingdom {new Date().getFullYear()}</Text>*/}
		</Container>
	);
};


export default Footer


const Container = styled.div`
	display: flex;
	padding: 70px 56px;
	margin: auto;
	max-width: 1200px;
	flex-direction: column;
	position: relative;


	@media(max-width: 1000px) {
		padding: 70px 30px;
		padding-left: 10%;
	}
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`
const Row = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 15px;


	@media (max-width: 800px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 0rem;
	}
`;

const Link = styled.a`
    color: #757575;
    margin-bottom: 14px;
    text-decoration: none;
`

const Title = styled.p`
    font-size: 16px;
    color: #757575;
`

const Break = styled.h1`
    flex-basis: 100%;
    height: 0;
`