
function reverseArray(array) {
    length = array.length;


    for (var i = 0; i <= length / 2; i++) {
        var temp;
        temp = array[i];
        array[i] = array[length - i - 1];
        array[length - i - 1] = temp;
    }

}

