//
// Set percent variable and operation
//


 /* var precentOpera = "";
 var precentDenom = null;
 // arr = [10, "-", 6, "%"];           // expected 9.4
 //var arr = [25,"-", 10, "%"];         // expected 22,5 #! 24.6

 void setPrecentVar(); 
 let r = getPrecent(10);
 console.log("[POST 8 PRECENT] - result", r); */

function setPrecent() {
  if(boolPrecent != false) {
  
    console.log("[POST 8 PRECENT CALL FUNCTION] - 'setPrecent' responded ->");
    console.info("[POST 8 PRECENT] - Array :: before", arr);

    let target = arr.indexOf("%");
    for(let i = 0; i < arr.length; i++){
      if(i == target - 1){ precentDenom = arr[i]; } // set denominator
      if(i == target - 2){ precentOpera = arr[i]; } // set opertaion
    } void toDelete(3);                             // delete precent chapter
      
      console.log("[POST 8 PRECENT] - Target % char at position [", target, "] Operation [", precentOpera, "] Denominator [", precentDenom, "]");
      console.info("[POST 8 PRECENT] - Array :: after", arr);
    
    function toDelete(n){
      for(let i = 0; i < n; i++){
        arr.pop();
      }
    } 
  } 
} 

function getPrecent(counter){
  let tmp = precentDenom / counter;
    if(precentOpera == "-") { counter -= tmp; } // 10 - 6 % = 9.4   ||  tmp = 6 / 10 and 10 - tmp expected
    if(precentOpera == "+") { counter += tmp; } // 10 + 6 % = 10.6  ||  tmp = 6 / 10 and 10 + tmp expected
            
    return counter; 
} 


// 18 - 16% = 15.12
/* 
var counter = 1000;
var denomin = 30;
var temp = null;
var result = null;

temp =  (counter / 100) * denomin;
result = counter + temp;

console.log(temp); */