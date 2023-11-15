"use client";
import { useEffect, useState } from 'react';
import '../../Css/Q1.css';

let count = 0;

export default function Questao2() {

  const [count, setCount] = useState(0);

  useEffect(() => setCount(10), [])

  const handleClickPlus = event => {
    setCount(count + 1);
  }
  const handleClickMinus = event => {
    setCount(count - 1);
  }


  return (
    <div>
      <h1>Questão 2</h1>
      <p>
        Crie um contador inicializado em 0. A tela deve exibir dois botões: um
        para incrementar o contador e outro para decrementar o contador. Ao
        carregar a tela, o contador deve ser atualizado para 10. Implemente a
        lógica para atualizar o contador quando a tela for carregada e a lógica
        para atualizar o contador quando os botões forem clicados.
      </p>

      <div  className='caixaResposta'>

        <p className='contador'>
          {count}
        </p>

        <MeuBotao texto='incrementar' handleClick={handleClickPlus} />
        <MeuBotao texto='decrementar' handleClick={handleClickMinus} />

      </div>

    </div>
  );
}

function MeuBotao(props) {


  return (
    <button onClick={props.handleClick} className="botaoVermelho">
      {props.texto}
    </button>
  );
}

