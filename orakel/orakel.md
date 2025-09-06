<script>
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

setTimeout(() =&gt; {
    const roll = Math.floor(Math.random() * 100) + 1;
    let result = &quot;Kunde inte hitta svar.&quot;;
    const ranges = oracleOdds[oddsCategory];

    if (roll &gt;= ranges.yesEx[0] &amp;&amp; roll &lt;= ranges.yesEx[1]) {
        result = oracleAnswers.exceptionalYes;
    } else if (roll &gt;= ranges.yes[0] &amp;&amp; roll &lt;= ranges.yes[1]) {
        result = oracleAnswers.yes;
    } else if (roll &gt;= ranges.no[0] &amp;&amp; roll &lt;= ranges.no[1]) {
        result = oracleAnswers.no;
    } else if (roll &gt;= ranges.noEx[0] &amp;&amp; roll &lt;= ranges.noEx[1]) {
        result = oracleAnswers.exceptionalNo;
    }
    
    answerDiv.innerHTML = `Resultat av 1d100: &lt;b&gt;${roll}&lt;/b&gt;.&lt;br&gt;Svar: &lt;b&gt;${result}&lt;/b&gt;`;
}, 2000);

}

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

setTimeout(() =&gt; {
    const roll = Math.floor(Math.random() * 100) + 1;
    let result = &quot;Kunde inte hitta svar.&quot;;

    const foundItem = discoverMeaningData.find(item =&gt; {
        return roll &gt;= item.range[0] &amp;&amp; roll &lt;= item.range[1];
    });

    if (foundItem) {
        if (type === &#39;action&#39;) {
            result = foundItem.action;
        } else if (type === &#39;description&#39;) {
            result = foundItem.description;
        }
    }
    
    answerDiv.innerHTML = `Resultat av 1d100: &lt;b&gt;${roll}&lt;/b&gt;&lt;br&gt;Betydelse: &lt;b&gt;${result}&lt;/b&gt;`;
}, 2000);

}

// Data för AG1: UTLSÄRARE (Trigger) baserat på 1d30
const ag1Data = [
"anklagelse", "bakhåll", "vålnad", "attack", "samtal", "förstörelse av föremål",
"dagbok", "teckning", "dröm", "möte med NPC", "flykt", "manuskript", "karta",
"meddelande", "exotiskt föremål", "vardagligt föremål", "orakel", "vädjan", "profetia",
"offentligt meddelande", "spaning", "begäran", "kallad av en grupp", "överlevare",
"symbol", "teleportering", "transaktion", "fälla", "vision", "varning"
];

// Data för AG2: HUVUDMÅL (Major Goal) baserat på 1d30
const ag2Data = [
"hjälpa andra hjältar", "bryta en förbannelse som påverkar en person",
"bryta en förbannelse som påverkar en plats", "fånga en flykting", "hantera ett växande hot",
"försvara en plats", "leverera ett meddelande/föremål", "upptäcka en hemlighet",
"eskortera/skydda föremål/personer", "undersöka en plats", "spåra upp en NPC",
"upprätthålla fred", "förhindra en invasion", "samla allierade",
"återta en förlorad plats", "befria en person/varelse från en börda",
"rädda/befria en fånge/slav", "rotar ut spioner/onda minioner",
"söka efter kunskap/bevis", "lösa mysteriet med ett försvunnet föremål",
"lösa mysteriet med försvunna personer", "lösa mysteriet med ett mord/dödsfall",
"lösa mysteriet med en stöld", "lösa mysteriet med ett fenomen",
"stoppa en konflikt", "stoppa en förestående förödelse",
"stoppa en komplott från att förverkligas", "stoppa räder på en plats",
"stoppa en skurk från att samla makt", "stoppa en ritual"
];

// Data för AG3: HINDER MOT MÅLET (Obstacle to Goal) baserat på 1d30
const ag3Data = [
"skaffa ett föremål", "skaffa kunskap", "skaffa nyckel(ar)/delar",
"väcka en sovande NPC", "slå en tidsgräns", "rena namn/återställa heder",
"tävla i en turnering", "förstöra ett föremål", "fly en plats",
"utforska en plats", "hitta en dold/förlorad ingång", "hitta en dold/förlorad plats",
"hitta ett magiskt föremål", "hitta tillbaka till en nyckelplats", "kämpa för frihet",
"fixa ett 'trasigt' föremål", "göra en lång resa", "göra en farlig resa",
"navigera en labyrint", "navigera en serie portaler", "passera en serie tester",
"utföra en ritual", "återställa ett tillstånd", "tävla mot en antagonist",
"avslöja en konspiration", "återuppväcka en avliden NPC", "lösa gåtor/pussel",
"stoppa ett märkligt fenomen som påverkar en plats", "tala en besvärjelse",
"stoppa en ritual"
];

