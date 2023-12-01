const fs = require('node:fs');

const data = fs.readFileSync('1_data.txt', 'utf8');
//const data = "two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen"
const lines = data.split("\n");
const regex = /(1|2|3|4|5|6|7|8|9|one|two|three|four|five|six|seven|eight|nine)/gm;
// Need to account for the annoying undocumented combined names
const regexEnd = /(1|2|3|4|5|6|7|8|9|oneight|twone|eightwo|one|two|three|four|five|six|seven|eight|nine)/gm;
const weight = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'oneight': 8,
    'twone': 1,
    'eightwo': 2,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
}

let total = 0

lines.forEach(line => {
    let firstInt = weight[line.match(regex)[0]];
    let lastInt = weight[line.match(regexEnd)[line.match(regexEnd).length - 1]];

    total += parseInt(firstInt + '' + lastInt);
});

console.log('Final Result: ' + total);