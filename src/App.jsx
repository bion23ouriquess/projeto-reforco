import { 
  createBrowserRouter, 
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import Rodape from './comum/componentes/Rodape/Rodape';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import ListaProdutos from './paginas/ListaProdutos/ListaProdutos';
import ExercicioUm from './paginas/ExercicioUm/ExercicioUm';
import ExercicioDois from './paginas/ExercicioDois/ExercicioDois';

const router = createBrowserRouter ([
  {
    path: '',
    element: <PaginaInicial />
  },
  {
    path: 'lista-produtos',
    element: <ListaProdutos />
  },
  {
    path: 'exercicio-um',
    element: <ExercicioUm />
  },
  {
    path: 'exercicio-dois',
    element: <ExercicioDois />
  },
]);

function App() {
  return (
    <>
    <Cabecalho />
    <RouterProvider router={router} />
    <Rodape />
    </>
  );
}

export default App