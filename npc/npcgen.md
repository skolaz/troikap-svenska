
<hr>
<h2>Slumpa en NPC</h2>
<p>
    <button onclick="slumpaNPC()">Skapa NPC!</button>
</p>
<div id="npc-sheet">
    <p><b>Namn:</b> <span id="npc-name"></span></p>
    <p><b>Yrke:</b> <span id="npc-occupation"></span></p>
    <p><b>DNA:</b> <span id="npc-dna"></span></p>
    
    <p><b>SKILL (1d3+3):</b> <span id="npc-skill"></span></p>
    <p><b>STAMINA (2d6+12):</b> <span id="npc-stamina"></span></p>
    <p><b>LUCK (1d6+6):</b> <span id="npc-luck"></span></p>

    <p><b>Bakgrund:</b></p>
    <div id="npc-background"></div>
</div>

<hr>
<h3>Fler NPC-detaljer</h3>
<p>
    <button onclick="slumpaNPCDetaljer()">Slumpa alla detaljer</button>
</p>
<p>
    <button onclick="slumpaNPCEgenskap()">Slumpa Egneskap</button>
    <button onclick="slumpaNPCYrke()">Slumpa Yrke</button>
    <button onclick="slumpaNPCMotivation()">Slumpa Motivation</button>
    <button onclick="slumpaNPCTal()">Slumpa Talnivå</button>
    <button onclick="slumpaNPCHumör()">Slumpa Humör</button>
    <button onclick="slumpaNPCUppträdande()">Slumpa Uppträdande</button>
    <button onclick="slumpaNPCFokus()">Slumpa Fokus</button>
</p>
<div id="npc-details-result"></div>