// 자바에서 처리하기 까다로워서 프론트에서 처리하는 경우가 있음(중요함)
let x = 10.656;
console.log(x.toFixed(0));  // 결과값 : 11
console.log(x.toFixed(2));  // 결과값 : 10.56
console.log(x.toFixed(5));  // 결과값 : 10.65600

// toPrecision()
console.log(x.toPrecision()); // 결과값 : 10.656
console.log(x.toPrecision(2));  // 결과값 : 11
console.log(x.toPrecision(4));   // 결과값 : 10.66

// parseInt()
console.log(parseInt('-10')); // 결과값 :
console.log(parseInt('-12.33')); // 결과값 :
console.log(parseInt('10')); // 결과)값 :
console.log(parseInt('12.33')); //) 결과값 :
console.log(parseInt('10 20 30')); // 결과값 :
console.log(parseInt('10 years')); // 결과값 :
console.log(parseInt('years 10')); // 결과값 :

