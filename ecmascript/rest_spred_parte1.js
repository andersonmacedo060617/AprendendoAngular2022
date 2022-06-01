//string
let tituloArtigo
tituloArtigo = "Como utilizar o operador rest/spread"
console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])
console.log({...tituloArtigo})

//array
let listaCursos1 = ['NodeJS e Mongo', 'Angular']
let listaCursos2 = ['Solid', 'Laravel']
let listaCompletaCursos = [
  ...listaCursos1,
  ...listaCursos2
]

console.log(listaCompletaCursos)

let pessoa = {nome: 'Pedro', idade: 32}
let cadastroCompleto = {endereco: 'Rua Abc', ...pessoa}
console.log(cadastroCompleto)