const TextManager = (() => {
  // let value = "Hello Lions!";
  //원시 자료형으로는 값이 계속 새로 복사되므로 사용하지 않는다. 즉, 원시값으로 만들면 인스턴스간에 값 공유가 불가능하다.
  // 원시타입의 값은 값의 위치를 참조하는 것이 아니라 값을 복사함.
  // 그래서 같은 값을 공유하는게 아니라 계속 새로운 값이 복사가 된다.
  let value = { data: "Hello Lions!" };

  function innerTextManager() {}

  innerTextManager.prototype.getValue = function () {
    return value.data;
  };

  innerTextManager.prototype.setValue = function (newValue) {
    value = newValue;
  };

  return innerTextManager;
})();

const myInstance = new TextManager();
