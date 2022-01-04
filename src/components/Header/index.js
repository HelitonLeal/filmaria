import './style.css';
import { Link } from 'react-router-dom';

export default function Headers(){
    return(
        <header>
            <Link className='logo' to={'/'}>Filmaria</Link>
            <Link className='favoritos' to={'/favoritos'}>Favoritos</Link>
        </header>
    )
}