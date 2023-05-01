import { produtoService } from '../service/produto-service.js'

const criaNovaLinha = (nome, preco, descricao, id) =>  { 
  const linhaNovoProduto = document.createElement('tr')
  if (!descricao){
    descricao = "-"
  }
  const conteudo = `
      <td class="td" data-td>${nome}</td>
                  <td>${preco}</td>
                  <td>${descricao}</td>
                  <td>
                      <ul class="tabela__botoes-controle">
                          <li><a href="../../telas/produto/edita_produto.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                          <li><button class="botao-simples botao-simples--excluir">Excluir</button></li>
                      </ul>
                  </td> 
                  `
  linhaNovoProduto.innerHTML = conteudo
  linhaNovoProduto.dataset.id = id
  return linhaNovoProduto
}

const tabela = document.querySelector('[data-tabela]')
const modal = document.querySelector('[data-modal]')

tabela.addEventListener('click', async (evento)=> {
    let ehBotaoDeDeleta = evento.target.className === 'botao-simples botao-simples--excluir'
    if(ehBotaoDeDeleta){
        const linhaProduto = evento.target.closest('[data-id]')
        let id = linhaProduto.dataset.id
        modal.classList.remove('modal--fechado')
        modal.setAttribute('id', id)
    }
})

modal.addEventListener('click', async (evento) => {
    let botao = evento.target.className
    if (botao.includes('modal__botao--confirmar')) {
        const id = modal.getAttribute('id')
        debugger
        try {
            console.log('a')
            await produtoService.removeProduto(id)
        } catch(erro) {
            console.log(erro)
            window.location.href="../produto/erro.html"
        }
    } else if (botao.includes('modao__botao--cancelar') || botao.includes('modal__fechar')) {
        modal.classList.add('modal--fechado')
    }
})

const render = async () =>  {
    try {
        const listaClientes = await produtoService.listaProdutos()
        listaClientes.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome,elemento.preco, elemento.descricao, elemento.id))
    })
    }
    catch(erro){
        console.log(erro)
        window.location.href="../produto/erro.html"
    }
    
}

render()