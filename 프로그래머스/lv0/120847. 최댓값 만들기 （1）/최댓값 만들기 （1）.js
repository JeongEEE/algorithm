function solution(numbers) {
    var answer = 0;
    let arr = numbers
    const first = Math.max(...arr)
    const index = arr.findIndex((e) => e === first);
    arr.splice(index, 1);
    const second = Math.max(...arr)
    answer = first * second
    return answer;
}