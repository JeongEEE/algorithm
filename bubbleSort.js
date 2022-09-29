function bubbleSort(arr) {
	var noSwaps;
	for(var i = arr.length; i > 0; i--) {
		noSwaps = true;
		for(var j = 0; j < i - 1; j++) {
			console.log(arr, arr[j], arr[j+1]);
			if(arr[j] > arr[j+1]) {
				//swap
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				noSwaps = false;
			}
		}
		console.log('one pass complete');
		if(noSwaps) break;
	}
	return arr;
}

bubbleSort([37,45,29,8])
// [37,45,29,8]
// [37,45,8,45]
// [29,8,37,45]