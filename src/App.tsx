import { createServer, Model } from 'miragejs'
import { Header } from './components/Header/'
import { Summary } from './components/Summary/'
import { TransactionsTable } from './components/TransactionsTable'
import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyle } from './styles/global'
import { useState } from 'react'
import { TransactionsProvider } from './hooks/useTransaction'
import { useEffect } from 'react'

function App() {
	useEffect(() => {
		console.log('UseEffect activated!!!')

		createServer({
			models: {
				transaction: Model,
			},

			// seeds(server) {
			// 	server.db.loadData({
			// 		transactions: [
			// 			{
			// 				name: "Freelance website",
			// 				value: 5000,
			// 				category: "Salário",
			// 				type: "deposit",
			// 				createdAt: new Date("2021-08-03 05:05:00"),
			// 			},
			// 			{
			// 				name: "Aluguel",
			// 				value: 1100,
			// 				category: "Casa",
			// 				type: "withdraw",
			// 				createdAt: new Date("2021-08-05 21:05:12"),
			// 			},
			// 		],
			// 	});
			// },

			routes() {
				this.namespace = 'api'
				this.get('/transactions', schema => {
					return schema.all('transaction')
				})
				this.post('/transactions', (schema, request) => {
					const data = JSON.parse(request.requestBody)

					return schema.create('transaction', data)
				})

				this.del('/transactions/:id')
			},
		})
	}, [])

	const [
		isNewTransactionModalOpen,
		setIsNewTransactionModalOpen,
	] = useState(false)

	function handleOpenTransactionModal() {
		setIsNewTransactionModalOpen(true)
	}

	function handleCloseTransactionModal() {
		setIsNewTransactionModalOpen(false)
	}

	return (
		<TransactionsProvider>
			<Header
				handleOpenTransactionModal={
					handleOpenTransactionModal
				}
			></Header>
			<Summary></Summary>

			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseTransactionModal}
			/>

			<TransactionsTable></TransactionsTable>
			<GlobalStyle />
		</TransactionsProvider>
	)
}

export default App
