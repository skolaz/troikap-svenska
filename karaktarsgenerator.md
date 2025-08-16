# Karaktärsgenerator

Här kan du skapa din karaktär genom att slumpa fram dina initiala värden.

<div>
    <label for="name">Namn:</label>
    <input type="text" id="name"><br><br>
    
    <label for="skill">SKILL:</label>
    <input type="text" id="skill" readonly><br><br>

    <label for="stamina">STAMINA:</label>
    <input type="text" id="stamina" readonly><br><br>

    <label for="luck">LUCK:</label>
    <input type="text" id="luck" readonly><br><br>

    <button onclick="slumpaKaraktar()">Skapa karaktär!</button>
</div>

<script>
    function slumpaKaraktar() {
        const skill = Math.floor(Math.random() * 10) + 1;
        const stamina = Math.floor(Math.random() * 20) + 10;
        const luck = Math.floor(Math.random() * 10) + 1;

        document.getElementById("skill").value = skill;
        document.getElementById("stamina").value = stamina;
        document.getElementById("luck").value = luck;
    }
</script>