// Data för AG4: PLATS (Location) baserat på 1d30
const ag4Data = [
"kloster", "begravningsplats", "katakomber", "slott", "grotta/håla", "kyrkogård",
"avgrund", "citadell/fästning", "stad", "dungeon", "bondgård", "fästning",
"skog", "by", "kulle", "ö", "herrgård", "berg", "utpost", "palats", "ruiner",
"fäste", "tempel", "by", "gravkammare", "torn", "stad", "understad", "by", "vulkan"
];

// Data för AG5: PLATSFUNKTION (Location Feature) baserat på 1d30
const ag5Data = [
"altare", "baracker", "bro", "kapell", "podium", "dörr", "fontän", "trädgård",
"galleri", "port", "torg", "laboratorium", "bibliotek", "urverk", "magisk maskin",
"målning", "piedestal", "grop", "pool", "portal", "helgedom", "sarkofag",
"staty/gudabild", "helgedom", "statyer", "tapestry", "tron", "vattenfall",
"brunn", "verkstad"
];

// Data för AG6: FENOMEN (Phenomena) baserat på 1d100
const ag6Data = [
{ range: [1, 2], text: "charm" }, { range: [3, 4], text: "mörker" }, { range: [5, 6], text: "förfall" },
{ range: [7, 8], text: "villfarelse" }, { range: [9, 10], text: "sjukdom" }, { range: [11, 12], text: "röster utan kropp" },
{ range: [13, 14], text: "energidränering (hp)" }, { range: [15, 16], text: "energidränering (nivå)" },
{ range: [17, 18], text: "fruktan" }, { range: [19, 20], text: "feber" }, { range: [21, 22], text: "dimma" },
{ range: [23, 24], text: "svampar/mögel/slem" }, { range: [25, 26], text: "hallucinationer" },
{ range: [27, 28], text: "hemsökelser" }, { range: [29, 30], text: "ljus/färger" }, { range: [31, 32], text: "minnesförlust" },
{ range: [33, 34], text: "mani" }, { range: [35, 36], text: "monsterplåga" }, { range: [37, 38], text: "mardrömmar" },
{ range: [39, 40], text: "ljud" }, { range: [41, 42], text: "panik/paranoia" }, { range: [43, 44], text: "paralysering" },
{ range: [45, 46], text: "förgiftningar" }, { range: [47, 48], text: "skuggor" }, { range: [49, 50], text: "sjukdom" },
{ range: [51, 52], text: "syner av döda" }, { range: [53, 54], text: "sömn" }, { range: [55, 56], text: "märklig vegetation" },
{ range: [57, 58], text: "märkligt väder" }, { range: [59, 60], text: "förvandling" }
];

// Data för AG7: SKURKENS MÅL/ANLEDNING (Villain Goal/Reason) baserat på 1d30
const ag7Data = [
"nöje/tristess", "undvika förlust/smärta", "korruption", "skuld", "galenskap",
"öde", "dominans/kontroll", "eliminera arter", "förslavning", "avundsjuka",
"experiment", "fruktan", "glömd anledning", "skuld", "girighet", "hat", "heder",
"odödlighet", "konstig ideologi", "felplacerad lojalitet", "massförstörelse",
"illvilja", "ädla mål med extrema medel", "makt", "stolthet/fåfänga",
"ren ondska", "hämnd", "självbevarande/överlevnad", "tjänar en högre 'chef'",
"utopi (till varje pris)"
];

// Data för AG8: ARTEFAKT/RELIK (Artifact/Relic) baserat på 1d30
const ag8Data = [
"amulett", "skål/fathållare/rökelsekar", "låda", "armband", "ljus", "codex/manual/bok",
"kub", "kopp", "figur", "flaska", "juvel", "grimoire", "horn/instrument",
"mask", "medaljong", "spegel", "halsband", "kula/sfär", "pärla", "dryck", "ring",
"stav", "skarabé", "spira", "trollformelsbok", "stav", "sten", "talisman", "stav", "vapen"
];

