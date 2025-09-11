// ascii-ansikte.js
function generateAsciiFace() {
    const hairStyles = [
        ' .-. ', // Kort hår
        ' /^\ ', // Spetsigt hår
        ' _._ ', // Mittbena
        '  ^  ', // Enkelt hårtopp
        ' ',     // Inget hår
        '~.~'    // Lockigt
    ];

    const eyeSets = [
        ['o', 'o'], ['O', 'O'], ['-', '-'], ['^', '^'], ['T', 'T'], ['Q', 'Q'],
        ['@', '@'], ['x', 'x'], ['u', 'u'], ['>', '<'] // Olika par
    ];

    const noseTypes = ['v', '^', '|', '.', '~', '-'];

    const mouthSets = [
        ['_', '_'], ['o', 'o'], ['U', 'U'], ['w', 'w'], ['P', 'P'],
        [')', '('], // Leende/ledsen
        ['D', 'D']  // Stor D-mun
    ];
    
    // Nya arrayer från den andra funktionen
    const frames = [
        ['(', ')'], // Rundare ansikte
        ['[', ']'], // Kantigare ansikte
        ['<', '>'], // Spetsigare ansikte
        [' ', ' ']  // Inga ramar
    ];
    
    // ... och resten av dina arrayer
    const cheekElements = [' ', '(', ')', '[', ']', '{', '}'];
    const earElements = [' ', '<', '>', '{', '}'];
    const eyebrowElements = [' ', '^', '-', '~'];

    // Slumpa alla delar
    const randomHair = hairStyles[Math.floor(Math.random() * hairStyles.length)];
    const randomEyeSet = eyeSets[Math.floor(Math.random() * eyeSets.length)];
    const eyeL = randomEyeSet[0];
    const eyeR = randomEyeSet[1];
    const randomNose = noseTypes[Math.floor(Math.random() * noseTypes.length)];
    const randomMouthSet = mouthSets[Math.floor(Math.random() * mouthSets.length)];
    const mouthL = randomMouthSet[0];
    const mouthR = randomMouthSet[1];
    const randomCheekL = cheekElements[Math.floor(Math.random() * cheekElements.length)];
    const randomCheekR = cheekElements[Math.floor(Math.random() * cheekElements.length)];
    const randomEarL = earElements[Math.floor(Math.random() * earElements.length)];
    const randomEarR = earElements[Math.floor(Math.random() * earElements.length)];
    const randomEyebrowL = eyebrowElements[Math.floor(Math.random() * eyebrowElements.length)];
    const randomEyebrowR = eyebrowElements[Math.floor(Math.random() * eyebrowElements.length)];

    const randomFrame = frames[Math.floor(Math.random() * frames.length)];
    const frameL = randomFrame[0];
    const frameR = randomFrame[1];

    // Nu sätter vi ihop allt till EN return-sträng
    return `
${frameL}${randomHair.trim()}${frameR}
${frameL}${randomEarL}${randomCheekL}${randomEyebrowL}${eyeL}${randomNose}${eyeR}${randomEyebrowR}${randomCheekR}${randomEarR}${frameR}
${frameL} ${randomCheekL} ${mouthL}${mouthR} ${randomCheekR} ${frameR}
    `;
}
