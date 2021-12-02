var 변수하나 = 20;
var 변수둘 = 10;
var 변수셋 = 2;

document.write("변수하나 : ", 변수하나);
document.write("<br>");
document.write("변수둘 : ", 변수둘);
document.write("<br>");
document.write("변수셋 : ", 변수셋);
document.write("<br>");
document.write("변수하나+변수둘 : ", 변수하나 + 변수둘);
document.write("<br>");
document.write("변수하나-변수둘 : ", 변수하나 - 변수둘);
document.write("<br>");
document.write("변수하나/변수둘 : ", 변수하나 / 변수둘);
document.write("<br>");
document.write("변수하나*변수둘 : ", 변수하나 * 변수둘);
document.write("<br>");
document.write("변수하나**변수셋 : ", 변수하나 ** 변수셋);
document.write("<br>");
document.write("변수하나%변수셋 : ", 변수하나 % 변수셋);

typeof "hello world"; // String
typeof 100; // Number
typeof NaN; // Nnumber
typeof true; // Boolean
typeof undefined; // undefined
typeof Symbol(); // Symbol
typeof null; // Object, 여기서부터 js가 어려워 집니다.
typeof []; // Object, 여기서부터 js가 어려워 집니다. 왜 Array가 아닐까요?
typeof {}; // Object
typeof function () {}; // Object
typeof /정규표현식/gi; // Object

//숫자형 (Number)
var num = 10;

document.write(num, "<br>"); // 10
document.write(num / 3, "<br>"); // 3.3333..
document.write(parseInt(num / 3), "<br>"); // 3

/* 숫자형의 사칙연산 */
document.write("더하기 : ", 2 + 2.5, "<br>"); // 4.5
document.write("빼기 : ", 5 - 7, "<br>"); // -2
document.write("곱하기 : ", 3 * 2, "<br>"); // 6
document.write("나누기 : ", 2 / 2, "<br>"); // 1

/*특수 숫자 값*/
document.write("무한대 : ", 1 / 0, "<br>"); // Infinity
document.write("숫자가 아님" / 2);
// NaN, 문자열을 숫자로 나누면 오류가 발생합니다.

// let number = 1e9;
// let number = 123e-5;
// let number = 1.23e9;
// let number = 0b1010; //0, 1 -> 10 2진법 (바이너리, binary)
// let number = 0o12; //0 ~ 7 -> 10 8진법 (옥타, octa)
// let number = 0xff; //0 ~ f -> 255 16진법 (헥사, hexa)
// let number = parseInt('13', 10)
let number = parseFloat("13.3px.10");

document.write(number, "<br>");
document.write(0.1 + 0.2 == 0.3, "<br>");
document.write(9999999999999999999, "<br>");
// Big.js,  BigNumber.js,  Decimal.js,  Math.js 등으로 해결할 수 있습니다. 회사 컨벤션에 맞게 사용하시고, 저는 문자열로 처리 또는 9999999999999n + 3n으로 처리합니다.

// Number 관련 함수
let n = 10000;
let nFloat = 10000.123123123;
let s = "10,000,000";

document.write(`n : ${n} <br>`);
document.write(`n.toLocaleString() : ${n.toLocaleString()} <br>`);
document.write(`s : ${s} <br>`);
document.write(`s.replace(/,/g, '') : ${s.replace(/,/g, "")} <br>`);
document.write(`parseInt(s, 10) : ${parseInt(s, 10)} <br>`);

document.write(`n.toFixed(10) : ${n.toFixed(10)} <br>`);
document.write(`nFloat.toFixed(3) : ${nFloat.toFixed(3)} <br>`);
document.write(`nFloat.toExponential(4) : ${nFloat.toExponential(4)} <br>`);

