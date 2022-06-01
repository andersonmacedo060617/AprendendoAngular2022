let produto = {
  descricao: 'Notebook',
  preco: 2500,
  detalhes:{
    fabricante: 'Abc',
    modelo: 'Xyz'
  }
}

let {descricao, preco, detalhes:{fabricante:f, modelo:m, processado:proc="I5"}} = produto
let {descricao: d = "Não Informado", preco: p = 9999, desconto: des = 5} = produto

console.log(d, p, des, f, m, proc)