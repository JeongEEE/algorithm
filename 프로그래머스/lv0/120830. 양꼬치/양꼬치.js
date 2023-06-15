function solution(n, k) {
    var answer = 0, discount = 0;
    
    if(n > 9) discount = Math.floor(n / 10) * 2000;
    answer = (n*12000) + (k*2000) - discount;
    
    return answer;
}