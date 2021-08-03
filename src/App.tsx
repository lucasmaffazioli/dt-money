import { createServer } from 'miragejs';
import { Header } from './components/Header/';
import { Summary } from './components/Summary/';
import { Transaction } from './components/Transaction';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global'
import { useState } from 'react';

function App() {
  createServer({
    routes() {
      this.namespace = 'api';
      this.get("/transactions", () => ({
        reminders: [
          { id: 1, text: "Walk the dog" },
          { id: 2, text: "Take out the trash" },
          { id: 3, text: "Work out" },
        ],
      }))
    },
  });

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  };

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  };

  return (

    <div className="App">
      <Header handleOpenTransactionModal={handleOpenTransactionModal} ></Header>
      <Summary></Summary>

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onTransactionClose={handleCloseTransactionModal}></NewTransactionModal>

      <Transaction ></Transaction>
      <GlobalStyle />
    </div>
  );
}

export default App;
