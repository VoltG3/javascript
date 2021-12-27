//
// Find and raise pow variables
//

// Uncomment these to try the function
var arr_tmp = [6, "p", "+", 2, "p"];
arr_tmp = raisePower();


function raisePower(){
  var powerCount = null;
  var powerIndex = null;

    console.info("[POST 8 POWER] - cout of variables to power", findPower());
    console.info("[POST 8 POWER] - Array :: brfore", arr_tmp);

    powerCount = findPower();                 // :: find out how many power signs include array
    for(let i = 0; i < powerCount; i++){     
      powerIndex = arr_tmp.indexOf("p");                                                      
  
        arr_tmp.splice(powerIndex - 1, powerIndex + 1, calcPower());
        console.info("[POST 8 POWER] - Array :: after ", arr_tmp);
    } return arr_tmp;

    // # SUB functions
    function calcPower(){
      let r = null;
      for(let i = 0; i < arr_tmp.length; i++){
        if(i == powerIndex - 1 ){
          r = arr_tmp[i];
          r *= r;
        }
      } return r;
    }
    
    function findPower(){
      let r = null;
      for(i = 0; i < arr_tmp.length; i++){
        if(arr_tmp[i] == "p") {
          r += 1;
        } 
      } return r;
    } 
}  