# Karaktärsgenerator

Här kan du skapa din karaktär genom att slumpa fram dina initiala värden. Ta en screenshot sedan! :)

<div class="generator-container">
    <label for="name">Namn:</label><input type="text" id="name"><br><br>
    <label for="skill">SKILL (1d3+3):</label><input type="text" id="skill" readonly><br><br>
    <label for="stamina">STAMINA (2d6+12):</label><input type="text" id="stamina" readonly><br><br>
    <label for="luck">LUCK (1d6+6):</label><input type="text" id="luck" readonly><br><br>
    <br><br>
    <label for="advanced-skills">Avancerade skills:</label>
    <textarea id="advanced-skills" rows="5" style="width: 100%; box-sizing: border-box;"></textarea>
    <br><br>
    <label for="possessions">Ägodelar:</label>
    <textarea id="possessions" rows="5" style="width: 100%; box-sizing: border-box;">
- 2d6 silvermynt
- en kniv
- en lykta och oljeflaska
- en ryggsäck
- 6 provianter
    <br><br>
    <button onclick="slumpaKaraktar()">Skapa karaktär!</button>
</div>
