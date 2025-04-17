const readline = require('readline');
const { generateName } = require('./utils/nameGenerator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestions = () => {
    rl.question('Enter gender (male/female): ', (gender) => {
        rl.question('Enter race (human/elf/dwarf): ', (race) => {
            rl.question('Enter style (fantasy/scifi): ', (style) => {
                const name = generateName(gender, race, style);
                console.log(`Generated Name: ${name}`);
                rl.close();
            });
        });
    });
};

console.log('Welcome to the Random Character Name Generator!');
askQuestions();