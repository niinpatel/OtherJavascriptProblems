/**
 * @param n
 * input must be a perfect square.
 */
function sqrt(n){
    for (var i = 0; i < n/2; i++){
        if(n%i === 0){ // checking if n is divisible by i
            if(i*i === n){
                return i;  // if i squared is n, i is the square root of n.
            }
        }
    }
}

// this program has a time complexity of n.