import styled from 'styled-components'
import { darken, transparentize } from 'polished';

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

export const OptionSelectorContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 0.5rem;
`

interface RadioBoxProps {
	isActive: boolean
	activeColor: 'green' | 'red';
}

const colors = {
	green: '#33CC95',
	red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 4rem;
	margin-bottom: 0.5rem;
	background: ${props => props.isActive
		? transparentize(0.9, colors[props.activeColor])
		: 'white'};
	
	border: 1px solid #d7d7d7;
	border-radius: 0.25rem;
	&:hover{
		filter: none;
		border-color: ${darken(0.1, '#d7d7d7')};
	}

	img{
		height: 24px;
		width: 24px;
		margin: 0.5rem;
	}

`

