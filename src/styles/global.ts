import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
	--background: #f0f2f5;
	--green: #33CC95;
	--red: #E52E4D;
	--blue: #5429CC;
	
	--blue-light: #6933FF;
	
	--text-title: #363F5F;
	--text-body: #969CB3;
	
	--shape: #FFFFFF;
}

	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html{
		@media (max-width: 1080px){
			font-size: 93.75%; // 15px - usar % é mais acessível para o zoom do browser
		}
		@media (max-width: 720px){
			font-size: 87.5%; // 14px - usar % é mais acessível para o zoom do browser
		}
	}

	body{
		background:	var(--background);
		-webkit-font-smoothing: antialiased;
	}
	
	body, input, textarea, button{ // Input, textarea e button não herdam do body
		font-family: 'Poppins', sans-serif;
	}
	
	body, input, textarea{ // Input, textarea e button não herdam do body
		font-weight: 400;
	}
	
	h1, h2, h3, h4, h5, h6, strong, button {
		font-weight: 600;
	}
	
	button{
		cursor: pointer;
		font-size: 1rem;
		&:hover{
			filter: brightness(0.9);
			transition: all 0.2s;
		}
	}
	
	[disabled]{
		opacity: 0.6;
		cursor: not-allowed;
	}
	
	.react-modal-overlay{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display:flex;
		
		justify-content: center;
		align-items: center;
		background: rgba(0,0,0,0.5)
		
	}
	
	.react-modal-content{
		position: relative;
		background: var(--background);
		height: fit-content;
		padding: 2.5rem;
		border-radius: 0.25rem;
		
		width: 100%;
		max-width: 576px;
		
		.closeModal{
			cursor: pointer;
			padding: 0.5rem;
			border: 0 none;
			position: absolute;
			top: 1rem;
			right: 1rem;
			
			transition: all 0.2s;
			&:hover{
				filter: brightness(0.7);
			}
		}
	}
`
