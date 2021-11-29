//산술 연산
var x, y;
x = 5;
y = 9;
y++; //10
x--; //4
--x; //3
++x; //4
x = x + 2; //6
x += 2; //8
document.write(x, "<br>");
x *= 2; //16
document.write(x, "<br>");

var 이름 = "이호준";
var 나이 = 10;

document.write("제 이름은 " + 이름 + " 제 나이는 " + 나이 + "입니다.", "<br>");
document.write(`제 이름은 ${이름}입니다. 제 나이는 ${나이 + 나이} 입니다.`);

//비교 연산
var x, y;
x = 20;
y = 10;
document.write(x > y, "<br>"); // true
document.write(x < y, "<br>"); // false
document.write(x <= y, "<br>"); // false
document.write(x >= y, "<br>"); // true

document.write(x == 20, "<br>"); // true
document.write(x === "20", "<br>"); // false
document.write(x != y, "<br>"); // true
document.write(x != y * 2, "<br>"); // false

var x, y, z;
x = 10;
y = 20;
z = "10";

document.write(x > y, "<br>");
document.write(x < y, "<br>");
document.write(x >= y, "<br>");
document.write(x <= y, "<br>");

document.write(`x == z : ${x == z} <br>`);
document.write(`x === z : ${x === z} <br>`);
document.write(`x != y : ${x != y} <br>`);
document.write(`x != 10 : ${x != 10} <br>`);

// 논리연산
// and, or, not
// &&(and) = 논리곱
// ||(or) = 논리합
// !(not) = 부정
// true = 1
// false = 0

document.write(`true || true : ${true || true} <br>`);
document.write(`true || false : ${true || false} <br>`);
document.write(`false || true : ${false || true} <br>`);
document.write(`false || false : ${false || false} <br>`);

document.write(`true && true : ${true && true} <br>`);
document.write(`true && false : ${true && false} <br>`);
document.write(`false && true : ${false && true} <br>`);
document.write(`false && false : ${false && false} <br>`);

document.write(`!true : ${!true} <br>`);
document.write(`!false : ${!false} <br>`);

let x = 15;
document.write(`x % 3 == 0 || x % 5 == 0 : ${x % 3 == 0 || x % 5 == 0} <br>`);

// 타입 (https://ko.javascript.info/types 참고)

document.write(`typeof(5) : ${typeof 5} <br>`);
document.write(`typeof(5.5) : ${typeof 5.5} <br>`);
document.write(`typeof('5') : ${typeof "5"} <br>`);
document.write(`typeof('leehojun') : ${typeof "leehojun"} <br>`);
document.write(`typeof(x) : ${typeof x} <br>`);
document.write(`typeof(undefined) : ${typeof undefined} <br>`);
document.write(`typeof([1, 2, 3, 4]) : ${typeof [1, 2, 3, 4]} <br>`);
document.write(
  `typeof({'one':'하나', 'two':'둘'}) : ${typeof {
    one: "하나",
    two: "둘",
  }} <br>`
);

function js() {}
document.write(`typeof(js) : ${typeof js} <br>`);
document.write(`typeof(js / 2) : ${typeof (js / 2)} <br>`);
document.write(js / 2, "<br>");

document.write(`typeof('1'+1) : ${typeof ("1" + 1)} <br>`);
document.write("1" + 1, "<br>");
document.write(`typeof('leehojun' / 3) : ${typeof ("leehojun" / 3)} <br>`);
document.write("leehojun" / 3, "<br>");
document.write(`typeof(true) : ${typeof true} <br>`);

let test = null;
document.write(typeof test, "<br>");

// 타입의 형 변환 (https://ko.javascript.info/type-conversions 참고)

let one = 1;
document.write(`<p> one + one : ${one + one} </p>`);
document.write(
  `<p> String(one) + String(one) : ${String(one) + String(one)} </p>`
);

let two = "2";
document.write(`<p> two + two : ${two + two} </p>`);
document.write(
  `<p> Number(two) + Number(two) : ${Number(two) + Number(two)} </p>`
);

let three = two + two;
document.write(`<p> typeof(three) : ${typeof three} </p>`);

document.write(`<p> Boolean(-1) : ${Boolean(-1)} </p>`);
document.write(`<p> Boolean(0) : ${Boolean(0)} </p>`);
document.write(`<p> Boolean(' ') : ${Boolean(" ")} </p>`);
document.write(`<p> Boolean('') : ${Boolean("")} </p>`);
document.write(`<p> Boolean([]) : ${Boolean([])} </p>`);
document.write(`<p> Boolean([0]) : ${Boolean([0])} </p>`);
document.write(`<p> Boolean('0') : ${Boolean("0")} </p>`);
