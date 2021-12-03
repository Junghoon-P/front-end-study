Math.floor(Math.random() * 10);
//floor 소수점 자리 버림
//곱해지는 숫자 10은 10미만의 숫자를 보기 위해 // 다른 기준이 있으면 변경
//*3 + 2 는 2~4까지

즉,
  //랜덤 숫자 머신
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
//로또 6개 랜덤으로 뽑기
function lottoNum() {
  let result = [];
  for (let i = 0; i < 6; i++) {
    let num = randomNum(1, 46);
    for (let j in result) {
      if (num == result[j]) {
        num = randomNum(1, 46);
      }
    }
    result.push(num);
  }
  result.sort((a, b) => a - b);
  return result;
}
lottoNum();

//while을 사용하는 방법 => 이중for문은 시간복잡도가 너무 않좋아서 최대한 겹쳐쓰는걸 지양
let min = 1;
let max = 46;
let numList = [];

//랜덤 숫자 머신
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//로또 6개 랜덤으로 뽑기
function lottoNum() {
  let result = [];
  for (let i = 0; i < 6; i++) {
    let num = randomNum(1, 46);
    for (let j in result) {
      if (num == result[j]) {
        num = randomNum(1, 46);
      }
    }
    result.push(num);
  }
  result.sort((a, b) => a - b);
  return result;
}
lottoNum();

//while을 사용하는 방법 while은 중복이 안들어가는 특성 이용=> 이중for문은 시간복잡도가 너무 않좋아서 최대한 겹쳐쓰는걸 지양
let min = 1;
let max = 46;
let numList = [];

//////최종
function getLotto() {
  let arr = new Set();
  while (arr.size < 6) {
    arr.add(random(45, 1));
  }
  //set에서 데이터들만 뽑아서 배열로 만든 것
  [...arr].sort((a, b) => a - b);

  makeLotto.innerHTML = "";
  makeBall(arr);
}
