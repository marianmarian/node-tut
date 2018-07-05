var fs = require("fs");

/*
var readMe = fs.readFileSync("readMe.txt", "utf8");

console.log(readMe);
*/
/*
var readMe = fs.readFileSync("readMe.txt", 'utf8');
fs.writeFileSync("writeMe.txt", readMe);
*/

var readMe = fs.readFile("readMe.txt", "utf8", function(err, data) {
  fs.writeFile("writeMe.txt", data, (err) => {
    if (err) {
      console.log("Eroare");
    } else {
      console.log("Continutul a fost salvat");
    }
  });
});

console.log("test");
