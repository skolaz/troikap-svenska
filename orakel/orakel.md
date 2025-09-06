<div class="oracle-container">
    <h4>Fråga Oraclet</h4>
    <p>Hur troligt är det att händelsen inträffar?</p>
    <button onclick="askOracle('Självklar')">Självklar</button>
    <button onclick="askOracle('Nästan självklar')">Nästan självklar</button>
    <button onclick="askOracle('Mycket troligt')">Mycket troligt</button>
    <button onclick="askOracle('Troligt')">Troligt</button>
    <button onclick="askOracle('50/50 eller okänt')">50/50 eller okänt</button>
    <button onclick="askOracle('Otroligt')">Otroligt</button>
    <button onclick="askOracle('Mycket otroligt')">Mycket otroligt</button>
    <button onclick="askOracle('Nästan omöjligt')">Nästan omöjligt</button>
    <button onclick="askOracle('Omöjligt')">Omöjligt</button>
</div>
<div id="oracle-answer"></div>

<div class="oracle-container">
    <h4>Upptäck betydelse</h4>
    <button onclick="discoverMeaning('action')">Slumpa Handling</button>
    <button onclick="discoverMeaning('description')">Slumpa Beskrivning</button>
</div>
<div id="meaning-result"></div>

// Data från "Discover Meaning"-tabellen, översatt till svenska
const discoverMeaningData = [
    { range: [1, 2], action: "Uppnå", description: "Artificiell" },
    { range: [3, 4], action: "Dra nytta av", description: "Vacker" },
    { range: [5, 6], action: "Förråda", description: "Dyster" },
    { range: [7, 8], action: "Bryta", description: "Ljus" },
    { range: [9, 10], action: "Belasta", description: "Ren" },
    { range: [11, 12], action: "Ändra", description: "Kall" },
    { range: [13, 14], action: "Karaktär", description: "Färgglad" },
    { range: [15, 16], action: "Kommunicera", description: "Skadad" },
    { range: [17, 18], action: "Tävla", description: "Farlig" },
    { range: [19, 20], action: "Komplicera", description: "Mörk" },
    { range: [21, 22], action: "Konflikt", description: "Otrevlig" },
    { range: [23, 24], action: "Kontrollera", description: "Tom" },
    { range: [25, 26], action: "Skapa", description: "Extravagant" },
    { range: [27, 28], action: "Fara", description: "Tomgång" },
    { range: [29, 30], action: "Bedrägeri", description: "Kraftlös" },
    { range: [31, 32], action: "Minska", description: "Doftande" },
    { range: [33, 34], action: "Fördröjning", description: "Skrämmande" },
    { range: [35, 36], action: "Avlägsna", description: "Full" },
    { range: [37, 38], action: "Känslor", description: "Hälsosam" },
    { range: [39, 40], action: "Fiender", description: "Tung" },
    { range: [41, 42], action: "Miljö", description: "Hjälpsam" },
    { range: [43, 44], action: "Förväntningar", description: "Viktig" },
    { range: [45, 46], action: "Misslyckande", description: "Ofullständig" },
    { range: [47, 48], action: "Rädslor", description: "Brist" },
    { range: [49, 50], action: "Kämpa", description: "Stor" },
    { range: [51, 52], action: "Vinst", description: "Lätt" },
    { range: [53, 54], action: "Mål", description: "Högljudd" },
    { range: [55, 56], action: "Skada", description: "Mekanisk" },
    { range: [57, 58], action: "Hjälp", description: "Modern" },
    { range: [59, 60], action: "Hjälpa", description: "Mundan" },
    { range: [61, 62], action: "Öka", description: "Mystisk" },
    { range: [63, 64], action: "Information", description: "Naturlig" },
    { range: [65, 66], action: "Lämnar", description: "Ny" },
    { range: [67, 68], action: "Flytta", description: "Officiell" },
    { range: [69, 70], action: "Mundan", description: "Gammal" },
    { range: [71, 72], action: "Natur", description: "Fridfull" },
    { range: [73, 74], action: "Negativ", description: "Perfekt" },
    { range: [75, 76], action: "NPC", description: "Kraftfull" },
    { range: [77, 78], action: "Objekt", description: "Tyst" },
    { range: [79, 80], action: "Hinder", description: "Lugnande" },
    { range: [81, 82], action: "Officiell", description: "Rå" },
    { range: [83, 84], action: "Positiv", description: "Grov" },
    { range: [85, 86], action: "Progress", description: "Förstörd" },
    { range: [87, 88], action: "Framsteg", description: "Rustik" },
    { range: [89, 90], action: "Motgång", description: "Enkel" },
    { range: [91, 92], action: "Börja", description: "Liten" },
    { range: [93, 94], action: "Sluta", description: "Konstig" },
    { range: [95, 96], action: "Överraskning", description: "Snygg" },
    { range: [97, 98], action: "Konstig", description: "Värdefull" },
    { range: [99, 100], action: "Osäker", description: "Varm" }
];

function discoverMeaning(type) {
    const answerDiv = document.getElementById("meaning-result");
    answerDiv.innerHTML = "Oraclet funderar...";

    // Simulera en fördröjning på 2 sekunder
    setTimeout(() => {
        const roll = Math.floor(Math.random() * 100) + 1;
        let result = "Kunde inte hitta svar.";

        // Hitta rätt objekt i arrayen baserat på tärningsrullen
        const foundItem = discoverMeaningData.find(item => {
            return roll >= item.range[0] && roll <= item.range[1];
        });

        if (foundItem) {
            // Kontrollera vilken typ av information som ska visas
            if (type === 'action') {
                result = foundItem.action;
            } else if (type === 'description') {
                result = foundItem.description;
            }
        }
        
        answerDiv.innerHTML = `Resultat av 1d100: **${roll}**<br>Betydelse: **${result}**`;
    }, 2000);
}