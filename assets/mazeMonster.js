function generateMonster() {
    const outputDiv = document.getElementById('monster-output');
    
    // Monster Base
    const monsterBaseRoll = Math.floor(Math.random() * 6) + 1;
    let monsterBase;
    if (monsterBaseRoll <= 2) {
        monsterBase = "Aerial";
    } else if (monsterBaseRoll <= 4) {
        monsterBase = "Terrestrial";
    } else {
        monsterBase = "Aquatic";
    }

    // Animals
    const aerialAnimals = ["Albatross", "Bat", "Beetle", "Bird of Paradise", "Butterfly", "Condor", "Crane", "Crow", "Dragonfly", "Eagle", "Falcon", "Firefly", "Flamingo", "Fly", "Flying Squirrel", "Goose", "Gull", "Hummingbird", "Kingfisher", "Locust", "Magpie", "Mantis", "Mockingbird", "Mosquito", "Moth", "Owl", "Parrot", "Peacock", "Pelican", "Pteranodon", "Rooster", "Sparrow", "Swan", "Vulture", "Wasp", "Woodpecker"];
    const terrestrialAnimals = ["Ant", "Ape", "Armadillo", "Badger", "Bear", "Boar", "Caterpillar", "Centipede", "Chameleon", "Cockroach", "Deer", "Elephant", "Ferret", "Fox", "Giraffe", "Goat", "Horse", "Human", "Mole", "Ostrich", "Ox", "Porcupine", "Rabbit", "Raccoon", "Rat", "Rhinoceros", "Scorpion", "Sheep", "Slug", "Snail", "Snake", "Spider", "Squirrel", "Tiger", "Wolf", "Wolverine"];
    const aquaticAnimals = ["Alligator", "Amoeba", "Anglerfish", "Beaver", "Clam", "Crab", "Dolphin", "Eel", "Frog", "Hippopotamus", "Jellyfish", "Leech", "Lobster", "Manatee", "Manta Ray", "Muskrat", "Narwhal", "Newt", "Octopus", "Otter", "Penguin", "Platypus", "Pufferfish", "Salamander", "Sea Anemone", "Sea Urchin", "Seahorse", "Seal", "Shark", "Shrimp", "Squid", "Swordfish", "Tadpole", "Turtle", "Walrus", "Whale"];

    let monsterAnimal;
    if (monsterBase === "Aerial") {
        monsterAnimal = aerialAnimals[Math.floor(Math.random() * aerialAnimals.length)];
    } else if (monsterBase === "Terrestrial") {
        monsterAnimal = terrestrialAnimals[Math.floor(Math.random() * terrestrialAnimals.length)];
    } else {
        monsterAnimal = aquaticAnimals[Math.floor(Math.random() * aquaticAnimals.length)];
    }

    // Monster Features
    const monsterFeatures = ["Antlers", "Beak", "Carapace", "Claws", "Compound eyes", "Eye Stalks", "Fangs", "Fins", "Fur", "Gills", "Hooves", "Horns", "Legless", "Long tongue", "Many-eyed", "Many-limbed", "Mucus", "Pincers", "Plates", "Plumage", "Proboscis", "Scales", "Segments", "Shaggy hair", "Shell", "Spikes", "Spinnerets", "Spines", "Stinger", "Suction cups", "Tail", "Talons", "Tentacles", "Trunk", "Tusks", "Wings"];
    const monsterFeature = monsterFeatures[Math.floor(Math.random() * monsterFeatures.length)];

    // Monster Traits
    const monsterTraits = ["Amphibious", "Bloated", "Brittle", "Cannibal", "Clay-like", "Colossal", "Crystalline", "Decaying", "Ether. Element", "Ethereal", "Ever-young", "Eyeless", "Fearless", "Fluffy", "Fungal", "Gelatinous", "Geometric", "Hardened", "Illusory", "Intelligent", "Iridescent", "Luminous", "Many-headed", "Mechanical", "Phys. Element", "Planar", "Reflective", "Rubbery", "Shadowy", "Sharp", "Skeletal", "Slimy", "Sticky", "Stinking", "Tiny", "Translucent"];
    const monsterTrait = monsterTraits[Math.floor(Math.random() * monsterTraits.length)];

    // Monster Abilities
    const monsterAbilities = ["Absorbing", "Acid blood", "Anti-magic", "Blinding", "Breath weapon", "Camouflaging", "Duplicating", "Electric", "Entangling", "Ethereal Effect", "Exploding", "Flying", "Gaze weapon", "Hypnotizing", "Impervious", "Invisible", "Life-draining", "Magnetic", "Mimicking", "Mind-Reading", "Paralyzing", "Phasing", "Physical Effect", "Poisonous", "Radioactive", "Reflective", "Regenerating", "Shapeshifting", "Spell-casting", "Stealthy", "Strangling", "Super-strength", "Telekinetic", "Teleporting", "Vampiric", "Wall-Crawling"];
    const monsterAbility = monsterAbilities[Math.floor(Math.random() * monsterAbilities.length)];

    // Monster Tactics
    const monsterTactics = ["Ambush", "Call for support", "Capture", "Charge", "Climb foes", "Compel worship", "Create barrier", "Deceive", "Demand duel", "Disorient", "Encircle", "Evade", "Gang up", "Gather strength", "Go berserk", "Harry", "Hurl foes", "Immobilize", "Manipulate", "Mock", "Monologue", "Order minion", "Protect leader", "Protect self", "Scatter foes", "Stalk", "Steal from", "Swarm", "Target insolent", "Target leader", "Target nearest", "Target richest", "Target strongest", "Target weakest", "Toy with", "Use terrain"];
    const monsterTactic = monsterTactics[Math.floor(Math.random() * monsterTactics.length)];

    // Monster Personalities
    const monsterPersonalities = ["Alien", "Aloof", "Bored", "Cautious", "Cowardly", "Curious", "Devious", "Distractible", "Educated", "Embittered", "Envious", "Erudite", "Fanatical", "Forgetful", "Generous", "Hateful", "Honorable", "Humble", "Jaded", "Jovial", "Legalistic", "Manipulative", "Megalomaniac", "Melancholy", "Meticulous", "Mystical", "Obsessive", "Out of Touch", "Paranoid", "Polite", "Psychopathic", "Sophisticated", "Touchy", "Unimpressed", "Vain", "Xenophobic"];
    const monsterPersonality = monsterPersonalities[Math.floor(Math.random() * monsterPersonalities.length)];

    // Monster Weakness
    const monsterWeaknesses = ["Bells", "Birdsong", "Children", "Cold", "Cold Iron", "Competition", "Conversation", "Deformity", "Flattery", "Flowers", "Gifts", "Gold", "Heat", "Holy Icon", "Holy Water", "Home Cooking", "Insanities", "Mirrors", "Mistletoe", "Moonlight", "Music", "Methods", "Phylactery", "Phys. Elements", "Puzzles", "Riddles", "Rituals", "Silver", "Sunlight", "Tears", "True Name", "Val. Materials", "Weak Spot", "Weapon Items", "Wine", "Wormwood"];
    const monsterWeakness = monsterWeaknesses[Math.floor(Math.random() * monsterWeaknesses.length)];

    // Stats (slumpar en typ av varje)
    const health = ["Weak: 1d", "Typical: 2d", "Tough: 3d", "Hulking: 4d", "Colossal: 6d"];
    const armor = ["Unarmored: 6 armor", "Light protection: 7 armor", "Moderate protection: 8 armor", "Heavy protection: 9 armor", "Nigh impervious: 10 armor"];
    const attackBonus = ["Untrained: +0 AB", "Trained: +1 AB", "Dangerous: +2 AB", "Masterful: +3 AB", "Lethal: +4 AB"];
    const strBonus = ["Weak: +0 STR", "Average: +1 STR", "Strong: +2 STR", "Powerful: +3 STR", "Monstrous: +4 STR"];
    const dexBonus = ["Slow: +0 DEX", "Average: +1 DEX", "Nimble: +2 DEX", "Swift: +3 DEX", "Blurred: +4 DEX"];
    const wilBonus = ["Dimwitted: +0 WIL", "Average: +1 WIL", "Clever: +2 WIL", "Brilliant: +3 WIL", "Genius: +4 WIL"];

    const randomHealth = health[Math.floor(Math.random() * health.length)];
    const randomArmor = armor[Math.floor(Math.random() * armor.length)];
    const randomAttackBonus = attackBonus[Math.floor(Math.random() * attackBonus.length)];
    const randomStrBonus = strBonus[Math.floor(Math.random() * strBonus.length)];
    const randomDexBonus = dexBonus[Math.floor(Math.random() * dexBonus.length)];
    const randomWilBonus = wilBonus[Math.floor(Math.random() * wilBonus.length)];
    
    // Generate HTML output
    const outputHTML = `
        <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
            <h3>Slumpat Monster</h3>
            <h4>Grundläggande</h4>
            <p><strong>Typ:</strong> ${monsterBase}</p>
            <p><strong>Djur:</strong> ${monsterAnimal}</p>
            
            <h4>Statistik</h4>
            <ul>
                <li><strong>Hälsa:</strong> ${randomHealth}</li>
                <li><strong>Rustning:</strong> ${randomArmor}</li>
                <li><strong>Attack Bonus:</strong> ${randomAttackBonus}</li>
                <li><strong>Styrka:</strong> ${randomStrBonus}</li>
                <li><strong>Smidighet:</strong> ${randomDexBonus}</li>
                <li><strong>Vilja:</strong> ${randomWilBonus}</li>
            </ul>

            <h4>Detaljer</h4>
            <ul>
                <li><strong>Egenskap (Feature):</strong> ${monsterFeature}</li>
                <li><strong>Särdrag (Trait):</strong> ${monsterTrait}</li>
                <li><strong>Förmåga (Ability):</strong> ${monsterAbility}</li>
                <li><strong>Taktik:</strong> ${monsterTactic}</li>
                <li><strong>Personlighet:</strong> ${monsterPersonality}</li>
                <li><strong>Svaghet (Weakness):</strong> ${monsterWeakness}</li>
            </ul>
        </div>
    `;
    
    outputDiv.innerHTML = outputHTML;
}
