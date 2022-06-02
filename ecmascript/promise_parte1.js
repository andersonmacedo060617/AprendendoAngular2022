let resposta = {}
let promessa = new Promise((resolve, reject)=>{
    try{
      
      setTimeout(()=>{
          resposta = {dados: {msg:'Dados recuperados com sucesso!'}}
          resolve('Sucesso') 
        }, 3000)
      
    }catch(e){
      setTimeout(()=>{
          reject(e)
        }, 3000)
    }
})
console.log(promessa) 
setTimeout(()=>{
  console.log(promessa) 
  console.log(resposta)  
}, 5000)
