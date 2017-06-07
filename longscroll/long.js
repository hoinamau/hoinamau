$(document).ready(function(){
  //when the document is ready, do a bunch of stuff

  console.log("oh glorious master, your document is read!");

  var fromTop = 0;

  $(window).scroll(function(){
     // when you are scrolling do a buch of stuff



fromTop = $(window).scrolltop();
   //update the variable fromTop to the current pixels count
   // fromTop = $(window).scrolltop();

   console.log();
if(fromTop = 10 ){$(".text1").css({
   "display":"block"
 });}
   if(fromTop = 1000 ){
     console.log();
     $(".two").css({
       "display": "inherit";}
      $("#four").css({
        "display": "none";}
      $("#five").css({
          "display": "block";}
      $("#one").css({
        "display": "block";}
   }

   if(fromTop = 2000 ){
     console.log();
     $(".two").css({
       "display": "none";}
      $("#four").css({
        "display": "inherit";}
      $("#five").css({
          "display": "none";}
      $("#one").css({
        "display": "none";}
   }

  if(fromtheTop = 4000){
    console.log();
    $(".two").css({
      "display": "none";}
     $("#four").css({
       "display": "none";}
     $("#five").css({
         "display": "inherit";}
     $("#one").css({
       "display": "none";}

 }
 if(fromtheTop = 6000){
   console.log();
   $(".two").css({
     "display": "none";}
    $("#four").css({
      "display": "none";}
    $("#five").css({
        "display": "none";}
    $("#one").css({
      "display": "inherit";}
}
if(fromtheTop = 8000){
  console.log();
  $(".two").css({
    "display": "block";}
   $("#four").css({
     "display": "block";}
   $("#five").css({
       "display": "block";}
   $("#one").css({
     "display": "block";}
}
$("#three").css({
  "display": "block";}
}
}
$("#six").css({
  "display": "block";}
}


       })//close .scroll
   });//close .ready
