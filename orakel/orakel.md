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