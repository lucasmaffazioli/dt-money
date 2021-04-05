import styled from 'styled-components'

export const Container = styled.header`
	background: var(--blue);
`

export const Content = styled.div`
	max-width: 1128px;
	margin: 0 auto;
	padding: 1rem 1rem 10rem;
	
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	button{
		color: var(--shape);
		background: var(--blue-light);
		border: 0;
		padding: 0 2rem;
		height: 3rem;
		border-radius: 0.3rem;
		
		&:hover{
			filter: brightness(0.9);
			transition: all 0.2s;
		}
	}
	
	div{
		background: var(--shape);
		padding: 2rem;
		position: relative;
		margin-top: -4rem;
		border-radius: 0.4rem;

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

