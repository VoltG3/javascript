   
   // -> Function OUT :: outer    { calls from HTML
   // -> Function SUB :: internal { calls from SCRIPT
   // -> Function GLB :: global   { ..... for  FUNCTIONS
   //
   // -> !# { commnet { something mast to be done / or not finished !

   // declare variables
      let arr = ["item", "item", "item"];
          arr.lenght = 3;

   // deeclare bool
      var bool = 0;           // for {  highlight btn        --> 'styles.css'
      var txt = null;         // for {  variant of 'txt str' --> 'strings.js'
      var txt_variant = null; // for {  cout                 -->  txt_variant + txt_??
      var indexof = null;     //
      var splice = null;      //
     
      var btn = null;         // fot {  create <btns>
      var list = null;        // for {  create <list>


   // # bool = 1 { for --> indexof 
   // # bool = 2 { for --> arr_ADD_start
   // # bool = 3 { for --> arr_ADD_end
   // # bool = 4 { for --> splice

    let search_index_of = "item";

//                                                       Function OUT { INDEXOF :: 'array[]' .indexof { search first [X] elm.   
  function arr_INDEXOF(){                                
    indexof = arr.indexOf("item"); 
      bool = 1;    
      void std_cout_array(8);
  }
//                                                       Function OUT {  SPILCE :: 'array[]' .splice { REMOVE
  function arr_SPLICE_rmv(){                            
    arr.lenght -= 1;
    let new_arr = arr.splice(2, 0);
      
     // #! position to insert into, items to delete, item to add                      !#
     // #! At position 2, add 2 elements ..fruits.splice(2, 0, "Lemon", "Kiwi");      !#                        
    
      void std_cout_array(7);
  }  
//                                                       Function SUB {  REMOVE :: 'array[]' .shift from START  
  function arr_REMOVE_start(){                            
    arr.lenght -= 1;                        
    let new_arr = arr.shift();
      void std_cout_array(6);
  }
//                                                       Function SUB {   REMOVE :: 'array[]' .pop from END
  function arr_REMOVE_end(){                             
    arr.lenght -= 1;                         
    let new_arr = arr.pop();
      void std_cout_array(5);
}
//                                                       Function SUB {  SPILCE :: 'array[]' .splice { ADD
  function arr_SPLICE_add(){  
    
      // div id=cout_btn;


     // var a = document.getElementsByClassName('btn_generated')[a.onclick];
      //console.log(x);
    
      

    arr.lenght += 1;
    bool = 4;
    splice = 2; 
    // #! (position in the array to start deleting, how many to delete);               !#
    // #! let newClassroom = classroom.splice(1,1);                                    !#
    let new_arr = arr.splice(2, 0, "SPLICE");
      void std_cout_array(4);
  }  
//          
//                                                       Function SUB {     ADD :: 'array[]' .unshift to START  
  function arr_ADD_start(){                            
    arr.lenght += 1;                             
    let new_arr = arr.unshift("item -->");
      bool = 2; 
      void std_cout_array(3);
  }
//                                                       Function SUB {     ADD :: 'array[]' .push to END
  function arr_ADD_end(){                             
    arr.lenght += 1;                          
    let new_arr = arr.push("item --> END");
      bool = 3;   
      void std_cout_array(2);
  }
//                                                       Function SUB {     cout :: 'array[]' current
  function arr_current(){
      void std_cout_array(1);
  }
//                                                       Function SUB {     cout :: 'array[]' reset
function arr_reset(){
    arr.lenght = 3;
      void std_cout_array(0);
}

//                                                       Function SUB {     repack :: 'array[]' to '<btn> '
  function repack_arr_TO_btn() {  
   
    BTN_target = null;
      
        console.log(arr.lenght); // !#

        
      btn = '<div>';
      for(let i = 0; i < arr.lenght; i++) {

        if(bool == 1 && i == indexof) { // indexof elm.
          btn += '<button class="btn_genereted INDEXOF">' + arr[i] + '</button>';
          bool = null;
        } 
        
        else if(bool == 2 && i == 0) { // first elm.
          btn += '<button class="btn_genereted TARGET">' + arr[i] + '</button>';
          bool = null;
        }

        else if(bool == 3 &&  i + 1 == arr.lenght) { // last elm.                          #!
          btn += '<button class="btn_genereted TARGET">' + arr[i] + '</button>';
          bool = null;
        }

        else if(bool == 4 && i == splice) { // splice elm. +
          btn += '<button class="btn_genereted TARGET">' + arr[i] + '</button>';
          bool = null;
          console.log(splice);
          splice = null;
          console.log(splice);
        } 

        else {  
         //btn += '<innput type="button" onclick="clickclick(this)">' + '<button class="btn_genereted">' + arr[i] + '</button>';
         btn += /*BTN_NR(); +*/ '<button type="button" class="btn_genereted" onclick="clickclick()">' + arr[i] + '</button>';
         // btn += '<button class="btn_genereted">' + arr[i] + '</button>'; 
        } 
        
        
        
      } btn += '</div>';     
  } 
  // ###################################################################


  function clickclick(){

   
    var buttons = document.querySelectorAll('.btn_genereted');
    
   
   
    console.log('----------------------------');
    console.log(buttons);
    console.log(BTN_target);

} 


//                                                       Function SUB { repack :: 'array[]' to '<li> '
  function repack_arr_TO_li() {                          
    list = '<ol>';
    for(let i = 0; i < arr.lenght; i++) {
      list += '<li>' + arr[i] + '</li>'
    } list += '</ol>'   
  }  
//                                                       Function SUB { cout :: 'array[]'
  function std_cout_array(choice){
      

    if(choice == 0) { txt_variant = txt_00 };
    if(choice == 1) { txt_variant = txt_01 };
    if(choice == 2) { txt_variant = txt_02 };
    if(choice == 3) { txt_variant = txt_03 };
    if(choice == 4) { txt_variant = txt_04 };
    if(choice == 5) { txt_variant = txt_05 };
    if(choice == 6) { txt_variant = txt_06 };
    if(choice == 7) { txt_variant = txt_07 };
    if(choice == 8) { txt_variant = txt_08 };
      void repack_arr_TO_btn(btn); 
      void repack_arr_TO_li(list);
        void std_cout_btn(btn);
        void std_cout_list(list);
        void std_cout_console();    
        void std_cout_string(txt_variant); 
  }
//                                                       Function OUT { cout :: received value
  function std_cout_btn(for_cout) {                        
     cout_btn.innerHTML = for_cout;
  }
//                                                       Function OUT { cout :: received value
  function std_cout_list(for_cout) {                        
     cout.innerHTML = for_cout;  // !# cout(punktum)Inner
  }
//                                                       Function OUT { cout :: received value
  function std_cout_console() {
    for(let i = 0; i < arr.lenght; i++) {    
      console.log(arr[i]);                 
    }
  }
//                                                       Function OUT { cout :: received value
function std_cout_string(for_cout) {                        
  cout_string.innerHTML = for_cout;
}   
//                                                       Function GLB { std::cout     
  window.onload = function(){                                            
    var cout = document.getElementById('cout'); 
    var std_cout_btn = document.getElementById('cout_btn');
    var std_cout_string = document.getElementById('cout_string');  
  }