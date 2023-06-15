function solution(n) {
    let cnt = n.toString(2).split('1').length -1;
    
    let el = n;
    el++;
    while (el > n) {
        let cnt2 = el.toString(2).split('1').length -1;
        if(cnt2 === cnt) break;
        else el++;
    }
    
    return el;
}