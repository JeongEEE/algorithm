/*
	3개의 숫자중 최소값 구하기
	100 이하의 자연수 A, B, C 를 입력받아 세 수 중 가장 작은 값을 출력하는
	프로그램을 작성하세요. (정렬 사용 금지))
*/

function solution(a, b, c) {
	let answer;

	if(a < b) answer = a;
	else answer = b;

	if(c < answer) answer = c;

	return answer;
}

solution(6, 5, 11);