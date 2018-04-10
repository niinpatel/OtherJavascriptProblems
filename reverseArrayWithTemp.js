var array = [1,4,5,4,6,7,8];
temp = [];

length = array.length;
for (var i = 1; i <= length; i++){
    temp.push(array[length - i]);
}

array = temp;
console.log(array);

/*
See reverseArray.js for this same program without temporary array.
 */
