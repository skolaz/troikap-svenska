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

function printCharacterSheet() {
  window.print();
}
function slumpaBakgrund() {
  fetch('bakgrundstabellen.md')
    .then(response => {
      if (!response.ok) {
        throw new Error('Kunde inte ladda filen med bakgrunder.');
      }
      return response.text();
    })
    .then(markdownText => {
      // Delar upp texten i rader
      const backgrounds = markdownText.split('\n').filter(line => line.trim() !== '');

      // Slumpa fram ett nummer mellan 0 och antalet bakgrunder
      const randomIndex = Math.floor(Math.random() * backgrounds.length);
      
      // Välj ut den slumpade bakgrunden
      const randomBackground = backgrounds[randomIndex];

      // Sätt in texten i din textarea
      document.getElementById('background').value = randomBackground;
    })
    .catch(error => {
      console.error("Fel vid laddning av bakgrunder:", error);
      document.getElementById('background').value = "Kunde inte ladda bakgrunden.";
    });
}