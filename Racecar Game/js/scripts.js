//Business or back-end logic:
$(document).ready(function() {

  count1 = 0;
  count2 = 0;
  car1selected = 0
  car2selected = 0
    

  $("button#next1").click(function() {
    $(count1+=1);
      if (count1===1) {
        car1 = "RedDodgeViper"};

      
      if (count1>1)  {
        $("div.car1right").removeClass(car1+"right");
        $("div.car1top").removeClass(car1+"top");
        $("div.car1front").removeClass(car1+"front");
        $("div.car1back").removeClass(car1+"back");
        $("div.car1left").removeClass(car1+"left");  
      };
      if (count1===2) {
        car1 = "BigwheelCorvette"
      };
      if (count1===3) {
        car1 = "Peerless1911Roadster"
      };
      if (count1===4) {
        car1 = "RedVolkswagenBeetle"
      };
      if (count1===5) {
        car1 = "YellowCadillac"
      };
      if (count1===6) {
        car1 = "YellowFordFocus"
      };
      if (count1===7) {
        car1 = "QuarryTruck"
      };
      if (count1===8) {
        car1 = "HighMountEngine"
      };
      $("div.car1right").addClass(car1+"right");
      if (count1===9) {
        $("div.car1right").removeClass(car1+"right");
        count1=0
      };      
  });

  $("button#next2").click(function() {
    $(count2+=1);
    if (count2===1) {
      car2 = "RedDodgeViper"
    };
    if (count2>=2)  {
      $("div.car2right").removeClass(car2+"right");
      $("div.car2top").removeClass(car2+"top");
      $("div.car2front").removeClass(car2+"front");
      $("div.car2back").removeClass(car2+"back");
      $("div.car2left").removeClass(car2+"left");  
    };
    if (count2===2) {
      car2 = "BigwheelCorvette"
    };
    if (count2===3) {
      car2 = "Peerless1911Roadster"
    };
    if (count2===4) {
      car2 = "RedVolkswagenBeetle"
    };
    if (count2===5) {
      car2 = "YellowCadillac"
    };
    if (count2===6) {
      car2 = "YellowFordFocus"
    };
    if (count2===7) {
      car2 = "QuarryTruck"
    };
    if (count2===8) {
      car2 = "HighMountEngine" 
    };
    $("div.car2right").addClass(car2+"right");
    if (count2===9) {
      count2=0
      $("div.car2right").removeClass(car2+"right");
    };
  });
  
//Functions to view and select cars

  $("button#view1").click(function() {
    $("div.car1top").addClass(car1+"top");    
    $("div.car1front").addClass(car1+"front");    
    $("div.car1back").addClass(car1+"back");      
    $("div.car1left").addClass(car1+"left");    
  });   
  $("button#clearview1").click(function() {
      $("div.car1top").removeClass(car1+"top");
      $("div.car1front").removeClass(car1+"front");
      $("div.car1back").removeClass(car1+"back");
      $("div.car1left").removeClass(car1+"left");     
  }); 
  
  $("button#select1").click(function() {
    car1selected=car1;
    if (car1selected===car2selected) {
      alert("I'm sorry, you can't choose the same car as player 2");
      car1selected=0
    }
    else {
      alert(car1+" selected");
      car1selected = car1
    }; 
  }); 

  $("button#view2").click(function() {
    $("div.car2top").addClass(car2+"top");    
    $("div.car2front").addClass(car2+"front");    
    $("div.car2back").addClass(car2+"back");      
    $("div.car2left").addClass(car2+"left");    
  });   
  $("button#clearview2").click(function() {
      $("div.car2top").removeClass(car2+"top");
      $("div.car2front").removeClass(car2+"front");
      $("div.car2back").removeClass(car2+"back");
      $("div.car2left").removeClass(car2+"left");     
  }); 

  $("button#select2").click(function() {
    car2selected=car2;
    if (car1selected===car2selected) {
      alert("I'm sorry, you can't choose the same car as player 1");
      car2selected=0
    }
    else {
      alert(car2+" selected");
      car2selected = car2
    }; 
  }); 










  $("button#red1").click(function() {
    alert("Your choice of racecar has been reset");
      car1selected=0
  }); 

  $("button#red2").click(function() {
    alert("Your choice of racecar has been reset");
      car2selected=0
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