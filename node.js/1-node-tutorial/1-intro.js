// Intro
const amount = 12;

if (amount < 10) {
    console.log("True");
} else {
    console.log("False");
}

console.log(`hey it's me your first app`);


// Globals - NO WINDOW
// __dirname - path to current directory
// __filename - file name
// reqiure - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed
console.log(__dirname)

setInterval(() => {
    console.log("hello world")
}, 1000)