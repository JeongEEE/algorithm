function solution(numbers) {
    var answer = 0, sum =0;
    numbers.forEach((item) => {
        sum += item;
    })
    answer = sum / (numbers.length);
    
    return answer;
}