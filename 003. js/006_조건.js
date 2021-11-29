//if

var test = 5;
if (test < 10) {
  //codes
}

let x = 3;
let y = 7;

if (x == y) {
  document.write("if문으로 실행되었습니다.");
} else {
  document.write("else문으로 실행되었습니다.");
}

//
let score = 69;
let money = 1000;

if (score > 90) {
  document.write("참 잘했습니다!<br>");
  money += 100000;
} else if (score > 80) {
  document.write("잘했습니다!<br>");
  money += 10000;
} else if (score > 70) {
  document.write("했습니다!<br>");
  money += 1000;
} else {
  money = 0;
}

document.write(money);

//삼항
let x = 3;

x == 4
  ? document.write("if문으로 실행되었습니다.<br>")
  : document.write("else문으로 실행되었습니다.<br>");

let result = x == 4 ? 100 : 200;
document.write(result);

document.write("<br>");

let score = 91;
let money = 1000;
score > 90
  ? (money += 100000)
  : score > 80
  ? (money += 10000)
  : score > 70
  ? (money += 1000)
  : (money = 0);

document.write(money);

//switch
let x = 3;

x == 4
  ? document.write("if문으로 실행되었습니다.<br>")
  : document.write("else문으로 실행되었습니다.<br>");

let result = x == 4 ? 100 : 200;
document.write(result);

document.write("<br>");

let score = 91;
let money = 1000;
score > 90
  ? (money += 100000)
  : score > 80
  ? (money += 10000)
  : score > 70
  ? (money += 1000)
  : (money = 0);

document.write(money);
