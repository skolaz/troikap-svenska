function generateSpell() {
    const outputDiv = document.getElementById('spell-output');
    
    // Spell Formulas
    const spellFormulas = [
        ["Physical Effect + Physical Form", "Ethereal Element + Physical Form"],
        ["Physical Effect + Ethereal Form", "Ethereal Element + Ethereal Form"],
        ["Ethereal Effect + Physical Form", "Physical Effect + Physical Element"],
        ["Ethereal Effect + Ethereal Form", "Physical Effect + Ethereal Element"],
        ["Physical Element + Physical Form", "Ethereal Effect + Physical Element"],
        ["Physical Element + Ethereal Form", "Ethereal Effect + Ethereal Element"]
    ];

    // Magic Tables
    const physicalEffects = ["Animating", "Attracting", "Binding", "Blossoming", "Consuming", "Creeping", "Crushing", "Diminishing", "Dividing", "Duplicating", "Enveloping", "Expanding", "Fusing", "Grasping", "Hastening", "Hindering", "Illuminating", "Imprisoning", "Levitating", "Opening", "Petrifying", "Phasing", "Piercing", "Pursuing", "Reflecting", "Regenerating", "Rending", "Repelling", "Resurrecting", "Screaming", "Sealing", "Shapeshifting", "Shielding", "Spawning", "Transmuting", "Transporting"];
    const physicalElements = ["Acid", "Amber", "Bark", "Blood", "Bone", "Brine", "Clay", "Crow", "Crystal", "Ember", "Flesh", "Fungus", "Glass", "Honey", "Ice", "Insect", "Wood", "Lava", "Moss", "Obsidian", "Oil", "Poison", "Rat", "Salt", "Sand", "Sap", "Serpent", "Slime", "Stone", "Tar", "Thorn", "Vine", "Water", "Wine", "Wood", "Worm"];
    const physicalForms = ["Altar", "Armor", "Arrow", "Beast", "Blade", "Cauldron", "Chain", "Chariot", "Claw", "Cloak", "Colossus", "Crown", "Elemental", "Eye", "Fountain", "Gate", "Golem", "Hammer", "Horn", "Key", "Mask", "Monolith", "Pit", "Prison", "Sentinel", "Servant", "Shield", "Spear", "Steed", "Swarm", "Tentacle", "Throne", "Torch", "Trap", "Wall", "Web"];
    const etherealEffects = ["Avenging", "Banishing", "Bewildering", "Blinding", "Charming", "Communicating", "Compelling", "Concealing", "Deafening", "Deceiving", "Deciphering", "Dispelling", "Emboldening", "Encoding", "Energizing", "Enlightening", "Enraging", "Excruciating", "Foreseeing", "Intoxicating", "Maddening", "Mesmerizing", "Mindreading", "Nullifying", "Paralyzing", "Revealing", "Revolting", "Scrying", "Silencing", "Soothing", "Summoning", "Terrifying", "Warding", "Wearying", "Withering"];
    const etherealElements = ["Ash", "Chaos", "Distortion", "Dream", "Dust", "Echo", "Ectoplasm", "Fire", "Fog", "Ghost", "Harmony", "Heat", "Light", "Lightning", "Memory", "Mind", "Mutation", "Negation", "Plague", "Plasma", "Probability", "Rain", "Rot", "Shadow", "Smoke", "Snow", "Soul", "Star", "Stasis", "Steam", "Thunder", "Time", "Void", "Warp", "Whisper", "Wind"];
    const etherealForms = ["Aura", "Beacon", "Beam", "Blast", "Blob", "Bolt", "Bubble", "Call", "Cascade", "Circle", "Cloud", "Coil", "Cone", "Cube", "Dance", "Disk", "Field", "Form", "Gaze", "Loop", "Moment", "Nexus", "Portal", "Pulse", "Pyramid", "Ray", "Shard", "Sphere", "Spray", "Storm", "Swarm", "Torrent", "Touch", "Vortex", "Wave", "Word"];

    // Roll 2d separately (one for row, one for column)
    const rowRoll = Math.floor(Math.random() * 6);
    const columnRoll = Math.random() < 0.5 ? 0 : 1;

    // Determine the formula components
    const formulaString = spellFormulas[rowRoll][columnRoll];
    let parts = formulaString.split(' + ');
    let component1 = parts[0].replace(/ /g, '');
    let component2 = parts[1].replace(/ /g, '');

    // Get the corresponding list of words
    const lists = {
        "PhysicalEffect": physicalEffects,
        "PhysicalElement": physicalElements,
        "PhysicalForm": physicalForms,
        "EtherealEffect": etherealEffects,
        "EtherealElement": etherealElements,
        "EtherealForm": etherealForms
    };
    
    // Generate spell name
    const part1 = lists[component1][Math.floor(Math.random() * lists[component1].length)];
    const part2 = lists[component2][Math.floor(Math.random() * lists[component2].length)];

    const spellName = `${part1} ${part2}`;
    
    const outputHTML = `
        <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
            <h3>Trollformel</h3>
            <p><strong>Formel:</strong> ${formulaString}</p>
            <p><strong>Namn:</strong> ${spellName}</p>
        </div>
    `;
    
    outputDiv.innerHTML = outputHTML;
}

