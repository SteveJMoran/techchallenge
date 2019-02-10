// 4. Create a counter. 
// The user should be able to press a button to count up (by 1) and press another button to count down (by 1). 
// The user should be able to add a goal to the counter, and once the counter gets to the goal, log a sentence to the console: "You've reached your goal of ---!" using a template literal. 
// You can use the jQuery library for this.

class Counter {
  constructor(goal) {
    this.goal = goal || 0;
    this.count = 0;
    this.active = false;
  }
  updateView() {
    let counter = document.querySelector(".count");
    counter.innerHTML = this.count;
    this.compare()
  }
  increment() {
    this.count++;
    this.updateView();
  }
  decrement() {
    this.count--;
    this.updateView();
  }
  compare(){
    if(this.active){
      let display = document.querySelector(".message");
      let msg = `count to ${this.goal}`
      if (this.goal == this.count) {
        msg = `You've reached your goal of ${this.goal}`;
        console.log(msg)
      } else if (Math.abs(this.goal - this.count) < 5 ) {
        if(this.count > this.goal) {
          msg = `Too Far!`
        } else {
          msg = `You're close`;
        }
      } else {
        msg = `count to ${this.goal}`
      }
      display.innerHTML = msg;
    }
  }
  stop() {
    this.goal = 0;
    this.count = 0;
    this.active = false;

    let counter = document.querySelector(".count");
    counter.innerHTML = this.count;

    let display = document.querySelector(".message");
    let msg = `Choose a goal first`;
    display.innerHTML = msg
    console.log('Game Stopped')
  }
}

let game = new Counter();

document.querySelector("#toggleGame").addEventListener('click', function(e){
  if(this.classList.contains('gameActive')){
    this.innerHTML = 'Start Game'
    this.classList.remove('gameActive');
    game.stop();
  } else {
    let goal = document.querySelector("#countingGoal").value;
    this.innerHTML = 'Stop Game'
    this.classList.add('gameActive');
    game.goal = goal;
    game.active = true;
    game.updateView();
  }
})
document.querySelector("#countUp").addEventListener('click', function(){
  game.increment()
})
document.querySelector("#countDown").addEventListener('click', function(){
  game.decrement()
})