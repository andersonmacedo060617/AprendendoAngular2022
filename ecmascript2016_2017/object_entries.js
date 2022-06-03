let objeto = {
  nome: 'Anderson',
  prodissional:{
    site:'andersonmacedo.com',
    profissao: 'data engineer'
  },
  hobbies: [
    {id:1 ,hobby: 'Bike' },
    {id:2 ,hobby: 'Violão' }
  ]
}

console.log('Objeto: ', objeto)
console.log( Object.values(objeto))
console.log(Object.entries(objeto))