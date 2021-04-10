export default function Car(carName,numberofraces,numberofvictories) {
    this.carName = carName;
    this.numberofraces = numberofraces;  //Future refactor
    this.numberofvictories = numberofvictories;
}

Car.prototype.generateList=function() {
  for (let i = 0; i<carList.length; i++) {
    let carEntry = new Car(carList[i],"","");
    this.cars.push(carEntry);
  }  
};

const carList = ["RedDodgeViper","RevJensMini","Peerless1911Roadster","RedVolkswagenBeetle","YellowCadillac","YellowFordFocus","QuarryTruck","HighMountEngine"];