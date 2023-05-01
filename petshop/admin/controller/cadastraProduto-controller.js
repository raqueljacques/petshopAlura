import { produtoService } from '../service/produto-service.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const nome = evento.target.querySelector('[data-nome]').value
    const preco = evento.target.querySelector('[data-preco]').value
    const descricao = evento.target.querySelector('[data-descricao]').value

    await produtoService.criaProduto(nome, preco, descricao)
    window.location.href = '../produto/cadastro_produto_concluido.html'
  }
  catch (erro) {
    console.log(erro)
    window.location.href = "../produto/erro.html"
  }
})