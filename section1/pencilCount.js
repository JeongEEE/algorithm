/*
	연필 다스 수 계산
	연필 1 다스는 12자루 입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할때
	N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 구현
*/

function solution(n) {
	let answer = Math.ceil(n / 12);

	return answer;
}

solution(25);