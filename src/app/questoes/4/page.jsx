"use client"

import ProdutoComponent from "@/app/components/Produto";
import Produto from "@/app/Model/Produto";

const produtos = [
  {
    id: 1,
    nome: "Camiseta",
    preco: 10.99,
  },
  {
    id: 2,
    nome: "Calça",
    preco: 19.99,
  },
  {
    id: 3,
    nome: "Saia",
    preco: 19.99,
  },
  {
    id: 4,
    nome: "Tênis",
    preco: 299.99
  },
];

export default function Questao4() {
  return (
    <div>
      <h1>Questão 4</h1>
      <p>
        Crie um componente chamado `ProductList` que recebe uma matriz de
        objetos de produto e renderiza uma lista de produtos. Cada produto deve
        exibir seu nome e preço.
      </p>

      <ProductList lista={produtos}/>
      
    </div>
  );
}

function ProductList(props){  

  let listaDeProdutos = props.lista.map((p) => new Produto(p.id, p.nome, p.preco));
  listaDeProdutos = listaDeProdutos.map((p) => <ProdutoComponent produto={p} />);

  return (

    <div className='caixaResposta' id="listaProdutos">

      {listaDeProdutos}

    </div>

  );

} 