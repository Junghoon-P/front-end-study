//객체지향

//1. 모듈 패턴
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

//2. 사용자 정의 타입 패턴
function PersonType() {
  this.age = 35;
}

PersonType.prototype.getAge = function () {
  return this.age;
};

const instancePerson = new PersonType();
instancePerson.age(); //35
