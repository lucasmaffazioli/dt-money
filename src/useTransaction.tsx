import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "./services/api";

export interface Transaction {
	id: number;
	name: string;
	type: string;
	category: string;
	value: number;
	createdAt: string;
}

interface TransactionsProviderProps {
	children: React.ReactNode;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionContextData {
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>(
	{} as TransactionContextData
);

export function TransactionsProvider(props: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get("transactions").then((result) => {
			console.log("Getting transactions context:");
			console.log(result.data);

			setTransactions(result.data.transactions);
		});
	}, []);

	async function createTransaction(transactionInput: TransactionInput) {
		const response = await api.post("/transactions", {
			...transactionInput,
			createdAt: new Date(),
		});
		const { transaction } = response.data;

		setTransactions([...transactions, transaction]);
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{props.children};
		</TransactionsContext.Provider>
	);
}

export function useTransaction() {
	const context = useContext(TransactionsContext);

	return context;
}
