import styled from 'styled-components'

export const Container = styled.div`
	max-width: 1128px;
	margin: 0 auto;
	padding: 1rem 1rem 5rem;
	
	/* display: flex;
	align-items: center;
	justify-content: space-between; */
	
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;

	div{
		margin-top: -4rem;
		background: var(--shape);
		padding: 2rem;
		border-radius: 0.4rem;
		position: relative; /* This is needed to the absolute work */

		img{
			position: absolute;
			top: 1.80rem;
			right: 2rem;
		}
		
		&.totalShape{
			background: var(--green);
			color: var(--shape);
		}
		
		strong{
			display: block;
			padding-top: 15px;
			font-size: 2rem;
			padding-right: 4rem;
		} 
	}
`

