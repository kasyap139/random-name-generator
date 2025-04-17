function generateName(gender, race, style) {
    const maleNames = ['Aragorn', 'Legolas', 'Gimli', 'Frodo', 'Samwise'];
    const femaleNames = ['Eowyn', 'Galadriel', 'Arwen', 'Tauriel', 'Lúthien'];
    const races = {
        human: ['John', 'Jane', 'Robert', 'Emily'],
        elf: ['Elrond', 'Thranduil', 'Celeborn', 'Galadriel'],
        dwarf: ['Gimli', 'Thorin', 'Balin', 'Dwalin'],
        hobbit: ['Bilbo', 'Frodo', 'Sam', 'Pippin'],
    };

    let names = [];

    if (gender === 'male') {
        names = names.concat(maleNames);
    } else if (gender === 'female') {
        names = names.concat(femaleNames);
    }

    if (races[race]) {
        names = names.concat(races[race]);
    }

    if (style === 'fantasy') {
        names = names.map(name => `Sir ${name}`);
    } else if (style === 'modern') {
        names = names.map(name => `Mr./Ms. ${name}`);
    }

    return names[Math.floor(Math.random() * names.length)];
}

export { generateName };