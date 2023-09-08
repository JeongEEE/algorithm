/*
	대문자 찾기
	한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 
	프로그램 을 작성하세요.
*/

function solution(str) {
	let answer = 0;
	for(let x of str) {
		if(x === x.toUpperCase()) answer++;
	}
	
	return answer;
}

solution('KoreaTimeGood');


function solution2(str) {
	let answer = 0;
	for(let x of str) {
		let num = x.charCodeAt(); // 문자를 아스키코드로 변환
		// 대문자: 아스키코드 65~90
		// 소문자: 아스키코드 97~122 
		if(num >= 65 && num <= 90) answer++;
	}
	
	return answer;
}