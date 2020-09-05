var counter_list = [0,0,0];
var str_counter_0 = counter_list[0];
var str_counter_1 = counter_list[1];
var str_counter_2 = counter_list[2];
var display_str = "";
var display_div = document.getElementById("display_div_id");

function incrementCount(current_count){
  var interval=setInterval(function(){
    // clear count
    while (display_div.hasChildNodes()) {
        display_div.removeChild(display_div.lastChild);
    }
    str_counter_0++;
    if (str_counter_0 > 59) {
      str_counter_0 = 0; // reset count
      str_counter_1++;    // increase next count
    }
    if(str_counter_1>9){
      str_counter_2++;
      str_counter_1=0;
      str_counter_0 = 0;
    }
    if(str_counter_2==3)
      {  alert("you are done");
        //  window.open("endfile.html");
        $.getscript("newj.js",function(){
          showResults();
          });
          clearInterval(interval);   
      }
    
    display_str = str_counter_2.toString() + str_counter_1.toString()+" : " + str_counter_0.toString();
    for (var i = 0; i < display_str.length; i++) {
      var new_span = document.createElement('span');
      new_span.innerText = display_str[i];
      display_div.appendChild(new_span);
      
    }
  },1000);
}

// function result_check(check_var) {
//   if(check_var=="Abstract")
//   {
//     alert("Right Answer");
//   }
// }


