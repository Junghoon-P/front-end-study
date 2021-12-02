//재귀함수
function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}

factorial(5); //120
factorial(5) == 5 * factorial(4); // 5*24
factorial(4) == 5 * factorial(3); // 4*6
factorial(3) == 5 * factorial(2); // 3*2
factorial(2) == 5 * factorial(1); // 2*1
factorial(1);

//sigma
function sigma(n) {
  if (n <= 1) {
    return n;
  }
  return n + sigma(n - 1);
}

sigma(5); //15
// sigma(5) == 5 + sigma(4) // 5 + 10
// sigma(4) == 4 + sigma(3) // 4 + 6
// sigma(3) == 3 + sigma(2) // 3 + 3
// sigma(2) == 2 + sigma(1) // 2 + 1
// sigma(1) == 1

//문자열 뒤집기
function reverse(text) {
  text += "";
  if (text.length <= 1) {
    return text;
  }
  return reverse(text.slice(1)) + text[0];
}

reverse("hello"); //'olleh'

// reverse('hello') == reverse('ello') + 'h' == 'olle' + 'h'
// reverse('ello') == reverse('llo') + 'e' == 'oll' + 'e'
// reverse('llo') == reverse('lo') + 'l' == 'ol' + 'l'
// reverse('lo') == reverse('o') + 'l' == 'o' + 'l'
// reverse('o') == 'o'

//피보나치
function fib(n) {
  if (n <= 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// 왼쪽 function만 따라갔으니
// fib(4) == fib(3) + fib(2)
// fib(3) == fib(2) + fib(1) == 3
// fib(2) == 2
// fib(1) == 1

// 오른쪽 값인 fib(2)를 다시 해야하는 상황!!
// fib(2) == 2

// 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
// 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
let fibo_cache = [];
function fibo(n) {
  if (n in fibo_cache) {
    return fibo_cache[n];
  }
  fibo_cache[n] = n < 2 ? n : fibo(n - 2) + fibo(n - 1);
  return fibo_cache[n];
}

// fibo_cache = [0, 1, 1, 2, fibo(2) + fibo(3)]
// fibo(4) == fibo_cache[4] == fibo(2) + fibo(3)
// fibo(2) == fibo_cache[2] == fibo(0) + fibo(1)
// fibo(0) == fibo_cache[0] == 0
// fibo(1) == fibo_cache[1] == 1
// fibo(3) == fibo_cache[3] == fibo(1) + fibo(2)
// fibo(1) == 1
// fibo(2) == 1

function comma(text) {
  text += "";
  if (text.length <= 1) {
    return text;
  }
  return text[0] + text[1] + text[2] + "," + text.slice(1) + text[0];
}

// 배열
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees; // true를 반환합니다.
3 in
  trees(
    // true를 반환합니다.
    1 + 2
  ) in
  trees; // true를 반환합니다. 연산자 우선 순위에 의하여 이 구문의 괄호는 없어도 됩니다.
6 in trees; // false를 반환합니다.
"bay" in trees; // false를 반환합니다. 당신은 배열의 내용이 아닌, 인덱스 값을 명시하여야 합니다.
"length" in trees; // true를 반환합니다. length는 Array(배열) 객체의 속성입니다.

// 미리 정의된 객체
"PI" in Math; // true를 반환합니다.
"P" + "I" in Math; // true를 반환합니다.

// 사용자가 정의한 객체
var myCar = {
  company: "Lamborghini",
  model: "Lamborghini Veneno Roadster",
  year: 2014,
};
"company" in myCar; // true를 반환합니다.
"model" in myCar; // true를 반환합니다

//콤마찍기
const Comma = (s) => {
  if (s.length <= 3) {
    return s;
  } else {
    return Comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3);
  }
};
