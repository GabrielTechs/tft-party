export const Modes = [
  {
    rules: [
      "1. You can only have the origin of the given side active",
      "2. Light players can only build normal full items",
      "3. Shadow players can only build shadow full items",
      "4. You have to buy every commander you see.",
      "5. You can't sell the commander.",
      "6. The commander must be in the field.",
      "Light origins: Dawnbringer, Redeemed, Verdant, Draconic, Ironclad",
      "Shadow origins: Nightbringer, Forgotten, Coven, Hellion, Dragonslayer, Abomination, Revenant",
    ],
    modeDescription:
      "In this war the light and the shadows will fight until only one is left standing, you will go to the battlefield with your commander, victory is up to you.",
    modeName: "The war",
    commanders: 1,
    traits: 0,
  },
  {
    rules: [
      "1. You have to buy every commanders you see.",
      "2. You can't sell the commanders.",
      "3. The commanders must be in the field.",
      "4. Commanders must have at least one item.",
    ],
    modeDescription:
      "Sometimes the light and the shadow must fight together, you will be given a commander from each side to fight with you, so you must find a way to balance the power. The player who balance the yin-yang will be victorious.",
    modeName: "Yin-Yang",
    commanders: 2,
    traits: 0,
  },
  {
    rules: [
      "1. You must have the same ammount of normal and shadow full items all the time.",
      "2. Champions with items must have at least one of each side (1 light and 1 shadow).",
      "3. You have to buy every commander you see.",
      "4. You can't sell the commander.",
      "5. The commander must be in the field.",
      "6. The commander must have at least two items.",
      "7. You can only activate the traits given.",
    ],
    modeDescription:
      "In this battle you will be trained by a commander to master the power of balance, choose your components wisely and don't kill yourself.",
    modeName: "Weapon balance",
    commanders: 1,
    traits: 2,
  },
  {
    rules: [
      "1. You can only build shadow full items.",
      "2. The commander must have at least one full item.",
      "3. You have to buy every commander you see.",
      "4. You can't sell the commander.",
      "5. The commander must be in the field.",
    ],
    modeDescription:
      "Something happen in the armoury and all weapons have been corrupted, but the commander must lead the team to the battlefield, go with him and win the fight with these corrupted weapons.",
    modeName: "Weapons corruption",
    commanders: 1,
    traits: 0,
  },
  {
    rules: [
      "1. You can't spend gold leveling up until level six.",
      "2. If you have the commander he must be the one with most items.",
      "3. You have to buy every commander you see.",
      "4. You can't sell the commander.",
      "5. The commander must be in the field.",
      "6. You can only activate the traits given.",
    ],
    modeDescription:
      "The crew have been ambushed by the enemy when they were waiting for help, the commander decided to cut the ration until aid come and will spend all the money on recruits.",
    modeName: "Ambushed",
    commanders: 1,
    traits: 2,
  },
  {
    rules: [
      "1. You can only activate the first level of any trait.",
      "2. If you have the commander he must be the one with most items.",
      "3. You have to buy every commander you see.",
      "4. You can't sell the commander.",
      "5. The commander must be in the field.",
    ],
    modeDescription:
      "The commander will go out to scout the enemy, so he decided he will only take the minimum ammount of champions from any team (trait or origin).",
    modeName: "Scout regiment",
    commanders: 1,
    traits: 0,
  },
  {
    rules: [
      "1. Rule number one.",
      "2. Rule number two",
      "3. Rule number three",
    ],
    modeDescription: "In this mode you will be given...",
    modeName: "Mode seven",
  },
];

export const SRules = [
  {
    specialRule: "You don't have to buy more chosen ones after is 2 star.",
    specialRuleName: "Commander 2 star",
  },
  {
    specialRule: "You are allowed to keep and use carousel champs.",
    specialRuleName: "Carousel champ",
  },
  {
    specialRule:
      "You are allowed to put weapon components in weapons constraints modes.",
    specialRuleName: "Weapon component",
  },
  {
    specialRule: "Special rule four",
    specialRuleName: "Special rule four",
  },
];
