/*
	A를 #으로
	대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 
	바꾸어 출력하는 프로그램을 작성하세요.
*/

function solution(str) {
	let answer = '';
	for(let x of str) {
		if(x === 'A') answer += '#';
		else answer += x;
	}

	return answer;
}

solution('BANANA');

function solution2(str) {
	let answer = str;
	answer = str.replace(/A/g, '#');

	return answer;
}