import React, { createContext, useEffect, useState } from "react";
import { api } from "./services/api";

export const TransactionsContext = createContext<Transaction[]>([]);

export interface Transaction {
	id: number;
	name: string;
	type: string;
	category: string;
	value: number;
	createdAt: string;
}

interface TransactionProviderProps {
	children: React.ReactNode;
}

export function TransactionProvider(prop: TransactionProviderProps) {
	// const data = useContext(TransactionsContext);
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get("transactions").then((result) => {
			console.log("Getting transactions context:");
			console.log(result.data);

			setTransactions(result.data.transactions);
			// setTransactions(
			// 	result.data.transactions.map((transaction: Transaction) => (
			// 		<tr>
			// 			<td>{transaction.name}</td>
			// 			<td className="deposit">+ R${transaction.value.toString()}</td>
			// 			<td>{transaction.category}</td>
			// 			<td>10/05/21</td>
			// 		</tr>
			// 	))
			// );
		});
	}, []);

	return (
		<TransactionsContext.Provider value={transactions}>
			{prop.children};
		</TransactionsContext.Provider>
	);
}
