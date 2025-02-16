//Maya Conway
//code.js
//Divide and Conquer Sum
//2-13-25

function divideAndConquerSum(a) {
	if (a.length == 1) return a[0];
	if (a.length == 0) return 0;   //base case <-^
	const split = Math.ceil(a.length / 3);
	const splitTwo = 2 * split;
	
	const oneThird = a.slice(0, split);
	const twoThird = a.slice(split, splitTwo);
	const thrThird = a.slice(splitTwo);
	
	return divideAndConquerSum(oneThird) + divideAndConquerSum(twoThird) + divideAndConquerSum(thrThird);
}
