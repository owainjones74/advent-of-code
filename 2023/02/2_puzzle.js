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
        rounds: [],
        minimum: {
            red: 0,
            green: 0,
            blue: 0
        }
    };

    // Parse text into object data
    sections[1].split(';').forEach((row, roundKey) => {
        game.rounds[roundKey] = {};
        row.split(',').forEach((gameData) => {
            const cubes = gameData.trim(' ').split(' ');

            game.rounds[roundKey][cubes[1]] = parseInt(cubes[0]);
        });
    })


    // Loop the rounds and check for the highest values
    game.rounds.forEach((round) => {
        Object.entries(round).forEach(val => {
            const color = val[0];
            const cubes = val[1]

            if (cubes > game.minimum[color]) {
                game.minimum[color] = cubes;
            }
        })
    })


    total += game.minimum.red * game.minimum.green * game.minimum.blue
});

console.log('Final Result: ' + total);