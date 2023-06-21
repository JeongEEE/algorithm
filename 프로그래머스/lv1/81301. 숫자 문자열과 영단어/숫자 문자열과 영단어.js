const arr = [
    { str: 'zero', value: '0' },
    { str: 'one', value: '1' },
    { str: 'two', value: '2' },
    { str: 'three', value: '3' },
    { str: 'four', value: '4' },
    { str: 'five', value: '5' },
    { str: 'six', value: '6' },
    { str: 'seven', value: '7' },
    { str: 'eight', value: '8' },
    { str: 'nine', value: '9' },
]

function solution(s) {
    var answer = s;
    
    arr.forEach((el) => {
        const regex = new RegExp(`${el.str}`, 'gi');
        answer = answer.replace(regex, el.value);
    })
    
    return Number(answer);
}