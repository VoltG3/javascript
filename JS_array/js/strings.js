
  // -> Function OUT :: outer    { calls from HTML
  // -> Function SUB :: internal { calls from SCRIPT
  // -> Function GLB :: global   { ..... for  FUNCTIONS
  //
  // -> !# { commnet { something mast to be done / or not finished !

var U = "<br>";
var txt_00 = 'Array reseted!' + U + 'arr.lenght = 3;';
var txt_01 = 'Creating an array:' + U + ' let arr = ["item", "item", "item"]' + U + 'arr.lenght = 3;';
var txt_02 = 'Adding a new item to the end of the array:' + U + 'arr.lenght += 1;' + U + 'let new_arr = arr.push("item");';
var txt_03 = 'Adding a new item to the start of the array::' + U + 'arr.lenght += 1;' + U + 'let new_arr = arr.unshift("item");';
var txt_04 = 'Adding an item at a specific position in an array:' + U + 'arr.lenght += 1;' + U + ' let new_arr = arr.splice(2, 0, "item");';
var txt_05 = 'Removing an item from the end of the array:' + U + 'arr.lenght -= 1;' + U + 'let new_arr = arr.pop();';
var txt_06 = 'Removing an item from the start of the array:' + U + ' arr.lenght -= 1;' + U + 'let new_arr = arr.shift();';
var txt_07 = 'Removing an item by its index:' + U + ' arr.lenght -= 1;' + U + 'let new_arr = arr.splice(2, 0);';
var txt_08 = 'Finding the index of an item in the array:' + U + 'var A = arr.indexof("item");';
