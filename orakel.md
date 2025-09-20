<script src="https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js"></script>
<script src="assets/orakel.js"></script>
<div class="oracle-container">
    <h4>Fråga Oraclet</h4>
    <p>Hur troligt är det att händelsen inträffar?</p>
    <p>Knapparna nedan är baserat på Mythic GM Emulator som ger svar utifrån situationen. Är det typ omöjligt att du lyckas? Eller är saken självklar?</p>
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
    <p>Ta först en handling. Vad är det de vill göra?. Sedan ta en beskrivning. Vad beskriver situationen/handlingen?</p>
    <button onclick="discoverMeaning('action')">Slumpa Handling</button>
    <button onclick="discoverMeaning('description')">Slumpa Beskrivning</button>
</div>
<div id="meaning-result"></div>

<hr>
<h2>Äventyrsgenerator</h2>
<button onclick="slumpaÄventyr()">Slumpa äventyr</button>
<div id="adventure-result"></div>