function generateMutation() {
    const outputDiv = document.getElementById('mutation-output');
    const mutations = [
        "Ages", "Attracts birds", "Child-form", "Corpulence", "Covered in hair", "Animal arms", "Animal eyes", "Animal head", "Animal legs", "Animal mouth", "Animal skin", "Animal-form", "Cyclops", "Extra arms", "Extra eyes", "Extra legs", "Forked tongue", "Gender swap", "Hunchback", "Item-form", "Long arms", "Lose all hair", "Loses teeth", "Monster Feature", "Monster Trait", "No eyes", "No mouth", "P. Element-skin", "Second face", "Sheds skin", "Shrinks", "Shrivels", "Skin boils", "Slime trail", "Translucent skin", "Weeps blood"
    ];
    const randomMutation = mutations[Math.floor(Math.random() * mutations.length)];

    const outputHTML = `
        <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; background-color: #f9f9f9;">
            <strong>Resultat:</strong> ${randomMutation}
        </div>
    `;
    outputDiv.innerHTML = outputHTML;
}

function generateInsanity() {
    const outputDiv = document.getElementById('insanity-output');
    const insanities = [
        "Always lies", "Always polite", "“Animal-form”", "Cannot count", "Cannot lie", "Faceblind", "Fears birds", "Fears blood", "Fears books", "Fears darkness", "Fears fire", "Fears gold", "Fears horses", "Fears iron", "Fears music", "Fears own hand", "Fears PC", "Fears rain", "Fears rivers", "Fears silence", "Fears sleep", "Fears sunlight", "Fears the moon", "Fears trees", "“Genius”", "“Gorgeous”", "Hates violence", "“Invisible”", "“Invulnerable”", "“Mon. Ability”", "“Mon. Feature”", "“Monster Trait”", "Must sing", "New Personality", "Says thoughts", "Sees dead people"
    ];
    const randomInsanity = insanities[Math.floor(Math.random() * insanities.length)];

    const outputHTML = `
        <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; background-color: #f9f9f9;">
            <strong>Resultat:</strong> ${randomInsanity}
        </div>
    `;
    outputDiv.innerHTML = outputHTML;
}

function generateCatastrophe() {
    const outputDiv = document.getElementById('catastrophe-output');
    const catastrophes = [
        "All iron rusts", "Animals die", "Animals mutate", "Birds attack", "City appears", "Deadly fog", "Dream plague", "Endless night", "Endless rain", "Endless storm", "Endless twilight", "Endless winter", "Fae return", "Forest appears", "Forgetfulness", "Graves open", "Lamentations", "Maggots", "Mass insanity", "Mass mutation", "Mass slumber", "Meteor strike", "Mirrors speak", "No stars", "Outsider enters", "People shrink", "People vanish", "Plants wither", "Portal opens", "Rifts open", "Shadows speak", "Stones speak", "Total silence", "Tower appears", "Water to blood"
    ];
    const randomCatastrophe = catastrophes[Math.floor(Math.random() * catastrophes.length)];

    const outputHTML = `
        <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; background-color: #f9f9f9;">
            <strong>Resultat:</strong> ${randomCatastrophe}
        </div>
    `;
    outputDiv.innerHTML = outputHTML;
}
