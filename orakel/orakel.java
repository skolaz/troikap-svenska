// En datastruktur som mappar odds-kategorier till tärningsintervall från tabellen
const oracleOdds = {
    'Självklar': { yesEx: [1, 18], yes: [19, 90], no: [91, 98], noEx: [99, 100] },
    'Nästan självklar': { yesEx: [1, 17], yes: [18, 85], no: [86, 97], noEx: [98, 100] },
    'Mycket troligt': { yesEx: [1, 15], yes: [16, 75], no: [76, 95], noEx: [96, 100] },
    'Troligt': { yesEx: [1, 13], yes: [14, 65], no: [66, 93], noEx: [94, 100] },
    '50/50 eller okänt': { yesEx: [1, 10], yes: [11, 50], no: [51, 90], noEx: [91, 100] },
    'Otroligt': { yesEx: [1, 7], yes: [8, 35], no: [36, 87], noEx: [88, 100] },
    'Mycket otroligt': { yesEx: [1, 5], yes: [6, 25], no: [26, 85], noEx: [86, 100] },
    'Nästan omöjligt': { yesEx: [1, 3], yes: [4, 15], no: [16, 83], noEx: [84, 100] },
    'Omöjligt': { yesEx: [1, 2], yes: [3, 10], no: [11, 82], noEx: [83, 100] }
};

const oracleAnswers = {
    'exceptionalYes': 'Exceptionellt Ja',
    'yes': 'Ja',
    'no': 'Nej',
    'exceptionalNo': 'Exceptionellt Nej'
};

function askOracle(oddsCategory) {
    const answerDiv = document.getElementById("oracle-answer");
    answerDiv.innerHTML = "Oraclet funderar...";

    setTimeout(() => {
        const roll = Math.floor(Math.random() * 100) + 1;
        let result = "Kunde inte hitta svar.";
        const ranges = oracleOdds[oddsCategory];

        if (roll >= ranges.yesEx[0] && roll <= ranges.yesEx[1]) {
            result = oracleAnswers.exceptionalYes;
        } else if (roll >= ranges.yes[0] && roll <= ranges.yes[1]) {
            result = oracleAnswers.yes;
        } else if (roll >= ranges.no[0] && roll <= ranges.no[1]) {
            result = oracleAnswers.no;
        } else if (roll >= ranges.noEx[0] && roll <= ranges.noEx[1]) {
            result = oracleAnswers.exceptionalNo;
        }
        
        answerDiv.innerHTML = `Resultat av 1d100: **${roll}**.<br>Svar: **${result}**`;
    }, 2000);
}