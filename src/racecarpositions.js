export default function Icons() {
  this.cars = ["RedRacecar", "BlueRacecar", "GreenRacecar", "PurpleRacecar", "YellowRacecar"];
  this.position = [11,23,35,49,59];
  this.iconList = ["RedHelmet", "BlueTyre", "YellowHelmet", "GreenFlag", "RedTyre", "YellowFlag", "BlueHelmet","RedFlag", "GreenTyre"];
  this.boxList = ["r18","q18","p18","o18","m18","l18","k18","j18","i19","h19","g19","f19","e19","d19","c18","c17","c16","c13","d12","d11","d10","c9","c7","c6","c5","c3","d3","e2","f2","g3","g4","h5","h6","g8","g9","f10","f11","g12","g14","h14","i13","j12","j10","j9","j8","j6","j5","k3","l2","m2","n2","o2","p2","q2","q3","r3","s4","s5","r6","q7","q8","p9","o8","n8","m8","l9","l10","l11","l12","m12","n12","o11","p11","q11","s12","s13","s14",
  this.cardStack =[]
];
}



Icons.prototype.createRaceCarPositionList = function() {
  let tempArray =[];
  let y = this.cars.length;
  for (let i = 0; i<y; i++) {
    tempArray.push(this.cars[i]);
  }
  //this.cars = []
  for (let i = 0; i<y; i++) {
    //let x = Math.round((Math.random()*(tempArray.length-1)))   This randomly pushes different picture of racecars.  But need to rebuild the checkspace function to match the assi
    this.cars.push(tempArray[i]);  //push(tempArray[x]) for random
    //tempArray.splice(x,1);
  }
};

Icons.prototype.stackBuilder = function(x,y) { 
  this.cardStack = [];
  for (let i=0; i<x; i+=1) {
    for(let k=0; k<this.iconList.length; k++) {
        this.cardStack.push(this.iconList[k]);
    }  
  }
  for (let j=0; j<y; j+=1) {
    for(let m=0; m<this.cars.length; m++) {
        this.cardStack.push(this.cars[m]);
    } 
  }
};

Icons.prototype.nextCard = function() {
    let pRand = Math.round((Math.random()*(this.cardStack.length-1)));
    let qRand = this.cardStack[pRand];
    this.cardStack.splice(pRand,1);
    this.cardStack.push(qRand);
};