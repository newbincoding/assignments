const fs = require("fs")

fs.readFile("a.txt", "utf-8", function(err,data){
    let a = data
    // console.log(a)
    a = a.replace(/\s+/g, ' ');
    fs.writeFile("b.txt", a, function(err, data){
        console.log("done")
    })
})