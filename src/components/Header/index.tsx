import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
	handleOpenTransactionModal: () => void
}

export function Header(props: HeaderProps) {
	return (
		<>
			<Container>
				<Content>
					<img src={logoImg} alt="DtMoney" />
					<button type="button" onClick={props.handleOpenTransactionModal} >Nova transação</button>
				</Content>
			</Container>
		</>
	)
}
