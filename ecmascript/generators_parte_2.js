function* conversar(){
  //bloco 1  
  let opcao = yield 'E ai, tudo bem?'

  //bloco2
  if(opcao == 'sim'){
    yield 'Ótimo, fico feliz'  
  }else{
    yield 'Respire fundo e tenha paciência'
  }
}

let conversa = conversar()

function acao(){
  let resposta = document.getElementById('resposta').value

  console.log(resposta)
  iteracao = conversa.next(resposta)
  console.log(iteracao)  
  
}

