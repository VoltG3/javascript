
// --------------------------------------------------------------------
//  DEFAULT - onload
// ---------------------------------------------------------------------

var variable = 0;     // first :: input variable
var arr = [];         // after :: add variable to the array
var dot = false;      //  ctrl :: count of dots in one variable
var operator = "";    //   for :: add math operator to the array

// ---------------------------------------------------------------------
//  BUTTON INNPUTS ROUTER
// ---------------------------------------------------------------------

function operation(target) {
  switch(target) {
    case 1.1: void addOperator(operator = "+"); break; //  [       ADD ]
    case 1.2: void addOperator(operator = "-"); break; //  [  SUBTRACT ] 
    case 1.3: void addOperator(operator = "x"); break; //  [  MULTUPLE ]
    case 1.4: void addOperator(operator = "/"); break; //  [    DIVIDE ]
    case 1.5: void addOperator(operator = "%"); break; //  [   PRECENT ] 
    case 1.6: void addOperator(operator = "p"); break; //  [       POW ] 
    case 1.7: void addOperator(operator = "("); break; //  [         ( ]
    case 1.8: void addOperator(operator = ")"); break; //  [         ) ]
    case 1.9: void dots();                      break; //  [       DOT ]
    case 2:   void reset();                     break; //  [     RESET ]
    case 3:   void del();                       break; //  [    DELETE ]                                     
    case 4:                                            //  [    RESULT ]  sequence
      
      arr = [10, "+", 20, "*", 3, "-", 18, "/", 2, "+", 17, "*", 2]; 
      var arr_tmp = arr.slice();

      arr = [];
      variable = algebra(arr_tmp);

    break;
  } void std_cout(arr, variable); 
} 

// --------------------------------------------------------------------------------------- [ POST A]
//  UPPDATE addValue - add digit to the variable
//  UPPDATE addOperator - add operator after variable was added
// ---------------------------------------------------------------------------------------

function addValue(value) {
  if(variable == 0 && value == 0 && dot == false){  // :: not allow --> 00
     variable = 0; 
     console.log("[ ADD VALUE ] - rejected! value 00 not allowed", variable)
  }

  if(variable == 0 && value == 0 && dot == true){   // ::     allow --> 0.0
     variable += "" + value;  
     void mes_1();
  } else {
    variable = Number(variable += "" + value);      // :: add next value to variable
    void mes_1();
  } void std_cout(arr, variable); 
  
  function mes_1(){
    console.log("[ ADD VALUE ] - variable gotted new value", variable)  
  }
}

function addOperator(operator){          
  var getOperator = false;
  var getBrackets = false;
  var getOperatorReverse = false;
  var getBracketsReverse = false;
  var getArrEmpty = false;
 
  console.log("addOperator ---> varaible", variable) 

  if(variable == isNaN(variable)) {   
    var el = arr.slice(-1);

    // CONTROLL EXCEPTIONS - not allowed two operators like '--' or '-+'...
    //                     -     allowed two operators like '-(' or '(-'...
    if(arr.length == 0  && ForArrEmpty() == true){ variable = ""; void addToArray() }
    if(elBefore() == true && operAfter() == true){                void addToArray() } else { variable = variable; void mes_2() }
    if(bracketsBefore() == true && operatorBeforeReverse() == true){ void addToArray() } else { variable = variable; void mes_2() } 
    // -  first if - array is empty then allow first '-' or '('
    // - second if - allow add brackets after any operator
    // -  third if - allow add any operator after brackets
  } else {
    void addToArray();
  } console.table("[ ADD OPERATOR ] - ", variable)

  function elBefore(){
   let x = false;
      if(el[0] == '+'){ x = true; }
      if(el[0] == '-'){ x = true; }
      if(el[0] == 'x'){ x = true; }
      if(el[0] == '/'){ x = true; }
      if(el[0] == '('){ x = true; }
      if(el[0] == ')'){ x = true; }
    return x;
  }

  function operAfter(){
    let x = false;
    if(operator == '('){ x = true; }
    if(operator == ')'){ x = true; }
    return x;
  }

  //---
  function bracketsBefore(){
    let x = false;
      if(el[0] == '('){ x = true; }
      if(el[0] == ')'){ x = true; }
    return x;
  }
  // ---
  function operatorBeforeReverse(){
   let x = false;
      if(operator == '+'){ x = true; }
      if(operator == '-'){ x = true; }
      if(operator == 'x'){ x = true; }
      if(operator == '/'){ x = true; }
      if(operator == '('){ x = true; }
      if(operator == ')'){ x = true; }
    return x;
  }
   // --- for empty array
   function ForArrEmpty(){
    let x = false;
      if(operator == '-'){ x = true; }
      if(operator == '('){ x = true; }
    return x;
  }

  function mes_2(){
    console.log("[ ADD OPERATOR ] - acces denied!")
  }

  function addToArray(){
    arr.push (variable);                   // :: Add last variable to array 
    arr.push (operator);                   // :: Then add operation sign
    variable = "";                         // :: Reset variable
    dot = false;                           // :: Reset dot because new variable is null
  }
} 

// ---------------------------------------------------------------------
//  RESET to default
// ---------------------------------------------------------------------

function reset(){
  variable = 0; 
  dot = false;  
  arr.length = 0;
  console.log("[ RESET  ] - variable [", variable, "] dot [", dot, "] arr.length [", arr.length, "]");
}

// ---------------------------------------------------------------------
//  DOT - allow add dot if variable hawe no one
// ---------------------------------------------------------------------

function dots(){
  if(dot == false) {                      
    variable += ".";                      
    dot = true;                           
  } else {                                
    variable = variable; 
  }                
}

// ---------------------------------------------------------------------
//  OUTPUT
//  if array is empty then output only variable as a string 
//     else add to string array and then variable
// ---------------------------------------------------------------------

function std_cout(arr, variable) {
  let str = "";
  arr == 0 ? str = variable : str = arr.join('') + "" + variable;
  output.innerHTML = str; 
  console.table("[  ARRAY ] - ", arr);
  console.log("[ OUTPUT ] - ", str);
}