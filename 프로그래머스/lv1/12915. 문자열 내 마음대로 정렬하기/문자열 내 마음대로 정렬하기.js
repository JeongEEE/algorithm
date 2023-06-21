function solution(strings, n) {
    var answer = [];
    strings.sort((a,b) => { 
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    
    let div = [];
    strings.forEach((el, index) => {
        div.push({str: el.substring(n,n+1), idx: index});
    })
    div.sort((a,b) => { 
        if(a.str > b.str) return 1;
        if(a.str < b.str) return -1;
        return 0;
    });
    div.forEach(el => {
        answer.push(strings[el.idx]);
    })
    
    return answer;
}