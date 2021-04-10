import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//Business or back-end logic:
//const carList = ["RedDodgeViper","RevJensMini","Peerless1911Roadster","RedVolkswagenBeetle","YellowCadillac",
//  "YellowFordFocus","QuarryTruck","HighMountEngine"];
const viewList = ["top","front","back","left","right"];

/*function Car(carName,numberofraces,numberofvictories) {
  this.carName = carName;
  this.numberofraces = numberofraces;  //Future refactor
  this.numberofvictories = numberofvictories;
}*/

function Game(carListArray) {
  this.cars = carListArray;
}

let game = new Game(["RedDodgeViper","RevJensMini","Peerless1911Roadster","RedVolkswagenBeetle","YellowCadillac",
"YellowFordFocus","QuarryTruck","HighMountEngine"]);

/*Game.prototype.createCarList = function() {
  for (let i = 0; i<carList.length; i++) {
    let carEntry = new Car(carList[i],"","");
    this.cars.push(carEntry);
  }
};
game.createCarList();*/


//Front end logic
Game.prototype.removeCarClass = function(j,k,div,count) {
  for (let i = j; i<k; i++) {
    $(div+viewList[i]).removeClass(game.cars[count]+viewList[i]);
  }
};
Game.prototype.addCarClass = function(j,k,div,count) {
  for (let i = j; i<k; i++) {
    $(div+viewList[i]).addClass(game.cars[count]+viewList[i]);
  }  
};

$(document).ready(function() {

  //Functions to next through right views of the cars.
  let count1 = -1;
  let count2 = -1;
  
  $("button#next1").click(function() {
    if (count1>-1 && count1<game.cars.length)  {
      game.removeCarClass(0,5,"div.car1",count1);
    }
    
    count1 += 1;
    
    if (count1<game.cars.length) {
      game.addCarClass(4,5,"div.car1",count1);
    }
    if (count1===game.cars.length) {
      count1 = -1;
    }    
  });

  $("button#next2").click(function() { 
    if (count2>-1 && count2<game.cars.length)  {
      game.removeCarClass(0,5,"div.car2",count2);
    }
    
    count2+=1;
    
    if (count2<game.cars.length) {
      game.addCarClass(4,5,"div.car2",count2);
    }
    if (count2===game.cars.length) {
      count2 = -1;
    }    
  });

  //Functions to view and select cars

  $("button#view1").on("click",function() {
    game.addCarClass(0,4,"div.car1",count1);
  });   
  $("button#clearview1").click(function() {
    game.removeCarClass(0,4,"div.car1",count1);  
  }); 
  
  let car1selected = 0;
  let car2selected = 0;
  $("button#select1").click(function() {
    car1selected=game.cars[count1].carName;
    if (car1selected===car2selected) {
      alert("I'm sorry, you can't choose the same car as player 2");
      car1selected=0;
    }
    else {
      alert(car1selected+" selected");
      localStorage.transfer1 = car1selected;
    } 
  }); 

  $("button#view2").click(function() {
    game.addCarClass(0,4,"div.car2",count2);
  });   
  $("button#clearview2").click(function() {
    game.removeCarClass(0,4,"div.car2",count2);       
  }); 

  $("button#select2").click(function() {
    car2selected=game.cars[count2].carName;
    if (car1selected===car2selected) {
      alert("I'm sorry, you can't choose the same car as player 1");
      car2selected=0;
    }
    else {
      alert(car2selected+" selected");
      localStorage.transfer2 = car2selected;
    } 
  }); 

  $("button#red1").click(function() {
    alert("Your choice of racecar has been reset");
    car1selected=0;
  }); 

  $("button#red2").click(function() {
    alert("Your choice of racecar has been reset");
    car2selected=0;
  }); 
});




