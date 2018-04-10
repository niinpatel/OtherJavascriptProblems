function mPowerN(m,n)
{
    var result = 1; // this is m^n for us.

    for(var i = 1; i <= n; i++ ){
        result = result * m;
    }

    return result;
}
// This program has time complexity of O(n). For more efficient algorithm see 2Power.js