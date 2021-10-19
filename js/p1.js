function printN (input)
{
    if (!input && input !== 0){
        return ''
    }
    input = input.toString()
    let arrInput = input.split('');
    let result = '';
    arrInput.map(n => {
        result += '${n}:'
        for (let i = 0; i < n; i++) {
            result += n;
        }
        result += '\n'
    })

    return result;
}
console.log(printN('5036'))