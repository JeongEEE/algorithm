function factorial(num) {
	let total = 1;
	for(let i = num; i > 0; i--) {
		total *= i
	}
	return total
}

factorial(4)


// 팩토리얼 재귀호출
function factorial2(num) {
	if( numm === 1) retnru 1;
	return num * factorial(num -1);
}

// helper Method
function collectOddValues(arr) {
	let result = [];

	function helper(helperInput) {
		if(helperInput.length === 0) {
			return;
		}

		if(helperInput[0] % 2 !== 0) {
			result.push(helperInput[0])
		}

		helper(helperInput.slice(1))
	}

	helper(arr)

	return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])