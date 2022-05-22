class studentHogwarts {
  constructor(privateScore, name) {
    this.privateScore = 0;
    this.name = null;
  }

  #changeScoreBy(points) {
    this.privateScore += points;
  }

  setName(newName) {
    this.name = newName;
  }

  rewardStudent() {
    return this.#changeScoreBy(1);
  }

  penalizeStudent() {
    return this.#changeScoreBy(-1);
  }

  getScore() {
    return this.name.concat(": ", this.privateScore);
  }
}

let harry = new studentHogwarts;
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = new studentHogwarts;
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
