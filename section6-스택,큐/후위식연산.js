/*
	후위식 (postfix) 연산 (스택)
	후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
	만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
*/

function solution(s) {
	let answer;
	let stack = [];
	for(let x of s) {
		if(!isNaN(x)) stack.push(Number(x));
		else {
			let rt = stack.pop();
			let lt = stack.pop();
			if(x === '+') stack.push(lt + rt);
			else if(x === '-') stack.push(lt - rt);
			else if(x === '*') stack.push(lt * rt);
			else if(x === '/') stack.push(lt / rt);
		}
	}
	answer = stack[0];
	return answer;
}

solution('352+*9-');