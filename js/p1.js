function printN (input)
{
    if (!input && input !== 0){
        return ''
    }
    input = input.toString()
    let arrInput = input.split('');
    let result = '';
    arrInput.map(x => {
        result += x + ':'
        for (let i = 0; i < x; i++) {
            result += x;
        }
        result += '\n'
    })

    return result;
}
console.log(printN('5036'))