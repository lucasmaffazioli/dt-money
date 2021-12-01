import entradaImg from "../../assets/income.svg";
import saidaImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Transaction, useTransaction } from "../../hooks/useTransaction";
import { Container } from "./styles";

export function Summary() {
	const { transactions } = useTransaction();
	var totalEntrada = 0;
	var totalSaida = 0;

	transactions.forEach((transaction: Transaction) => {
		if (transaction.type === "deposit") totalEntrada += transaction.value;
		if (transaction.type === "withdraw") totalSaida += transaction.value;
	});

	return (
		<>
			<Container>
				<div>
					<p>Entradas</p>
					<img src={entradaImg} alt="Entrada" />
					<strong>
						{Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(totalEntrada)}
					</strong>
				</div>
				<div>
					<p>Saídas</p>
					<img src={saidaImg} alt="Saída" />
					<strong>
						{Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(totalSaida)}
					</strong>
				</div>
				<div className="totalShape">
					<p>Total</p>
					<img src={totalImg} alt="Total" />
					<strong>
						{Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(totalEntrada - totalSaida)}
					</strong>
				</div>
			</Container>
		</>
	);
}
