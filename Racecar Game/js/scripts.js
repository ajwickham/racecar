//Business or back-end logic:
$(document).ready(function() {


  //Functions to next through left views of the cars.
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  car1selected = 0
  car2selected = 0
  card = 0
    

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
      localStorage.transfer1 = car1;
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
      localStorage.transfer2 = car2;
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

//RACETRACK PAGE


/*Turn cards.  This project is carried out before learning about arrays and loops, which makes representing flipping through a stack of cards
tricky. As an approximation of that a random number is created that equals a class. There are 3 of each type of card, 9 types of card plus 5 racecar
cards. So the random number is multiplied by 32 and the integer value taken to create 32 classes (0 is the first random number). Statistically this is
rubbish, after 15 cards the chance of getting the red racecar is one in 16, eventually with only one card left, if the red racecar hasn't been played 
yet the chance is 1 in 1.

A future version might include an array basis for the cards, and could also distribute the icons around the track randomly*/
uncard=0
previous=1
t = 0

$("button#red3").click(function() {  /* Probably should redo and not use bootstrap so it responds with grid*/
  alert("afsfa");
  $("div.s17rotate").addClass(x+"top");
  $("div.s18rotate").addClass(y+"top");
}); 


$("#stack").click(function() {
  t=1-t  //determines whose turn it is
  if (t===1) {turn=1}
  else {turn =2}
  
  count4 +=1;
  if (count4 >2) {
      $("div.back-stand-in").removeClass(previous);
  }
  if (uncard!=0) {
    $("div.back-stand-in").addClass(uncard);
    $("div.flip-card-back").removeClass(uncard);
    $("div.flip-card-inner").removeClass("flip-card");
  }
    
  previous=uncard  
  icon = ((Math.random())*3)  //don't forget to put this back to 32
  card=Math.round(icon)

  if (card<=3) {
    $("div.flip-card-back").addClass("RedHelmet");
    uncard="RedHelmet";
  }
  if (card>3 && card<=6) {
    $("div.flip-card-back").addClass("BlueHelmet");
    uncard="BlueHelmet"  
  }
  if (card>6&&card<=9) {
    $("div.flip-card-back").addClass("YellowHelmet");  
    uncard="YellowHelmet"
  }
  if (card>9&&card<=12) {
    $("div.flip-card-back").addClass("RedFlag"); 
    uncard="RedFlag" 
  }
  if (card>12&&card<=15) {
    $("div.flip-card-back").addClass("GreenFlag"); 
    uncard="GreenFlag" 
  }
  if (card>15&&card<=18) {
    $("div.flip-card-back").addClass("YellowFlag");
    uncard="YellowFlag"  
  }
  if (card>18&&card<=21) {
    $("div.flip-card-back").addClass("RedTyre");
    uncard="RedTyre"  
  }
  if (card>21&&card<=24) {
    $("div.flip-card-back").addClass("BlueTyre");  
    uncard="BlueTyre"
  }
  if (card>24&&card<=27) {
    $("div.flip-card-back").addClass("GreenTyre");
    uncard="GreenTyre"  
  }
  if (card===28) {
    $("div.flip-card-back").addClass("RedRacecar"); 
    uncard="RedRacecar" 
  }
  if (card===29) {
    $("div.flip-card-back").addClass("BlueRacecar");
    uncard="BlueRacecar"  
  }
  if (card===30) {
    $("div.flip-card-back").addClass("GreenRacecar");
    uncard="GreenRacecar"  
  }
  if (card===31) {
    $("div.flip-card-back").addClass("PurpleRacecar");
    uncard="PurpleRacecar"  
  }
  if (card===32) {
    $("div.flip-card-back").addClass("YellowRacecar");
    uncard="YellowRacecar"  
  }
   
  alert("Are you ready?");/*for some reason it won't do a second flip
                          without this break here. Event bubbling? */
  $("div.flip-card-inner").addClass("flip-card");
    
  });


/*  GAME FUNCTIONALITY  

Inputs - 
    cars selected = car1selected  car2selected
    card turned = uncard
    track square selected - tbd */

    var x = localStorage.getItem("transfer1"); //brings car choices across from selector page
    var y = localStorage.getItem("transfer2");

    car1space = 0
    car2space = 0

  function checkspace(location) {
    alert(location);
    if (position != uncard) {
      alert("no that's "+position+" not "+uncard);
    }
    if (turn===1) {
      if ((space-car1space)>11) {
        alert("Did you miss a "+uncard+" before that?");
      }
      else {
        car1space = space
        $("div."+location).addclass(x+"top");  //got to remove class from previous place
      }
    }    
    if (turn===2) {
      if ((space-car2space)>11) {
        alert("Did you miss a "+uncard+" before that?");
      }
      else {
        car2space = space
        $("div."+location).addclass(y+"top");
      }
    }
    };
    


    // Turn starts by clicking pile of cards.

    $("#r18").click(function() {  
      /*position = "RedHelmet";
      space = 1
      checkspace ("r18rotate");*/ 
      alert ("yippee");
   });

    $("#q18").click(function() {  
      /*position = "RedHelmet";
      space = 1
      checkspace ("r18rotate");*/ 
      alert ("yippee");
      /*$("#q18").addclass("q18rotate");*/
  });

    $("#p18").click(function() {  
      /*position = "RedHelmet";
      space = 1
      checkspace ("r18rotate");*/ 
      alert ("yippee");
    });

   $("#g3").click(function() {  
      position = "RedHelmet";
      space = 45
      
     
      alert("car1 = "+x+" car2 = "+y);
      alert("class to add "+(x+"top"));
      
      checkspace ();
      alert(turn);
       
   });
 


});//end of document 



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