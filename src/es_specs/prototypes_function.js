/*
    functions that define objects can be created and then
    can be added a method on their prototype that can be applied to all objects
*/

var Keyboard = function (color, codeType){
    this.color = color
    return {
        keyBoardType: function(){
            switch(codeType){
                case 1:
                    return "querty"
                case 2:
                    return "asdf"
                default:
                    return "any"
            }
        }
    }
}
Keyboard.prototype.getDetails = function (){
    return "Color: " + this.color + ", TypeKeyboard: " + this.keyBoardType
}

var myKeyQuerty = new Keyboard("red",1)
var myKeyAsdf = new Keyboard("black", 2)
console.log(myKeyQuerty.getDetails())
console.log(myKeyAsdf.getDetails())
