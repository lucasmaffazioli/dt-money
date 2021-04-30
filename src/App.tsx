import React from 'react';
import { Header } from './components/Header/';
import { Summary } from './components/Summary/';
import { Transaction } from './components/transaction';
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Summary></Summary>
      <Transaction></Transaction>
      <GlobalStyle />
    </div>
  );
}

export default App;
