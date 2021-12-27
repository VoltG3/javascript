//
// Find operation signs and canculate: add / subtract / multiple / divide
//

var arr = [10, "+", 20, "*", 3, "-", 18, "/", 2, "+", 17, "*", 2];  // expected 95
//var arr = [10, "+", 20, "-", 15, "+", 5] // expected 20
//var arr = [10, "*", 20, "/", 4, "*", 5] // expected 250
//var arr = [7, "+", 10, "*", 20, "/", 4, "*", 5 ,"-", 8] // expected 249


var counter = null;
var denomin = null;
var targetOperSign = "";
var targetOperIndx = null;

var countFirstOpr = null; // count of multiple and divide signs
var countAfterOpr = null; // count of add and subtract signs
var countOpr = null;

void algebra(); // reset arrray after !# just variable need as a aresutl <--- !#

// 
//
//
//

function algebra(){

 /*  console.info("[POST 8 ALGEBRA] - ", arr, " :: before"); */

  // check -> count of operation signs
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == "*" || arr[i] == "/"){ countFirstOpr += 1; }
    if(arr[i] == "+" || arr[i] == "-"){ countAfterOpr += 1; }  
  } console.log("[POST 8 ALGEBRA] - count of 'multiple' and 'divide'   operations in array [", countFirstOpr, "]");
    console.log("[POST 8 ALGEBRA] - count of 'add'      and 'subtract' operations in array [", countAfterOpr, "]");


    countOpr = countFirstOpr + countAfterOpr;
    if(countFirstOpr != null && countAfterOpr != null){ countOpr = countAfterOpr; void calcFirst(); }
    if(countFirstOpr != null && countAfterOpr == null){ countOpr = countFirstOpr; arr_tmp = arr.slice(); counter = calc(); } // :: X
    if(countFirstOpr == null && countAfterOpr != null){ countOpr = countAfterOpr; arr_tmp = arr.slice(); counter = calc(); } // :: X

  console.log("[POST 8 ALGEBRA] - result [", counter, "]");
  // reset array !
}

// -------------------------------------------------------------------------------------------------

function calcFirst(){
  for(let i = 0; i < countFirstOpr; i++){       

    var indexMultip = arr.indexOf("*");          
    var indexDivide = arr.indexOf("/");           

    if(indexMultip < indexDivide){ var index = indexDivide; } // :: if multipe is after divide   in array, then first divide
    if(indexMultip > indexDivide){ var index = indexMultip; } // :: if divide  is after multiple in array, then first multiple 
                                
    arr_tmp = arr.slice(index -1, index + 2);   // :: coppy fragmet from array, one before and one after target index         
    arr.splice(index - 1, 3, calc());           // :: calculate and replace result in array
  } arr_tmp = arr.slice(); counter = calc()     // :: X
}

function calc(){
  for(let i = 0; i < arr_tmp.length; i++){

    // STEP 0:                             // :: search for first counter in array, just once
    if(i == 0) {                          
      counter = Number(arr_tmp[i]);           
      console.log("[POST 8 ALGEBRA] - First counter is [", counter, "]");
      console.info("[POST 8 ALGEBRA] -                             ", arr_tmp, " :: before");
    }
  
    for(let j = 0; j < 3; j++){ 
      // STEP 1:                            // :: search math operation sign ..
      if(isNaN(arr_tmp[i])) {               // :: if content of index is not number ..
        targetOperSign = arr_tmp[i];        // :: .. save operation symbol .. 
        targetOperIndx = i;                 // :: .. save operation symbol position
      
      // STEP 3:                            // :: search determinator
        denomin = getDenominator();         // ..
        counter = calcBoth();               // :: uppdate counter
      
      // STEP 4:                            // :: uppdate array
      var new_arr = [];  
      for(let i = 0; i < countOpr; i++){    // :: count if operations
        new_arr = arr_tmp.shift(); 
      } new_arr = arr_tmp.unshift(counter);
        console.info("[POST 8 ALGEBRA] - targetOperSign [", targetOperSign, "]", "arr_tmp" ,arr_tmp); 

      }
    }   
  } return counter;
}

// get next denominator
function getDenominator(){                    
  for(let i = 0; i < arr_tmp.length; i++){
    if(i == targetOperIndx + 1) {
      denomin = Number(arr_tmp[i]);
    } 
  } return denomin;  
}

// get next counter
function calcBoth(){
  if(targetOperSign == "+") { counter += denomin; } 
  if(targetOperSign == "-") { counter -= denomin; } 
  if(targetOperSign == "*") { counter *= denomin; } 
  if(targetOperSign == "/") { counter /= denomin; } 
return counter;
}