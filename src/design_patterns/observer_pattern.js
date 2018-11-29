/*
cool example: https://sourcemaking.com/design_patterns/observer


The objects participating in this pattern are:

Subject -- In sample code: Click
        maintains list of observers. Any number of Observer objects may observe a Subject
        implements an interface that lets observer objects subscribe or unsubscribe
        sends a notification to its observers when its state changes
Observers -- In sample code: clickHandler
        has a function signature that can be invoked when Subject changes (i.e. event occurs)


*/

function Click() {
    this.handlers = [];  // observers
}
 
Click.prototype = {
 
    subscribe: function(fn) {
        this.handlers.push(fn);
    },
 
    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
 
    fire: function(o) {  
        this.handlers.forEach(function(item) { 
            //item is clickHandler and  o is textCalledOnFire
            item(o)
        });
    }
}
 
// log helper
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    }
})();
 
function run() {
 

    var clickHandler = function(item) { 
        log.add("fired: " + item); 
    };
 
    var click = new Click();
 
    click.subscribe(clickHandler);
    click.fire('event #1');
    click.fire('event #12');
    click.fire('event #123');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
    click.subscribe(clickHandler);
    click.fire('event #4');
    click.subscribe(clickHandler);
    click.fire('event #5');
 
    log.show();
}
run()