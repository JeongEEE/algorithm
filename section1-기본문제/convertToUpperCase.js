/*
	대문자로 통일
	대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 
	문자열을 출력 하는 프로그램을 작성하세요.
*/

function solution(str) {
	let answer = '';
	for(let x of str) {
		if(x === x.toLowerCase()) answer += x.toUpperCase();
		else answer += x;
	}
	
	return answer;
}

solution('ItisTimeToStudy');


// 아스키넘버 이용
function solution2(str) {
	let answer = '';
	for(let x of str) {
		let num = x.charCodeAt();
		if(num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
		else answer += x;
	}
	
	return answer;
}

function solution3(str) {
	let answer = '';
	answer = str.toUpperCase();
	
	return answer;
}




/*
	대소문자 변환
	대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 
	대문자로 변환하여 출력하는 프로그램을 작성하세요.
*/

function solution4(str) {
	let answer = '';
	for(let x of str) {
		if(x === x.toUpperCase()) answer += x.toLowerCase();
		else answer += x.toUpperCase();
	}

	return answer;
}

solution4('StuDY');