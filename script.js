const arr = [4, 3, 2, 1];

const divide = (arr, n) => {
  // Write your code here
	let sum = 0;
	let add = [];
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (sum + arr[i] <= n) {
		sum += arr[i];
		add.push(arr[i]);
		}else{
			result.push(add);
			sum = arr[i];
			add = [arr[i]];
		}
	}

	if (add.length>0) {
		result.push(add);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

