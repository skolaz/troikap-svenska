# Karaktärsgenerator

Här kan du skapa din karaktär genom att slumpa fram dina initiala värden. Ta en screenshot sedan, eller markera allt och copy pasta till ett eget text dokument! :)
> Inget sparas här.

<script src="//cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="character-generator.js"></script>
<script src="ascii-ansikte.js"></script>
<div class="generator-container">
    <label for="name">Namn:</label>
    <div id="name" contenteditable="true" class="editable-field"></div>
    <label for="skill">SKILL (1d3+3):</label>
    <div id="skill" contenteditable="true" class="editable-field"></div>
    <label for="stamina">STAMINA (2d6+12):</label>
    <div id="stamina" contenteditable="true" class="editable-field"></div>
    <label for="luck">LUCK (1d6+6):</label>
    <div id="luck" contenteditable="true" class="editable-field"></div>
    <label for="background">Bakgrund:</label>
    <div id="background" contenteditable="true" class="editable-field"></div>
    <label for="possessions">Startägodelar:</label>
<div id="possessions" contenteditable="true" class="editable-field"></div>
    <button onclick="slumpaKaraktar()">Skapa karaktär!</button>
    <button onclick="printCharacterSheet()">Skriv ut/Spara (stäng menyn om den ska vara rakare)</button>
    <button onclick="copyCharacterSheet()">Kopiera karaktärsblad</button>
</div>