document.write(`Number(true) : ${Number(true)} <br>`);
document.write(`Number(false) : ${Number(false)} <br>`);
document.write(`Number('') : ${Number("")} <br>`);
document.write(`Number(' ') : ${Number(" ")} <br>`);
document.write(`Number('hello') : ${Number("hello")} <br>`);
document.write(`Number('10 20') : ${Number("10 20")} <br>`);
document.write(`Number('10     ') : ${Number("10     ")} <br>`);
document.write(`Number('     10') : ${Number("     10")} <br>`);
document.write(`Number('     10     ') : ${Number("     10     ")} <br>`);

document.write(`Math.PI : ${Math.PI} <br>`);
document.write(`Math.round(4.7) : ${Math.round(4.7)} <br>`);
document.write(`Math.pow(2, 8) : ${Math.pow(2, 8)} <br>`);
document.write(`Math.sqrt(64) : ${Math.sqrt(64)} <br>`);
document.write(`Math.abs(-5) : ${Math.abs(-5)} <br>`);
document.write(`Math.random() : ${Math.random() * 10} <br>`);
document.write(
  `Math.max(10, 20, 30, 40, 50) : ${Math.max(10, 20, 30, 40, 50)} <br>`
);
document.write(
  `Math.min(10, 20, 30, 40, 50) : ${Math.min(10, 20, 30, 40, 50)} <br>`
);

//문자열 (string)

let txt = "ABCDEFGHIJKABC";
let txt_two = "mom said 'hello world'";

document.write(`txt : ${txt} <br>`);
document.write(`txt.length : ${txt.length} <br>`);
document.write(`txt[1] : ${txt[1]} <br>`);
document.write(`txt_two : ${txt_two} <br>`);

document.write(`txt.indexOf : ${txt.indexOf("F")} <br>`);
document.write(`txt.search : ${txt.search("FGH")} <br>`);
document.write(`txt.lastIndexOf : ${txt.lastIndexOf("Z")} <br>`);
document.write(`txt.slice(0, 3) : ${txt.slice(0, 3)} <br>`);
document.write(`txt.substring(0, 3) : ${txt.substring(0, 3)} <br>`);
document.write(`txt.substr(2, 5) : ${txt.substr(2, 5)} <br>`);

//정규표현식에서 한 번 더 다뤄드립니다.
document.write(
  `txt.replace('ABC', 'hojun') : ${txt.replace(/ABC/g, "hojun")} <br>`
);

document.write(`txt.toUpperCase() : ${txt.toUpperCase()} <br>`);
document.write(`txt.toLowerCase() : ${txt.toLowerCase()} <br>`);

//문자열 (string)

let txt = "ABCDEFGHIJKABC";
let txt_two = "mom said 'hello world'";

document.write(`txt : ${txt} <br>`);
document.write(`txt.length : ${txt.length} <br>`);
document.write(`txt[1] : ${txt[1]} <br>`);
document.write(`txt_two : ${txt_two} <br>`);

document.write(`txt.indexOf : ${txt.indexOf("F")} <br>`);
document.write(`txt.search : ${txt.search("FGH")} <br>`);
document.write(`txt.lastIndexOf : ${txt.lastIndexOf("Z")} <br>`);
document.write(`txt.slice(0, 3) : ${txt.slice(0, 3)} <br>`);
document.write(`txt.substring(0, 3) : ${txt.substring(0, 3)} <br>`);
document.write(`txt.substr(2, 5) : ${txt.substr(2, 5)} <br>`);

//정규표현식에서 한 번 더 다뤄드립니다.
document.write(
  `txt.replace('ABC', 'hojun') : ${txt.replace(/ABC/g, "hojun")} <br>`
);

document.write(`txt.toUpperCase() : ${txt.toUpperCase()} <br>`);
document.write(`txt.toLowerCase() : ${txt.toLowerCase()} <br>`);

// 문자열의 내장 함수
let txt = "ABCDEFGHIJKABC";

document.write(txt.includes("ABC"), "<br>");
document.write(txt.startsWith("BCD"), "<br>");
document.write(txt.endsWith("AB"), "<br>");

document.write(txt.indexOf("AB", 3), "<br>");

//논리형 (boolean)
var logic1 = true;
var logic2 = false;
var logic3 = 30 > 20;
var logic4 = 30 < 20;

