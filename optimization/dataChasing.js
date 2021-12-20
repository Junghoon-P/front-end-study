const abc = ["a", "b", "c", "d"];

// abc.forEach((item, index) => {
//     abc[index] = item + '💖';
// });

const abc2 = abc.map((item) => {
  return item + "💖";
});

console.log(abc2);
console.log(abc);
