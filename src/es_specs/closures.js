function makeWorker() {
    let name = "Pete";
  
    return function() {
      console.log(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();

  function printThis(){
      this.name = "unu"
      var printEnd = ()=>{
          let name="doi"
          console.log(name)
          console.log(this.name)
      }
      printEnd()
  }
  
  // call it
  work(); 
  printThis()


  // class
class house{
    constructor(type){
        this.type=type
        this.roomsNumber=1
    }
     rooms(){
        return {
            add: function(nr){
                this.roomsNumber += nr
            },
            getRooms: function(){
                return this.roomsNumber
            }
        }
    }
}

let pipera = new house("garaj")
// console.log(pipera.rooms().getRooms())
var x = function(){}
console.log(typeof x)


var doc = function(num, type){
    var name=num
    var typed = type 
    return {
        log: function() {
            return name + typed
        },
        changeName: function(newName) {
            name = newName
        },
        changeTyped: function(newType){
            typed = newType
        }
    }
}
var laurentiu =  doc("ceausescu ", "comunist")
console.log(laurentiu.log())
laurentiu.changeName("laurentiu ")
console.log(laurentiu.log())
laurentiu.changeTyped("democrat")
console.log(laurentiu.log())

var x= [1,2,3,4].reduce((acc)=>{
    console.log(acc)
})

