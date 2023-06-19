const getLCM = (num1, num2) =>{
  let lcm = 1;
  while(true){
    if((lcm % num1 == 0) && (lcm % num2 == 0)){
      break;
    }
    lcm++;
  }
  return lcm
}

function solution(arr) {
    var answer = arr[0];
    
    for(let i=1; i<arr.length; i++) {
        answer = getLCM(answer, arr[i]);
    }
    
    return answer;
}