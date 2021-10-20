function reverse(str){
    let charArr = str.split('');
    charArr.reverse();
    let revstr = charArr.join('');
    return revstr;
}

console.log(reverse('daneshkar'))
console.log(reverse('Sajjad'))