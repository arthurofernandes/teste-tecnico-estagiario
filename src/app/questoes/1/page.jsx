'use client'
import '../../Css/Q1.css';

export default function Questao1() {
  return (
    <>
      <h1>Questão 1</h1>
      <p>
        Crie um botão vermelho com as bordas arredondadas que exiba "Clique-me!"
        como texto. Ao clicar no botão, um alerta deve ser disparado avisando
        que o botão foi clicado.
      </p>
      <BotaoVermelho />
    </>
  );
}

function BotaoVermelho(){

  const handleClick = (e) => {
    e.preventDefault();
    alert("O botão foi clicado!");
  }
  
  return (

    <div className='caixaResposta'>
      <button onClick={handleClick} className='botaoVermelho'>
          Clique-me!
      </button>
    </div>
  );
}