$(document).ready(function() {


 
  //RACETRACK PAGE


  /*Turn cards.  The original project was carried out before learning about arrays and loops, which made representing flipping through a stack of cards
  tricky. As an approximation of that a random number is created that equals a class. There are 3 of each type of card, 9 types of card plus 5 racecar
  cards. So the random number is multiplied by 32 and the integer value taken to create 32 classes (0 is the first random number). Statistically this is
  rubbish, after 15 cards the chance of getting the red racecar is one in 16, eventually with only one card left, if the red racecar hasn't been played 
  yet the chance is 1 in 1.

  After learning about arrays this refactored version includes an array basis for the cards.  A future project could also distribute the icons around the track randomly*/
  $("div.main").addClass("track");
  $("#red3").click(function() {  /* This places the car on the start line.*/
    alert("car1 is "+x+" car2 is "+y);
    $("div.s17Arotate").addClass(x+"top");
    document.getElementById("s17A").style.zIndex = "15";
    $("div.s17Crotate").addClass(y+"top");
    document.getElementById("s17C").style.zIndex = "5";
  }); 

  //This is refactor work place icons in such a way as could be changed - i.e. not hardcoded in html//

  const raceCarIconList = ["RedRacecar", "BlueRacecar", "GreenRacecar", "PurpleRacecar", "YellowRacecar"];

  function RaceCarIcons() {
    this.cars = [];
    this.position = [11,23,35,49,59];
  }

  let raceCarPosition = new RaceCarIcons();

  RaceCarIcons.prototype.createRaceCarPositionList = function() {
    let tempArray =[];
    let y = raceCarIconList.length;
    for (let i = 0; i<y; i++) {
      tempArray.push(raceCarIconList[i]);
    }
    for (let i = 0; i<y; i++) {
      //let x = Math.round((Math.random()*(tempArray.length-1)))   This randomly pushes different picture of racecars.  But need to rebuild the checkspace function to match the assi
      raceCarPosition.cars.push(tempArray[i]);  //push(tempArray[x]) for random
      //tempArray.splice(x,1);
    }
  };
  raceCarPosition.createRaceCarPositionList();





  const iconList = ["RedHelmet", "BlueTyre", "YellowHelmet", "GreenFlag", "RedTyre", "YellowFlag", "BlueHelmet","RedFlag", "GreenTyre"];
  const boxList = ["r18","q18","p18","o18","m18","l18","k18","j18","i19","h19","g19","f19","e19","d19","c18","c17","c16","c13","d12","d11","d10","c9","c7","c6","c5","c3","d3","e2","f2","g3","g4","h5","h6","g8","g9","f10","f11","g12","g14","h14","i13","j12","j10","j9","j8","j6","j5","k3","l2","m2","n2","o2","p2","q2","q3","r3","s4","s5","r6","q7","q8","p9","o8","n8","m8","l9","l10","l11","l12","m12","n12","o11","p11","q11","s12","s13","s14",
  ];

  function buildTrack() {
    let k = -1;
    for (let i = 0; i < boxList.length; i++) {
      k = k+1;
      if(k>= 9) {k=0;}
      for(let j = 0; j<5; j++) {
        if(i == parseInt(raceCarPosition.position[j])) {
          $("#"+boxList[i]+"box").addClass("square");
          $("#"+boxList[i]+"box").addClass(raceCarPosition.cars[j]);
          j = 5;
          i = i+1;
        }
      }
      $("#"+boxList[i]+"box").addClass("square");
      $("#"+boxList[i]+"box").addClass(iconList[k]);
    } 
  }    
    
  buildTrack();










  // This is the stack of cards function
  var cardStack = [];
  var discardStack = [];
  const stackBuilder = function(x,y) {
    //let i
    //let j
    let iconStack=[];
    let racecarStack=[];
    for (let i=0; i<x; i+=1) {
      iconStack.push("RedHelmet","BlueHelmet","YellowHelmet","RedFlag","GreenFlag","YellowFlag","RedTyre","BlueTyre","GreenTyre");
    }
    for (let j=0; j<y; j+=1) {
      racecarStack.push("RedRacecar","BlueRacecar","GreenRacecar","PurpleRacecar","YellowRacecar");
    }
    cardStack= iconStack.concat(racecarStack); 
    return cardStack; 
  };

  stackBuilder(3,1);

  var unplayedCards = cardStack;
  var nextCard = function(array) {
    let pRand = Math.round((Math.random()*(array.length-1)));
    let qRand = array[pRand];
    array.splice(pRand,1);
    array.push(qRand);
    return array;
  };

  //This is the stack function, what happens when you click the stack
  let card = 0;
  let uncard=0;
  let t = 0;
  let previous = 0;
  let turn = 0;  

  //timeOut before doing flip - future refactor maybe do flip first then all the resets after timer;
  function startTimeOut(){
    /*timeOut = */setTimeout(function(){ 
      $("div.flip-card-inner").addClass("flip-card");
    }, 100); 
  }


  $("#stack").click(function() {
    t=1-t;  //determines whose turn it is
    if (t===1) {turn=1;}
    else {turn =2;}
    
    $("div.back-stand-in").removeClass(previous);  //Removes the card that stands in while the card is being flipped back to home position
    
    previous=uncard;

    if (uncard!=0) {
      $("div.back-stand-in").addClass(uncard);  //puts previous card icon on the stand-in card
      $("div.flip-card-inner").removeClass("flip-card");//flips the card back to the home position
      $("div.flip-card-back-icon").removeClass(uncard); //removes the prevous card icon
      
    }
                      
    unplayedCards = nextCard(unplayedCards);   //Chooses an icon and puts it on the card.
    card = unplayedCards.pop(); 
    $("div.flip-card-back-icon").addClass(card);
    discardStack.push(card);
    uncard=card;

    startTimeOut();  /*for some reason it won't do a second flip
                            without this timer here. Event bubbling? 
                      The timer is better than the alert that was previously used*/

    if (unplayedCards.length<=0) { //replaces stack of cards when it is finished
      stackBuilder(3,1);
      unplayedCards=cardStack.slice(0); 
    }  
  });
 

  /*  GAME FUNCTIONALITY  

  Inputs - 
      cars selected = car1selected  car2selected
      card turned = uncard
      track square selected - location and space */


  var x = localStorage.getItem("transfer1"); //brings car choices across from selector page
  var y = localStorage.getItem("transfer2");

  var car1space = 0;
  var car2space = 0;

  var car1oldlocation = "s17A"; //Tells function how to remove cars from start line
  var car2oldlocation = "s17C";   
    

  function checkspace(locate,position,space) {    //Big function that moves cars.  Probably should be broken out into sub functions
          
    if (position != uncard) {
      alert("no that's "+position+" not "+uncard);  // Something about stop or go to end of function
    }
    else if (turn===1) {
      if ((space-car1space)>11) {
        alert("Did you miss a "+uncard+" before that?");
      }
      //else {
                
      if (space===(car2space-1)||space===car2space||space===(car2space+1)) {
        $("."+car2oldlocation+"rotate").removeClass(y+"top"); //This removes picture of car2
        document.getElementById(car2oldlocation).style.zIndex = "-1";  // puts div to the back
        car2oldlocation = car2oldlocation.substring(0,car2oldlocation.length -1)+"C";  //changes the loction of car 2 to C  (irrespective of the length of the string)
        document.getElementById(car2oldlocation).style.zIndex = "5"; //brings div to the front  
        $("#"+car2oldlocation).addClass(y+"top");  //adds picture of car 2
        locate = locate.substring(0,locate.length -1)+"A";//This sets up car 1 to go to A
      }

      var car1oldlocmadeA=car1oldlocation.substring(0,car1oldlocation.length -1)+"A";  //When two cars have been on the same square, car1oldlocation can
      $("."+car1oldlocmadeA+"rotate").removeClass(x+"top");                         // sometimes be set to B, even though the code above would seem to 
      //alert("car 1 A has been removed "+"."+car1oldlocmadeA+"rotate");            //set it to A. This is a hack that removes the image from
      // A every time, whether it is needed or not.  To fix in future. 
      // Equivalent hack is also done on turn 2
    
      $("."+car1oldlocation+"rotate").removeClass(x+"top");
      document.getElementById(car1oldlocation).style.zIndex = "-1";  //This puts car 1 in the right place
      document.getElementById(locate).style.zIndex = "5";  
      $("#"+locate).addClass(x+"top");
          
      car1oldlocation = locate; //This sets up the information for the next turn
      car1space = space;
      //turn=0  Make this active to prevent a player making multiple moves per turn
      //}
        
    }    
    else if (turn===2) {
      if ((space-car2space)>11) {
        alert("Did you miss a "+uncard+" before that?");
      }
      //else {
      if (space===(car1space-1)||space===car1space||space===(car1space+1)) {
        document.getElementById(car1oldlocation).style.zIndex = "-1";  
        $("#"+car1oldlocation).removeClass(x+"top"); //removes car1 from B
        car1oldlocation = car1oldlocation.substring(0,car1oldlocation.length -1)+"A"; //Changes car1 location to A
        document.getElementById(car1oldlocation).style.zIndex = "5";  //brings car1's div to the top
        $("#"+car1oldlocation).addClass(x+"top"); //adds the picture of car1
        locate = locate.substring(0,locate.length -1)+"C"; //This sets up car 2 to go to C
      }

      var car2oldlocmadeC=car2oldlocation.substring(0,car2oldlocation.length -1)+"C";  //This is the car2 version of the hack described above
      $("."+car2oldlocmadeC+"rotate").removeClass(y+"top");
      //alert("car 2 C has been removed");  

      $("#"+car2oldlocation).removeClass(y+"top");
      document.getElementById(car2oldlocation).style.zIndex = "-1";  //This puts car 2 in the right place
      document.getElementById(locate).style.zIndex = "5";  
      $("#"+locate).addClass(y+"top");
        
      car2oldlocation = locate; //This sets up the information for the next turn
      car2space = space;
      //turn=0   Make this active to prevent a player making multiple moves per turn
      //}
      
    }
  }
  
  // Turn starts by clicking pile of cards.  Then click the appropriate icon. This kicks off the big move car function above

  $("#r18box").on("click",function() {  
    if (turn===1) {
      checkspace("r18A","RedHelmet",1);
    }
    if (turn===2) {
      checkspace("r18C","RedHelmet",1);
    }      
  });

  $("#q18box").on("click",function() {  
    checkspace("q18B","BlueTyre",2); 
  });
             
  $("#p18box").on("click",function() {  
    checkspace("p18B","YellowHelmet",3); 
  });

  $("#o18box").on("click",function() {  
    checkspace("o18B","GreenFlag",4); 
  });

  $("#m18box").on("click",function() {  
    checkspace("m18B","RedTyre",6); 
  });

  $("#l18box").on("click",function() {  
    checkspace("l18B","YellowFlag",7); 
  });

  $("#k18box").on("click",function() {  
    checkspace("k18B","BlueHelmet",8); 
  });

  $("#j18box").on("click",function() {  
    checkspace("j18B","RedFlag",9); 
  });

  $("#i19box").on("click",function() {  
    checkspace("i19B","GreenTyre",10); 
  });

  $("#h19box").on("click",function() {  
    checkspace("h19B","RedHelmet",11); 
  });

  $("#g19box").on("click",function() {  
    checkspace("g19B","BlueTyre",12); 
  });

  $("#f19box").on("click",function() {  
    checkspace("f19B","RedRacecar",13); 
  });

  $("#e19box").on("click",function() {  
    checkspace("e19B","YellowHelmet",14); 
  });

  $("#d19box").on("click",function() {  
    checkspace("d19B","GreenFlag",15); 
  });

  $("#c18box").on("click",function() { 
    checkspace("c18B","RedTyre",16); 
  });

  $("#c17box").on("click",function() {  
    checkspace("c17B","YellowFlag",17); 
  });

  $("#c16box").on("click",function() {  
    checkspace("c16B","BlueHelmet",18); 
  });

  $("#c13box").on("click",function() {  
    checkspace("c13B","RedFlag",19); 
  });

  $("#d12box").on("click",function() {  
    checkspace("d12B","GreenTyre",20); 
  });

  $("#d11box").on("click",function() {  
    checkspace("d11B","RedHelmet",21); 
  });

  $("#d10box").on("click",function() {  
    checkspace("d10B","BlueTyre",22); 
  });

  $("#c9box").on("click",function() {  
    checkspace("c9B","YellowHelmet",23); 
  });

  $("#c7box").on("click",function() {  
    checkspace("c7B","GreenFlag",24); 
  });

  $("#c6box").on("click",function() {  
    checkspace("c6B","BlueRacecar",25); 
  });
      
  $("#c5box").on("click",function() {  
    checkspace("c5B","RedTyre",27); 
  });

  $("#c3box").on("click",function() {  
    checkspace("c3B","YellowFlag",28); 
  });

  $("#d3box").on("click",function() {  
    checkspace("d3B","BlueHelmet",29); 
  });
    
  $("#e2box").on("click",function() {  
    checkspace("e2B","RedFlag",30); 
  });

  $("#f2box").on("click",function() {  
    checkspace("f2B","GreenTyre",31); 
  });

  $("#g3box").on("click",function() {  
    //this isn't working - it thinks its too far if its on the previous red helmet
    checkspace("j4B","RedHelmet",32); 
  });

  $("#g4box").on("click",function() {  
    checkspace("g4B","BlueTyre",33); 
  });
      
  $("#h5box").on("click",function() {  
    checkspace("h5B","YellowHelmet",34); 
  });

  $("#h6box").on("click",function() {  
    checkspace("h6B","GreenFlag",35); 
  });

  $("#g8box").on("click",function() {  
    checkspace("g8B","RedTyre",36); 
  });

  $("#g9box").on("click",function() {  
    checkspace("g9B","YellowFlag",37); 
  });

  $("#f10box").on("click",function() {  
    checkspace("f10B","GreenRacecar",38); 
  });

  $("#f11box").on("click",function() {  
    checkspace("f11B","BlueHelmet",39); 
  });
      
  $("#g12box").on("click",function() {  
    checkspace("g12B","RedFlag",40); 
  });

  $("#g14box").on("click",function() {  
    checkspace("c14B","GreenTyre",41); 
  });

  $("#h14box").on("click",function() {  
    checkspace("h14B","RedHelmet",42); 
  });
      
  $("#i13box").on("click",function() {  
    checkspace("i13B","BlueTyre",43); 
  });

  $("#j12box").on("click",function() {  
    checkspace("j12B","YellowHelmet",44); 
  });

  $("#j10box").on("click",function() {  
    checkspace("j10B","GreenFlag",45); 
  });

  $("#j9box").on("click",function() {  
    checkspace("j9B","RedTyre",46); 
  });

  $("#j8box").on("click",function() {  
    checkspace("j8B","YellowFlag",47); 
  });

  $("#j6box").on("click",function() {  
    checkspace("j6B","BlueHelmet",48); 
  });

  $("#j5box").on("click",function() {  
    checkspace("j5B","RedFlag",49); 
  });

  $("#k3box").on("click",function() {  
    checkspace("k3B","GreenTyre",50); 
  });

  $("#l2box").on("click",function() {  
    checkspace("l2B","RedHelmet",51); 
  });

  $("#m2box").on("click",function() {  
    checkspace("m2B","PurpleRacecar",52); 
  });

  $("#n2box").on("click",function() {  
    checkspace("n2B","BlueTyre",53); 
  });

  $("#o2box").on("click",function() {  
    checkspace("o2B","YellowHelmet",54); 
  });

  $("#p2box").on("click",function() {  
    checkspace("p2B","GreenFlag",55); 
  });

  $("#q2box").on("click",function() {  
    checkspace("q2B","RedTyre",56); 
  });
      
  $("#q3box").on("click",function() {  
    checkspace("q3B","YellowFlag",57); 
  });
      
  $("#r3box").on("click",function() {  
    checkspace("r3B","BlueHelmet",58); 
  });

  $("#s4box").on("click",function() {  
    checkspace("s4B","RedFlag",59); 
  });
      
  $("#s5box").on("click",function() {  
    checkspace("s5B","GreenTyre",60); 
  });
      
  $("#r6box").on("click",function() {  
    checkspace("r11B","RedHelmet",61); 
  });

  $("#q7box").on("click",function() {  
    checkspace("q7B","YellowRacecar",62); 
  });

  $("#q8box").on("click",function() {  
    checkspace("q8B","BlueTyre",62); 
  });

  $("#p8box").on("click",function() {  
    checkspace("p8B","YellowHelmet",63); 
  });

  $("#o8box").on("click",function() {  
    checkspace("o8B","GreenFlag",64); 
  });

  $("#n8box").on("click",function() {  
    checkspace("n8B","RedTyre",65); 
  });

  $("#m8box").on("click",function() {  
    checkspace("m8B","YellowFlag",66); 
  });

  $("#l9box").on("click",function() {  
    checkspace("l9B","BlueHelmet",68); 
  });

  $("#l10box").on("click",function() {  
    checkspace("l10B","RedFlag",69); 
  });

  $("#l11box").on("click",function() {  
    checkspace("l11B","GreenTyre",70); 
  });

  $("#l12box").on("click",function() {  
    checkspace("l12B","RedHelmet",71); 
  });

  $("#m12box").on("click",function() {  
    checkspace("m12B","BlueTyre",72); 
  });

  $("#n12box").on("click",function() {  
    checkspace("n18B","YellowHelmet",73); 
  });

  $("#o11box").on("click",function() {  
    checkspace("o11B","GreenFlag",74); 
  });

  $("#p11box").on("click",function() {  
    checkspace("p11B","RedTyre",75); 
  });

  $("#q11box").on("click",function() {  
    checkspace("q11B","YellowFlag",76); 
  });

  $("#s12box").on("click",function() {  
    checkspace("s12B","BlueHelmet",77); 
  });

  $("#s13box").on("click",function() {  
    checkspace("s13B","RedFlag",78); 
  });

  $("#s14box").on("click",function() {  
    checkspace("s14B","GreenTyre",79); 
  });
      
  //end of document 
});
