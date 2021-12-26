//
// Find operation signs and canculate: add / subtract / multiple / divide
//

// UNCOMENT one of these variant to try the function ---- [2]

//var arr_tmp = [10, "+", 20, "-", 15, "+", 5]                            // expected 20    -> primary    operations
//var arr_tmp = [10, "*", 20, "/", 4, "*", 5]                             // expected 250   -> secondary  operations
//var arr_tmp = [10, "+", 20, "*", 3, "-", 18, "/", 2, "+", 17, "*", 2];  // expected 95    -> both       operations

// UNCOMENT these too, to try the function -------------- [1]
/* var variable = null;
variable = algebra(); */


function algebra(arr_tmp){
  var arr_SUB = [];
  var counter = null;         // [*]  exempel ->  counter targetOperSign denominator
  var denomin = null;         // [*]                 5           +           10 
  var targetOperSign = "";    // [*]
  var targetOperIndx = null;  // [*]              indexOf -----> + in the array

  var countFirstOpr = null;   // count of multiple and divide signs
  var countAfterOpr = null;   // count of add and subtract signs
  var countOpr = null;        // count of total operations

  for(let i = 0; i < arr_tmp.length; i++){                          // :: check count of operation signs
    if(arr_tmp[i] == "*" || arr_tmp[i] == "/"){ countFirstOpr += 1; }
    if(arr_tmp[i] == "+" || arr_tmp[i] == "-"){ countAfterOpr += 1; }  
  } console.log("[POST 8 ALGEBRA] - count of 'multiple' and 'divide'   operations in array [", countFirstOpr, "]");
    console.log("[POST 8 ALGEBRA] - count of 'add'      and 'subtract' operations in array [", countAfterOpr, "]");

    countOpr = countFirstOpr + countAfterOpr;
    if(countFirstOpr != null && countAfterOpr != null){ countOpr = countAfterOpr; void calcFirst(); }
    if(countFirstOpr != null && countAfterOpr == null){ countOpr = countFirstOpr; arr_SUB = arr_tmp.slice(); counter = calc(); } 
    if(countFirstOpr == null && countAfterOpr != null){ countOpr = countAfterOpr; arr_SUB = arr_tmp.slice(); counter = calc(); } 

  console.log("[POST 8 ALGEBRA] - result [", counter, "]");       // 
  return counter;                                                 //                                           [ RETURN RESULT ]

  function calcFirst(){                           // # CALL FIRST IF ARRAY HAVE BOTH OPERATORS ---------------------------------
    for(let i = 0; i < countFirstOpr; i++){       
  
      var indexMultip = arr_tmp.indexOf("*");          
      var indexDivide = arr_tmp.indexOf("/");           
  
      if(indexMultip < indexDivide){ var index = indexDivide; } // :: if multipe is after divide   in array, then first divide
      if(indexMultip > indexDivide){ var index = indexMultip; } // :: if divide  is after multiple in array, then first multiple 
                                  
      arr_SUB = arr_tmp.slice(index -1, index + 2);   // :: coppy fragmet from array, one before and one after target index        
      arr_tmp.splice(index - 1, 3, calc());           // :: calculate and replace result in array                                   
    } arr_SUB = arr_tmp.slice(); counter = calc()     // :: after to calc() for add and subtract
  }
 
  function calc(){                                // # CALL AFTER BOTH OR IF ALL OPERATORS IS ONE TYPE -------------------------
    for(let i = 0; i < arr_SUB.length; i++){
  
      // STEP 0:                                  // :: search for first counter in array, just once
      if(i == 0) {                          
        counter = Number(arr_SUB[i]);           
        console.log("[POST 8 ALGEBRA] - First counter is [", counter, "]");
        console.info("[POST 8 ALGEBRA] -                             ", arr_SUB, " :: before");
      }
    
      for(let j = 0; j < countOpr; j++){ 
        // STEP 1:                                // :: search math operation sign ..
        if(isNaN(arr_SUB[i])) {                   // :: if content of index is not number ..
          targetOperSign = arr_SUB[i];            // :: .. save operation symbol .. 
          targetOperIndx = i;                     // :: .. save operation symbol position
        
        // STEP 3:                                // :: search determinator
          denomin = getDenominator();             // ..
          counter = calcBoth();                   // :: uppdate counter
        
        // STEP 4:                                // :: uppdate array
        var new_arr = [];  
        for(let i = 0; i < countOpr; i++){        // :: count if operations
          new_arr = arr_SUB.shift(); 
        } new_arr = arr_SUB.unshift(counter);
          console.info("[POST 8 ALGEBRA] - targetOperSign [", targetOperSign, "]", "arr_SUB" ,arr_SUB); 
  
        }
      }   
    } return counter;
  }

  // # SUB functions 
  function getDenominator(){                    
    for(let i = 0; i < arr_SUB.length; i++){
      if(i == targetOperIndx + 1) {
        denomin = Number(arr_SUB[i]);
      } 
    } return denomin;  
  }

  function calcBoth(){
      if(targetOperSign == "+") { counter += denomin; } 
      if(targetOperSign == "-") { counter -= denomin; } 
      if(targetOperSign == "*") { counter *= denomin; } 
      if(targetOperSign == "/") { counter /= denomin; } 
    return counter;
  }
}