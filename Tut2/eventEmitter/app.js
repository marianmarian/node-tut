var events = require("events");
var util = require("util");
var myEmitter = new events.EventEmitter();

/*
myEmitter.on("un eveniment", function(mesaj) {
  console.log(mesaj);
});

myEmitter.emit("un eveniment", "Salut bai");
*/

var Person = function(nume) {
  this.nume = nume;
}

util.inherits(Person, events.EventEmitter);

var ion = new Person("Ion");
var maria = new Person("Maria");
var mihai = new Person("Mihai");

var lista = [ion, maria, mihai];

lista.forEach(function(persoana) {
  persoana.on("speak", function(mesaj) {
    console.log(persoana.nume + " spune: " + mesaj);
  });
});

ion.emit("speak", "Salut, ba");
maria.emit("speak", "Buna!");
mihai.emit("speak", "Bau");
