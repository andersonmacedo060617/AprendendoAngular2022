function soma(...param){
  let resultado = 0

  param.forEach(v=>resultado += v)
  return resultado
}

let x = soma(5,7,49,12,56, 55,13,-8,-5)
console.log('resultado: ', x)

function multiplicacao(m, ...param){
  //console.log(m)
  //console.log(param)
  let resultado = 0
  param.forEach(v=>{
      resultado += m * v  
    })
  return resultado
}

let y = multiplicacao(5, 7, 12, 13, 49)
console.log(`resultado: ${y}`)