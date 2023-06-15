function solution(s) {
    let str = s;
    let cnt0 = 0;
    let cnt = 0
    while(str !== '1') { // true인 경우 반복
        let origin = str.length;
        let len = str.replaceAll('0','').length;
        str = Number(len).toString(2)
        cnt0 += (origin - len);
        cnt++
    }
    return [cnt, cnt0];
}