import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'


export function Header() {



	return (
		<>
			<Container>
				<Content>
					<img src={logoImg} alt="DtMoney" />
					<button type="button" onClick={handleOpenTransactionModal} >Nova transação</button>
				</Content>
			</Container>
		</>
	)
}
