window.onscroll = function()  {
    if (document.documentElement.scrollTop > 3000) {   
   var i = 140;                 

   function myLoop1() {         
   setTimeout(function() {   
       document.getElementById("p1").innerHTML= i; 
       i++;
       if (i < 1466) {
       myLoop1(); 
       }
   }, 80)
   }
   myLoop1(); 

   var j = 150;
   function myLoop2() {         
       setTimeout(function() {   
       document.getElementById("p2").innerHTML= j; 
       j++;
       if (j < 1533) {
           myLoop2(); 
       }
       }, 80)
   }
   myLoop2(); 

   
   
   var k = 160
   function myLoop3() {         
       setTimeout(function() {   
       document.getElementById("p3").innerHTML= k; 
       k++;
       if (k < 1688) {
           myLoop3(); 
       }
       }, 80)
   }
   myLoop3(); 

   var m = 270
   function myLoop4() {         
       setTimeout(function() {   
       document.getElementById("p4").innerHTML= m; 
       m++;
       if (m < 2750) {
           myLoop4(); 
       }
       }, 80)
   }
   myLoop4(); 
   
}
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }