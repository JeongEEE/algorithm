function solution(array, commands) {
    var answer = [];
    
    commands.forEach((el) => {
        const newArr = array.slice(el[0] -1, el[1]);
        const result = newArr.sort((a,b) => a-b);
        answer.push(result[el[2]-1]);
    })
    
    return answer;
}