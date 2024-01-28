import Topo from './componenetes/topo';
import SecaoBanner from './componenetes/banner';
import SecaoExperienciaTrabalho from './componenetes/main';
import Rodape from './componenetes/rodape';
import './App.css';

export default function App() {

  return (
    <main>
	    <Topo />
	    <SecaoBanner />
	    <SecaoExperienciaTrabalho />
	    <Rodape />
		</main>
  );
}