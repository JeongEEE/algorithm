/*
	1부터 N까지의 합
	자연수 N이 입력되면 1부터 N까지의 합을 출력
*/

function solution(n) {
	let answer = 0;
	for(let i = 1; i <= n; i++) {
		answer = answer + i;
	}

	return answer;
}

solution(6);