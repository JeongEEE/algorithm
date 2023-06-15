function solution(sides) {
    var answer = 0, sum = 0, max = 0;
    sides.forEach(item => {
        sum += item;
        if(item >= max) max = item;
    })
    let two = sum - max;
    if(two > max) answer = 1;
    else answer = 2;
    
    return answer;
}