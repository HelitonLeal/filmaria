import { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Home(){

  const [filmes, useFilmes] = useState([]);

  useEffect(() => {

    async function loadFilmes(){
        const response =  await api.get('r-api/?api=filmes')
        console.log(response.data);
    }

    loadFilmes();

  }, []);

  return(
    <div>
      <h1>Página HOME</h1>
    </div>
  );
}