function solution(s){
    var answer = true;
    let arr = s.split('')
    let left = 0;
    let right = 0;
    let cnt = 0;
    if(arr[0] == ')') return false;
    for(let i=0; i<arr.length; i++) {
        if(right > left) {
            return false
            break;
        }
        if(arr[i] === '(') {
            left++
            cnt++
        } else {
            right++
            cnt--
        }
    }
    if(cnt !== 0) return false
    return answer;
}