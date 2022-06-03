let promessa = new Promise((resolve, reject)=>{

  setTimeout(()=>{
    let resposta_requisicao = {}
    if(true){
      resposta_requisicao = {
        codigo: 1050,
        erro: 'Falha de autorização'
      }
      reject(resposta_requisicao)  
    }

    resposta_requisicao = {
        0: {id: 1, nome: 'João'},
        1: {id: 2, nome: 'José'},
        2: {id: 3, nome: 'Maria'}
      }
    resolve(resposta_requisicao)
             
  }, 4000) 
}).then((dados)=>{
  let promessa2 = new Promise((resolve, reject)=>{
    let resposta_da_requisicao ={}
    if(false){
      resposta_requisicao = {
        codigo: 7788,
        erro: 'Erro ao recuperar post dos usuarios'
      }
      reject(resposta_requisicao)  
    }
  
    resposta_requisicao = {
        0: {id: 1, usuario_id: 1, 
            posts:[
              {id:1, post:'Post 1'},
              {id:2, post:'Post 2'},
            ]
           },
        1: {id: 2, usuario_id: 2,
           posts:[
              {id:1, post:'Post 1'},
              {id:2, post:'Post 2'},
            ]
           },
        2: {id: 3, usuario_id: 3,
           posts:[
              {id:1, post:'Post 1'},
              {id:2, post:'Post 2'},
            ]
           }
      }
    resolve(resposta_requisicao)
               
  }, 4000) 
  }).then(dados =>{
    console.log(dados)
  }).catch(erro=>{
    console.log(erro)
  })
}
}).then((param)=>{
  console.log(param)
}).then(()=>{
  console.log('Then numero 3')
}).then(()=>{
  console.log('Then numero 4')
}).catch(erro => {
  console.log('Operacao sequencia: (catch) '+ erro)
}).then(()=>{
  console.log('Then numero 5')
}).then(()=>{
  console.log('Then numero 6')
})