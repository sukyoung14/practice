// 각 문제에서 요구하는 답변을 작성한다
// try ~ catch 문 코드는 수정하지 않는다

// 문제
// 숫자를 인자로 받아 1을 더한 값을 반환하는 함수를 작성한다
// 함수명: addOne
// 반환값: 매개변수에 + 1을 한 값
const addOne = (num) => {
  return num + 1;
};
try {
  console.log(addOne(1)); // 2
  console.log(addOne(2)); // 3
  console.log(addOne(3)); // 4
} catch (error) {}

// 문제
// 숫자를 인자로 받아 짝수라면 true, 홀수라면 false를 반환하는 함수를 작성한다
// 함수명: isEven
// 반환값: 매개변수가 짝수라면 true, 홀수라면 false
const isEven = (num) => {
  if (num % 2 === 0) return true;
  else return false;
};
try {
  console.log(isEven(1)); // false
  console.log(isEven(2)); // true
  console.log(isEven(3)); // false
} catch (error) {}

// 문제
// 객체를 인자로 받아 객채의 속성명(key), 속성값(value), 속성명 - 속성값을 함수 내에서 출력하는 함수를 작성한다
// 함수명: printObject
// 반환값: 없음
// 객체(Object) 메서드(keys, values, entries) 사용

try {
  printObject({ name: "홍길동", age: 30, city: "서울" });
  /*
  [ 'name', 'age', 'city' ]
  [ '홍길동', 30, '서울' ]
  [ [ 'name', '홍길동' ], [ 'age', 30 ], [ 'city', '서울' ] ]
  */
} catch (error) {}

// 문제
// 배열을 인자로 받아 배열 고차 메서드로 배열의 원소를 함수 내에서 출력하는 함수를 작성한다
// 함수명: printArray
// 반환값: 없음
// 배열 고차 메서드(forEach) 사용
const printArray = (arr) => {
  arr.forEach((item) => {
    console.log(item);
  });
};
try {
  printArray([1, 2, 3, 4, 5]);
  /*
  1
  2
  3
  4
  5
  */
} catch (error) {}

// 문제
// 객체를 인자로 받아 각 속성 값(value)을 함수 내에서 출력하는 함수를 작성한다
// 함수명: printObjectValues
// 반환값: 없음
// 구조분해할당 활용

const printObjectValues = (object) => {
  const { name, age, city } = object;
  console.log(name);
  console.log(age);
  console.log(city);
};
try {
  printObjectValues({ name: "홍길동", age: 30, city: "서울" });
  /*
  홍길동
  30
  서울
  */
} catch (error) {}

// 문제
// 숫자를 인자로 받아 윤년이라면 true, 윤년이 아니라면 false를 반환하는 함수를 작성한다
// 함수명: isLeapYear
// 반환값: 매개변수가 윤년이라면 true, 윤년이 아니라면 false
// 윤년의 조건
// 1. 연도가 4로 나눴을 때 나머지가 0이고, 100으로 나눴을 때 나머지가 0이 아닌 경우
// 2. 또는 연도가 400으로 나눴을 때 나머지가 0인 경우
const isLeapYear = (num) => {
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) return true;
  else return false;
};
try {
  console.log(isLeapYear(2020)); // true
  console.log(isLeapYear(2021)); // false
  console.log(isLeapYear(2024)); // true
  console.log(isLeapYear(1900)); // false
} catch (error) {}

// 문제
// 숫자를 인자로 받아 학점을 반환하는 함수를 작성한다
// 함수명: getGrade
// 반환값: 매개변수가 90 이상이면 "A", 80 이상이면 "B", 70 이상이면 "C", 그 외는 "F"
const getGrade = (num) => {
  if (num >= 90) return "A";
  else if (num >= 80) return "B";
  else if (num >= 70) return "C";
  else return "F";
};
try {
  console.log(getGrade(95)); // A
  console.log(getGrade(85)); // B
  console.log(getGrade(75)); // C
  console.log(getGrade(65)); // F
} catch (error) {}

// 문제
// 숫자를 인자로 받아 0 보다 크면 "양수", 0 보다 작으면 "음수", 0이면 "0"을 출력하는 함수를 작성한다
// 함수명: printNumber
// 반환값: 없음
const printNumber = (num) => {
  if (num === 0) console.log("0");
  else if (num > 0) console.log("양수");
  else if (num < 0) console.log("음수");
};
try {
  printNumber(1); // 양수
  printNumber(0); // 0
  printNumber(-1); // 음수
} catch (error) {}

// 문제
// 이전 문제들의 함수 정의를 함수 선언식으로 했다면 화살표 함수로 다시 정의한다
// 이전 문제들의 함수 정의를 화살표 함수로 했다면 함수 선언식으로 다시 정의한다
