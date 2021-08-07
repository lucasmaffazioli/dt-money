import React, { createContext, useEffect, useState } from "react";
import { api } from "./services/api";

export const TransactionsContext = createContext<TransactionContextDataa>(
	{} as TransactionContextDataa
);

export interface Transaction {
	id: number;
	name: string;
	type: string;
	category: string;
	value: number;
	createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
	children: React.ReactNode;
}

interface TransactionContextDataa {
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => void;
}

export function TransactionsProvider(props: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get("transactions").then((result) => {
			console.log("Getting transactions context:");
			console.log(result.data);

			setTransactions(result.data.transactions);
		});
	}, []);

	function createTransaction(newTransaction: TransactionInput) {
		api.post("/transactions", newTransaction);
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{props.children};
		</TransactionsContext.Provider>
	);
}
