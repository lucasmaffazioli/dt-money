import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
	--background: #f0f2f5;
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
	}
	
	[disabled]{
		opacity: 0.6;
		cursor: not-allowed;
	}
`
