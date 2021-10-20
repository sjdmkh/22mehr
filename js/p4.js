function diff(str1, str2){
    for (let i in str1){
        for (let j in str2){
            if (str1[i] === str2[j])
                str1[i] = [];
        }
    }
    return str1.filter(Number);
}
let str1 = [1, 2, 3, 4, 5, 6, 7];
let str2 = [5, 6, 7];
console.log(diff(str1, str2))