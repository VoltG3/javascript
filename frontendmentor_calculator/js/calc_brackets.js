//
// Find brackets and execute calc inside themj
//

// Uncomment these to try the function

//var arr = [1, "(", 2, "(", 3, "(",4, ")", 3, ")", 2, ")", 1];
//var arr = [1, "(", 2,  3, ")", 40, 50, "(", 6, 7, ")", 5];
//var arr = [1, "(", 0.1, "(", 2,  3, ")", 40, 50, "(", 6, 7, ")", 0.5, ")", 1];

//var arr = [11, "(",1, "(", 2, ")", 3, "(", 4, "(", 5, ")", 6, ")", 7,")", 8];
var arr = ["(", 5, "+", 5, ")", "+", "(", 5, "+", 5, ")"];
console.log("[POST 8 BRACKET] -                           ", arr, ":: before");

void findBrackets();



function findBrackets(){
  var tagOpen = null;
  var frstBrcIndex = null;
  var lastBrcIndex = null;
  var Brackets = false;

  for(let i = 0; i < arr.indexOf(")"); i++) {
    if(arr[i] == "(") { tagOpen += 1; }
  } /* console.log("Count of Opened tags", tagOpen, "| tagClose index", arr.indexOf(")")); */

  for(let i = 0; i < arr.indexOf(")"); i++) {
    if(arr[i] == "(") { tagOpen -= 1; }
    if(arr[i] == "(" && tagOpen == 0) { 
      frstBrcIndex = i; 
      lastBrcIndex = arr.indexOf(")");
      Brackets = true;
      /* console.log("targtComplet -> OpenTag index", i, "| CloseTag index", arr.indexOf(")"));  */
      } 
  }
    if(Brackets == true) {
      var sub_arr = [];
      sub_arr = arr.slice(frstBrcIndex, lastBrcIndex + 1);
      console.log("[POST 8 BRACKET] - target primary brcakets = ", sub_arr);

      sub_arr.pop();
      sub_arr.shift();

      // to void calc ------------------
       var res = null;
      for(let i = 0; i < sub_arr.length; i++){
        res += sub_arr[i];
      }   console.log("[POST 8] - result in brackets = ", res);


     /*  void algebra(); */
      let n = lastBrcIndex - frstBrcIndex;
      arr.splice(frstBrcIndex, n + 1, res);
      console.log("[POST 8 BRACKET] -                           ", arr, ":: before");
      firstBracket = false;
      lastBracket = false;
    } 

  if(Brackets == true) { void findBrackets(); }
}