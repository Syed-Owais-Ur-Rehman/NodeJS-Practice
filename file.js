const fs = require("fs");

// create a file

// writeFileSync: Sychronous call
// fs.writeFileSync("./test.txt", "Hey world");

// writeFile: Asychnronous call
// fs.writeFile("./test.txt", "This is Asychronous", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result) =>{
//     if (err) {
//         console.log("Error",err);
//     } else {
//         console.log(result)
//     }
// }
// )

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

fs.cpSync('./test.txt', './copy.txt')

fs.unlinkSync('./copy.txt')
console.log(fs.statSync('./test.txt'))

fs.mkdirSync("docs/a/b", {recursive: true})