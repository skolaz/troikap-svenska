function slumpaKaraktar() {
    function rollDice(diceCount, diceSides) {
        let total = 0;
        for (let i = 0; i < diceCount; i++) {
            total += Math.floor(Math.random() * diceSides) + 1;
        }
        return total;
    }

    const skill = rollDice(1, 3) + 3;
    const stamina = rollDice(2, 6) + 12;
    const luck = rollDice(1, 6) + 6;

    // Uppdatera div-elementen med innerHTML
    document.getElementById("skill").innerHTML = skill;
    document.getElementById("stamina").innerHTML = stamina;
    document.getElementById("luck").innerHTML = luck;

    // Anropa funktionen för att slumpa en bakgrund
    slumpaBakgrund();
}

function extractContentByTitle(markdownText, title) {
    const regex = new RegExp(`(^#\\s*${title}[\\s\\S]*?)(?=\\n#|$)`, 'm');
    const match = markdownText.match(regex);
  
    if (match) {
        return match[1].trim();
    }
    return "";
}

function printCharacterSheet() {
    window.print();
}

function slumpaBakgrund() {
    fetch('bakgrundstabellen.md')
        .then(response => {
            if (!response.ok) {
                throw new Error('Kunde inte ladda filen med bakgrunder.');
            }
            return response.text();
        })
        .then(markdownText => {
            const titles = markdownText.match(/^#\s*.+$/gm);

            if (!titles || titles.length === 0) {
                document.getElementById('background').innerHTML = "Kunde inte hitta några bakgrunder i filen.";
                return;
            }

            const randomIndex = Math.floor(Math.random() * titles.length);
            const randomTitle = titles[randomIndex].replace(/^#\s*/, '');

            const backgroundContent = extractContentByTitle(markdownText, randomTitle);
            
            // Konvertera Markdown till HTML och sätt in det i div:en
            document.getElementById('background').innerHTML = marked(backgroundContent);
        })
        .catch(error => {
            console.error("Fel vid laddning av bakgrunder:", error);
            document.getElementById('background').innerHTML = "Kunde inte ladda bakgrunden.";
        });
}

// Funktion som fyller i startägodelarna
function loadDefaultPossessions() {
  const defaultText = `
- 2d6 silvermynt
- en kniv
- en lykta och oljeflaska
- en ryggsäck
- 6 provianter
  `;
  // Konvertera texten till HTML (för att hantera radbrytningar)
  const htmlText = marked(defaultText);
  // Sätt in texten i div-elementet
  document.getElementById("possessions").innerHTML = htmlText;
}

// Anropa funktionen när sidan laddats
window.onload = function() {
  loadDefaultPossessions();
  // Om du har någon annan kod som ska köras när sidan laddas, lägger du den här.
};