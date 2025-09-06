// Datalistor för att slumpa en NPC
const npcFirstNames = [
    "Einar", "Astrid", "Gunnar", "Freja", "Hjalmar", "Ingrid", 
    "Ragnar", "Sif", "Torsten", "Brynhild", "Björn", "Tyra"
];

const npcLastNames = [
    "Järnhand", "Vargtand", "Stormsköld", "Drakdräparen", "Bäckström", 
    "Svartskog", "Gråsten", "Björnsson", "Ulvdotter", "Eldstål", "Långfot"
];

const npcOccupations = [
    "Alkemist", "Bokhandlare", "Jägare", "Hantverkare", "Smed", 
    "Handelsman", "Skeppare", "Sångare", "Riddare", "Tjuv", "Sökare"
];

const dnaDistinctions = [
    "Ärrig", "Väldigt lång", "Pratglad", "Tystlåten", "Mycket gammal",
    "Luktar konstigt", "Envis", "Har ett husdjur", "Saknar ett öga", "Kort"
];

const dnaNeeds = [
    "Söker hämnd", "Vill ha pengar", "Söker kunskap", "Söker efter ett föremål",
    "Vill bevisa sig", "Letar efter sin familj", "Behöver en allierad", "Vill ha makt"
];

const dnaAgendas = [
    "Döljer en hemlighet", "Skyddar någon", "Försöker undvika en konflikt",
    "Planerar ett brott", "Arbetar för en mystisk figur", "Samlar information",
    "Söker efter en utmaning"
];

// Ny funktion för att slumpa en NPC
function slumpaNPC() {
    // Funktion för att rulla tärning (finns redan i din fil)
    function rollDice(diceCount, diceSides) {
        let total = 0;
        for (let i = 0; i < diceCount; i++) {
            total += Math.floor(Math.random() * diceSides) + 1;
        }
        return total;
    }

    // Slumpa namn
    const randomFirstName = npcFirstNames[Math.floor(Math.random() * npcFirstNames.length)];
    const randomLastName = npcLastNames[Math.floor(Math.random() * npcLastNames.length)];
    const fullName = `${randomFirstName} ${randomLastName}`;

    // Slumpa stats
    const skill = rollDice(1, 3) + 3;
    const stamina = rollDice(2, 6) + 12;
    const luck = rollDice(1, 6) + 6;

    // Slumpa Yrke
    const occupation = npcOccupations[Math.floor(Math.random() * npcOccupations.length)];

    // Slumpa DNA
    const dnaD = dnaDistinctions[Math.floor(Math.random() * dnaDistinctions.length)];
    const dnaN = dnaNeeds[Math.floor(Math.random() * dnaNeeds.length)];
    const dnaA = dnaAgendas[Math.floor(Math.random() * dnaAgendas.length)];
    const dna = `${dnaD} / ${dnaN} / ${dnaA}`;

    // Uppdatera HTML-elementen
    document.getElementById("npc-name").textContent = fullName;
    document.getElementById("npc-occupation").textContent = occupation;
    document.getElementById("npc-dna").textContent = dna;
    document.getElementById("npc-skill").textContent = skill;
    document.getElementById("npc-stamina").textContent = stamina;
    document.getElementById("npc-luck").textContent = luck;

    // Anropa en ny funktion för att slumpa bakgrund, liknande din befintliga funktion
    slumpaNPCBakgrund();
}

// Ny funktion för att slumpa bakgrund för NPC
function slumpaNPCBakgrund() {
    fetch('bakgrundstabellen.md')
        .then(response => {
            if (!response.ok) {
                throw new Error('Kunde inte ladda filen med bakgrunder.');
            }
            return response.text();
        })
        .then(markdownText => {
            const sections = markdownText.split(/(?=^#\s*.+)/gm);
            const validSections = sections.filter(section => section.trim() !== '');

            if (validSections.length === 0) {
                document.getElementById('npc-background').innerHTML = "Kunde inte hitta några bakgrunder i filen.";
                return;
            }

            const randomIndex = Math.floor(Math.random() * validSections.length);
            const randomSection = validSections[randomIndex];
            
            // Konvertera det slumpade avsnittet till HTML och sätt in i div:en
            document.getElementById('npc-background').innerHTML = marked(randomSection);
        })
        .catch(error => {
            console.error("Fel vid laddning av NPC-bakgrund:", error);
            document.getElementById('npc-background').innerHTML = "Kunde inte ladda bakgrunden.";
        });
}