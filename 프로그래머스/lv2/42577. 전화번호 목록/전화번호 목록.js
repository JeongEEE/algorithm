function solution(phone_book) {
    phone_book.sort();
    let answer = true;
    let map = new Map();
    
    // phone_book.forEach((el, idx) => {
    //     map.set(idx, el)
    // })
    
    for(let i=0; i<phone_book.length-1; i++) {
        if(phone_book[i+1].startsWith(phone_book[i])) {
            answer = false;
            break;
        }
    }
    
    
    return answer;
}