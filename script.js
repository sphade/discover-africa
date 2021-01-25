class Human {
  constructor(name, age, height, power) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.power = power || "this is not a super human";
  }
  complete() {
    console.log(
      "his name is " +
        this.name.firstName +
        " " +
        this.name.secondName +
        " his age is " +
        this.age
    );
    return this;
  }
  complete2() {
    console.log("his height is " + this.height);
    return this;
  }
}

let Human1 = new Human(
  {
    firstName: "lawal",
    secondName: "adebola",
  },
  17,
  "12 meter"
);
class superhuman extends Human {
  description() {
    return "his super power is " + this.power;
  }
}
let Human2 = new Human("feranmi", 18, "123 meter");
let Human3 = new Human("pelumi", 19, "124 meter");
let Human4 = new Human("ajibola", 20, "125 meter");
let Human5 = new superhuman(
  {
    firstName: "lawal",
    secondName: "adebola",
  },
  18,
  "123 meter",
  "flight"
);

Human1.complete().complete2()