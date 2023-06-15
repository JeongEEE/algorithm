function solution(s) {
    var answer = '';
    let arr = s.split(' ')
    for(let i=0; i<arr.length; i++) {
        let str = '';
        for(let j=0; j<arr[i].length; j++) {
            if(isNaN(arr[i][j]) && j == 0) str += arr[i][j].toUpperCase();
            else if(!isNaN(arr[i][j]) && j==0) str += arr[i][j];
            else str += arr[i][j].toLowerCase();
        }
        answer += str
        if(i<arr.length-1) answer += ' ';
    }
    return answer;
}