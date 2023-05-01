const listaProdutos = () =>  {
    return fetch(`http://localhost:3000/produtos`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os produtos')
    })
}

const criaProduto = (nome, preco, descricao) => { 
    return fetch(`http://localhost:3000/produtos`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            descricao: descricao
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar o produto')
    })
}

const removeProduto = (id) => { 
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar o produto')
        }
    })
}
 
const detalhaProduto = (id) => { 
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível detalhar o produto')
    })
}

const atualizaProduto = (id, nome, preco, descricao) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            descricao: descricao
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar o produto')
    })
}

export const produtoService = { 
    listaProdutos,
    criaProduto, 
    removeProduto,
    detalhaProduto,
    atualizaProduto

}
