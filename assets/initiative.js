 let participants = [];
    let stack = [];
    let players = [];
    let enemies = [];
    const playerBaseInitiative = 2;
    const endOfRoundToken = { name: "End of the Round", type: "end" };

    document.getElementById('hide-stack-checkbox').addEventListener('change', function() {
        const stackDisplay = document.getElementById('current-stack');
        if (this.checked) {
            stackDisplay.classList.add('hidden');
        } else {
            stackDisplay.classList.remove('hidden');
        }
    });

    function addParticipant() {
        const nameInput = document.getElementById('participant-name');
        const initiativeInput = document.getElementById('participant-initiative');
        const isPlayerCheckbox = document.getElementById('is-player-checkbox');
        
        const name = nameInput.value.trim();
        const initiative = parseInt(initiativeInput.value, 10);
        const type = isPlayerCheckbox.checked ? 'player' : 'enemy';

        if (!name || isNaN(initiative) || initiative < 1) {
            alert("Please enter a valid name and initiative value.");
            return;
        }

        participants.push({ name, initiative, type });
        nameInput.value = '';
        initiativeInput.value = '2'; 
        isPlayerCheckbox.checked = true;
        updateParticipantsList();
    }

    function updateParticipantsList() {
        const list = document.getElementById('participant-list');
        list.innerHTML = '';
        participants.forEach((p, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${p.name} (${p.type}, Init: ${p.initiative})</span><button class="remove-btn" onclick="removeParticipant(${index})">X</button>`;
            list.appendChild(li);
        });
    }

    function removeParticipant(index) {
        participants.splice(index, 1);
        updateParticipantsList();
    }

    function buildStack() {
        stack = [];
        players = participants.filter(p => p.type === 'player');
        enemies = participants.filter(p => p.type === 'enemy');
        const useEnemyLimit = document.getElementById('enemy-limit-checkbox').checked;

        // Add player tokens
        players.forEach(p => {
            for (let i = 0; i < p.initiative; i++) {
                stack.push({ name: p.name, type: 'player' });
            }
        });

        // Calculate enemy initiative
        const totalEnemyInitiative = enemies.reduce((sum, e) => sum + e.initiative, 0);
        let enemyTokensToAdd = totalEnemyInitiative;

        // Apply optional enemy limit
        if (useEnemyLimit) {
            const totalPlayerTokens = players.length * playerBaseInitiative;
            const enemyLimit = totalPlayerTokens * 2;
            enemyTokensToAdd = Math.min(totalEnemyInitiative, enemyLimit);
        }
        
        // Add enemy tokens proportionally based on the new limit
        let addedEnemyTokens = 0;
        enemies.forEach(e => {
            if (totalEnemyInitiative > 0) {
                const tokens = Math.round(e.initiative / totalEnemyInitiative * enemyTokensToAdd);
                for (let i = 0; i < tokens; i++) {
                    stack.push({ name: e.name, type: 'enemy' });
                }
                addedEnemyTokens += tokens;
            }
        });
        
        // Add any remaining tokens due to rounding
        while(addedEnemyTokens < enemyTokensToAdd){
             stack.push({ name: enemies[Math.floor(Math.random() * enemies.length)].name, type: 'enemy' });
             addedEnemyTokens++;
        }

        // Add end of round token
        stack.push(endOfRoundToken);

        // Shuffle the stack
        shuffleArray(stack);
        updateStackDisplay();
        document.getElementById('build-stack-btn').disabled = true;
        document.getElementById('draw-token-btn').disabled = false;
        document.getElementById('reset-round-btn').disabled = false;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function drawToken() {
        if (stack.length === 0) {
            document.getElementById('drawn-token').textContent = "The stack is empty. Please build a new one.";
            document.getElementById('draw-token-btn').disabled = true;
            return;
        }

        const drawn = stack.pop();
        const drawnTokenDisplay = document.getElementById('drawn-token');
        
        if (drawn.type === 'end') {
            drawnTokenDisplay.innerHTML = `<span style="color: red;">End of the Round!</span>`;
            document.getElementById('draw-token-btn').disabled = true;
            document.getElementById('reset-round-btn').disabled = false;
        } else {
            drawnTokenDisplay.innerHTML = `It's <strong>${drawn.name}</strong>'s turn!`;
        }
        
        updateStackDisplay();
    }

    function resetRound() {
        // You would manually remove dead participants from the list first
        buildStack();
        document.getElementById('drawn-token').textContent = '';
    }

    function updateStackDisplay() {
        const stackContainer = document.getElementById('current-stack');
        stackContainer.innerHTML = '';
        stack.forEach(token => {
            const span = document.createElement('span');
            span.className = `token ${token.type}-token`;
            span.textContent = token.name;
            stackContainer.appendChild(span);
        });
    }
