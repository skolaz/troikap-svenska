function slumpaKaraktar() {
    // Slumpar ett värde mellan 1 och 10 för färdighet, stamina och tur.
    const skill = Math.floor(Math.random() * 10) + 1;
    const stamina = Math.floor(Math.random() * 20) + 10;
    const luck = Math.floor(Math.random() * 10) + 1;

    // Fyller i värdena i HTML-sidan.
    document.getElementById("skill").value = skill;
    document.getElementById("stamina").value = stamina;
    document.getElementById("luck").value = luck;
}
