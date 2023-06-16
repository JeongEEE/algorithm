function solution(n, words) {
    var answer = [0,0];

    let arr = [];
    for(let i=0; i<words.length; i++) {
        arr.push(words[i]);
        const set = new Set(arr);
        if(i>0) {
            let first = arr[i-1];
            let second = arr[i];
            if(first[first.length-1] !== second[0]) {
                answer = [ (i%n)+1, Math.floor(i/n) + 1 ];
                break;
            }
        }
        if(set.size < arr.length) {
            answer = [ (i%n)+1, Math.floor(i/n) + 1 ];
            break;
        }
    }

    return answer;
}