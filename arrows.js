var square = (x) => x * x;

console.log(square(9));

var user = {
    name: 'Richard',
    sayHi: function() {
        console.log(arguments);
        console.log( 'Hi ' + this.name );
    }

};

user.sayHi(1,2,3);

