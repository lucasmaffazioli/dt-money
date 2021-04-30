import entradaImg from '../../assets/income.svg';
import saidaImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from './styles'


export function Summary() {
	return (
		<>
			<Container>
				<div>
					<p>Entradas</p>
					<img src={entradaImg} alt="Entrada" />
					<strong>R$ 17.000,00</strong>
				</div>
				<div>
					<p>Saídas</p>
					<img src={saidaImg} alt="Saída" />
					<strong>R$ 17.000,00</strong>
				</div>
				<div className="totalShape">
					<p>Total</p>
					<img src={totalImg} alt="Total" />
					<strong>R$ 17.000,00</strong>
				</div>
			</Container>

		</>

	)
}