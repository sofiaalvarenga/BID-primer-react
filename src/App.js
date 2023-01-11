import './App.css';
import Lista from './components/lista';
import Titulo from './components/titulo';
import SubTitulo from './components/subtitulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo/>
        <SubTitulo/>
        <Lista/>
      </header>
    </div>
  );
}

export default App;