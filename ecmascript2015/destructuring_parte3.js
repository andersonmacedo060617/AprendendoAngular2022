let arr = [10, 20, 30, 40]

function teste([a, b, ,c, d=11]){
  console.log(a, b, c, d)
}

teste(arr)

//objeto

let obj ={
  a:10,
  b:20,
  c:30,
  d:40
}

function teste2({c:y, d:x, e:z=44}){
  console.log(y, x, z)
}

teste2(obj)