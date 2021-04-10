export default function RaceCarIcons() {
    this.cars = ["RedRacecar", "BlueRacecar", "GreenRacecar", "PurpleRacecar", "YellowRacecar"];
    this.position = [11,23,35,49,59];
}



RaceCarIcons.prototype.createRaceCarPositionList = function() {
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