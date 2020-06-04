//Business or back-end logic:
$(document).ready(function() {

$("button#select2").click(function() {
   $("div.flip-card-inner").addClass("flip-card");
}); 
$("button#select").click(function() {
  alert("removing");
  $("div.flip-card-inner").removeClass("flip-card");
}); 

$("button#select1").click(function() {
  alert("add picture");
  $("div.target").addClass("redhelmet");
}); 


});
