function numbers (arr){

  var count = 0;
  for (var i of arr){
    if (i > 0){
      count +=i
    }
  }

  return count;
}

console.log(numbers([-10, 9, 5, 4, -23, -9]));

// version 2

/*
var array = [5, 8, 23, -10, 31, -7, 14, -36];

function numbers(){
var sum = 0;
for (var i =0; i < array.length; i ++ ){

  if (array[i] > 0){

    sum += array[i];
  }
}

return sum;
}

console.log(numbers(array));
*/
