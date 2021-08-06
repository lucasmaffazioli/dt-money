import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {
	const transactions = useContext(TransactionsContext);
	// const [transactions, setTransactions] = useState<Transaction[]>([]);

	// useEffect(() => {
	// 	setTransactions(useContext(TransactionsContext));
	// 	// api.get("transactions").then((result) => {
	// 	// 	console.log("Getting transactions:");
	// 	// 	console.log(result.data);

	// 	// 	setTransactions(result.data.transactions);
	// 	// 	// setTransactions(
	// 	// 	// 	result.data.transactions.map((transaction: Transaction) => (
	// 	// 	// 		<tr>
	// 	// 	// 			<td>{transaction.name}</td>
	// 	// 	// 			<td className="deposit">+ R${transaction.value.toString()}</td>
	// 	// 	// 			<td>{transaction.category}</td>
	// 	// 	// 			<td>10/05/21</td>
	// 	// 	// 		</tr>
	// 	// 	// 	))
	// 	// 	// );
	// 	// });
	// }, []);

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
						{/* {transactions} */}
						{transactions.map((transaction) => (
							<tr key={transaction.id}>
								<td>{transaction.name}</td>
								<td className={transaction.type}>
									+ R$
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
							</tr>
						))}
						{/* <tr>
							<td>Website</td>
							<td className="deposit">+ R$5000</td>
							<td>Salário</td>
							<td>10/05/21</td>
						</tr>
						<tr>
							<td>Mercado</td>
							<td className="withdraw">- R$300</td>
							<td>Casa</td>
							<td>18/05/21</td>
						</tr>
						<tr>
							<td>Alugel</td>
							<td className="withdraw">- R$2500</td>
							<td>Casa</td>
							<td>20/05/21</td>
						</tr> */}
					</tbody>
				</table>
			</Container>
		</div>
	);
}