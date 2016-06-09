function foo () {
	console.log(name);
}

function bar () {
	var name = 'Jeremy';
	// function foo () { //running a function from there shows the lexical scope I was talking about
	// 	console.log(name);
	// }
	foo();
}

// bar();

function sayHello(name) {
    var text = 'Hello ' + name;
    return function () {
        console.log(text);
    }
}

var sayName = sayHello('Jeremy Shefer');

sayName(); // this showcases the closure concept I was trying to explain.  Closure created in the returned function keeps name variable in its local scope even after its returned.

