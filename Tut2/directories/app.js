var fs = require("fs");

// Creere director Sync
//fs.mkdirSync("stuff");

// Sterge director mkdirSync
//fs.rmdirSync("stuff");

// Creere director Async
/*
fs.mkdir("stuff", function() {
  fs.readFile("readMe.txt", function(err, data) {
    fs.writeFile("./stuff/writeMe.txt", data, function(err) {
      console.log("Fisierul a fost creat.");
    });
  });
});
*/

fs.unlink("./stuff/writeMe.txt", function() {
  fs.rmdir("stuff");
  console.log("Directorul a fost sters.");
});
