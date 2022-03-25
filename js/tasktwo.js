function countTrue (arr){

	var count = 0;

	for (var i of arr){

		if (i == true){
			count ++;
		}
	}

	return count;
}

console.log(countTrue([true, false, true, true, false, true]));


// version 2

/*
var countTrue = [false, true, false, true, true, true, true];

function trueSum(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === true){
			sum++;
		}
	}
	return sum;
}

console.log(trueSum(countTrue));
*/
