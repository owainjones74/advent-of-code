const fs = require('node:fs');

const data = fs.readFileSync('data.txt', 'utf8');
const lines = data.split("\n");
let total = 0;

const conditions = {
    red: 12,
    green: 13,
    blue: 14
}

lines.forEach(line => {
    const sections = line.split(":")
    const gameNumber = sections[0].split(' ')[1];

    const game = {
        id: parseInt(gameNumber),
        rounds: []
    };

    // Parse text into object data
    sections[1].split(';').forEach((row, roundKey) => {
        game.rounds[roundKey] = {};
        row.split(',').forEach((gameData) => {
            const cubes = gameData.trim(' ').split(' ');

            game.rounds[roundKey][cubes[1]] = parseInt(cubes[0]);
        });
    })


    let pass = true;

    // Loop the rounds and check they are valid against the conditions.
    game.rounds.forEach((round) => {
        Object.entries(round).forEach(val => {
            if (val[1] > conditions[val[0]]) {
                pass = false;
            }
        })
    })

    if (pass) {
        total += game.id
    }
});

console.log('Final Result: ' + total);