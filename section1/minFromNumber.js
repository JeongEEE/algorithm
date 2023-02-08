/*
	최소값 구하기
	7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력
*/

function solution(arr) {
	let answer, min = Number.MAX_SAFE_INTEGER;
	for(let i =0; i < arr.length; i++) {
		if(arr[i] < min) min = arr[i];
	}
	answer = min;
	return answer;
}

solution([5, 7, 1, 3, 2, 9, 11]);

function solution2(arr) {
	// 최솟값, 최대값 구하기
	let min = Math.min(...arr), max = Math.max(...arr);
	
	return [min, max];
}