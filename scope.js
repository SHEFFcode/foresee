function foo () { // running the function from there will throw an error
	console.log(name);
}

function bar () {
	var name = 'Jeremy';
	// function foo () { //defining a function from here will work and shows the lexical scope I was talking about
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

