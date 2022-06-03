let processoAssincrono = new Promise((resolve, reject)=>{
  setTimeout(()=>resolve('Sucesso no procesos assincrono'), 3000)
  
})

async function recurperarDados() {
  await processoAssincrono.then(p => console.log(p))
  console.log('Processamento Assincrono 1')
  
  
  await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(r=>r.json())
    .then(d=>console.log('Comentarios ',d))
  console.log('Processamento Assincrono 2')
  
  
  await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(r=>r.json())
    .then(d=>console.log('Posts ',d))
  console.log('Processamento Assincrono 3')

  return 'Fim'
}

recurperarDados().then(d=>console.log(d))
