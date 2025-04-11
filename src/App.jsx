import Cabecalho from './components/Cabecalho.jsx';
import ImagemMatematica from './components/ImagemMatematica.jsx';
import TextoInformativo from './components/TextoInformativo.jsx';
import Pontuacao from './components/Pontuacao.jsx';

function App() {
  return (
    <div className="app">
      <Cabecalho />
      <ImagemMatematica />
      <TextoInformativo />
      <Pontuacao />
    </div>
  );
}

export default App;
