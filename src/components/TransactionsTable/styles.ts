import styled from 'styled-components'

export const Container = styled.div`
	max-width: 1128px;
	margin: 0 auto;
	padding: 0rem 1rem 10rem;
	
	
	table{
		width: 100%;
		border-spacing: 0 0.5rem; // Isso espaça somente verticalmente
	}
	
	th{
		color: var(--text-body);
		text-align: left;
		padding: 1rem 2rem;
		line-height: 1.5rem;
	}
	
	td{
		background: var(--shape);
		padding: 1rem 2rem;
		border: 0;
		color: var(--text-body);
		border-radius: 0.25rem;

		&:first-child{
			color: var(--text-title);
			font-weight: 600;
		}
		
		&.withdraw{
			color: var(--red)
		}
		
		&.deposit{
			color: var(--green)
		}
		
		& .button{
			/* background: red; */
			/* color:var(--redButton); */
			filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(320deg) brightness(90%) contrast(100%);
			cursor: pointer;
			&:hover{
				filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(320deg) brightness(70%) contrast(100%);
				transition: all 0.2s;
			}
		}
	}
`

