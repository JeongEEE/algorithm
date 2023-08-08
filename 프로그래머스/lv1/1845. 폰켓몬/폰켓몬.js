function solution(nums) {
    let map = new Map();
    
    nums.forEach(el => {
        map.set(el, (map.get(el) || 0) + 1);
    })
    console.log(map)
    
    if(map.size > nums.length/2) return nums.length/2;
    else return map.size;
}