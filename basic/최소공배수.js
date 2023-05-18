/*
	최소공배수란? 두 수의 최소공배수는 두 수에 서로 공통으로 존재하는 배수 중 가장 작은 수를 뜻합니다.
	
	두 수, 혹은 그 이상의 여러 수의 공통인 배수 중 가장 작은 수이다.
	lcm을 1부터 시작하여 점차 lcm++하면서 각각의 두 수를 lcm으로 나누었을 때 나머지 값이 0인지를 비교한다.
*/

let getLCM = (num1, num2) =>{
	let lcm = 1;
   
  while(true){
    if((lcm % num1 == 0) && (lcm % num2 == 0)){
      break;
    }
    lcm++;
  }
  return lcm
}