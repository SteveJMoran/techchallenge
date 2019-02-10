// 2. Create a student object. The student should have the following properties:
// + equipment (array with computer, pen, paper strings inside of it).
// + energy (number - 300).
// + grades (number - 95).
// + uniform (object with top, bottoms, shoes properties).
// + create a method that takes in food (number of calories) and then updates energy by the same number of calories.
// + create a method that takes in new equipment that will update our equipment array (add it to the end).
// + create a method that will change any part of the uniform object (since everyday you wear something different).
// + create a method study time that takes time studied (minutes) that will update our grades and deplete our energy. 
// + For every hour that you study, your grades go up by 5% (example: if your grade is 60, and you study an hour, your grade will be 65). For every hour you study, your energy goes down by 2. (Bonus: if your energy goes below 0, your grades go down 10%)
// + Update uniform method to change something that doesn't exist in the uniform object, like adding an accessory, that is equal to glasses.

Student = {
  equipment : ['computer', 'pen', 'paper'],
  energy : 300,
  grades : 95,
  uniform : {
    top : 'T-shirt',
    bottoms : 'Jeans',
    shoes : 'runners',
  },
  eat : function (cals) {
    this.energy = this.energy + cals
    console.info("Student Energy: "+ this.energy)
  },
  buy : function (items) {
    if(items.constructor === Array) {
      items.forEach(item => {
        this.equipment.push(item)
      });
    } else {
      this.equipment.push(items);
    }
    console.info("Student Equipment: "+ this.equipment)
  },
  change : function(items) {
    const keys = Object.keys(items);
    keys.forEach(key => {
      if(items[key]) {
        this.uniform[key] = items[key];
      }
    });
    console.log("Student Uniform:")
    console.table(this.uniform)
  },
  studyTime : function (time){
    let hours = time / 60;
    let gradesIncrease = (hours * 5) 
    let energyDepleted = (hours * 2)
    let currentEnergy = this.energy;

    if(currentEnergy < 0){
      this.grades = this.grades - (this.grades * 0.1);
    } else {
      // max grade of 100%
      newGrade = this.grades + gradesIncrease;
      this.grades = Math.min(newGrade, 100)
    }
    this.energy = this.energy - energyDepleted;
    console.log("Studying....")
    console.log("Student Energy: "+ this.energy)
    console.log("Student Grades: "+ this.grades)
  },
  view : function() {
    console.log("Student Energy: "+ this.energy)
    console.log("Student Grades: "+ this.grades)
    console.info("Student Equipment: "+ this.equipment)
    console.log("Student Uniform:")
    console.table(this.uniform)
  }
}

document.querySelector('#showStudent').addEventListener('click', function(){
  Student.view();
})
document.querySelector('#eatBurrito').addEventListener('click', function(){
  console.log("Mmmmmmmm...")
  Student.eat(400);
})
document.querySelector('#buyLaptop').addEventListener('click', function(){
  Student.buy(['laptop','mouse'])
})
document.querySelector('#putOnSweater').addEventListener('click', function(){
  Student.change({top: 'Sweater'})
})
document.querySelector('#study').addEventListener('click', function(){
  Student.studyTime(80);
})
document.querySelector('#putOnSunglasses').addEventListener('click', function(){
  Student.change({eyes: 'Sunglasses'})
})