document.write(logic1, "<br>"); //true
document.write(logic2, "<br>"); //false
document.write(logic3, "<br>"); // true
document.write(logic4, "<br>"); // false

//null
var a = "";
var b = null;

document.write(a, "<br>"); //
document.write(b, "<br>"); // null

//undefined
var c;
document.write(c, "<br>"); // undefined

//객체 (object)

// 함수는 후에 자세히 다룹니다.
function sum(x, y) {
  return x + y;
}

let person = {
  //key: value
  name: "이호준",
  age: 10,
  height: 30,
  weight: 40,
  이력: { 첫번째직장: "하나", 두번째직장: "둘" },
  기능: sum,
};
person.소속 = "바울랩";

document.write(`제 이름은 ${person.name} 입니다. <br>`);
document.write(`제 나이는 ${person.age} 입니다. <br>`);
document.write(`제 키는 ${person.height} 입니다. <br>`);

document.write(`제 이름은 ${person["name"]} 입니다. <br>`);
document.write(`제 나이는 ${person["age"]} 입니다. <br>`);
document.write(`제 키는 ${person["height"]} 입니다. <br>`);

document.write(`제 소속는 ${person["소속"]} 입니다. <br>`);
document.write(`제 이력은 ${person["이력"]["첫번째직장"]} 입니다. <br>`);
document.write(`제 기능은 ${person["기능"](10, 20)} 입니다. <br>`);

//배열 (array)

// 배열을 선언하는 다양한 방법
// let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
// let 과일 = new Array(5);
let 과일 = new Array("사과", "수박", "복숭아", "딸기", "바나나");

document.write(`${과일} <br>`);
document.write(`${과일[0]} <br>`);
document.write(`${과일[2]} <br>`);

//배열 내장함수

let 과일 = ["사과", "수박", "복숭아", "딸기", "바나나"];
let 과일선물 = ["체리", "멜론"];

document.write(`과일 : ${과일} <br>`);
let 꺼낸과일 = 과일.pop();
document.write(`과일.pop() : ${꺼낸과일} <br>`);
document.write(`과일 : ${과일} <br>`);
document.write(`과일.push() : ${과일.push(꺼낸과일)} <br>`);
document.write(`과일 : ${과일} <br>`);

document.write(`------------------ <br>`);

let 문자열 = 과일.toString();
document.write(`과일.toString()[1] : ${문자열[1]} <br>`);
document.write(`과일.join('!!*') : ${과일.join("!!*")} <br>`);
document.write(`과일.shift() : ${과일.shift()} <br>`);
document.write(`과일.unshift() : ${과일.unshift("호준")} <br>`);
document.write(`과일 : ${과일} <br>`);
document.write(
  `과일.splice(1, 0, '한라봉') : ${과일.splice(1, 0, "한라봉")} <br>`
);
document.write(`과일 : ${과일} <br>`);
document.write(`과일.slice(1, 3) : ${과일.slice(1, 3)} <br>`);
document.write(`과일 : ${과일} <br>`);
document.write(`과일.concat(과일선물) : ${과일.concat(과일선물)} <br>`);
document.write(`과일 : ${과일} <br>`);
document.write(`과일.sort() : ${과일.sort()} <br>`);
document.write(`과일 : ${과일} <br>`);
document.write(`과일.reverse() : ${과일.reverse()} <br>`);
document.write(`과일 : ${과일} <br>`);
document.write(
  `['1', '11', '2', '22'].sort() : ${["1", "11", "2", "22"].sort()} <br>`
);
document.write(
  `['1', '11', '2', '22'].length : ${["1", "11", "2", "22"].length} <br>`
);

// 다차원 배열

let 전교점수 = [
  // 1반
  [
    [10, 20, 30, 40, { name: "leehojun", age: 10 }],
    [20, 30, 40, 50, 60],
  ],
  // 2반
  [
    [10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60],
  ],
];

// document.write(전교점수[0][1][4]['age']);

// matrix
let m = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

document.write(m + m);
