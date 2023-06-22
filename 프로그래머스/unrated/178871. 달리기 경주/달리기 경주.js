function solution(players, callings) {
    const playersMap = {};
    let arr = players;
    for(let i=0; i<players.length; i++) {
        playersMap[players[i]] = i;
    }
    
    for(let i=0; i<callings.length; i++) {
        const idx = playersMap[callings[i]];
        const temp = arr[idx-1];
        
        arr[idx-1] = callings[i];
        arr[idx] = temp;
        
        playersMap[callings[i]] = idx - 1;
        playersMap[temp] = idx;
    }
    
    return arr;
}