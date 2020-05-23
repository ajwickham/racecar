//Business or back-end logic:
$(document).ready(function() {

count = 0  
  
  
  $("button#view").click(function() {
    count+=1
    alert(count);
    if (count ===1) {
    rummy = "test";
    }
    else {
    rummy = "test1"
    }
    $("div.picture").addClass(rummy); 
  });
  
    
});