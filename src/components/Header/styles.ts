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
		@media (max-width: 768px) {
			padding: 0 1rem;
		}
		color: var(--shape);
		background: var(--blue-light);
		border: 0;
		padding: 0 2rem;
		height: 3rem;
		border-radius: 0.3rem;
	}
`

