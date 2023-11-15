
class Produto{
    constructor(id, nome, preco){
        this._id = id;
        this._nome = nome;
        this._preco = preco;
    }

    getId(){
        return this._id;
    }
    
    getNome(){
        return this._nome;
    }

    getPreco(){
        return this._preco;
    }
}

export default Produto;

