

const pelis = [
  {titulo:"hola", rating: 4, id:1},
  {titulo: "peli 2", rating: 3, id:2},
];

function getAll(){
  return pelis;
}

function getByid(id: number){
 const peliEncontrada = pelis.find( (p) => {
   return p.id == id;
  });

  
  return peliEncontrada;

}
export {getAll, getByid};

