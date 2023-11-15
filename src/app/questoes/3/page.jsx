import "@/app/Css/Q1.css";

const numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Questao3() {
  return (
    <div >
      <h1>Questão 3</h1>
      <p>
        Escreva uma função JavaScript que recebe uma matriz de números inteiros
        e retorna a soma de todos os números pares. Exiba a soma na tela.
      </p>
      <div  className='caixaResposta'>
        <p className="contador">Soma: {EvenNumbersSum(numerosInteiros)}</p>
      </div>
    </div>
  );
}

function EvenNumbersSum(arr) {
  let sum = arr.filter((number) => number % 2 == 0).reduce((total, current) => total + current, 0);
  return sum;
}