


function operation(target) {
  switch(target) {
    case 1:           // -- DEL --
      break;
    case 2:           // -- add --
      break;
    case 3:           // -- subtract --
      break;
    case 4:           // -- DOT --
      break;
    case 5:           // -- divide --
      break;
    case 6:           // -- multiple --
      break;
    case 7:           // -- RESET --
      break;
    case 8:           // -- RESULT --
      break;
  }
}



// default values
var variable = 0;
var dot = 0;
var tmp = 0;
void by_default(variable);


function by_default(variable) {
  void std_cout(variable);
}


function add_Value(value) {
                                            // void btnTarget();
      tmp = 0;
      //dot = 0

    //variable = nul_frst(value);
    //variable = nul_scnd(value);
    variable = nul(value);
    variable = reset(value);  


    console.log("isnum ", isNumeric(variable));

      if (tmp != 0) { 
          variable = variable; 
      } else {
          variable += "" + add_Dot(value); 
      } void std_cout(variable); 
}

// ------------------------------------ 

function isNumeric(value) {
  return /^-{0,1}\d+$/.test(value);
}


function nul(value) {
  let is_it_null = variable + value;  // std::cout { 0 + 0 != 00
  if(is_it_null == 0) {
    variable = 0;
    tmp += 1;
  } 

  let temp = value;                   // std::cout { 0 + 7 != 07
  if(is_it_null == temp) {
    variable = value;
    tmp += 1;
  } return variable;
}

function reset(value) {               // variable --> default
  if(value == 'reset') { 
     variable = 0; 
     tmp += 1; 
     dot = 0;
  } else {     
    variable = variable;
  } return variable;
}

function nul_frst(value) {
  if(value == 0 && variable == 0) {
    variable = 0;
    tmp += 1;
  } else {
    variable = variable;
  } return variable;  
}

function nul_scnd(value) {
  if(value != 0 && variable == 0) {
    variable = value;
    tmp += 1;
  } else {
    variable = variable;
  } return variable;  
}

function add_Dot(value) {             // add --> dot
  if(value != 'dot') {
    return value;
  } else {
      if(dot == 0) {
        value = ".";
        tmp += 1;
        dot += 1;
      } else {
        tmp += 1;
        value = "";
      } 
  } return value;  
}





window.onload = function(){                           // Function's { std::cout
 // var cout_str = document.getElementById('cout_str'); // F. { std::cout --> For_cout_str; 
  var output = document.getElementById('output');     // F. { #E 
  //console.log(output);
  //output.innerHTML = "test";
  output.style.color ="#ff0000";
} 

function std_cout(value) {
  output.innerHTML = value;
  console.log(value);
}

function add(a, b) {                  
  var sum = a + b;                                // variable { parseInt() -> 'string'
  output.innerHTML = sum;
  //alert(sum);
}

function multiple(a, b) {
  var sum = parseInt(a) * parseInt(b);
  output.innerHTML = sum;
  //alert(sum);
}

function subtract(a, b) {
  var sum = parseInt(a) - parseInt(b);
  output.innerHTML = sum;
  //alert(sum);
}

function divide(a, b) {
  var sum = parseInt(a) / parseInt(b);
  output.innerHTML = sum;
  //alert(sum);

}
