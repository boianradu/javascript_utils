class Kid { 
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    details(){
        return {
            name: function(){
                return this.name
            },
            age: function(){
                return this.age
            }
        }
    }
}

var alex = new Kid("Alexandru", 16)
console.log(alex.details.name)
console.log(alex.details.age)