function solution(num_list) {
    var a=0, b=0;
    num_list.forEach((item) => {
        if(item % 2 === 0) a++;
        else b++;
    })
    return [a,b];
}