// Map 함수
// 새로운 배열을 만든다
// map 함수가 리턴하는 배열값은 원본값과 배열길이가 항상 같다
const a = [10, 11, 12, 13, 14, 15];
let answer = a.map((value, index) => {
	return v * v;
}, [1, 2]);
console.log(answer);


// filter 함수
// 콟백함수가 참을 반환한 값으로만 새로운 배열로 반환
const a = [10, 11, 12, 13, 14, 15];
let answer = a.filter((value, index) => {
	return v % 2 == 1;
}, [1, 2]);
console.log(answer);


// reduce 함수
// 배열로 특정값을 생성해서 반환
const a = [10, 11, 12, 13, 14, 15];
let answer = a.reduce((acc, value) => {
	return acc + v;
}, 0);
console.log(answer);