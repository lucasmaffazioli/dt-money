import { Header } from './components/Header/';
import { Summary } from './components/Summary/';
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Summary></Summary>
      <GlobalStyle />
    </div>
  );
}

export default App;
