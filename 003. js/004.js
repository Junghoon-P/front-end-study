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
