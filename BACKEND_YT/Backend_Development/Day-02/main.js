const fs = require("fs");


/* write, append, copy, rename, unlink */

fs.writeFile("Hello.txt", "Hello, How are you??", function (err) {
  if (err) console.log("Error");
  else console.log("Done, Your File is Created");
});

fs.appendFile("Hello.txt", " Main thik hun, Apna Btao Bhai??", function (err) {
  if (err) console.log("Error");
  else console.log("Done, Your File is Created");
});

fs.rename("Hello.txt", "Hey.txt",function (err) {
  if (err) console.log("Error");
  else console.log("Done, Your File is Renamed");
});

fs.copyFile("Hello.txt", "../Day-01/Copy.txt", function (err) {
  if (err) console.log("Error");
  else console.log("Done, Your File is Copied");
});

fs.unlink("Copy.txt", function (err) {
  if (err) console.log("Error");
  else console.log("Done, Your File is Deleted");
});

fs.readFile("../Day-02/Hello.txt",'utf8', function (err,data) {
  if (err) console.log("Error");
  else console.log(data);
});
