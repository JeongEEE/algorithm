/*
	공통 원소 구하기
	A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는
	프로그램을 작성하세요.

	첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
	두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
	세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
	네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
	각 집합의 원소는 1,000,000,000이하의 자연수입니다.
*/

function solution(arr1, arr2) {
	let answer = [];
	arr1.sort((a,b)=>a-b); // sort는 문자로 변환해서 정렬하므로 꼭 콜백함수를 넣어야함
	arr2.sort((a,b)=>a-b);
	let p1 = p2 = 0;
	while(pi < arr1.length && p2 < arr2.length) {
		if(arr[p1] === arr2[p2]) {
			answer.push(arr1[p1++]);
			p2++
		} else if(arr1[p1] < arr2[p2]) p1++;
		else p2++;
	}

	return answer;
}

solution([1,3,9,5,2], [3,2,5,7,8]);