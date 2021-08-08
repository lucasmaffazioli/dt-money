import { useTransaction } from "../../useTransaction";
import { Container } from "./styles";
import deleteImg from "../../assets/delete.svg";

export function TransactionsTable() {
	const { transactions, deleteTransaction } = useTransaction();

	return (
		<div>
			<Container>
				<table>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Valor</th>
							<th>Categoria</th>
							<th>Data</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((transaction) => (
							<tr key={transaction.id}>
								<td>{transaction.name}</td>
								<td className={transaction.type}>
									+{" "}
									{Intl.NumberFormat("pt-BR", {
										style: "currency",
										currency: "BRL",
									}).format(transaction.value)}
								</td>
								<td>{transaction.category}</td>
								<td>
									{Intl.DateTimeFormat("pt-BR").format(
										new Date(transaction.createdAt)
									)}
								</td>
								<td>
									<img
										className="button"
										src={deleteImg}
										alt="Delete"
										onClick={() => deleteTransaction(transaction.id)}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Container>
		</div>
	);
}
