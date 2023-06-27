function solution(n, arr1, arr2) {
    // 비트연산 | 결과를 이진수로 변환하여 자릿수만큼 0을 붙여줌
    // 이진수 문자를 공백과 #으로 정규식을 이용해 변환
    let answer = [];
    for(let i=0; i<n; i++) {
        let result = (arr1[i] | arr2[i]).toString(2).padStart(n, "0");
        let str = result.replace( /0/gi, ' ');
        let str2 = str.replace( /1/gi, '#');
        answer.push(str2)
    }
    console.log(answer);
    return answer;
}