// Data för AG9: TEMA (Theme) baserat på 1d30
const ag9Data = [
"blod", "mörker/natt", "död", "öde", "fördärv", "frihet", "förbjudet", "förtrollning",
"ondska", "flammor", "ära", "guld", "girighet", "oskyldighet", "odödlighet",
"dom", "rättvisa", "liv", "ljus/dag", "galenskap", "mysterium", "makt",
"återfödelse", "hämnd", "skugga", "skräck", "skatt", "hämnd", "under", "vrede"
];

// Data för AG10: VIKTIG NPC (Key NPC) baserat på 1d30
const ag10Data = [
"präst", "druid/präst", "krigare", "paladin/krigare", "jägare/dvärg", "magiker",
"illusionist/magiker", "tjuv", "lönnmördare/halvling", "munk/alv", "djurtränare",
"eremit", "köpman", "annan NPC", "pilgrim", "vis man", "skrivare", "spion",
"smed", "hantverkare", "kung", "drottning", "drottning/mor", "adel", "hushållsadel",
"lärare/anställd", "soldat", "slav", "bonde", "kejsare"
];

// Huvudfunktion för att slumpa ett äventyr
function slumpaÄventyr() {
const resultDiv = document.getElementById("adventure-result");
resultDiv.innerHTML = "Äventyrsgeneratorn arbetar...";

// Simulerar en fördröjning på 2 sekunder
setTimeout(() =&gt; {
    // En funktion för att slumpa ett nummer mellan min och max
    function roll(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Slumpa varje del av äventyret
    const trigger = ag1Data[roll(0, ag1Data.length - 1)];
    const majorGoal = ag2Data[roll(0, ag2Data.length - 1)];
    const obstacle = ag3Data[roll(0, ag3Data.length - 1)];
    const location = ag4Data[roll(0, ag4Data.length - 1)];
    const locationFeature = ag5Data[roll(0, ag5Data.length - 1)];
    
    // Här slumpas från de mer omfattande datastrukturerna
    const phenomenaRoll = roll(1, 100);
    const phenomena = ag6Data.find(item =&gt; phenomenaRoll &gt;= item.range[0] &amp;&amp; phenomenaRoll &lt;= item.range[1]).text;

    const villainGoal = ag7Data[roll(0, ag7Data.length - 1)];
    const artifact = ag8Data[roll(0, ag8Data.length - 1)];
    const theme = ag9Data[roll(0, ag9Data.length - 1)];
    const keyNpc = ag10Data[roll(0, ag10Data.length - 1)];

    // Bygg ihop hela resultatet
    const resultHTML = `
        &lt;h3&gt;Ditt äventyr:&lt;/h3&gt;
        &lt;p&gt;&lt;b&gt;Utlösare:&lt;/b&gt; ${trigger}&lt;/p&gt;
        &lt;p&gt;&lt;b&gt;Huvudmål:&lt;/b&gt; ${majorGoal}&lt;/p&gt;
        &lt;p&gt;&lt;b&gt;Hinder mot målet:&lt;/b&gt; ${obstacle}&lt;/p&gt;
        &lt;p&gt;&lt;b&gt;Plats:&lt;/b&gt; ${location}&lt;/p&gt;
        &lt;p&gt;&lt;b&gt;Platsfunktion:&lt;/b&gt; ${locationFeature}&lt;/p&gt;
        &lt;p&gt;&lt;b&gt;Fenomen:&lt;/b&gt; ${phenomena}&lt;/p&gt;
        &lt;p&gt;&lt;b&gt;Skurkens mål:&lt;/b&gt; ${villainGoal}&lt;/p&gt;
        &lt;p&gt;&lt;b&gt;Artefakt:&lt;/b&gt; ${artifact}&lt;/p&gt;
        &lt;p&gt;&lt;b&gt;Tema:&lt;/b&gt; ${theme}&lt;/p&gt;
        &lt;p&gt;&lt;b&gt;Viktig NPC:&lt;/b&gt; ${keyNpc}&lt;/p&gt;
    `;
    
    resultDiv.innerHTML = resultHTML;
}, 2000); // 2 sekunders fördröjning

}
</script>

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

<hr>
<h2>Äventyrsgenerator</h2>
<button onclick="slumpaÄventyr()">Slumpa äventyr</button>
<div id="adventure-result"></div>