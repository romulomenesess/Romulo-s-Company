import { useState } from 'react';
import Banner from './componentes/banner/banner'
import Formulario from './componentes/formulario/formulario'
import Time from './componentes/time/time';
import Rodape from './componentes/rodape/rodape';

function App() {

  const times = [
    {
      nome: 'Administrativo',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Finanças',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Recursos Humanos',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Marketing',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Vendas',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Atendimento ao cliente',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Setor de TI',
      corPrimaria: '#FFBA29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [colaboradores, setcolaboradores]= useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setcolaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
  
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}

      <Rodape/>

    </div>
  );
}

export default App;