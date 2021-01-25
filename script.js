Human = {
    name:  {
        firstName: 'lawal',
        lastName:'adebola',
    },
    age: 17,
    height: '14 metters',
    gender:"male",
    complete() {
        return  this.name.firstName + this.name.lastName + 'is a '+this.gender
    }

}

console.log(Human.complete())
console.log(Human.complete())
console.log(Human.complete())


