/*
	공약수(common divisor)란 두 수 이상의 여러 수의 공통된 약수를 의미합니다. 
	최대공약수(GCD)란 두 수 이상의 여러 수의 공약수 중 최대인 수를 가리킵니다.

	최대공약수는 두 수 A와 B의 공통된 약수 중에 가장 큰 정수이다.
	최대공약수를 구하는 가장 쉬운 방법은 2부터 min(A, B)까지 모든 정수로 나누어보는 방법이다.
*/

let getGCD = (num1, num2) => {
	let gcd = 1;

	for(let i=2; i<=Math.min(num1, num2); i++){
		if(num1 % i === 0 && num2 % i === 0){
			gcd = i;
		}
	}

	return gcd;
}

/*
	유클리드 호제법
	2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b) a와 b의 최대공약수는 
	b와 r의 최대공약수와 같다. 

	- a,b 를 서로 나눌때, 나누어진다면 b가 최대 공약수 이다. (a>b)
	- 만약 a,b가 나누어지지 않으면 b와 a를 b로 나눈 나머지(r)를 다시 나눈다
	- 서로가 나누어지면 a%b 가 최대공약수이다. 나누어지지 않는다면 위처럼 b와 r(a를 b를 나눈 나머지)를 다시 나눈다.
*/

function gcdlcm(a, b) {
  var gcd = calc_gcd(a, b);
  var lcm = (a * b) / gcd;
 
  return [gcd, lcm];
}
 
function calc_gcd(a, b) {
  if (b == 0) return a;
  return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
}
