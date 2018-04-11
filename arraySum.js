function arraySum(array) {

    var sum = 0;
    length = array.length;

    for (var i = 0; i < length; i++){
        sum += array[i];
    }

    return sum;

}

array = [1,2,3,4,5,6,7,8,9,11];
console.log(arraySum(array));