function solution(name, yearning, photo) {
    var answer = [];
    const map = {};
    
    name.forEach((el, idx) => {
        map[el] = yearning[idx]
    });
    
    for(let i=0; i<photo.length; i++) {
        const arr = photo[i];
        let sum = 0;
        for(let j=0; j<arr.length; j++) {
            const score = map[arr[j]] != undefined ? map[arr[j]] : 0;
            sum += score;
        }
        answer.push(sum);
    }
    
    return answer;
}