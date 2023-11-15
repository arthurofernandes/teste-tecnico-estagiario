"use client"
import "@/app/Css/Produto.css"
export default ProdutoComponent;


function ProdutoComponent(props){
    
    return(
        <>
            <div className="produtoBox">
                <h4 className="produtoNome">{props.produto.getNome()}</h4>
                <p className="produtoPreco">Preço: {props.produto.getPreco()}</p>
            </div>
        </>

    );

}