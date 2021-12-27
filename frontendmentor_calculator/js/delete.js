

function del(){
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
}