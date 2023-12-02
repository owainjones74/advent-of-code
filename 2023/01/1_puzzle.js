const fs = require('node:fs');

const data = fs.readFileSync('data.txt', 'utf8');
//const data = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet"
const lines = data.split("\n");
let total = 0;

lines.forEach(line => {
    let firstInt;
    let lastInt;
    
    // Get first int.
    for (const char of line) {
        const int = parseInt(char)
        if (!int) continue;
        
        firstInt = int;
        break;
    };
    
    // Get last int. Could probably do both in 1 loop buy lazy \_(._.)_/
    for (const char of line.split("").reverse().join("")) {
        const int = parseInt(char)
        if (!int) continue;

        lastInt = int;
        break;
    };
    
    total += parseInt(firstInt + '' + lastInt);
});

console.log('Final Result: ' + total);