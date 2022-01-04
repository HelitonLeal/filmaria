import './erro.css';
import { Link } from 'react-router-dom';

export default function Erro(){
    return(
        <div className='not-found'>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to={"/"}>Ir para a Página Inicial</Link>
        </div>
    );
}
