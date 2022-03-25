function maxPrice (arr){
  var count=0;

  for (var i of arr){
    if (i.price > count){
      count += i.price;
    }
  }

  for(var j of arr){
    if (j.price == count){
      returnj.name;
    }
  }
  return j.name;
}

console.log(maxPrice(

  [
    {
      name: "Umid",
      price: 7200,
    },

    {
      name: "Ali",
      price: 5000,
    },

    {
      name: "Mansur aka",
      price: 10000,
    }
  ]
));
