/*
	문자 찾기
	한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 
	몇 개 존재하는지 알아내는 프로그램을 작성하세요.
	문자열의 길이는 100을 넘지 않습니다.
*/

function solution(str, t) {
	let answer = 0;
	for(let x of str) {
		if(x === t) answer++;
	}
	
	return answer;
}

solution('COMPUTERPROGRAMMING', 'R');


function solution2(str, t) {
	let answer = s.split(t).length;
	
	return answer - 1;
}