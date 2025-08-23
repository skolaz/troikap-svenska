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
