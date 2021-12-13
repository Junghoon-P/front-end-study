//객체지향

//1. 모듈 패턴
// 폐쇄된 공간을 만들기 위한 함수
function Person() {
  //객체를 반환하는 함수는 앞에 대문자를 작성한다.
  let age = 35;

  return {
    getAge: function () {
      return age;
    },
    setAge: function (data) {
      age = data;
    },
  };
}

const person = Person();
// return문으로 객체를 만드니까 생성자 함수가 아니네요 그래서 new 없이 호출
person.getAge(); //35

// 생성자 함수는 객체(인스턴스) 를 생성하는 함수입니다. 하지만 생성자 함수는 일반 함수와 동일한 방법으로 정의되고, new 연산자와 함께 호출하면 생성자 함수로 동작합니다. 즉, new 연산자와 함께 호출하지 않으면 일반 함수로 동작합니다.
//값을 은닉하기 위해서 클로저 테크닉을 사용한다.

//2. 사용자 정의 타입 패턴
// 인스턴스를 만들기 위한 함수
function PersonType() {
  this.age = 35;
}
//생성자 함수에서 this는 인스턴스를 가르킨다.

PersonType.prototype.getAge = function () {
  return this.age;
};

const instancePerson1 = new PersonType();
//new 키워드를 사용하면  this가 인스턴스를 가르키게 한다.
// const instancePerson2 = new PersonType();
// const instancePerson3 = new PersonType();
//같은 값을 계속 공유할 수 있다.
instancePerson1.age(); //35

let person1 = { age: 35 };
// let person2 = { age: 35 };
//같은 값을 계속 선언하고 할당해야 한다. 비효율적

// 3. 모듈 + 사용자 정의 타입
// 모듈 패턴 쓰는 이유 : 값을 은닉하기 위해
function PersonType2() {
  let age = 25;

  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
}

const Person3 = PersonType2();
const person3 = new Person3();
person3.getAge(); // 25

//IIFE(즉시실행함수) 패턴으로 만들어보기
const PersonType3 = (function () {
  let age = 25;

  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
})();

const personType3 = new personType3();
personType3.getAge(); //25
