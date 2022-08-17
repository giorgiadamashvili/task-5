const str = "ahb acb aeb aeeb adcb axeb";
const matchSt = str.match(/a.b/gi);

console.log(matchSt);


const str1 = '2 + 3 223 2223';
const matchSt1 = str1.match(/2 \+\ 3/);
console.log(matchSt1)


const date = new Date();
const today = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();


console.log(date.getDate(), date.getMonth(), date.getFullYear());