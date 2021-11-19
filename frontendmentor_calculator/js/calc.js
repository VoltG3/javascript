
// default onload
var variable = 0;
var dot = false;      // dot  -> controll count of 'dots'
var arr = [];         // calc -> string
var operator = "";    // push -> operator to arr 

// switch [ POST 8 ]
var counter = null;             // for    -> result after each operation
var denominator = null;         // for    -> integer that performs the operation
var targetOperation = "";       // taget  -> operator                                    !# operation --> operator
var targetPosition = null;      // target -> operations_Symbol_Position
var Precent = false;            // target -> operation precent, do not add last variable to array !


function operation(target) {
  switch(target) {
  // ---------------------------------------------------------------------------------------------------- [       ADD ]
    case 1.1: 
      operator = "+"; 
      void addToArray();
      break;
  // ---------------------------------------------------------------------------------------------------- [  SUBTRACT ]
    case 1.2:
      operator = "-"; 
      void addToArray();         
      break;
  // ---------------------------------------------------------------------------------------------------- [  MULTUPLE ]
    case 1.3:           
      operator = "x"; 
      void addToArray();     
      break;
  // ---------------------------------------------------------------------------------------------------- [    DIVIDE ]
    case 1.4:           
      operator = "/"; 
      void addToArray();     
      break;
  // ---------------------------------------------------------------------------------------------------- [   PRECENT ]
    case 1.5:           
      operator = "%";
      Precent = true;      
      void addToArray();     
      break;
  // ---------------------------------------------------------------------------------------------------- [         x ]
    case 1.6:           
      operator = "%"; 
      void addToArray();     
      break;
  // ---------------------------------------------------------------------------------------------------- [         x ]
    case 1.7:           
      operator = "%"; 
      void addToArray();     
      break;
  // ---------------------------------------------------------------------------------------------------- [         x ]
    case 1.8:           
      operator = "%"; 
      void addToArray();     
      break;
  // ---------------------------------------------------------------------------------------------------- [  DELETE  ]
    case 1:
      let before = isItFloat(variable);       // :: [ * ]
      let new_str = String(variable);         // :: convert var -> str
          new_str = new_str.slice(0, -1);     // :: delete last -> char
          variable = Number(new_str);         // :: convert str -> var 
      let after = isItFloat(variable);        // :: [ * ]
      
      if(before == true  || after != false) { dot = false; } // :: [ * ] before -> it was float        -> reset dot
      if(before == false && after == false) { dot = false; } // ::       after  -> its still not float -> reset dot                     
      if(before == true  && after == true)  { dot = true;  } // ::       after  -> its still is float  -> reset NOT
        
      if(variable == 0) {                     // :: if variable is empty
        void GetNextVariable();
      }
      
      function GetNextVariable(){
        for(let i = 0; i < arr.length; i++) {
          if(i == arr.length && isNan(arr[i])) {
            arr.length -= 1;
            let new_arr = arr.pop();
            void GetNextVariable();
          } else {
            variable = arr[i];
            arr.length -= 1;
            let new_arr = arr.pop();
          }
        }
      }

      function isItFloat(variable) {
        let isFloat = null;
        if(variable % 1 != 0) {
          isFloat = true;
        } else {
          isFloat = false;
        } return isFloat;
      }
      
      break;
  // ---------------------------------------------------------------------------------------------------- [    DOT    ]
    case 4: 
      if(dot == false) {                      // ::
        variable += ".";                      // :: add        -> dot  
        dot = true;                           // :: ctrl count -> dot
      } else {                                // ::
        variable = variable; }                // ::
        console.log("DOT --> ", dot);
    break;
  // ---------------------------------------------------------------------------------------------------- [   RESET    ]
    case 7:           
      void reset();
    break;
  // ---------------------------------------------------------------------------------------------------- [   RESULT   ]
    case 8:
      if(Precent != true) { 
        let new_var0 = arr.push (variable);     // add last variable to array before canculating operation
        variable = algebra();                   // RESULT = void canculating process
      } else {                                  // DELETE last three elements from the array
        
          var precent_counter = null;           // #!         
                                    arr.pop();  // delete precent operator -> arr.length -1
          var precent_denominator = arr.pop();  // get precent denominator -> arr.length -1
          var precent_operator    = arr.pop();  // get precent operator    -> arr.length .1  
              Precent = false;                  // reset Precent bool

            // #! get precent counter from rest of array | #! RESULT = void canculating process 
            variable = precent(precent_counter = algebra(), precent_denominator, precent_operator);      
            

          console.log("precent_operator -> ", precent_operator, " precent_denominator --> ", precent_denominator); 
      }
      
      function algebra(){
        console.info(arr);
        for(let i = 0; i < arr.length; i++){
          if(i == 0) { 
            counter = Number(arr[i]);
            console.log("first iteration and first COUNTER", counter);
          }
        
          if(isNaN(arr[i])) {                   // :: if content of index is not number ..
            targetOperation = arr[i];           // :: .. save operation symbol .. 
            targetPosition = i;                 // :: .. save operation symbol position
            
            void getDenominator();
            console.log("AFTER getDenominator COUNTER --> ", counter, " DENOMINATOR -->", denominator, " targetPosition -->", targetPosition);
              if(targetOperation == "+") { counter =      add(counter, denominator); } // to calculate ..
              if(targetOperation == "-") { counter = subtract(counter, denominator); } // to calculate ..
              if(targetOperation == "x") { counter = multiple(counter, denominator); } // to valculate ..
              if(targetOperation == "/") { counter =   divide(counter, denominator); } // to calculate ..
          }   
        } arr.length = 0;                       // :: reset array
          variable = counter;                   // :: result is new variable
          console.log("result --> ", counter);
        
        function getDenominator(){              // Function { get next denominator
          for(let i = 0; i < arr.length; i++) {
            if(i == targetPosition + 1) {
              denominator = Number(arr[i]);
            } 
          } console.log("FIRST getDenominator COUNTER --> ", counter, " DENOMINATOR -->", denominator, " targetPosition -->", targetPosition);
        }
        return variable; 
      }

      // Functions { to calculate new counter
      function add(a, b) { return a + b; }
      function subtract(a, b) { return a - b; }
      function multiple(a, b) { return a * b; }
      function divide(a, b) { return a / b; }

      function precent(a, b, operator) { 
        if(operator == "-") { return a / 100 * b; }
        if(operator == "+") { return a / 100 * b + a; }
        if(operator == "x") { return a / b; }
        if(operator == "/") { return a * b; }
      }

      break;

  } void std_cout(arr, variable); 
} 


function addToArray() {
  let newVariable = arr.push (variable);  // :: Add last variable to array before next operation
  let newOperator = arr.push (operator);  // :: Add target operator to array
    dot = false;                          // :: Reset -> dot
    variable = "";                        // :: Reset -> variable
}


function reset() {
  arr.length = 0;
  variable = 0;
  dot = false;

/*   counter = null;
  denominator = null;
  targetOperation = "";
  targetPosition = null; */
}



function add_Value(value) {
  /* if(value == 0 || variable == "0.") {        // :: 0.0 is true
    variable = "0.0";
  } else { */
  variable = Number(variable += "" + value);     // :: add value -> variable
   void std_cout(arr, variable);                                           
}

// output 
function std_cout(arr, variable) {
  let str = "";
  if(arr == 0) {
    str = variable;
    console.log("array is empty!");
  } else {
    str = arr.join('') + "" + variable;
  } output.innerHTML = str;
    console.log("--> ", str);
}

