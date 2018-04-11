
function reverseArray(array) {
    length = array.length;



    for (var i = 0; i < length / 2; i++) {
        var temp;
        temp = array[i];
        array[i] = array[length - i - 1];
        array[length - i - 1] = temp;
    }

}

var array = [1,2,3,4,5,6,7,8];
console.log("before reverse: " + array);
reverseArray(array);
console.log("after reverse: " + array);