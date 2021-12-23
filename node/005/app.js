// 공식문서 링크  : https://nodejs.org/dist/latest-v14.x/docs/api/path.html
const path = require("path");

console.log(`구분자 : ${path.sep}`); //구분자는 Os마다 다르기 때문에 폴더나 파일 경로를 사용할 때 path.sep를 사용해야 한다.
console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);

console.log(__filename);
console.log(__dirname);
console.table(path.parse(__filename));
console.log(path.join(__dirname, "source"));
// console.log(__dirname + "/node"); // /\/\구분자 문제로 사용하지 말 것
