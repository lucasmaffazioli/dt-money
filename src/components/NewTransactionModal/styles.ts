import styled from 'styled-components'

export const Container = styled.form`
	h2{
		color: var(--text-title);
		margin-bottom: 1rem;
	}
	
	input{
		display: block;
		width: 100%;
		padding: 0 1.5rem;
		margin-bottom: 0.5rem;
		height: 4rem;
		border-radius: 0.25rem;
		
		border: 1px solid #d7d7d7;
		background: #e7e9ee;
		
		font-weight: 400;
		font-size: 1rem;
		
		&::placeholder{
			color: var(--text-body);
		}
	}
	
	button[type="submit"] {
		width: 100%;
		height: 3.5rem;
		color: white;
		background: var(--green);
		border: 0 none;
		border-radius: 0.25rem;
	}
	
`;

