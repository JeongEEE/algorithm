/*
이진트리 순회(깊이우선탐색)

전위순회 - 부모 왼쪽 오른쪽 1 2 4 5 3 6 7
중위순회 - 왼쪽 부모 오른쪽 4 2 5 1 6 3 7
후위순회 - 왼쪽 오른쪽 부모 4 5 2 6 7 3 1
*/

function solution(v) {
  let answer;
  function DFS(v) {
    if(v > 7) {
      return;
    } else {
      console.log(v)
      DFS(v * 2)
      DFS( v * 2 + 1)
    }
  }

  DFS(v);
  return answer;
}

solution(1);