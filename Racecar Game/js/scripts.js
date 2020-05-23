//Business or back-end logic:
$(document).ready(function() {

  count1 = 0;
  count2 = 0;

// Toggle through viewing all the cars on Car Selector page.  
//Probably would have been better to add and remove classes as was built later

    

  $("button#next1").click(function() {
    $(count1+=1);
      if (count1===1) {
        car1 = "RedDodgeViper";
        $("div.car1right").addClass(car1+"right");
      }
   /*   else if (count1===2) {
        $("div.car1").removeClass(car1+"right");
        $(".Red_Dodge_Viper1-showing").toggle();
        $(".Red_Dodge_Viper1-hidden").toggle();
        $(".Bigwheelcorvette1-showing").toggle();
        car1 = "Bigwheelcorvette"
      }
      else if (count1===3){
        $(".Bigwheelcorvette1-showing").toggle();  
        $(".Bigwheelcorvette1-hidden").toggle();
        $(".Red_helmet1-showing").toggle();
      }
      else if (count1===4){
        $(".Red_helmet1-showing").toggle();  
        $(".Red_helmet1-hidden").toggle();
        $(".Purple_racecar1-showing").toggle();
      }
      else if (count1===5){
        $(".Purple_racecar1-showing").toggle();  
        $(".Purple_racecar1-hidden").toggle();
        count1=0;
      }*/
  });

  $("button#next2").click(function() {
    $(count2+=1);
      if (count2===1) {
        $(".Red_Dodge_Viper2-showing").toggle();
        car2 = "RedDodgeViper"
      }
      else if (count2===2) {
        $(".Red_Dodge_Viper2-showing").toggle();
        $(".Red_Dodge_Viper2-hidden").toggle();
        $(".Bigwheelcorvette2-showing").toggle();
        car2 = "Bigwheelcorvette"
      }
      else if (count2===3){
        $(".Bigwheelcorvette2-showing").toggle();  
        $(".Bigwheelcorvette2-hidden").toggle();
        $(".Red_helmet2-showing").toggle();
      }
      else if (count2===4){
        $(".Red_helmet2-showing").toggle();  
        $(".Red_helmet2-hidden").toggle();
        $(".Purple_racecar2-showing").toggle();
      }
      else if (count2===5){
        $(".Purple_racecar2-showing").toggle();  
        $(".Purple_racecar2-hidden").toggle();
        count2=0;
      }
  });
  
//Functions to view and select cars

  $("button#view1").click(function() {
      alert(car1+"front");
      $("div.car1front").addClass(car1+"front");    
  });   
  $("button#clearview1").click(function() {
      alert(car1+"front");
      $("div.car1front").removeClass(car1+"front");     
  }); 




  $("button#view2").click(function() {
    alert(car2+"front");
    $("div.car2").addClass(car2+"front");     
  });   
  $("button#clearview2").click(function() {
    alert(car2+"front");
    $("div.car2").removeClass(car2+"front");     
  }); 



  

});



/* This functionality was originally built to toggle through viewing the cars on Car Selector
   page.  
   But this was hard to synchronise with later functions built using add and remove classes
   so was replaced. Kept it here to demonstrate capacity to use toggle, and in case I needed
  it somewhere else

    

  $("button#next1").click(function() {
    $(count1+=1);
      if (count1===1) {
        $(".Red_Dodge_Viper1-showing").toggle();
        car1 = "RedDodgeViper"
      }
      else if (count1===2) {
        $(".Red_Dodge_Viper1-showing").toggle();
        $(".Red_Dodge_Viper1-hidden").toggle();
        $(".Bigwheelcorvette1-showing").toggle();
        car1 = "Bigwheelcorvette"
      }
      else if (count1===3){
        $(".Bigwheelcorvette1-showing").toggle();  
        $(".Bigwheelcorvette1-hidden").toggle();
        $(".Red_helmet1-showing").toggle();
      }
      else if (count1===4){
        $(".Red_helmet1-showing").toggle();  
        $(".Red_helmet1-hidden").toggle();
        $(".Purple_racecar1-showing").toggle();
      }
      else if (count1===5){
        $(".Purple_racecar1-showing").toggle();  
        $(".Purple_racecar1-hidden").toggle();
        count1=0;
      }
  });

  $("button#next2").click(function() {
    $(count2+=1);
      if (count2===1) {
        $(".Red_Dodge_Viper2-showing").toggle();
        car2 = "RedDodgeViper"
      }
      else if (count2===2) {
        $(".Red_Dodge_Viper2-showing").toggle();
        $(".Red_Dodge_Viper2-hidden").toggle();
        $(".Bigwheelcorvette2-showing").toggle();
        car2 = "Bigwheelcorvette"
      }
      else if (count2===3){
        $(".Bigwheelcorvette2-showing").toggle();  
        $(".Bigwheelcorvette2-hidden").toggle();
        $(".Red_helmet2-showing").toggle();
      }
      else if (count2===4){
        $(".Red_helmet2-showing").toggle();  
        $(".Red_helmet2-hidden").toggle();
        $(".Purple_racecar2-showing").toggle();
      }
      else if (count2===5){
        $(".Purple_racecar2-showing").toggle();  
        $(".Purple_racecar2-hidden").toggle();
        count2=0;
      }
  });*/