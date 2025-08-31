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
    // Anropa funktionen för att slumpa en bakgrund
    slumpaBakgrund();
}

function printCharacterSheet() {
  window.print();
}

function extractContentByTitle(markdownText, title) {
  // Regex som hittar rubriken (t.ex. "# 11 Ivrig jätte av Corda")
  // och sedan fångar allt som kommer efter, fram till nästa rubrik eller slutet av filen.
  const regex = new RegExp(`(^#\\s*${title}[\\s\\S]*?)(?=\\n#|$)`, 'm');
  const match = markdownText.match(regex);
  
  if (match) {
    return match[1].trim();
  }
  return "";
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
      // Hitta alla rubriker i filen.
      const titles = markdownText.match(/^#\s*.+$/gm);

      if (!titles || titles.length === 0) {
          document.getElementById('background').innerHTML = "Kunde inte hitta några bakgrunder i filen.";
          return;
      }

      // Slumpa fram ett nummer mellan 0 och antalet rubriker.
      const randomIndex = Math.floor(Math.random() * titles.length);
      const randomTitle = titles[randomIndex].replace(/^#\s*/, '');

      // Extrahera hela kapitlet (med rubriken) baserat på den slumpade rubriken.
      const backgroundContent = extractContentByTitle(markdownText, randomTitle);

      // Konvertera Markdown till HTML och sätt in det i din div.
      document.getElementById('background').innerHTML = marked(backgroundContent);
    })
    .catch(error => {
      console.error("Fel vid laddning av bakgrunder:", error);
      document.getElementById('background').innerHTML = "Kunde inte ladda bakgrunden.";
    });
}