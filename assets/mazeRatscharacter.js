function generateCharacter() {
    const outputDiv = document.getElementById('character-output');
    
    // --- 1. Abilities (Förmågor) baserat på tabell ---
    const abilityTable = [
        { strength: '+2', dexterity: '+1', will: '+0' },
        { strength: '+2', dexterity: '+0', will: '+1' },
        { strength: '+1', dexterity: '+2', will: '+0' },
        { strength: '+0', dexterity: '+2', will: '+1' },
        { strength: '+1', dexterity: '+0', will: '+2' },
        { strength: '+0', dexterity: '+1', will: '+2' }
    ];
    
    const roll = Math.floor(Math.random() * 6);
    const abilities = abilityTable[roll];

    // --- 2. Max Health (Max hälsa) ---
    const maxHealth = 4;
    
    // --- 3. Starting Feature (Startfunktion) ---
    const features = [
        { name: '+1 Attack Bonus' },
        { name: 'Single Spell Slot' },
        { name: 'Single Path', options: ['Briarborn: Tracking, foraging, survival.', 'Fingersmith: Tinkering, picking locks or pockets.', 'Roofrunner: Climbing, leaping, balancing.', 'Shadowjack: Moving silently, hiding in shadows.'] }
    ];
    const selectedFeature = features[Math.floor(Math.random() * features.length)];
    let featureDetails = selectedFeature.name;
    if (selectedFeature.options) {
        featureDetails += `: ${selectedFeature.options[Math.floor(Math.random() * selectedFeature.options.length)]}`;
    }
    
    // --- 4. Six Items (Sex föremål) ---
    const items = [
        "Animal Scent", "Bear Trap", "Bedroll", "Caltrops", "Chain (10 ft.)", "Chalk", "Chisel",
        "Crowbar", "Fishing Net", "Glass Marbles", "Glue", "Grappling Hook", "Grease", "Hacksaw",
        "Hammer", "Hand drill", "Horn", "Iron spikes", "Iron tongs", "Lantern and Oil", "Large Sack",
        "Lockpicks (3)", "Manacles", "Medicine (3)", "Metal file", "Rations (3)", "Rope (50 ft.)",
        "Steel wire", "Shovel", "Steel mirror", "Ten Foot Pole", "Tinderbox", "Torch", "Vial of Acid",
        "Vial of Poison", "Waterskin"
    ];
    let selectedItems = [];
    while (selectedItems.length < 6) {
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];
        if (!selectedItems.includes(randomItem)) {
            selectedItems.push(randomItem);
        }
    }
    
    // --- 5. Combat Gear (Stridutrustning) ---
    const lightWeapons = "Axes, daggers, maces, short swords, flails, one-handed spears, etc.";
    const heavyWeapons = "Spears, halberds, long swords, warhammers, etc.";
    const rangedWeapons = "Bows, crossbows, slings etc.";
    const armorRating = 8;
    
    // --- 6. Appearance (Utseende) ---
    const appearances = [
        "Aquiline", "Athletic", "Barrel-Chested", "Boney", "Brawny", "Brutish", "Bullnecked", 
        "Chiseled", "Coltish", "Corpulent", "Craggy", "Delicate", "Furrowed", "Gaunt", "Gorgeous", 
        "Grizzled", "Haggard", "Handsome", "Hideous", "Lanky", "Pudgy", "Ripped", "Rosy", "Scrawny", 
        "Sinewy", "Slender", "Slumped", "Solid", "Square-Jawed", "Statuesque", "Towering", "Trim", 
        "Weathered", "Willowy", "Wiry", "Wrinkled"
    ];
    const randomAppearance = appearances[Math.floor(Math.random() * appearances.length)];
    
    // --- 7. Physical Detail (Fysisk detalj) ---
    const physicalDetails = [
        "Acid scars", "Battle scars", "Birthmark", "Braided hair", "Brand mark", "Broken nose", 
        "Bronze skinned", "Burn scars", "Bushy eyebrows", "Curly hair", "Dark skinned", "Dreadlocks", 
        "Exotic accent", "Flogging scars", "Freckles", "Gold tooth", "Hoarse voice", "Huge beard", 
        "Long hair", "Matted hair", "Missing ear", "Missing teeth", "Mustache", "Muttonchops", 
        "Nine fingers", "Oiled hair", "One-eyed", "Pale skinned", "Piercings", "Ritual scars", 
        "Sallow skin", "Shaved head", "Sunburned", "Tangled hair", "Tattoos", "Topknot"
    ];
    const randomPhysicalDetail = physicalDetails[Math.floor(Math.random() * physicalDetails.length)];

    // --- 8. Background (Bakgrund) ---
    const backgrounds = [
        "Alchemist", "Beggar-prince", "Blackmailer", "Bounty-hunter", "Chimney sweep", "Coin-clipper",
        "Contortionist", "Counterfeiter", "Cultist", "Cutpurse", "Debt-collector", "Deserter",
        "Fence", "Fortuneteller", "Galley slave", "Gambler", "Gravedigger", "Headsman",
        "Hedge knight", "Highwayman", "Housebreaker", "Kidnapper", "Mad prophet", "Mountebank",
        "Peddler", "Pit-fighter", "Poisoner", "Rat-catcher", "Scrivener", "Sellsword",
        "Slave", "Smuggler", "Street performer", "Tattooist", "Urchin", "Usurer"
    ];
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    
    // --- 9. Clothing (Klädsel) ---
    const clothing = [
        "Antique", "Battle-torn", "Bedraggled", "Blood-stained", "Ceremonial", "Dated", "Decaying",
        "Eccentric", "Elegant", "Embroidered", "Exotic", "Fashionable", "Flamboyant", "Food-stained",
        "Formal", "Frayed", "Frumpy", "Garish", "Grimy", "Haute couture", "Lacey", "Livery",
        "Mud-stained", "Ostentatious", "Oversized", "Patched", "Patterned", "Perfumed",
        "Practical", "Rumpled", "Sigils", "Singed", "Tasteless", "Undersized", "Wine-stained", "Worn out"
    ];
    const randomClothing = clothing[Math.floor(Math.random() * clothing.length)];
    
    // --- 10. Personality (Personlighet) ---
    const personalities = [
        "Bitter", "Brave", "Cautious", "Chipper", "Contrary", "Cowardly", "Cunning", "Driven",
        "Entitled", "Gregarious", "Grumpy", "Heartless", "Honor-bound", "Hotheaded", "Inquisitive",
        "Irascible", "Jolly", "Know-it-all", "Lazy", "Loyal", "Menacing", "Mopey", "Nervous",
        "Protective", "Righteous", "Rude", "Sarcastic", "Savage", "Scheming", "Serene", "Spacey",
        "Stoic", "Stubborn", "Stuck-up", "Suspicious", "Wisecracking"
    ];
    const randomPersonality = personalities[Math.floor(Math.random() * personalities.length)];
    
    // --- 11. Mannerism (Maniér) ---
    const mannerisms = [
        "Anecdotes", "Breathy", "Chuckles", "Clipped", "Cryptic", "Deep voice", "Drawl", "Enunciates",
        "Flowery speech", "Gravelly voice", "Highly formal", "Hypnotic", "Interrupts", "Laconic",
        "Laughs", "Long pauses", "Melodious", "Monotone", "Mumbles", "Narrates", "Overly casual",
        "Quaint sayings", "Rambles", "Random facts", "Rapid-fire", "Rhyming", "Robotic",
        "Slow speech", "Speechifies", "Squeaky", "Street slang", "Stutters", "Talks to self",
        "Trails off", "Very loud", "Whispers"
    ];
    const randomMannerism = mannerisms[Math.floor(Math.random() * mannerisms.length)];
    
    // --- 12. Name, Level, and XP (Namn, nivå, XP) ---
    const name = "Ange ditt namn här";
    const level = 1;
    const xp = 0;
    
    // Generate the HTML output
    const outputHTML = `
        <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px; background-color: #f9f9f9;">
            <h3>Din Nya Karaktär</h3>
            <p><strong>Namn:</strong> ${name}</p>
            <p><strong>Nivå:</strong> ${level}</p>
            <p><strong>XP:</strong> ${xp}</p>

            <h4>Förmågor (Abilities)</h4>
            <p><strong>Styrka:</strong> ${abilities.strength}</p>
            <p><strong>Smidighet:</strong> ${abilities.dexterity}</p>
            <p><strong>Vilja:</strong> ${abilities.will}</p>

            <h4>Hälsa (Health)</h4>
            <p><strong>Max Hälsa:</strong> ${maxHealth}</p>
            <p><strong>Nuvarande Hälsa:</strong> ${maxHealth}</p>

            <h4>Startfunktion (Starting Feature)</h4>
            <p>${featureDetails}</p>

            <h4>Utrustning (Starting Items)</h4>
            <ul>
                ${selectedItems.map(item => `<li>${item}</li>`).join('')}
            </ul>

            <h4>Stridutrustning (Combat Gear)</h4>
            <p>Du startar med <strong>lätt rustning (+1 armor)</strong> och en <strong>sköld (+1 armor)</strong>, vilket ger en total <strong>rustningsklassning på 8</strong>.</p>
            <p>Välj <strong>två vapen</strong> från listan nedan:</p>
            <ul>
                <li><strong>Lätta vapen</strong> (1 hand): ${lightWeapons}</li>
                <li><strong>Tunga vapen</strong> (+1 damage, 2 hands): ${heavyWeapons}</li>
                <li><strong>Avståndsvapen</strong> (2 hands): ${rangedWeapons}</li>
            </ul>
            
            <h4>Detaljer</h4>
            <p><strong>Utseende:</strong> ${randomAppearance}</p>
            <p><strong>Fysisk Detalj:</strong> ${randomPhysicalDetail}</p>
            <p><strong>Personlighet:</strong> ${randomPersonality}</p>
            <p><strong>Maniér:</strong> ${randomMannerism}</p>
            <p><strong>Bakgrund:</strong> ${randomBackground}</p>
            <p><strong>Klädsel:</strong> ${randomClothing}</p>
        </div>
    `;
    
    outputDiv.innerHTML = outputHTML;
}
