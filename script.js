function slumpaKaraktar() {
    // Funktion för att rulla tärning
    function rollDice(diceCount, diceSides) {
        let total = 0;
        for (let i = 0; i < diceCount; i++) {
            total += Math.floor(Math.random() * diceSides) + 1;
        }
        return total;
    }

    // Beräkna SKILL: Rulla 1d3 + 3
    const skill = rollDice(1, 3) + 3;

    // Beräkna STAMINA: Rulla 2d6 + 12
    const stamina = rollDice(2, 6) + 12;

    // Beräkna LUCK: Rulla 1d6 + 6
    const luck = rollDice(1, 6) + 6;

    // Uppdatera input-fälten på sidan
    document.getElementById("skill").value = skill;
    document.getElementById("stamina").value = stamina;
    document.getElementById("luck").value = luck;
}

// Hämta HTML-element
const addPlayerForm = document.getElementById('add-player-form');
const addMonsterForm = document.getElementById('add-monster-form');
const tokenContainer = document.getElementById('token-container');
const startButton = document.getElementById('start-initiative-btn');
const resetButton = document.getElementById('reset-btn');
const nextTurnButton = document.getElementById('next-turn-btn');
const currentTurnDisplay = document.getElementById('current-turn');

// Lista för alla tokens
let tokens = [];
let currentTurnIndex = 0;

// Funktion för att lägga till tokens för en karaktär
function addCharacterTokens(name, numTokens, type) {
    for (let i = 0; i < numTokens; i++) {
        tokens.push({ name: name, type: type });
    }
    updateTokenDisplay();
}

// Funktion för att uppdatera visningen av tokens
function updateTokenDisplay() {
    tokenContainer.innerHTML = ''; // Rensa behållaren
    tokens.forEach((token, index) => {
        const tokenElement = document.createElement('div');
        tokenElement.classList.add('token');
        tokenElement.textContent = token.name;
        // Markera den aktuella tokenen
        if (index === currentTurnIndex) {
            tokenElement.classList.add('active');
            currentTurnDisplay.textContent = `Aktuell tur: ${token.name}`;
        }
        tokenContainer.appendChild(tokenElement);
    });
}

// Funktion för att blanda tokens
function shuffleTokens() {
    for (let i = tokens.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tokens[i], tokens[j]] = [tokens[j], tokens[i]];
    }
}

// Händelselyssnare för att lägga till spelare
addPlayerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const playerNameInput = document.getElementById('player-name');
    const playerName = playerNameInput.value;
    // Spelare får 2 tokens
    addCharacterTokens(playerName, 2, 'player');
    playerNameInput.value = '';
});

// Händelselyssnare för att lägga till monster
addMonsterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const monsterNameInput = document.getElementById('monster-name');
    const monsterTokensInput = document.getElementById('monster-tokens');
    const monsterName = monsterNameInput.value;
    const numTokens = parseInt(monsterTokensInput.value, 10);
    addCharacterTokens(monsterName, numTokens, 'monster');
    monsterNameInput.value = '';
    monsterTokensInput.value = '1';
});

// Händelselyssnare för att starta initiativ
startButton.addEventListener('click', () => {
    // Lägg till End of Turn-token
    tokens.push({ name: 'End of Turn', type: 'eot' });
    shuffleTokens();
    currentTurnIndex = 0;
    updateTokenDisplay();
});

// Händelselyssnare för nästa tur
nextTurnButton.addEventListener('click', () => {
    if (tokens.length > 0) {
        currentTurnIndex++;
        if (currentTurnIndex >= tokens.length) {
            // Återställ när vi når slutet
            alert("Rundan är slut! Dags att blanda om alla tokens.");
            currentTurnIndex = 0;
            shuffleTokens();
            updateTokenDisplay();
        } else {
            updateTokenDisplay();
        }
    }
});

// Händelselyssnare för nollställning
resetButton.addEventListener('click', () => {
    tokens = [];
    currentTurnIndex = 0;
    updateTokenDisplay();
    currentTurnDisplay.textContent = '';
});

// Initial uppdatering av gränssnittet
updateTokenDisplay();
