function offSet(arr, x, l){
    if (x+l < 0 || x+l >= arr.length)
        return false
    let a= arr.splice(x , 1)[0];
    arr.splice(x+l, 0, a)
    return arr;
}

console.log(offSet([1,2,3,4,5,6,7], 2, 2))
console.log(offSet([1,2,3,4,5,6,7], 4, -3))