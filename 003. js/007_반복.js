var cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";

var text = "";

//반복문
for (var i = 0; i < 10; i++) {
  document.write(i, "<br>");
}

//1부터 100까지의 짝수의 합
let s = 0;
for (var i = 0; i < 101; i += 2) {
  document.write(i, "<br>");
  s += i;
}
document.write(s, "<br>");

//구구단
for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    document.write(`${i} X ${j} = ${i * j} <br>`);
  }
}

//100보다 작은 3의 배수와 5의 배수의 합
s = 0;
for (var i = 0; i < 101; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    document.write(i, "<br>");
    s += i;
  }
}
document.write(s, "<br>");

text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";

//최댓값 구하기
var value = [100, 200, 50, 400, 900];
function maximum(value) {
  var max = 0;
  for (var i = 0; i < value.length; i++) {
    if (max < value[i]) {
      max = value[i];
    }
  }
  return max;
}
document.write(maximum(value)); //900
document.write("<br>");

//for
let array = [10, 20, 30, 40, 50];
let i = 0;

for (let i = 0; i < array.length; ) {
  document.write(array[i], "<br>");
  i++;
}

array.forEach((e) => console.log(e * 3));

for (var variable in array) {
  document.write(array[variable], "<br>");
}

for (var variable of array) {
  document.write(variable, "!! <br>");
}

//for of
//합의 평균
let array = [10, 20, 30, 40, 50];
let i = 0;
let sum = 0;

for (let value of array) {
  sum += value / array.length;
}

//Math.max.apply() 사용해서 최댓값 구하기
var max2 = Math.max.apply(null, value);
document.write(max2); //900

//구구단
for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    document.write(`${i} X ${j} = ${i * j} <br>`);
  }
}

//while
let num = 0;
while (num < 11) {
  document.write(num, "<br>");
  num += 1;
}

do {
  document.write(num, "!! <br>");
  num += 1;
} while (num < 11);

let i = 2;
let j = 1;
while (i < 10) {
  while (j < 10) {
    document.write(`${i} X ${j} = ${i * j} <br>`);
    j++;
  }
  j = 1;
  i++;
}
//구구단
let i = 2;
let j = 1;
while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
    j++;
  }
  i++;
  j = 1;
}

//
let num = 0;
while (num < 11) {
  num++;
  document.write(num, "<br>");
  if (num > 5) {
    continue;
  }
}

num = 0;
while (num < 11) {
  num++;
  document.write(num, "<br>");
  if (num > 5) {
    break;
  }
}

//
let i = 2;
let j = 1;
while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
    if (j == 5) {
      break;
    }
    j++;
  }
  i++;
  j = 1;
}

//리터럴 템플릿 99단 출력
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?
// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)
let text = "";
let count = 0;
for (let i = 0; i < 10001; i++) {
  if (text[i] == "8") {
    count += 1;
  }
}
//or
function countEight(number) {
  let array = Array.from(new Array(number), (x, i) => i + 1);
  return array.join("").split("8").length - 1;
}
//or

Array.apply(null, Array(10000))
  .map((v, i) => {
    return i;
  })
  .join("")
  .match(/8/g).length;

// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)
// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

//최댓값 구하기
let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let temp = sample[0];

for (let i = 0; i < sample.length; i++) {
  if (temp < sample[i]) {
    temp = sample[i];
  }
}

//최솟값 구하기

let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let temp = sample[0];

for (let i = 0; i < sample.length; i++) {
  if (temp > sample[i]) {
    temp = sample[i];
  }
}
//
let value = [1, 3, 4, 8, 13, 17, 20];
let temp = value[1] - value[0];
let index = 0;

for (let i = 0; i < value.length - 1; i++) {
  if (temp > value[i + 1] - value[i]) {
    temp = value[i + 1] - value[i];
    index = i;
  }
}

console.log(value[index], value[index + 1]);

// 정답코드
let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0]; // 4 - 1 -> 3, 초기 temp는 3
let result = 0;

for (let i = 0; i < value.length - 1; i++) {
  if (temp > value[i + 1] - value[i]) {
    temp = value[i + 1] - value[i];
    result = i;
  }
}

console.log(value[result], value[result + 1]);
////////////////////////

// 1번째 순회(i==0, temp=3, result=0)
for (let i = 0; i < 8; i++) {
  if (3 > 3) {
    temp = value[i + 1] - value[i];
    result = i;
  }
}

// 2번째 순회(i==1, temp=2, result=1)
for (let i = 0; i < 8; i++) {
  if (3 > 2) {
    temp = 2;
    result = 1;
  }
}

// 3번째 순회(i==2, temp=2, result=1)
for (let i = 0; i < 8; i++) {
  if (2 > 2) {
    temp = value[i + 1] - value[i];
    result = i;
  }
}

// 무한루프
// for (;;) { ... }
// 무한루프
// while (true) { ... }

// outer라는 식별자가 붙은 레이블 for 문
// 현업에서는 객체와 햇갈려서 잘 안쓰는 편
// 할꺼면 function으로.
outer: for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i === 5) break outer;
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

// outer라는 식별자가 붙은 레이블 for 문
// 현업에서는 객체와 햇갈려서 잘 안쓰는 편
// 할꺼면 function으로.
outer: for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i === 5) break outer;
    console.log(`${i} X ${j} = ${i * j}`);
  }
}
