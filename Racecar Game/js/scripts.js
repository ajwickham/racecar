//Business or back-end logic:
$(document).ready(function() {
var check = function(first,second,third) {
  
  if (first===0  || second===0 || third ===0) {
    var result = "";
  }
  else if (first+second <= third || first+third <= second || second+third <= first) {
    var result = "Not a triangle";
  }
  else if (first===second && second===third)  {
    var result = "Equilateral";
  }
  else if (first===second || second===third || first===third)  {
    var result = "Isoceles";
  }
  else if (first!=second && second!=third && first!=third)  {
    var result = "Scalene";
  }
  return result;}

// UI or front end logic

  $("form#details").submit(function(event) {
    event.preventDefault();
    var first = parseInt($("#firstSide").val());
    var second = parseInt($("#secondSide").val());
    var third = parseInt($("#thirdSide").val());
     

  $("#output").text(check(first,second,third));
});
});