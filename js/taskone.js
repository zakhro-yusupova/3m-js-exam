function zeroEnd ( arr){

  var zero = "";
  var numbers = "";

  for (var i of arr){

    if (i==0){
      zero +=i;
    }
    else{
      numbers+=i
    }
  }

  return numbers + zero;
}

console.log(zeroEnd([0, 2, 4, 0, 7, 0, 10, 0, 5, 0]));


// version 2

/*
var numbers = [1, 3, 0, 5, 0, 7, 0 ];

function zeroEnd(numbers){

  var emptyarr = [];

  for (var i = numbers.length - 1; i >= 0; i--){

    if (numbers [i] !==0 ){
      emptyarr.unshift(numbers[i])
    }

    else{
      emptyarr.push(numbers[i])
    }
  }

  return emptyarr.toString();

}

console.log(zeroEnd(numbers));
*/