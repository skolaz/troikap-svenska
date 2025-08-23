# Initiativ Tracker

Välkommen till initiativ-trackern för Troika!

<div class="initiative-container">
    <section class="add-players">
        <h2>Lägg till Spelare</h2>
        <form id="add-player-form">
            <input type="text" id="player-name" placeholder="Spelarnamn" required>
            <button type="submit">Lägg till</button>
        </form>
    </section>

    <section class="add-monsters">
        <h2>Lägg till Monster</h2>
        <form id="add-monster-form">
            <input type="text" id="monster-name" placeholder="Monsternamn" required>
            <input type="number" id="monster-tokens" value="1" min="1" required>
            <button type="submit">Lägg till</button>
        </form>
    </section>

    <section class="controls">
        <button id="start-initiative-btn">Starta Initiativ</button>
        <button id="reset-btn">Nollställ</button>
    </section>

    <section class="initiative-board">
        <h2>Initiativ</h2>
        <div id="token-container">
            </div>
        <p id="current-turn"></p>
        <button id="next-turn-btn">Nästa tur</button>
    </section>
</div>
