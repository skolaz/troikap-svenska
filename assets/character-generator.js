// Funktion för att slumpa karaktärs-värden
function slumpaKaraktar() {
    // Funktion för att rulla tärning
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

    // Anropa funktionerna för att slumpa bakgrund och ladda ägodelar
    slumpaBakgrund();
    loadDefaultPossessions();

    // Lägg till en ny div för ASCII-ansiktet om den inte finns
    let faceElement = document.getElementById("ascii-face");
    if (!faceElement) {
        faceElement = document.createElement('div');
        faceElement.id = 'ascii-face';
        faceElement.style.whiteSpace = 'pre'; // Bevarar radbrytningar
        // Hitta din generator-container och lägg till ansiktet
        const generatorContainer = document.querySelector('.generator-container');
        generatorContainer.appendChild(faceElement);

        // Skapa en label för ansiktet om den inte finns
        const label = document.createElement('label');
        label.innerText = 'Ansikte:';
        label.setAttribute('for', 'ascii-face');
        generatorContainer.insertBefore(label, faceElement); // Lägger labeln före ansiktet
    }
    // Anropa funktionen för att generera ansiktet och uppdatera div:en
    faceElement.innerText = generateAsciiFace();    

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
            // Dela upp hela dokumentet i avsnitt baserat på rubriker
            const sections = markdownText.split(/(?=^#\s*.+)/gm);
            
            // Filtrera bort tomma strängar och den första (som ofta är tom)
            const validSections = sections.filter(section => section.trim() !== '');

            if (validSections.length === 0) {
                document.getElementById('background').innerHTML = "Kunde inte hitta några bakgrunder i filen.";
                return;
            }

            // Slumpa ett index från de giltiga avsnitten
            const randomIndex = Math.floor(Math.random() * validSections.length);
            const randomSection = validSections[randomIndex];
            
            // Konvertera det slumpade avsnittet till HTML och sätt in i div:en
            document.getElementById('background').innerHTML = marked(randomSection);
        })
        .catch(error => {
            console.error("Fel vid laddning av bakgrunder:", error);
            document.getElementById('background').innerHTML = "Kunde inte ladda bakgrunden.";
        });
}

// Funktion för att skriva ut karaktärsbladet
function printCharacterSheet() {
    window.print();
}

async function copyCharacterSheet() {
    // Hämta värden från fält som inte är beroende av Markdown
    const name = document.getElementById('name').value;
    const skill = document.getElementById('skill').textContent;
    const stamina = document.getElementById('stamina').textContent;
    const luck = document.getElementById('luck').textContent;

    // Hämta den senaste slumpade bakgrunden
    const randomBackgroundElement = document.getElementById('background');
    const randomBackgroundTitle = randomBackgroundElement.querySelector('h1').textContent.trim();

    // Hämta den ursprungliga bakgrundstabellens Markdown-text
    const response = await fetch('bakgrundstabellen.md');
    const markdownText = await response.text();

    // Dela upp texten i en array med strängar, en för varje avsnitt.
    const sections = markdownText.split(/(?=^#\s*.+)/gm);
    const validSections = sections.filter(section => section.trim() !== '');

    // Hitta det avsnitt som matchar den slumpade rubriken
    const backgroundSection = validSections.find(section => {
        const titleMatch = section.match(/^#\s*(.+)/);
        return titleMatch && titleMatch[1].trim() === randomBackgroundTitle;
    });

    const possessions = document.getElementById('possessions').textContent;

    // Skapa en textsträng med korrekt formatering
    const characterText = `Namn: ${name}
    
EGENSKAPER
SKILL: ${skill}
STAMINA: ${stamina}
LUCK: ${luck}
    
Bakgrund:
${backgroundSection || ''}
    
Startägodelar:
${possessions}`;

    // Skapa en tillfällig textarea
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = characterText;
    document.body.appendChild(tempTextarea);

    // Välj och kopiera texten från textarea-elementet
    tempTextarea.select();
    document.execCommand('copy');

    // Ta bort det tillfälliga textarea-elementet
    document.body.removeChild(tempTextarea);

    alert("Karaktärsbladet har kopierats!");
}

// Funktion som fyller i startägodelarna
function loadDefaultPossessions() {
  const defaultText = `
- 2d6 silvermynt
- en kniv (2 / 2 / 2 / 2 / 4 / 8 / 10)
- en lykta och oljeflaska
- en ryggsäck
- 6 provianter
  `;
  // Konvertera texten till HTML (för att hantera radbrytningar)
  const htmlText = marked(defaultText);
  // Sätt in texten i div-elementet
  document.getElementById("possessions").innerHTML = htmlText;
}

// Notera: window.onload-anropet bör tas bort från denna fil
// och ersättas med Docsifys ready hook i index.html.
