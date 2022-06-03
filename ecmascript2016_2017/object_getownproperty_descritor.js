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

console.log(objeto)
console.log(Object.getOwnPropertyDescriptors(objeto))

//Descritos writable: pode ser ou não alterado
//Enumerable : define se as propriedades do objeto são interaveis(disponiveis por estruturas de repetição)
//Configurable: Indica que as propriedade do objeto não podem ser deletadas e impede a alteração dos descritores, exceto writable para false
Object.defineProperty(objeto, 'nome', {
  value: 'Anderson da Silva Macedo',
  writable: false
})
