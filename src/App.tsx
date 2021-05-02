import { createServer } from 'miragejs';
import React from 'react';
import { Header } from './components/Header/';
import { Summary } from './components/Summary/';
import { Transaction } from './components/transaction';
import { GlobalStyle } from './styles/global'
import { useState } from 'react';
import Modal from 'react-modal';

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

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      >
        <h2>Sou um modal</h2>

      </Modal>

      <Transaction></Transaction>
      <GlobalStyle />
    </div>
  );
}

export default App;
