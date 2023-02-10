/*
	가장 짧은 문자거리
	한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 
	최소거리를 출력하는 프로그램을 작성하세요.
	첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 
	문자열의 길이는 100을 넘지 않는다.
*/

function solution(str, t) {
	let answer = [];
	let p = 1000;
	for(let x of str) {
		if(x === t) {
			p = 0;
			answer.push(p);
		} else {
			p++;
			answer.push(p);
		}
	}
	p = 1000;
	for(let i = str.length -1; i >= 0; i--) {
		if(str[i] === t) {
			p = 0;
		} else {
			p++;
			answer[i] = Math.min(answer[i], p);
		}
	}
	
	return answer;
}

solution('teachermode', 'e');