/*
	격자판 최대합
	5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
	10 12 11 19 19
	13 39 25 27 13
	10 30 50 29 30
	12 23 53 37 13
	15 11 15 27 19
	N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 
	큰 합을 출력합니다.
*/

function solution(arr) {
	let answer = Number.MIN_SAFE_INTEGER;
	let n = arr.length;
	let sum = sum2 = 0;
	for(let i = 0; i < n; i++) {
		sum1 = sum2 = 0;
		for(let j = 0; j < n; j++) {
			sum1 += arr[i][j];
			sum2 += arr[j][i];
		}
		answer = Math.max(answer, sum1, sum2);
	}
	sum1 = sum2 = 0;
	for(let i = 0; i < n; i++) {
		sum1 += arr[i][j];
		sum2 += arr[i][n-i-1];
	}
	answer = Math.max(answer, sum1, sum2);
	return answer;
}

solution([[10, 13, 10, 12, 15],
					[12, 39, 30, 23, 11],
					[11, 25, 50, 53, 15],
					[19, 27, 29, 37, 27],
					[19, 13, 30, 13, 19]]);