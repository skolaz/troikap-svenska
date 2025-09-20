<script src="https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js"></script>
<script src="assets/mazeMagic.js"></script>

# Magigenerator för Maze Rats

<p>Klicka på knappen nedan för att slumpa fram en ny trollformel.</p>
<button onclick="generateSpell()">Generera Trollformel</button>

<div id="spell-output" style="margin-top: 20px;"></div>

---

# Magi som gått fel

<p>Använd dessa för magiska förbannelser eller när magi går fel. Varje knapp genererar ett resultat från en egen tabell.</p>

<button onclick="generateMutation()">Generera Mutation (Mutations)</button>
<div id="mutation-output" style="margin-top: 10px;"></div>

<button onclick="generateInsanity()">Generera Galenskap (Insanities)</button>
<div id="insanity-output" style="margin-top: 10px;"></div>

<button onclick="generateCatastrophe()">Generera Magi-katastrof (Omens/Catastrophes)</button>
<div id="catastrophe-output" style="margin-top: 10px;"></div>
