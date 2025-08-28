# Karaktärsgenerator

Här kan du skapa din karaktär genom att slumpa fram dina initiala värden. Ta en screenshot sedan! :)
> [!Warning]
> Inget sparas här.

<script src="character-generator.js"></script>
<div class="generator-container">
    <label for="name">Namn:</label><input type="text" id="name" style="width: 300px" ><br><br>
    <label for="skill">SKILL (1d3+3):</label><input type="text" id="skill"><br><br>
    <label for="stamina">STAMINA (2d6+12):</label><input type="text" id="stamina" ><br><br>
    <label for="luck">LUCK (1d6+6):</label><input type="text" id="luck"><br><br>
    <label for="background">Bakgrund:</label>
<textarea id="background" rows="10" style="width: 100%; box-sizing: border-box;"></textarea><br><br>
    <label for="possessions">Start ägodelar:</label>
    <textarea id="possessions" rows="5" style="width: 100%; box-sizing: border-box;">
- 2d6 silvermynt
- en kniv
- en lykta och oljeflaska
- en ryggsäck
- 6 provianter</textarea>
    <br><br>
    <button onclick="slumpaKaraktar()">Skapa karaktär!</button>
    <button onclick="printCharacterSheet()">Skriv ut/Spara</button>
</div>
