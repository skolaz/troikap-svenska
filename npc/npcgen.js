// Datalistor för att slumpa en NPC
const npcFirstNames = [
    "Einar", "Astrid", "Gunnar", "Freja", "Hjalmar", "Ingrid", 
    "Ragnar", "Sif", "Torsten", "Brynhild", "Björn", "Tyra", "Frida", "Fanny", "Fatima", "Adrian", "Atonia", "Albert"
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
    "Luktar konstigt", "Envis", "Har ett husdjur", "Saknar ett öga", "Kort", "Skägg", "Ovanliga deformationer"
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

// Tabell 1: NPC Egenskap (Modifier)
const npcEgenskap = [
    { range: [1, 1], text: "överflödig" }, { range: [2, 2], text: "beroende" }, { range: [3, 3], text: "konformist" },
    { range: [4, 4], text: "förkastlig" }, { range: [5, 5], text: "förnuftig" }, { range: [6, 6], text: "oövade" },
    { range: [7, 7], text: "romantisk" }, { range: [8, 8], text: "orimlig" }, { range: [9, 9], text: "skicklig" },
    { range: [10, 10], text: "försumlig" }, { range: [11, 11], text: "livlig" }, { range: [12, 12], text: "uppriktig" },
    { range: [13, 13], text: "idealistisk" }, { range: [14, 14], text: "icke stödjande" }, { range: [15, 15], text: "rationell" },
    { range: [16, 16], text: "grov" }, { range: [17, 17], text: "dum" }, { range: [18, 18], text: "slug" },
    { range: [19, 19], text: "underbar" }, { range: [20, 20], text: "snål" }, { range: [21, 21], text: "inept" },
    { range: [22, 22], text: "banal" }, { range: [23, 23], text: "logisk" }, { range: [24, 24], text: "subtil" },
    { range: [25, 25], text: "respektabel" }, { range: [26, 26], text: "ond" }, { range: [27, 27], text: "lat" },
    { range: [28, 28], text: "pessimistisk" }, { range: [29, 29], text: "allvarlig" }, { range: [30, 30], text: "vanemässig" },
    { range: [31, 31], text: "saktmodig" }, { range: [32, 32], text: "hjälpsam" }, { range: [33, 33], text: "obekymrad" },
    { range: [34, 34], text: "generös" }, { range: [35, 35], text: "lättsam" }, { range: [36, 36], text: "glad" },
    { range: [37, 37], text: "pragmatisk" }, { range: [38, 38], text: "lugn" }, { range: [39, 39], text: "omtänksam" },
    { range: [40, 40], text: "hopplös" }, { range: [41, 41], text: "trevlig" }, { range: [42, 42], text: "okänslig" },
    { range: [43, 43], text: "titelbärande" }, { range: [44, 44], text: "oerfaren" }, { range: [45, 45], text: "snokande" },
    { range: [46, 46], text: "glömsk" }, { range: [47, 47], text: "förfinad" }, { range: [48, 48], text: "oundviklig" },
    { range: [49, 49], text: "lärd" }, { range: [50, 50], text: "konservativ" }, { range: [51, 51], text: "otuktig" },
    { range: [52, 52], text: "envis" }, { range: [53, 53], text: "likgiltig" }, { range: [54, 54], text: "vimsig" },
    { range: [55, 55], text: "äldre" }, { range: [56, 56], text: "syndig" }, { range: [57, 57], text: "naiv" },
    { range: [58, 58], text: "privilegierad" }, { range: [59, 59], text: "dyster" }, { range: [60, 60], text: "gillbar" },
    { range: [61, 61], text: "slö" }, { range: [62, 62], text: "trotsig" }, { range: [63, 63], text: "motbjudande" },
    { range: [64, 64], text: "insiktsfull" }, { range: [65, 65], text: "taktlös" }, { range: [66, 66], text: "fanatisk" },
    { range: [67, 67], text: "folklig" }, { range: [68, 68], text: "barnslig" }, { range: [69, 69], text: "from" },
    { range: [70, 70], text: "outbildad" }, { range: [71, 71], text: "obetänksam" }, { range: [72, 72], text: "kultiverad" },
    { range: [73, 73], text: "motbjudande" }, { range: [74, 74], text: "nyfiken" }, { range: [75, 75], text: "beröringskänslig" },
    { range: [76, 76], text: "behövande" }, { range: [77, 77], text: "värdig" }, { range: [78, 78], text: "påstridig" },
    { range: [79, 79], text: "snäll" }, { range: [80, 80], text: "korrupt" }, { range: [81, 81], text: "jovialisk" },
    { range: [82, 82], text: "skarpsinnig" }, { range: [83, 83], text: "liberal" }, { range: [84, 84], text: "medgörlig" },
    { range: [85, 85], text: "fattig" }, { range: [86, 86], text: "slinkig" }, { range: [87, 87], text: "försiktig" },
    { range: [88, 88], text: "lockande" }, { range: [89, 89], text: "defekt" }, { range: [90, 90], text: "optimistisk" },
    { range: [91, 91], text: "välbärgad" }, { range: [92, 92], text: "nedstämd" }, { range: [93, 93], text: "tanklös" },
    { range: [94, 94], text: "passionerad" }, { range: [95, 95], text: "hängiven" }, { range: [96, 96], text: "etablerad" },
    { range: [97, 97], text: "opassande" }, { range: [98, 98], text: "pålitlig" }, { range: [99, 99], text: "rättfärdig" },
    { range: [100, 100], text: "självsäker" }
];

// Tabell 2: NPC Yrke (Noun)
const npcYrke = [
    "zigenare", "häxa", "köpman", "expert", "allmoge", "domare", "jägare", "ockultist",
    "präst", "buse", "landstrykare", "hantlangare", "statsman", "astrolog", "duellant",
    "mångsysslare", "aristokrat", "predikant", "hantverkare", "skurk", "missionär",
    "utstött", "legosoldat", "vaktmästare", "eremit", "talare", "hövding", "pionjär",
    "inbrottstjuv", "kyrkoherde", "officer", "utforskare", "väktare", "fredlös",
    "adept", "luffare", "trollkarl", "arbetare", "mästare", "uppstigande", "bybo",
    "magiker", "värnpliktig", "arbetare", "skådespelare", "härold", "landsvägslöpare",
    "lycksökare", "guvernör", "bråkstake", "munk", "hemarbetare", "eremit", "förvaltare",
    "polymath", "magiker", "resenär", "luffare", "lärling", "politiker", "medlare",
    "skurk", "civilist", "aktivist", "hjälte", "mästare", "präst", "slav", "pistolman",
    "klarsynt", "patriark", "butiksägare", "käring", "äventyrare", "soldat", "underhållare",
    "hantverkare", "vetenskapsman", "asketer", "överordnad", "artist", "magister",
    "livegen", "brute", "inkvisitor", "herre", "skurk", "professor", "tjänare", "charmör",
    "globetrotter", "prickskytt", "hovman", "präst", "hantverkare", "hitman", "trollkarl",
    "tiggare", "hantverkare", "krigare"
];

// Tabell 4: NPC Motivation Verb
const npcMotivationVerb = [
    "råda", "skaffa", "försöka", "förstöra", "förtrycka", "interagera", "skapa", "bortföra",
    "promota", "tänka ut", "fördärva", "utvecklas", "distress", "besitta", "registrera", "omfamna",
    "kontakta", "förfölja", "associera", "förbereda", "shepherd", "missbruka", "indulge",
    "chronicle", "uppfylla", "driva", "granska", "hjälpa", "följa", "avancera", "vakta",
    "erövra", "hindra", "plundra", "konstruera", "uppmuntra", "plåga", "förstå", "administrera",
    "relatera", "ta", "upptäcka", "avskräcka", "skaffa", "skada", "publicera", "belasta",
    "förespråka", "implementera", "förstå", "samarbeta", "sträva", "slutföra", "tvinga", "förena",
    "assistera", "besudla", "producera", "grunda", "redovisa", "arbeta", "medfölja", "förolämpa",
    "vägleda", "lära", "förfölja", "kommunicera", "processa", "rapportera", "utveckla", "stjäla",
    "föreslå", "försvaga", "uppnå", "säkra", "informera", "patronize", "deprimera", "bestämma",
    "söka", "hantera", "undertrycka", "förkunna", "driva", "åtkomst", "förädla", "komponera",
    "underminera", "förklara", "avskräcka", "delta", "upptäcka", "verkställa", "upprätthålla",
    "realisera", "förmedla", "råna", "etablera", "omkullkasta", "stötta"
];

// Tabell 5: NPC Motivation Noun
const npcMotivationNoun = [
    "rikedom", "svårigheter", "välstånd", "resurser", "välstånd", "fattigdom", "överflöd",
    "berövande", "framgång", "nöd", "smuggling", "musik", "litteratur", "teknologi",
    "alkohol", "mediciner", "skönhet", "styrka", "intelligens", "kraft", "de rika",
    "befolkningen", "fiender", "allmänheten", "religion", "de fattiga", "familj",
    "eliten", "akademiker", "de övergivna", "lagen", "regeringen", "de förtryckta",
    "vänner", "brottslingar", "allierade", "hemliga sällskap", "världen", "militären",
    "kyrkan", "drömmar", "diskretion", "kärlek", "frihet", "smärta", "tro", "slaveri",
    "upplysthet", "rasism", "sensualitet", "dissonans", "fred", "diskriminering",
    "misstro", "glädje", "hat", "lycka", "träldom", "harmoni", "rättvisa", "frosseri",
    "lust", "avund", "girighet", "lathet", "vrede", "stolthet", "renhet", "måttlighet",
    "vaksamhet", "iver", "sinnesro", "välgörenhet", "blygsamhet", "grymheter",
    "feghet", "narcissism", "medkänsla", "tapperhet", "tålamod", "råd", "propaganda",
    "vetenskap", "kunskap", "kommunikation", "lögner", "myter", "gåtor", "berättelser",
    "legender", "industri", "nya religioner", "framsteg", "djur", "spöken", "magi",
    "natur", "gamla religioner", "expertis", "andar"
];

// Tabell 6: NPC Samtalshumör (Conversation Mood)
const npcSamtalshumör = [
    { range: [1, 15], text: "tillbakadragen" }, { range: [16, 30], text: "vaktande" },
    { range: [31, 69], text: "försiktig" }, { range: [70, 84], text: "neutral" },
    { range: [85, 94], text: "sällskaplig" }, { range: [95, 99], text: "hjälpsam" },
    { range: [100, 100], text: "meddelsam" }
];

// Tabell 7: NPC Uppträdande (Bearing)
const npcUpptradandeData = [
    { range: [1, 12], bearing: "Scheming", options: [
        "avsikt", "förhandla", "medel", "proposition", "plan", "kompromiss",
        "agenda", "arrangemang", "förhandling", "komplott"
    ]},
    { range: [13, 24], bearing: "Insane", options: [
        "galenskap", "rädsla", "olycka", "kaos", "idioti", "illusion",
        "oro", "förvirring", "fasad", "förbistring"
    ]},
    { range: [25, 36], bearing: "Friendly", options: [
        "allians", "komfort", "tacksamhet", "skydd", "lycka", "stöd",
        "löfte", "glädje", "hjälp", "firande"
    ]},
    { range: [37, 49], bearing: "Hostile", options: [
        "död", "fångenskap", "dom", "strid", "överlämnande", "raseri",
        "missnöje", "underkastelse", "skada", "förstörelse"
    ]},
    { range: [50, 62], bearing: "Inquisitive", options: [
        "frågor", "undersökning", "intresse", "krav", "misstanke", "begäran",
        "nyfikenhet", "skepticism", "kommando", "ansökan"
    ]},
    { range: [63, 75], bearing: "Knowing", options: [
        "rapport", "effekter", "undersökning", "register", "berättelse", "nyheter",
        "historia", "berättelse", "diskurs", "tal"
    ]},
    { range: [76, 88], bearing: "Mysterious", options: [
        "rykte", "osäkerhet", "hemligheter", "villfarelse", "viskningar", "lögner",
        "skuggor", "gåta", "dunkelhet", "problem"
    ]},
    { range: [89, 100], bearing: "Prejudiced", options: [
        "rykte", "tvivel", "fördom", "avsky", "partiskhet", "tro",
        "synpunkt", "diskriminering", "bedömning", "skillnad"
    ]}
];

// Tabell 8: NPC Fokus (Focus)
const npcFokusData = [
    "nuvarande scen", "förra historien", "utrustning", "föräldrar", "historia", "tjänare",
    "rikedom", "reliker", "senaste handling", "färdigheter", "överordnade", "berömmelse",
    "kampanj", "framtida handling", "vänner", "allierade", "senaste scenen", "kontakter",
    "brister", "antagonist", "belöningar", "erfarenhet", "kunskap", "nyligen inträffad scen",
    "gemenskap", "skatt", "karaktären", "nuvarande historia", "familj", "makt",
    "vapen", "föregående scen", "fiende"
];

// Funktion för att slumpa fram alla detaljer på en gång
function slumpaNPCDetaljer() {
    const detailsDiv = document.getElementById("npc-details-result");
    detailsDiv.innerHTML = "NPC-generatorn arbetar...";
    setTimeout(() => {
        const egenskap = slumpaElement(npcEgenskap);
        const yrke = slumpaElement(npcYrke);
        const motivationVerb = slumpaElement(npcMotivationVerb);
        const motivationNoun = slumpaElement(npcMotivationNoun);
        const humör = slumpaElement(npcSamtalshumör);
        const upptradande = slumpaUpptradande();
        const fokus = slumpaElement(npcFokusData);
        
        detailsDiv.innerHTML = `
            <h3>Slumpade detaljer:</h3>
            <p><b>Egenskap:</b> ${egenskap}</p>
            <p><b>Yrke:</b> ${yrke}</p>
            <p><b>Motivation:</b> ${motivationVerb} ${motivationNoun}</p>
            <p><b>Humör:</b> ${humör}</p>
            <p><b>Uppträdande:</b> ${upptradande}</p>
            <p><b>Fokus:</b> ${fokus}</p>
        `;
    }, 500);
}

// Funktion för att slumpa NPC egenskap
function slumpaNPCEgenskap() {
    const resultDiv = document.getElementById("npc-details-result");
    const egenskap = slumpaElement(npcEgenskap);
    resultDiv.innerHTML = `<b>Egenskap:</b> ${egenskap}`;
}

// Funktion för att slumpa NPC yrke
function slumpaNPCYrke() {
    const resultDiv = document.getElementById("npc-details-result");
    const yrke = slumpaElement(npcYrke);
    resultDiv.innerHTML = `<b>Yrke:</b> ${yrke}`;
}

// Funktion för att slumpa motivation (verb + substantiv)
function slumpaNPCMotivation() {
    const resultDiv = document.getElementById("npc-details-result");
    const verb = slumpaElement(npcMotivationVerb);
    const noun = slumpaElement(npcMotivationNoun);
    resultDiv.innerHTML = `<b>Motivation:</b> ${verb} ${noun}`;
}

// Funktion för att slumpa samtalshumör
function slumpaNPCHumör() {
    const resultDiv = document.getElementById("npc-details-result");
    const humör = slumpaElement(npcSamtalshumör);
    resultDiv.innerHTML = `<b>Samtalshumör:</b> ${humör}`;
}

// Funktion för att slumpa uppträdande
function slumpaNPCUppträdande() {
    const resultDiv = document.getElementById("npc-details-result");
    const upptradande = slumpaUpptradande();
    resultDiv.innerHTML = `<b>Uppträdande:</b> ${upptradande}`;
}

// Funktion för att slumpa fokus
function slumpaNPCFokus() {
    const resultDiv = document.getElementById("npc-details-result");
    const fokus = slumpaElement(npcFokusData);
    resultDiv.innerHTML = `<b>Fokus:</b> ${fokus}`;
}

// Funktion för att slumpa från en lista eller en tabell med intervall
function slumpaElement(data) {
    if (Array.isArray(data)) {
        // Om det är en enkel lista med strängar (t.ex. npcYrke)
        const index = Math.floor(Math.random() * data.length);
        return data[index];
    } else if (Array.isArray(data) && data[0] && data[0].hasOwnProperty('range')) {
        // Om det är en lista med objekt som har 'range' och 'text' (t.ex. npcEgenskap)
        const roll = Math.floor(Math.random() * 100) + 1;
        const item = data.find(element => roll >= element.range[0] && roll <= element.range[1]);
        return item ? item.text : "Resultat inte funnet";
    } else {
        // Fånga upp oväntade datatyper
        return "Ogiltig datatyp för slumpning";
    }
}

// Enkel funktion för att slumpa Power Level
// Användaren får välja nivå då den är relativ till spelarkaraktären
function slumpaNPCTal() {
    const resultDiv = document.getElementById("npc-details-result");
    const levels = {
        '1': [
            { range: [1, 2], text: "Mycket Svagare" },
            { range: [3, 10], text: "Lite Svagare" },
            { range: [11, 90], text: "Jämförbar" },
            { range: [91, 98], text: "Lite Starkare" },
            { range: [99, 100], text: "Mycket Starkare" }
        ],
        '2': [
            { range: [1, 4], text: "Mycket Svagare" },
            { range: [5, 15], text: "Lite Svagare" },
            { range: [16, 85], text: "Jämförbar" },
            { range: [86, 96], text: "Lite Starkare" },
            { range: [97, 100], text: "Mycket Starkare" }
        ],
        '3': [
            { range: [1, 5], text: "Mycket Svagare" },
            { range: [6, 20], text: "Lite Svagare" },
            { range: [21, 80], text: "Jämförbar" },
            { range: [81, 95], text: "Lite Starkare" },
            { range: [96, 100], text: "Mycket Starkare" }
        ],
        '4': [
            { range: [1, 8], text: "Mycket Svagare" },
            { range: [9, 25], text: "Lite Svagare" },
            { range: [26, 75], text: "Jämförbar" },
            { range: [76, 92], text: "Lite Starkare" },
            { range: [93, 100], text: "Mycket Starkare" }
        ],
        '5': [
            { range: [1, 12], text: "Mycket Svagare" },
            { range: [13, 30], text: "Lite Svagare" },
            { range: [31, 70], text: "Jämförbar" },
            { range: [71, 88], text: "Lite Starkare" },
            { range: [89, 100], text: "Mycket Starkare" }
        ]
    };

    const level = prompt("Ange spelarkaraktärens nivå (1-5):");
    const selectedLevelData = levels[level];

    if (selectedLevelData) {
        const roll = Math.floor(Math.random() * 100) + 1;
        const result = selectedLevelData.find(item => roll >= item.range[0] && roll <= item.range[1]);
        resultDiv.innerHTML = `<b>Talnivå (vs nivå ${level}):</b> ${result.text}`;
    } else {
        resultDiv.innerHTML = "Ogiltig nivå angiven. Välj en siffra mellan 1 och 5.";
    }
}