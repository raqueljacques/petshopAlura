import { produtoService } from '../service/produto-service.js'


(async () => { 
  const pegaURL = new URL(window.location)

  const id = pegaURL.searchParams.get('id')
  
  const inputNome = document.querySelector('[data-nome]')
  const inputPreco = document.querySelector('[data-preco]')
  const inputDescricao = document.querySelector('[data-descricao]')

  try { 
    const dados = await produtoService.detalhaProduto(id)
    inputNome.value = dados.nome
    inputPreco.value = dados.preco
    inputDescricao.value = dados.descricao
  }
  catch(erro){
    console.log(erro)
    window.location.href="../produto/erro.html"
  }

  
  const formulario = document.querySelector('[data-form]')
  
  formulario.addEventListener('submit', async (evento)=> { 
    evento.preventDefault()
    debugger
    try {
      await produtoService.atualizaProduto(id, inputNome.value, inputPreco.value, inputDescricao.value)
      window.location.href = "../produto/edicao_produto_concluida.html"
    }
    catch(erro){
      console.log(erro)
      window.location.href="../produto/erro.html"
    }
  })
})()
