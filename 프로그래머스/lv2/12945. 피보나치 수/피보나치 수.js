function fibonacci(number) {
    let result = [0, 1];
    for (let i = 2; i <= number; i++){
      result.push((result[i - 1] + result[i - 2]) % 1234567);
    }
    return result;
}
function solution(n) {
    const arr = fibonacci(n);
    return arr[n];
}