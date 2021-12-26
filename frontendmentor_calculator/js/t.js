/* 
var a = "firstt";
var b = "second";

a == "first" ? console.log(a) : console.log(b);

const array = [4, 33, 8, 56, 23, 4];

const found = array.find(element => {
  return element > 50;
});
console.log(found);   //  56

const found2 = array.filter(element => {
  return element == 4;
});

console.log(found2);   //  4, 4


const found3 = array.find(element => {
  return element == 23 ? void founded() : void notfounded();
});

function founded()   { console.log("--founded", found3);    }
function notfounded(){ console.log("--notfounded", found3); } */

var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Элементы массива фильтруется на основе критериев поиска (query)
*/
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.indexOf(query) > -1;
  })
}

console.log(filterItems('ap', 'an')); // ['apple', 'grapes']

var arr = [1];
if(arr.length == 0){console.log("empy")}

