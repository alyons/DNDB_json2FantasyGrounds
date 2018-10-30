/* Original script by:
      Skype: RobinKuiper.eu
      Discord: Atheos#1095
      Roll20: https://app.roll20.net/users/1226016/robin
      Reddit: https://www.reddit.com/user/robinkuiper/
      Patreon: https://www.patreon.com/robinkuiper

    Further modifications by Matt DeKok
       Discord: Sillvva#2532
       Roll20: https://app.roll20.net/users/494585/sillvva
       Github: https://github.com/sillvva/Roll20-API-Scripts

    Fantasy Ground adaptation by David Berkompas
       Skype: david.berkompas
       Discord: BoomerET#2354
       Fantasy Grounds: BoomerET
       Github: https://github.com/BoomerET
       Reddit: https://www.reddit.com/user/BoomerET
       Roll20: https://app.roll20.net/users/9982/boomeret
       Paypal.me: https://paypal.me/boomeret
       (All contributions are donated to Hospice, or go here: https://www.hollandhospice.org/giving/donate-now/)
*/

var startXML = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n";
startXML += "<root version=\"3.3\" release=\"8|CoreRPG:3\">\n";
startXML += "\t<character>\n";
var endXML = "\t</character>\n</root>\n";
var allXML = "";

charSpellSlots1 = 0;
charSpellSlots2 = 0;
charSpellSlots3 = 0;
charSpellSlots4 = 0;
charSpellSlots5 = 0;
charSpellSlots6 = 0;
charSpellSlots7 = 0;
charSpellSlots8 = 0;
charSpellSlots9 = 0;

holdFeats = [];
holdTraits = [];
holdFeatures = [];
holdProf = [];

var hasAppear = 0;

var source = [
    "Barakas(1387127)",
    "Baradun(1215852)",
    "Dragonborn Paladin(4925896)",
    "Barney Eldritch Knight(4908553)",
    "Druid4Cleric2Paladin1(4819411)",
    "LestherisWizard(4177317)",
    "LH Bard(3719212)",
    "ArcaneTrickster3(4908071)"
];

/* * * * * * * * */
const _ABILITIES = {1:'STR',2:'DEX',3:'CON',4:'INT',5:'WIS',6:'CHA'};
const _ABILITY = {'STR': 'strength', 'DEX': 'dexterity', 'CON': 'constitution', 'INT': 'intelligence', 'WIS': 'wisdom', 'CHA': 'charisma'};
const justAbilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

const skills = ['acrobatics', 'animal_handling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'sleight_of_hand', 'stealth', 'survival'];
const skillsRef = ['dexterity', 'wisdom', 'intelligence', 'strength', 'charisma', 'intelligence', 'wisdom', 'charisma', 'intelligence', 'wisdom', 'intelligence', 'wisdom', 'charisma', 'charisma', 'intelligence', 'dexterity', 'dexterity', 'wisdom'];
const simpleMeleeWeapon = ["club","dagger","greatclub","handaxe","javelin","light_hammer","mace","quartrsfaff","sickle","spear"];
const simpleRangedWeapon = ["crossbow_light","dart","showtbow","sling"];
const martialMeleeWeapon = ["battleaxe","flail","glaive","greataxe","greatsword","halberd","lance","longsword","maul","morningstar","pike","rapier","scimitar","shortsword","trident","war_pick","warhammer","whip"];
const martialRangedWeapon = ["blowgun","crossbow_hand","crossbow_heavy","longbow","net"];
const tieflingRacialTraits = ["darkvision","hellish_resistance"];

var object;

const fullDexArmor = ["padded","leather","studded_leather"];
const max3DexArmor = [];
const max2DexArmor = ["hide","chain_shirt","scale_mail","breastplate","half_plate"];
const noDexArmor = ["ring_mail","chain_mail","splint","plate"];
const disStealth = ["padded","scale_mail","half_plate","ring_mail","chain_mail","splint","plate"];
const vu = {
    id: 4497178,
    readonlyUrl: null,
    avatarUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/4698/388/150/224/636751555685215247.jpeg",
    frameAvatarUrl: "",
    backdropAvatarUrl: "",
    smallBackdropAvatarUrl: "",
    largeBackdropAvatarUrl: "",
    thumbnailBackdropAvatarUrl: "",
    defaultBackdrop: {
        backdropAvatarUrl: "https://media-waterdeep.cursecdn.com/avatars/61/522/636453154644283609.jpeg",
        smallBackdropAvatarUrl: "https://media-waterdeep.cursecdn.com/avatars/61/523/636453154644752281.jpeg",
        largeBackdropAvatarUrl: "https://media-waterdeep.cursecdn.com/avatars/61/524/636453154645377290.jpeg",
        thumbnailBackdropAvatarUrl: "https://media-waterdeep.cursecdn.com/avatars/61/525/636453154645689772.jpeg"
    },
    avatarId: 4698388,
    frameAvatarId: null,
    backdropAvatarId: null,
    smallBackdropAvatarId: null,
    largeBackdropAvatarId: null,
    thumbnailAvatarId: null,
    themeColorId: null,
    themeColor: null,
    name: "Vu",
    socialName: null,
    gender: "Male",
    faith: "",
    age: 18,
    hair: "White",
    eyes: "Silver",
    skin: "light tan",
    height: "5'4",
    weight: 110,
    inspiration: false,
    baseHitPoints: 8,
    bonusHitPoints: null,
    overrideHitPoints: null,
    removedHitPoints: 0,
    temporaryHitPoints: 0,
    currentXp: 0,
    alignmentId: 5,
    lifestyleId: 5,
    stats: [{
        id: 1,
        name: null,
        value: 12
    }, {
        id: 2,
        name: null,
        value: 15
    }, {
        id: 3,
        name: null,
        value: 11
    }, {
        id: 4,
        name: null,
        value: 10
    }, {
        id: 5,
        name: null,
        value: 14
    }, {
        id: 6,
        name: null,
        value: 10
    }],
    bonusStats: [{
        id: 1,
        name: null,
        value: null
    }, {
        id: 2,
        name: null,
        value: null
    }, {
        id: 3,
        name: null,
        value: null
    }, {
        id: 4,
        name: null,
        value: null
    }, {
        id: 5,
        name: null,
        value: null
    }, {
        id: 6,
        name: null,
        value: null
    }],
    overrideStats: [{
        id: 1,
        name: null,
        value: null
    }, {
        id: 2,
        name: null,
        value: null
    }, {
        id: 3,
        name: null,
        value: null
    }, {
        id: 4,
        name: null,
        value: null
    }, {
        id: 5,
        name: null,
        value: null
    }, {
        id: 6,
        name: null,
        value: null
    }],
    background: {
        hasCustomBackground: false,
        definition: {
            id: 24186,
            entityTypeId: 1669830167,
            name: "The Nine",
            description: "",
            snippet: "",
            shortDescription: "<p>Every nine generation at the age of adulthood(nine), nine warriors are chosen to leave their home only to return if they have something to honorable to show for their return. These warriors normally go their separate way to do so, however, in rare cases, some might work together. Although in the past only one of The Nine ever returns.&nbsp;</p>",
            skillProficienciesDescription: "Skill Proficiencies:&nbsp;Choose two of&nbsp;Acrobatics, Athletics, Medicine, or Survival.",
            toolProficienciesDescription: "Tool Proficiencies:&nbsp;Herbalism Kit and Poisoner's Kit",
            languagesDescription: "",
            equipmentDescription: "Equipment:&nbsp;A inexpensive but unusual weapon and a musical instrument (one of your choice), a gaming set, the favor of an admirer (a love letter, trinket, etc.)",
            featureName: "Feature: The Loud and Boisterous Type",
            featureDescription: "<p>Your style tends to be on the flashy and showy side, opting for big moves that catch the eyes of any onlooker.&nbsp;</p>\r\n<p>When in a city with any inns or taverns, they are honored to have someone of your talents at their table. As long as you don't cause a scene and entertain the crowd with your stories (and maybe some friendly competitions), you are able to live a modest lifestyle without having to pay 1gp a day for it.&nbsp;You may not maintain a less affluent lifestyle and use the difference as income&mdash;the benefit is a line of credit, not an actual monetary reward.</p>",
            avatarUrl: null,
            largeAvatarUrl: null,
            suggestedCharacteristicsDescription: "<p>The Nine fight for a way to survive their new world, or to return to be respected&nbsp;by their homeland. Each one being trained for the day they are sent to the outside world.&nbsp;</p>",
            suggestedProficiencies: [],
            suggestedLanguages: [],
            personalityTraits: [{
                id: 480493,
                description: "Nothing can shake my optimistic attitude.",
                diceRoll: 1
            }],
            ideals: [{
                id: 480496,
                description: "Curiosity. I want to see and explore EVERYTHING!!!",
                diceRoll: 1
            }],
            bonds: [{
                id: 480497,
                description: "I idolize a hero of the old tales and measure my deeds against that person's.",
                diceRoll: 1
            }],
            flaws: [{
                id: 480498,
                description: "Blind to the value of coin.",
                diceRoll: 1
            }]
        },
        customBackground: {
            id: 4497178,
            entityTypeId: 1581111423,
            name: null,
            description: null,
            featuresBackground: null,
            characteristicsBackground: null,
            backgroundType: null
        }
    },
    race: {
        entityRaceId: 41730,
        entityRaceTypeId: 1228963568,
        fullName: "Seekers of the Sun",
        baseRaceId: 69499,
        description: "<p>A race with cat-like features from Eorzea. Source: FFXIV Class Compendium</p><p>As a Seeker of the sun, you come from a race of renowned hunters. The Seekers live in a patriarchal society which woships the sun and Azeyma. This past has given you the tools to become a deadly hunter, capable of wounding their marks with great efficiency.</p>",
        avatarUrl: null,
        largeAvatarUrl: null,
        portraitAvatarUrl: "https://media-waterdeep.cursecdn.com/attachments/3/346/race-default.jpg",
        moreDetailsUrl: "/characters/subraces/41730-seekers-of-the-sun",
        isHomebrew: true,
        sourceIds: [],
        groupIds: [],
        type: 2,
        subRaceShortName: "Seekers",
        baseName: "of the Sun",
        racialTraits: [{
            definition: {
                id: 588347,
                entityTypeId: 1960452172,
                displayOrder: 1,
                name: "Ability Score Increase",
                description: "<p>Your Dexterity score increases by 2.</p>",
                snippet: "+2 Dexterity",
                hideInBuilder: false,
                hideInSheet: true,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                sourceId: null,
                sourcePageNumber: null,
                creatureRules: []
            }
        }, {
            definition: {
                id: 588389,
                entityTypeId: 1960452172,
                displayOrder: 2,
                name: "Age",
                description: "<p>Miqo'te tend to live secluded, healthy lives reaching physical maturity around the age of 16, and living to be around 80 years old.</p>",
                snippet: "",
                hideInBuilder: true,
                hideInSheet: true,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                sourceId: null,
                sourcePageNumber: null,
                creatureRules: []
            }
        }, {
            definition: {
                id: 588390,
                entityTypeId: 1960452172,
                displayOrder: 3,
                name: "Alignment",
                description: "<p>Miqo'te who live within a traditional tribal setting lean towards a lawful alignment, adhering to the laws of their people. Those who are born or live in more diverse settings tend to lean in no particular direction.</p>",
                snippet: "",
                hideInBuilder: true,
                hideInSheet: true,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                sourceId: null,
                sourcePageNumber: null,
                creatureRules: []
            }
        }, {
            definition: {
                id: 588391,
                entityTypeId: 1960452172,
                displayOrder: 4,
                name: "Size",
                description: "<p>Miqo'te are a people people with powerful leg muscles. Their slender builds distract from how powerful their bodies really are. On average males tend to range in height from 5 feet to 5 and a half feet tall, while females range from 4 feet 9 inches to 5 feet 3 inches Your size is medium.</p>",
                snippet: "",
                hideInBuilder: true,
                hideInSheet: true,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                sourceId: null,
                sourcePageNumber: null,
                creatureRules: []
            }
        }, {
            definition: {
                id: 588392,
                entityTypeId: 1960452172,
                displayOrder: 5,
                name: "Speed",
                description: "<p>Your base walking speed is 30ft.</p>",
                snippet: "",
                hideInBuilder: true,
                hideInSheet: true,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                sourceId: null,
                sourcePageNumber: null,
                creatureRules: []
            }
        }, {
            definition: {
                id: 588393,
                entityTypeId: 1960452172,
                displayOrder: 6,
                name: "Darkvision",
                description: "<p>Your eyes have adapted to help you see in the dark. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern colour in darkness, only shades of grey.</p>",
                snippet: "You can see in darkness (shades of gray) up to 60 ft.",
                hideInBuilder: false,
                hideInSheet: false,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                sourceId: null,
                sourcePageNumber: null,
                creatureRules: []
            }
        }, {
            definition: {
                id: 588415,
                entityTypeId: 1960452172,
                displayOrder: 7,
                name: "Predation",
                description: "<p>You have the senses of an expert hunter. You gain advantage on wisdom checks to track beasts, as well as intelligence checks to recall information about beasts you have encountered in the past. You gain proficiency in the stealth skill.</p>",
                snippet: "You have proficiency in the Stealth skill.\r\n\r\nYou gain advantage on Survival checks to track beasts and Nature checks to recall information about beasts you have previously encountered.",
                hideInBuilder: false,
                hideInSheet: false,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                sourceId: null,
                sourcePageNumber: null,
                creatureRules: []
            }
        }, {
            definition: {
                id: 588439,
                entityTypeId: 1960452172,
                displayOrder: 8,
                name: "Language",
                description: "<p>You can speak, read and write Common and one language of your choice. When speaking Common, your pronunciation of \"r\" sounds are sometimes extended with a purr.</p>",
                snippet: "",
                hideInBuilder: false,
                hideInSheet: true,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                sourceId: null,
                sourcePageNumber: null,
                creatureRules: []
            }
        }, {
            definition: {
                id: 588441,
                entityTypeId: 1960452172,
                displayOrder: 100,
                name: "Ability Score Increase",
                description: "<p>Your Wisdom score increases by 1.</p>",
                snippet: "+1 Wisdom",
                hideInBuilder: true,
                hideInSheet: true,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                sourceId: null,
                sourcePageNumber: null,
                creatureRules: []
            }
        }, {
            definition: {
                id: 588446,
                entityTypeId: 1960452172,
                displayOrder: 200,
                name: "Seekers Weapon Training",
                description: "<p>You have proficiency with daggers and shortbows.</p>",
                snippet: "You have proficiency with daggers and shortbows.",
                hideInBuilder: true,
                hideInSheet: false,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                sourceId: null,
                sourcePageNumber: null,
                creatureRules: []
            }
        }, {
            definition: {
                id: 588449,
                entityTypeId: 1960452172,
                displayOrder: 300,
                name: "Graceful",
                description: "<p>Your base walking speed increases to 35 feet.</p>",
                snippet: "Your base walking speed increases to 35 feet.",
                hideInBuilder: true,
                hideInSheet: false,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                sourceId: null,
                sourcePageNumber: null,
                creatureRules: []
            }
        }],
        weightSpeeds: {
            normal: {
                walk: 30,
                fly: 0,
                burrow: 0,
                swim: 0,
                climb: 0
            },
            encumbered: null,
            heavilyEncumbered: null,
            pushDragLift: null,
            override: null
        },
        featIds: [225, 3272, 3428, 3650, 4432, 7049, 7336, 8646, 9229, 5073, 12008, 12056, 13610, 13822, 14325, 14957, 15948, 15955, 16633, 20306, 24511, 25318, 28531, 29113, 30843, 32021, 33953, 36446, 36692, 37124, 37148, 39061, 40512, 40828, 41653, 42199, 42205, 42206, 42688, 42716, 42770, 42777, 43609, 44126, 44250, 44931, 45063],
        size: "Medium"
    },
    notes: {
        allies: null,
        personalPossessions: "",
        otherHoldings: null,
        organizations: null,
        enemies: null,
        backstory: "",
        otherNotes: null
    },
    traits: {
        personalityTraits: "Nothing can shake my optimistic attitude.",
        ideals: "Curiosity. I want to see and explore EVERYTHING!!!",
        bonds: "I idolize a hero of the old tales and measure my deeds against that person's.",
        flaws: "Blind to the value of coin.",
        appearance: null
    },
    preferences: {
        useHomebrewContent: true,
        progressionType: 1,
        encumbranceType: 1,
        ignoreCoinWeight: true,
        hitPointType: 1,
        showUnarmedStrike: true,
        showCompanions: false,
        showWildShape: false,
        primarySense: 5,
        primaryMovement: 1,
        privacyType: 1,
        sharingType: 2,
        abilityScoreDisplayType: 2
    },
    lifestyle: null,
    inventory: [],
    currencies: {
        cp: 0,
        sp: 0,
        gp: 0,
        ep: 0,
        pp: 0
    },
    classes: [{
        id: 5799231,
        level: 1,
        isStartingClass: true,
        hitDiceUsed: 0,
        definition: {
            id: 11,
            name: "Monk",
            description: "<p>A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection</p>\r\n<p class=\"characters-statblock\" style=\"font-family:Roboto Condensed;font-size:14px\"><strong>Hit Die:</strong> d8<br><strong>Primary Ability:</strong> Dexterity &amp; Wisdom<br><strong>Saves:</strong> Strength &amp; Dexterity</p>",
            equipmentDescription: "<p>You start with the following equipment, in addition to the equipment granted by your background:</p>\r\n<ul>\r\n<li>(<span>a</span>) a shortsword or (<span>b</span>) any simple weapon</li>\r\n<li>(<span>a</span>) a dungeoneer&rsquo;s pack or (<span>b</span>) an explorer&rsquo;s pack</li>\r\n<li>10 darts</li>\r\n</ul>",
            parentClassId: null,
            avatarUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/488/315/315/636274646181088338.png",
            largeAvatarUrl: "https://media-waterdeep.cursecdn.com/avatars/6/489/636274646181411106.png",
            portraitAvatarUrl: "https://media-waterdeep.cursecdn.com/avatars/10/5/636336417372349522.jpeg",
            moreDetailsUrl: "/characters/classes/monk",
            spellCastingAbilityId: null,
            sourceIds: [1],
            hitDice: 8,
            classFeatures: [{
                id: 536,
                name: "Hit Points",
                prerequisite: null,
                description: "<p><strong><span>Hit Dice:</span></strong> 1d8 p<span>er monk level<br></span><strong><span>Hit Points at 1st Level:</span></strong> 8 + your Constitu<span>tion modifier<br></span><strong><span>Hit Points at Higher Levels:</span></strong> 1d8 (or 5) + your Constitution modifier per monk le<span>vel after 1st</span></p>",
                requiredLevel: 1,
                displayOrder: 1
            }, {
                id: 464,
                name: "Proficiencies",
                prerequisite: null,
                description: "<p><strong><span>Armor: </span></strong>None<br><strong><span>Weapons: </span></strong>Simple weapons<span>, shortswords<br></span><strong><span>Tools: </span></strong>Choose one type of artisan&rsquo;s tools or one music<span>al instrument<br></span><strong><span>Saving Throws: </span></strong>Streng<span>th, Dexterity<br></span><strong><span>Skills:</span></strong> Choose two from Acrobatics, Athletics, History, Insight, Religion<span>, and Stealth</span></p>",
                requiredLevel: 1,
                displayOrder: 2
            }, {
                id: 226,
                name: "Unarmored Defense",
                prerequisite: null,
                description: "<p>Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wis<span>dom modifier.</span></p>",
                requiredLevel: 1,
                displayOrder: 3
            }, {
                id: 227,
                name: "Martial Arts",
                prerequisite: null,
                description: "<p>At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don&rsquo;t have the two-handed or he<span>avy property.</span></p>\r\n<p>You gain the following benefits while you are unarmed or wielding only monk weapons and you aren&rsquo;t wearing armor or wielding a shield:</p>\r\n<ul>\r\n<li>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.</li>\r\n<li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.</li>\r\n<li>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven&rsquo;t already taken a bonus action this turn.</li>\r\n</ul>\r\n<p>Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon in the <a href=\"https://www.dndbeyond.com/compendium/rules/basic-rules/equipment#Weapons\" rel=\"nofollow\">Weapons</a> section.</p>",
                requiredLevel: 1,
                displayOrder: 4
            }, {
                id: 228,
                name: "Ki",
                prerequisite: null,
                description: "<p>Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of th<span>e Monk table.</span></p>\r\n<p>You can spend these points to fuel various ki features. You start knowing three such features: <strong>Flurry of Blows</strong>, <strong>Patient Defense</strong>, and <strong>Step of the Wind</strong>. You learn more ki features as you gain levels i<span>n this class.</span></p>\r\n<p>When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain yo<span>ur ki points.</span></p>\r\n<p>Some of your ki features require your target to make a saving throw to resist the feature&rsquo;s effects. The saving throw DC is calculated as follows:</p>\r\n<p><strong><span>Ki save DC </span></strong>= 8 + your proficiency bonus + your Wisdom modifier</p>\r\n<h5>Flurry of Blows</h5>\r\n<p>Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a <span>bonus action.</span></p>\r\n<h5>Patient Defense</h5>\r\n<p>You can spend 1 ki point to take the Dodge action as a bonus action <span>on your turn.</span></p>\r\n<h5>Step of the Wind</h5>\r\n<p>You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled <span>for the turn.</span></p>",
                requiredLevel: 2,
                displayOrder: 5
            }, {
                id: 229,
                name: "Unarmored Movement",
                prerequisite: null,
                description: "<p>Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in th<span>e Monk table.</span></p>\r\n<p>At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling dur<span>ing the move.</span></p>",
                requiredLevel: 2,
                displayOrder: 6
            }, {
                id: 230,
                name: "Monastic Tradition",
                prerequisite: null,
                description: "<p>When you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, detailed at the end of the class description or one from another source. Your tradition grants you features at 3rd level and again at 6th, 11th, an<span>d 17th level.</span></p>",
                requiredLevel: 3,
                displayOrder: 7
            }, {
                id: 231,
                name: "Deflect Missiles",
                prerequisite: null,
                description: "<p>Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + you<span>r monk level.</span></p>\r\n<p>If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long rang<span>e of 60 feet.</span></p>",
                requiredLevel: 3,
                displayOrder: 8
            }, {
                id: 232,
                name: "Ability Score Improvement",
                prerequisite: null,
                description: "<p>When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can&rsquo;t increase an ability score above 20 using <span>this feature.</span></p>\r\n<p><span>Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.</span></p>",
                requiredLevel: 4,
                displayOrder: 9
            }, {
                id: 233,
                name: "Slow Fall",
                prerequisite: null,
                description: "<p>Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times you<span>r monk level.</span></p>",
                requiredLevel: 4,
                displayOrder: 10
            }, {
                id: 234,
                name: "Extra Attack",
                prerequisite: null,
                description: "<p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action <span>on your turn.</span></p>",
                requiredLevel: 5,
                displayOrder: 11
            }, {
                id: 235,
                name: "Stunning Strike",
                prerequisite: null,
                description: "<p>Starting at 5th level, you can interfere with the flow of ki in an opponent&rsquo;s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of yo<span>ur next turn.</span></p>",
                requiredLevel: 5,
                displayOrder: 12
            }, {
                id: 236,
                name: "Ki-Empowered Strikes",
                prerequisite: null,
                description: "<p>Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attack<span>s and damage.</span></p>",
                requiredLevel: 6,
                displayOrder: 13
            }, {
                id: 455,
                name: "Unarmored Movement",
                prerequisite: null,
                description: "<p>At 6th&nbsp;level, your Unarmored Speed speed bonus increases to 15&nbsp;feet while you are not wearing armor or wielding a shield.</p>",
                requiredLevel: 6,
                displayOrder: 14
            }, {
                id: 237,
                name: "Evasion",
                prerequisite: null,
                description: "<p>At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon&rsquo;s lightning breath or a <span>fireball</span> spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage<span> if you fail.</span></p>",
                requiredLevel: 7,
                displayOrder: 15
            }, {
                id: 238,
                name: "Stillness of Mind",
                prerequisite: null,
                description: "<p>Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed o<span>r frightened.</span></p>",
                requiredLevel: 7,
                displayOrder: 16
            }, {
                id: 246,
                name: "Ability Score Improvement",
                prerequisite: null,
                description: "<p>When you reach 8th level, and again at 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can&rsquo;t increase an ability score above 20 using <span>this feature.</span></p>\r\n<p><span>Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.</span></p>",
                requiredLevel: 8,
                displayOrder: 17
            }, {
                id: 245,
                name: "Unarmored Movement Improvement",
                prerequisite: null,
                description: "<p>At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling dur<span>ing your move.</span></p>",
                requiredLevel: 9,
                displayOrder: 18
            }, {
                id: 239,
                name: "Purity of Body",
                prerequisite: null,
                description: "<p>At 10th level, your mastery of the ki flowing through you makes you immune to diseas<span>e and poison.</span></p>",
                requiredLevel: 10,
                displayOrder: 19
            }, {
                id: 456,
                name: "Unarmored Movement",
                prerequisite: null,
                description: "<p>At 10th&nbsp;level, your Unarmored Speed speed bonus increases to 20&nbsp;feet while you are not wearing armor or wielding a shield.</p>",
                requiredLevel: 10,
                displayOrder: 20
            }, {
                id: 247,
                name: "Ability Score Improvement",
                prerequisite: null,
                description: "<p>When you reach 12th level, and again at 16th and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can&rsquo;t increase an ability score above 20 using <span>this feature.</span></p>\r\n<p><span>Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.</span></p>",
                requiredLevel: 12,
                displayOrder: 21
            }, {
                id: 240,
                name: "Tongue of the Sun and Moon",
                prerequisite: null,
                description: "<p>Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand <span>what you say.</span></p>",
                requiredLevel: 13,
                displayOrder: 22
            }, {
                id: 241,
                name: "Diamond Soul",
                prerequisite: null,
                description: "<p>Beginning at 14th level, your mastery of ki grants you proficiency in all s<span>aving throws.</span></p>\r\n<p>Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the s<span>econd result.</span></p>",
                requiredLevel: 14,
                displayOrder: 23
            }, {
                id: 457,
                name: "Unarmored Movement",
                prerequisite: null,
                description: "<p>At 14th&nbsp;level, your Unarmored Speed speed bonus increases to 25 feet while you are not wearing armor or wielding a shield.</p>",
                requiredLevel: 14,
                displayOrder: 24
            }, {
                id: 242,
                name: "Timeless Body",
                prerequisite: null,
                description: "<p>At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can&rsquo;t be aged magically. You can still die of old age, however. In addition, you no longer need f<span>ood or water.</span></p>",
                requiredLevel: 15,
                displayOrder: 25
            }, {
                id: 248,
                name: "Ability Score Improvement",
                prerequisite: null,
                description: "<p>When you reach 16th level, and again at 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can&rsquo;t increase an ability score above 20 using <span>this feature.</span></p>\r\n<p><span>Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.</span></p>",
                requiredLevel: 16,
                displayOrder: 26
            }, {
                id: 243,
                name: "Empty Body",
                prerequisite: null,
                description: "<p>Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but <span>force damage.</span></p>\r\n<p>Additionally, you can spend 8 ki points to cast the <span>astral projection</span> spell, without needing material components. When you do so, you can&rsquo;t take any other creatu<span>res with you.</span></p>",
                requiredLevel: 18,
                displayOrder: 27
            }, {
                id: 458,
                name: "Unarmored Movement",
                prerequisite: null,
                description: "<p>At 18th&nbsp;level, your Unarmored Speed speed bonus increases to 30&nbsp;feet while you are not wearing armor or wielding a shield.</p>",
                requiredLevel: 18,
                displayOrder: 28
            }, {
                id: 249,
                name: "Ability Score Improvement",
                prerequisite: null,
                description: "<p>When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can&rsquo;t increase an ability score above 20 using <span>this feature.</span></p>\r\n<p><span>Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.</span></p>",
                requiredLevel: 19,
                displayOrder: 29
            }, {
                id: 244,
                name: "Perfect Self",
                prerequisite: null,
                description: "<p>At 20th level, when you roll for initiative and have no ki points remaining, you regain<span> 4 ki points.</span></p>",
                requiredLevel: 20,
                displayOrder: 30
            }],
            wealthDice: {
                diceCount: 5,
                diceValue: 4,
                diceMultiplier: null,
                fixedValue: null,
                diceString: "5d4"
            },
            canCastSpells: false,
            knowsAllSpells: null,
            spellPrepareType: null,
            spellContainerName: null,
            sourceId: 1,
            sourcePageNumber: 76
        },
        subclassDefinition: null,
        classFeatures: [{
            definition: {
                id: 536,
                entityTypeId: 12168134,
                displayOrder: 1,
                name: "Hit Points",
                description: "<p><strong><span>Hit Dice:</span></strong> 1d8 p<span>er monk level<br></span><strong><span>Hit Points at 1st Level:</span></strong> 8 + your Constitu<span>tion modifier<br></span><strong><span>Hit Points at Higher Levels:</span></strong> 1d8 (or 5) + your Constitution modifier per monk le<span>vel after 1st</span></p>",
                snippet: null,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 1,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: true,
                sourceId: 2,
                sourcePageNumber: 77,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 464,
                entityTypeId: 12168134,
                displayOrder: 2,
                name: "Proficiencies",
                description: "<p><strong><span>Armor: </span></strong>None<br><strong><span>Weapons: </span></strong>Simple weapons<span>, shortswords<br></span><strong><span>Tools: </span></strong>Choose one type of artisan&rsquo;s tools or one music<span>al instrument<br></span><strong><span>Saving Throws: </span></strong>Streng<span>th, Dexterity<br></span><strong><span>Skills:</span></strong> Choose two from Acrobatics, Athletics, History, Insight, Religion<span>, and Stealth</span></p>",
                snippet: null,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "<p><strong><span>Weapons: </span></strong>Simple weapons<span>, shortswords</span></p>",
                requiredLevel: 1,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: true,
                sourceId: 2,
                sourcePageNumber: 77,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 226,
                entityTypeId: 12168134,
                displayOrder: 3,
                name: "Unarmored Defense",
                description: "<p>Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wis<span>dom modifier.</span></p>",
                snippet: "While not wearing armor and not using a shield, your AC equals 10 + DEX modifier + WIS modifier.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "<p><em>This feature could be affected by multiclassing</em>. See the <a href=\"https://www.dndbeyond.com/compendium/rules/basic-rules/customization-options#ClassFeatures\" rel=\"nofollow\">Multiclassing</a> rules for more information.</p>\r\n<p>Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wis<span>dom modifier.</span></p>",
                requiredLevel: 1,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 227,
                entityTypeId: 12168134,
                displayOrder: 4,
                name: "Martial Arts",
                description: "<p>At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don&rsquo;t have the two-handed or he<span>avy property.</span></p>\r\n<p>You gain the following benefits while you are unarmed or wielding only monk weapons and you aren&rsquo;t wearing armor or wielding a shield:</p>\r\n<ul>\r\n<li>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.</li>\r\n<li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.</li>\r\n<li>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven&rsquo;t already taken a bonus action this turn.</li>\r\n</ul>\r\n<p>Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon in the <a href=\"https://www.dndbeyond.com/compendium/rules/basic-rules/equipment#Weapons\" rel=\"nofollow\">Weapons</a> section.</p>",
                snippet: "While you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield, you can use DEX instead of STR for the attack and damage rolls, you can roll your Martial Arts damage die in place of the normal damage, and when you use the Attack action on your turn, you can make one unarmed strike as a bonus action.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 1,
                isSubClassFeature: false,
                limitedUse: [{
                    level: null,
                    uses: 1
                }],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: {
                id: 1,
                level: 1,
                description: "d4",
                dice: {
                    diceCount: 1,
                    diceValue: 4,
                    diceMultiplier: null,
                    fixedValue: null,
                    diceString: "1d4"
                },
                fixedValue: null
            }
        }, {
            definition: {
                id: 228,
                entityTypeId: 12168134,
                displayOrder: 5,
                name: "Ki",
                description: "<p>Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of th<span>e Monk table.</span></p>\r\n<p>You can spend these points to fuel various ki features. You start knowing three such features: <strong>Flurry of Blows</strong>, <strong>Patient Defense</strong>, and <strong>Step of the Wind</strong>. You learn more ki features as you gain levels i<span>n this class.</span></p>\r\n<p>When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain yo<span>ur ki points.</span></p>\r\n<p>Some of your ki features require your target to make a saving throw to resist the feature&rsquo;s effects. The saving throw DC is calculated as follows:</p>\r\n<p><strong><span>Ki save DC </span></strong>= 8 + your proficiency bonus + your Wisdom modifier</p>\r\n<h5>Flurry of Blows</h5>\r\n<p>Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a <span>bonus action.</span></p>\r\n<h5>Patient Defense</h5>\r\n<p>You can spend 1 ki point to take the Dodge action as a bonus action <span>on your turn.</span></p>\r\n<h5>Step of the Wind</h5>\r\n<p>You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled <span>for the turn.</span></p>",
                snippet: "You can spend Ki Points to fuel ki features. You have {{classlevel}} points per short rest and your Ki save DC is {{savedc:wis}}.\r\n\r\nFlurry of Blows - After you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.\r\n\r\nPatient Defense - You can spend 1 ki point to take the Dodge action as a bonus action on your turn.\r\n\r\nStep of the Wind - You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 2,
                isSubClassFeature: false,
                limitedUse: [{
                    level: 2,
                    uses: 2
                }, {
                    level: 3,
                    uses: 3
                }, {
                    level: 4,
                    uses: 4
                }, {
                    level: 5,
                    uses: 5
                }, {
                    level: 6,
                    uses: 6
                }, {
                    level: 7,
                    uses: 7
                }, {
                    level: 8,
                    uses: 8
                }, {
                    level: 9,
                    uses: 9
                }, {
                    level: 10,
                    uses: 10
                }, {
                    level: 11,
                    uses: 11
                }, {
                    level: 12,
                    uses: 12
                }, {
                    level: 13,
                    uses: 13
                }, {
                    level: 14,
                    uses: 14
                }, {
                    level: 15,
                    uses: 15
                }, {
                    level: 16,
                    uses: 16
                }, {
                    level: 17,
                    uses: 17
                }, {
                    level: 18,
                    uses: 18
                }, {
                    level: 19,
                    uses: 19
                }, {
                    level: 20,
                    uses: 20
                }, {
                    level: null,
                    uses: 1
                }, {
                    level: null,
                    uses: 1
                }, {
                    level: null,
                    uses: 1
                }],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 229,
                entityTypeId: 12168134,
                displayOrder: 6,
                name: "Unarmored Movement",
                description: "<p>Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in th<span>e Monk table.</span></p>\r\n<p>At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling dur<span>ing the move.</span></p>",
                snippet: "Your speed increases by 10 feet while you are not wearing armor or wielding a shield.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 2,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 230,
                entityTypeId: 12168134,
                displayOrder: 7,
                name: "Monastic Tradition",
                description: "<p>When you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, detailed at the end of the class description or one from another source. Your tradition grants you features at 3rd level and again at 6th, 11th, an<span>d 17th level.</span></p>",
                snippet: null,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 3,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 231,
                entityTypeId: 12168134,
                displayOrder: 8,
                name: "Deflect Missiles",
                description: "<p>Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + you<span>r monk level.</span></p>\r\n<p>If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long rang<span>e of 60 feet.</span></p>",
                snippet: "You can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + {{modifier:dex#unsigned}} + {{classlevel}}. If you reduce damage to 0 and have a free hand, you can spend 1 ki point to make a ranged attack (as with a monk weapon) with a range of 20/60.",
                activation: {
                    activationTime: 1,
                    activationType: 4
                },
                multiClassDescription: "",
                requiredLevel: 3,
                isSubClassFeature: false,
                limitedUse: [{
                    level: null,
                    uses: 1
                }, {
                    level: null,
                    uses: 1
                }],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 232,
                entityTypeId: 12168134,
                displayOrder: 9,
                name: "Ability Score Improvement",
                description: "<p>When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can&rsquo;t increase an ability score above 20 using <span>this feature.</span></p>\r\n<p><span>Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.</span></p>",
                snippet: null,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 4,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: true,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 233,
                entityTypeId: 12168134,
                displayOrder: 10,
                name: "Slow Fall",
                description: "<p>Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times you<span>r monk level.</span></p>",
                snippet: "You can use your reaction when you fall to reduce any falling damage you take by {{classlevel*5}}.",
                activation: {
                    activationTime: 1,
                    activationType: 4
                },
                multiClassDescription: "",
                requiredLevel: 4,
                isSubClassFeature: false,
                limitedUse: [{
                    level: null,
                    uses: 1
                }],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 234,
                entityTypeId: 12168134,
                displayOrder: 11,
                name: "Extra Attack",
                description: "<p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action <span>on your turn.</span></p>",
                snippet: "You can attack twice, instead of once, whenever you take the Attack action on your turn.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "<p><em>This feature could be affected by multiclassing</em>. See the <a href=\"https://www.dndbeyond.com/compendium/rules/basic-rules/customization-options#ClassFeatures\" rel=\"nofollow\">Multiclassing</a> rules for more information.</p>\r\n<p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action <span>on your turn.</span></p>",
                requiredLevel: 5,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 79,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 235,
                entityTypeId: 12168134,
                displayOrder: 12,
                name: "Stunning Strike",
                description: "<p>Starting at 5th level, you can interfere with the flow of ki in an opponent&rsquo;s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of yo<span>ur next turn.</span></p>",
                snippet: "When you hit with a melee weapon attack, you can spend 1 ki point to make the target stunned until the end of your next turn if it fails a CON saving throw (DC {{savedc:wis}}).",
                activation: {
                    activationTime: null,
                    activationType: 8
                },
                multiClassDescription: "",
                requiredLevel: 5,
                isSubClassFeature: false,
                limitedUse: [{
                    level: null,
                    uses: 1
                }],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 79,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 236,
                entityTypeId: 12168134,
                displayOrder: 13,
                name: "Ki-Empowered Strikes",
                description: "<p>Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attack<span>s and damage.</span></p>",
                snippet: "Your unarmed strikes count as magical for the purpose of overcoming resistance and immunity.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 6,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 79,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 455,
                entityTypeId: 12168134,
                displayOrder: 14,
                name: "Unarmored Movement",
                description: "<p>At 6th&nbsp;level, your Unarmored Speed speed bonus increases to 15&nbsp;feet while you are not wearing armor or wielding a shield.</p>",
                snippet: "Your speed increases by 15 feet while you are not wearing armor or wielding a shield.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 6,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 237,
                entityTypeId: 12168134,
                displayOrder: 15,
                name: "Evasion",
                description: "<p>At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon&rsquo;s lightning breath or a <span>fireball</span> spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage<span> if you fail.</span></p>",
                snippet: "When you are subjected to an effect that allows you to make a DEX saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 7,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 79,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 238,
                entityTypeId: 12168134,
                displayOrder: 16,
                name: "Stillness of Mind",
                description: "<p>Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed o<span>r frightened.</span></p>",
                snippet: "You can use an action to end one effect on yourself that is causing you to be charmed or frightened.",
                activation: {
                    activationTime: 1,
                    activationType: 1
                },
                multiClassDescription: "",
                requiredLevel: 7,
                isSubClassFeature: false,
                limitedUse: [{
                    level: null,
                    uses: 1
                }],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 79,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 246,
                entityTypeId: 12168134,
                displayOrder: 17,
                name: "Ability Score Improvement",
                description: "<p>When you reach 8th level, and again at 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can&rsquo;t increase an ability score above 20 using <span>this feature.</span></p>\r\n<p><span>Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.</span></p>",
                snippet: null,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 8,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: true,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 245,
                entityTypeId: 12168134,
                displayOrder: 18,
                name: "Unarmored Movement Improvement",
                description: "<p>At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling dur<span>ing your move.</span></p>",
                snippet: "You can move along vertical surfaces and across liquids on your turn without falling during the move.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 9,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 239,
                entityTypeId: 12168134,
                displayOrder: 19,
                name: "Purity of Body",
                description: "<p>At 10th level, your mastery of the ki flowing through you makes you immune to diseas<span>e and poison.</span></p>",
                snippet: "You are immune to disease and poison.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 10,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: null,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 456,
                entityTypeId: 12168134,
                displayOrder: 20,
                name: "Unarmored Movement",
                description: "<p>At 10th&nbsp;level, your Unarmored Speed speed bonus increases to 20&nbsp;feet while you are not wearing armor or wielding a shield.</p>",
                snippet: "Your speed increases by 20 feet while you are not wearing armor or wielding a shield.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 10,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 247,
                entityTypeId: 12168134,
                displayOrder: 21,
                name: "Ability Score Improvement",
                description: "<p>When you reach 12th level, and again at 16th and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can&rsquo;t increase an ability score above 20 using <span>this feature.</span></p>\r\n<p><span>Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.</span></p>",
                snippet: null,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 12,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: true,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 240,
                entityTypeId: 12168134,
                displayOrder: 22,
                name: "Tongue of the Sun and Moon",
                description: "<p>Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand <span>what you say.</span></p>",
                snippet: "You understand all spoken languages and any creature that can understand a language can understand what you say.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 13,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 79,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 241,
                entityTypeId: 12168134,
                displayOrder: 23,
                name: "Diamond Soul",
                description: "<p>Beginning at 14th level, your mastery of ki grants you proficiency in all s<span>aving throws.</span></p>\r\n<p>Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the s<span>econd result.</span></p>",
                snippet: "You are proficient in all saving throws and whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 14,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 79,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 457,
                entityTypeId: 12168134,
                displayOrder: 24,
                name: "Unarmored Movement",
                description: "<p>At 14th&nbsp;level, your Unarmored Speed speed bonus increases to 25 feet while you are not wearing armor or wielding a shield.</p>",
                snippet: "Your speed increases by 25 feet while you are not wearing armor or wielding a shield.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 14,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 242,
                entityTypeId: 12168134,
                displayOrder: 25,
                name: "Timeless Body",
                description: "<p>At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can&rsquo;t be aged magically. You can still die of old age, however. In addition, you no longer need f<span>ood or water.</span></p>",
                snippet: "You no longer need food or water, and can't be aged magically or suffer effects of old age (though you can still die of it).",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 15,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 79,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 248,
                entityTypeId: 12168134,
                displayOrder: 26,
                name: "Ability Score Improvement",
                description: "<p>When you reach 16th level, and again at 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can&rsquo;t increase an ability score above 20 using <span>this feature.</span></p>\r\n<p><span>Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.</span></p>",
                snippet: null,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 16,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: true,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 243,
                entityTypeId: 12168134,
                displayOrder: 27,
                name: "Empty Body",
                description: "<p>Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but <span>force damage.</span></p>\r\n<p>Additionally, you can spend 8 ki points to cast the <span>astral projection</span> spell, without needing material components. When you do so, you can&rsquo;t take any other creatu<span>res with you.</span></p>",
                snippet: "You can spend 4 ki points to become invisible and gain resistance to all damage but force damage for 1 minute as an action. You can spend 8 ki points to cast the astral projection spell (for yourself only), without needing material components.",
                activation: {
                    activationTime: 1,
                    activationType: 1
                },
                multiClassDescription: "",
                requiredLevel: 18,
                isSubClassFeature: false,
                limitedUse: [{
                    level: null,
                    uses: 1
                }],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 79,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 458,
                entityTypeId: 12168134,
                displayOrder: 28,
                name: "Unarmored Movement",
                description: "<p>At 18th&nbsp;level, your Unarmored Speed speed bonus increases to 30&nbsp;feet while you are not wearing armor or wielding a shield.</p>",
                snippet: "Your speed increases by 30 feet while you are not wearing armor or wielding a shield.",
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 18,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 249,
                entityTypeId: 12168134,
                displayOrder: 29,
                name: "Ability Score Improvement",
                description: "<p>When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can&rsquo;t increase an ability score above 20 using <span>this feature.</span></p>\r\n<p><span>Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.</span></p>",
                snippet: null,
                activation: {
                    activationTime: null,
                    activationType: null
                },
                multiClassDescription: "",
                requiredLevel: 19,
                isSubClassFeature: false,
                limitedUse: [],
                hideInBuilder: false,
                hideInSheet: true,
                sourceId: 2,
                sourcePageNumber: 78,
                creatureRules: []
            },
            levelScale: null
        }, {
            definition: {
                id: 244,
                entityTypeId: 12168134,
                displayOrder: 30,
                name: "Perfect Self",
                description: "<p>At 20th level, when you roll for initiative and have no ki points remaining, you regain<span> 4 ki points.</span></p>",
                snippet: "When you roll for initiative and have no ki points remaining, you regain 4 ki points.",
                activation: {
                    activationTime: null,
                    activationType: 8
                },
                multiClassDescription: "",
                requiredLevel: 20,
                isSubClassFeature: false,
                limitedUse: [{
                    level: null,
                    uses: 1
                }],
                hideInBuilder: false,
                hideInSheet: false,
                sourceId: 2,
                sourcePageNumber: 79,
                creatureRules: []
            },
            levelScale: null
        }]
    }],
    feats: [],
    customDefenseAdjustments: [],
    customSenses: [],
    customSpeeds: [],
    customProficiencies: [],
    spellDefenses: null,
    customActions: [],
    characterValues: [],
    conditions: [],
    deathSaves: {
        failCount: null,
        successCount: null,
        isStabilized: false
    },
    adjustmentXp: null,
    spellSlots: [{
        level: 1,
        used: 0,
        available: 0
    }, {
        level: 2,
        used: 0,
        available: 0
    }, {
        level: 3,
        used: 0,
        available: 0
    }, {
        level: 4,
        used: 0,
        available: 0
    }, {
        level: 5,
        used: 0,
        available: 0
    }, {
        level: 6,
        used: 0,
        available: 0
    }, {
        level: 7,
        used: 0,
        available: 0
    }, {
        level: 8,
        used: 0,
        available: 0
    }, {
        level: 9,
        used: 0,
        available: 0
    }],
    pactMagic: [{
        level: 1,
        used: 0,
        available: 0
    }, {
        level: 2,
        used: 0,
        available: 0
    }, {
        level: 3,
        used: 0,
        available: 0
    }, {
        level: 4,
        used: 0,
        available: 0
    }, {
        level: 5,
        used: 0,
        available: 0
    }],
    activeSourceCategories: [1, 2, 3, 8],
    spells: {
        race: [],
        class: [],
        item: [],
        feat: []
    },
    options: {
        race: [],
        class: [],
        feat: []
    },
    choices: {
        race: [{
            id: "2-4157062",
            parentChoiceId: null,
            type: 2,
            subType: 3,
            optionValue: 4055,
            label: "Choose a Language",
            isOptional: false,
            isInfinite: false,
            defaultSubtypes: [],
            options: [{
                id: 4045,
                label: "Abyssal",
                description: null
            }, {
                id: 4049,
                label: "Celestial",
                description: null
            }, {
                id: 4050,
                label: "Common",
                description: null
            }, {
                id: 4051,
                label: "Deep Speech",
                description: null
            }, {
                id: 4052,
                label: "Draconic",
                description: null
            }, {
                id: 4054,
                label: "Dwarvish",
                description: null
            }, {
                id: 4055,
                label: "Elvish",
                description: null
            }, {
                id: 4056,
                label: "Giant",
                description: null
            }, {
                id: 5064,
                label: "Gith",
                description: null
            }, {
                id: 4061,
                label: "Gnomish",
                description: null
            }, {
                id: 4062,
                label: "Goblin",
                description: null
            }, {
                id: 4063,
                label: "Halfling",
                description: null
            }, {
                id: 4065,
                label: "Infernal",
                description: null
            }, {
                id: 5110,
                label: "Kraul",
                description: null
            }, {
                id: 5109,
                label: "Loxodon",
                description: null
            }, {
                id: 5108,
                label: "Minotaur",
                description: null
            }, {
                id: 4066,
                label: "Orc",
                description: null
            }, {
                id: 4068,
                label: "Primordial",
                description: null
            }, {
                id: 4071,
                label: "Sylvan",
                description: null
            }, {
                id: 4074,
                label: "Undercommon",
                description: null
            }, {
                id: 5111,
                label: "Vedalken",
                description: null
            }],
            componentId: 588439,
            componentTypeId: 1960452172
        }],
        class: [{
            id: "2-1535",
            parentChoiceId: null,
            type: 2,
            subType: 1,
            optionValue: 4222,
            label: "Choose a Musical Instrument or Artisan's Tools",
            isOptional: false,
            isInfinite: false,
            defaultSubtypes: [],
            options: [{
                id: 4229,
                label: "Alchemist's Supplies",
                description: null
            }, {
                id: 4219,
                label: "Bagpipes",
                description: null
            }, {
                id: 4230,
                label: "Brewer's Supplies",
                description: null
            }, {
                id: 4231,
                label: "Calligrapher's Supplies",
                description: null
            }, {
                id: 4232,
                label: "Carpenter's Tools",
                description: null
            }, {
                id: 4233,
                label: "Cartographer's Tools",
                description: null
            }, {
                id: 4234,
                label: "Cobbler's Tools",
                description: null
            }, {
                id: 4235,
                label: "Cook's Utensils",
                description: null
            }, {
                id: 4220,
                label: "Drum",
                description: null
            }, {
                id: 4221,
                label: "Dulcimer",
                description: null
            }, {
                id: 4222,
                label: "Flute",
                description: null
            }, {
                id: 4236,
                label: "Glassblower's Tools",
                description: null
            }, {
                id: 4225,
                label: "Horn",
                description: null
            }, {
                id: 4237,
                label: "Jeweler's Tools",
                description: null
            }, {
                id: 4238,
                label: "Leatherworker's Tools",
                description: null
            }, {
                id: 4223,
                label: "Lute",
                description: null
            }, {
                id: 4224,
                label: "Lyre",
                description: null
            }, {
                id: 4239,
                label: "Mason's Tools",
                description: null
            }, {
                id: 4240,
                label: "Painter's Supplies",
                description: null
            }, {
                id: 4226,
                label: "Pan Flute",
                description: null
            }, {
                id: 4241,
                label: "Potter's Tools",
                description: null
            }, {
                id: 4227,
                label: "Shawm",
                description: null
            }, {
                id: 4242,
                label: "Smith's Tools",
                description: null
            }, {
                id: 4243,
                label: "Tinker's Tools",
                description: null
            }, {
                id: 4228,
                label: "Viol",
                description: null
            }, {
                id: 4244,
                label: "Weaver's Tools",
                description: null
            }, {
                id: 4245,
                label: "Woodcarver's Tools",
                description: null
            }],
            componentId: 464,
            componentTypeId: 12168134
        }, {
            id: "2-1538",
            parentChoiceId: null,
            type: 2,
            subType: 1,
            optionValue: 4117,
            label: "Choose a Monk Skill",
            isOptional: false,
            isInfinite: false,
            defaultSubtypes: [],
            options: [{
                id: 4117,
                label: "Acrobatics",
                description: null
            }, {
                id: 4118,
                label: "Athletics",
                description: null
            }, {
                id: 4119,
                label: "History",
                description: null
            }, {
                id: 4120,
                label: "Insight",
                description: null
            }, {
                id: 4121,
                label: "Religion",
                description: null
            }, {
                id: 4122,
                label: "Stealth",
                description: null
            }],
            componentId: 464,
            componentTypeId: 12168134
        }, {
            id: "2-1539",
            parentChoiceId: null,
            type: 2,
            subType: 1,
            optionValue: 4118,
            label: "Choose a Monk Skill",
            isOptional: false,
            isInfinite: false,
            defaultSubtypes: [],
            options: [{
                id: 4117,
                label: "Acrobatics",
                description: null
            }, {
                id: 4118,
                label: "Athletics",
                description: null
            }, {
                id: 4119,
                label: "History",
                description: null
            }, {
                id: 4120,
                label: "Insight",
                description: null
            }, {
                id: 4121,
                label: "Religion",
                description: null
            }, {
                id: 4122,
                label: "Stealth",
                description: null
            }],
            componentId: 464,
            componentTypeId: 12168134
        }],
        background: [{
            id: "2-4131037",
            parentChoiceId: null,
            type: 2,
            subType: 3,
            optionValue: 4050,
            label: "Choose a Language",
            isOptional: false,
            isInfinite: false,
            defaultSubtypes: ["Common"],
            options: [{
                id: 4045,
                label: "Abyssal",
                description: null
            }, {
                id: 4049,
                label: "Celestial",
                description: null
            }, {
                id: 4050,
                label: "Common",
                description: null
            }, {
                id: 4051,
                label: "Deep Speech",
                description: null
            }, {
                id: 4052,
                label: "Draconic",
                description: null
            }, {
                id: 4054,
                label: "Dwarvish",
                description: null
            }, {
                id: 4055,
                label: "Elvish",
                description: null
            }, {
                id: 4056,
                label: "Giant",
                description: null
            }, {
                id: 5064,
                label: "Gith",
                description: null
            }, {
                id: 4061,
                label: "Gnomish",
                description: null
            }, {
                id: 4062,
                label: "Goblin",
                description: null
            }, {
                id: 4063,
                label: "Halfling",
                description: null
            }, {
                id: 4065,
                label: "Infernal",
                description: null
            }, {
                id: 5110,
                label: "Kraul",
                description: null
            }, {
                id: 5109,
                label: "Loxodon",
                description: null
            }, {
                id: 5108,
                label: "Minotaur",
                description: null
            }, {
                id: 4066,
                label: "Orc",
                description: null
            }, {
                id: 4068,
                label: "Primordial",
                description: null
            }, {
                id: 4071,
                label: "Sylvan",
                description: null
            }, {
                id: 4074,
                label: "Undercommon",
                description: null
            }, {
                id: 5111,
                label: "Vedalken",
                description: null
            }],
            componentId: 24186,
            componentTypeId: 1669830167
        }, {
            id: "2-4130974",
            parentChoiceId: null,
            type: 2,
            subType: 1,
            optionValue: 3794,
            label: "Choose a Skill",
            isOptional: false,
            isInfinite: false,
            defaultSubtypes: ["Athletics", "Acrobatics", "Medicine", "Survival"],
            options: [{
                id: 3784,
                label: "Acrobatics",
                description: null
            }, {
                id: 3792,
                label: "Animal Handling",
                description: null
            }, {
                id: 3787,
                label: "Arcana",
                description: null
            }, {
                id: 3783,
                label: "Athletics",
                description: null
            }, {
                id: 3797,
                label: "Deception",
                description: null
            }, {
                id: 3788,
                label: "History",
                description: null
            }, {
                id: 3793,
                label: "Insight",
                description: null
            }, {
                id: 3798,
                label: "Intimidation",
                description: null
            }, {
                id: 3789,
                label: "Investigation",
                description: null
            }, {
                id: 3794,
                label: "Medicine",
                description: null
            }, {
                id: 3790,
                label: "Nature",
                description: null
            }, {
                id: 3795,
                label: "Perception",
                description: null
            }, {
                id: 3799,
                label: "Performance",
                description: null
            }, {
                id: 3800,
                label: "Persuasion",
                description: null
            }, {
                id: 3791,
                label: "Religion",
                description: null
            }, {
                id: 3785,
                label: "Sleight of Hand",
                description: null
            }, {
                id: 3786,
                label: "Stealth",
                description: null
            }, {
                id: 3796,
                label: "Survival",
                description: null
            }],
            componentId: 24186,
            componentTypeId: 1669830167
        }, {
            id: "2-4130982",
            parentChoiceId: null,
            type: 2,
            subType: 1,
            optionValue: 3796,
            label: "Choose a Skill",
            isOptional: false,
            isInfinite: false,
            defaultSubtypes: ["Athletics", "Acrobatics", "Medicine", "Survival"],
            options: [{
                id: 3784,
                label: "Acrobatics",
                description: null
            }, {
                id: 3792,
                label: "Animal Handling",
                description: null
            }, {
                id: 3787,
                label: "Arcana",
                description: null
            }, {
                id: 3783,
                label: "Athletics",
                description: null
            }, {
                id: 3797,
                label: "Deception",
                description: null
            }, {
                id: 3788,
                label: "History",
                description: null
            }, {
                id: 3793,
                label: "Insight",
                description: null
            }, {
                id: 3798,
                label: "Intimidation",
                description: null
            }, {
                id: 3789,
                label: "Investigation",
                description: null
            }, {
                id: 3794,
                label: "Medicine",
                description: null
            }, {
                id: 3790,
                label: "Nature",
                description: null
            }, {
                id: 3795,
                label: "Perception",
                description: null
            }, {
                id: 3799,
                label: "Performance",
                description: null
            }, {
                id: 3800,
                label: "Persuasion",
                description: null
            }, {
                id: 3791,
                label: "Religion",
                description: null
            }, {
                id: 3785,
                label: "Sleight of Hand",
                description: null
            }, {
                id: 3786,
                label: "Stealth",
                description: null
            }, {
                id: 3796,
                label: "Survival",
                description: null
            }],
            componentId: 24186,
            componentTypeId: 1669830167
        }, {
            id: "2-4130980",
            parentChoiceId: null,
            type: 2,
            subType: 1,
            optionValue: 3949,
            label: "Choose a Tool",
            isOptional: false,
            isInfinite: false,
            defaultSubtypes: ["Herbalism Kit", "Poisoner's Kit"],
            options: [{
                id: 3930,
                label: "Alchemist's Supplies",
                description: null
            }, {
                id: 3955,
                label: "Bagpipes",
                description: null
            }, {
                id: 3931,
                label: "Brewer's Supplies",
                description: null
            }, {
                id: 3932,
                label: "Calligrapher's Supplies",
                description: null
            }, {
                id: 3933,
                label: "Carpenter's Tools",
                description: null
            }, {
                id: 3934,
                label: "Cartographer's Tools",
                description: null
            }, {
                id: 3935,
                label: "Cobbler's Tools",
                description: null
            }, {
                id: 3936,
                label: "Cook's Utensils",
                description: null
            }, {
                id: 3953,
                label: "Dice Set",
                description: null
            }, {
                id: 3947,
                label: "Disguise Kit",
                description: null
            }, {
                id: 4377,
                label: "Dragonchess Set",
                description: null
            }, {
                id: 3956,
                label: "Drum",
                description: null
            }, {
                id: 3957,
                label: "Dulcimer",
                description: null
            }, {
                id: 3958,
                label: "Flute",
                description: null
            }, {
                id: 3948,
                label: "Forgery Kit",
                description: null
            }, {
                id: 3937,
                label: "Glassblower's Tools",
                description: null
            }, {
                id: 3949,
                label: "Herbalism Kit",
                description: null
            }, {
                id: 3961,
                label: "Horn",
                description: null
            }, {
                id: 3938,
                label: "Jeweler's Tools",
                description: null
            }, {
                id: 3939,
                label: "Leatherworker's Tools",
                description: null
            }, {
                id: 3959,
                label: "Lute",
                description: null
            }, {
                id: 3960,
                label: "Lyre",
                description: null
            }, {
                id: 3940,
                label: "Mason's Tools",
                description: null
            }, {
                id: 3950,
                label: "Navigator's Tools",
                description: null
            }, {
                id: 3941,
                label: "Painter's Supplies",
                description: null
            }, {
                id: 3962,
                label: "Pan Flute",
                description: null
            }, {
                id: 3954,
                label: "Playing Card Set",
                description: null
            }, {
                id: 3951,
                label: "Poisoner's Kit",
                description: null
            }, {
                id: 3942,
                label: "Potter's Tools",
                description: null
            }, {
                id: 3963,
                label: "Shawm",
                description: null
            }, {
                id: 3943,
                label: "Smith's Tools",
                description: null
            }, {
                id: 3952,
                label: "Thieves' Tools",
                description: null
            }, {
                id: 4378,
                label: "Three-Dragon Ante Set",
                description: null
            }, {
                id: 3944,
                label: "Tinker's Tools",
                description: null
            }, {
                id: 4345,
                label: "Vehicles (Land)",
                description: null
            }, {
                id: 5080,
                label: "Vehicles (Sea/Air)",
                description: null
            }, {
                id: 4346,
                label: "Vehicles (Water)",
                description: null
            }, {
                id: 3964,
                label: "Viol",
                description: null
            }, {
                id: 3945,
                label: "Weaver's Tools",
                description: null
            }, {
                id: 3946,
                label: "Woodcarver's Tools",
                description: null
            }],
            componentId: 24186,
            componentTypeId: 1669830167
        }, {
            id: "2-4131030",
            parentChoiceId: null,
            type: 2,
            subType: 1,
            optionValue: 3951,
            label: "Choose a Tool",
            isOptional: false,
            isInfinite: false,
            defaultSubtypes: ["Herbalism Kit", "Poisoner's Kit"],
            options: [{
                id: 3930,
                label: "Alchemist's Supplies",
                description: null
            }, {
                id: 3955,
                label: "Bagpipes",
                description: null
            }, {
                id: 3931,
                label: "Brewer's Supplies",
                description: null
            }, {
                id: 3932,
                label: "Calligrapher's Supplies",
                description: null
            }, {
                id: 3933,
                label: "Carpenter's Tools",
                description: null
            }, {
                id: 3934,
                label: "Cartographer's Tools",
                description: null
            }, {
                id: 3935,
                label: "Cobbler's Tools",
                description: null
            }, {
                id: 3936,
                label: "Cook's Utensils",
                description: null
            }, {
                id: 3953,
                label: "Dice Set",
                description: null
            }, {
                id: 3947,
                label: "Disguise Kit",
                description: null
            }, {
                id: 4377,
                label: "Dragonchess Set",
                description: null
            }, {
                id: 3956,
                label: "Drum",
                description: null
            }, {
                id: 3957,
                label: "Dulcimer",
                description: null
            }, {
                id: 3958,
                label: "Flute",
                description: null
            }, {
                id: 3948,
                label: "Forgery Kit",
                description: null
            }, {
                id: 3937,
                label: "Glassblower's Tools",
                description: null
            }, {
                id: 3949,
                label: "Herbalism Kit",
                description: null
            }, {
                id: 3961,
                label: "Horn",
                description: null
            }, {
                id: 3938,
                label: "Jeweler's Tools",
                description: null
            }, {
                id: 3939,
                label: "Leatherworker's Tools",
                description: null
            }, {
                id: 3959,
                label: "Lute",
                description: null
            }, {
                id: 3960,
                label: "Lyre",
                description: null
            }, {
                id: 3940,
                label: "Mason's Tools",
                description: null
            }, {
                id: 3950,
                label: "Navigator's Tools",
                description: null
            }, {
                id: 3941,
                label: "Painter's Supplies",
                description: null
            }, {
                id: 3962,
                label: "Pan Flute",
                description: null
            }, {
                id: 3954,
                label: "Playing Card Set",
                description: null
            }, {
                id: 3951,
                label: "Poisoner's Kit",
                description: null
            }, {
                id: 3942,
                label: "Potter's Tools",
                description: null
            }, {
                id: 3963,
                label: "Shawm",
                description: null
            }, {
                id: 3943,
                label: "Smith's Tools",
                description: null
            }, {
                id: 3952,
                label: "Thieves' Tools",
                description: null
            }, {
                id: 4378,
                label: "Three-Dragon Ante Set",
                description: null
            }, {
                id: 3944,
                label: "Tinker's Tools",
                description: null
            }, {
                id: 4345,
                label: "Vehicles (Land)",
                description: null
            }, {
                id: 5080,
                label: "Vehicles (Sea/Air)",
                description: null
            }, {
                id: 4346,
                label: "Vehicles (Water)",
                description: null
            }, {
                id: 3964,
                label: "Viol",
                description: null
            }, {
                id: 3945,
                label: "Weaver's Tools",
                description: null
            }, {
                id: 3946,
                label: "Woodcarver's Tools",
                description: null
            }],
            componentId: 24186,
            componentTypeId: 1669830167
        }],
        feat: []
    },
    actions: {
        race: [],
        class: [{
            id: 55399,
            entityTypeId: 222216831,
            limitedUse: null,
            name: "Unarmed Strike",
            description: "<p>Bonus action, when you use the [action]Attack[/action] action with an unarmed strike or a monk weapon.</p>",
            snippet: "When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action.",
            abilityModifierStatId: null,
            onMissDescription: "",
            saveFailDescription: "",
            saveSuccessDescription: "",
            saveStatId: null,
            fixedSaveDc: null,
            attackTypeRange: 1,
            actionType: 1,
            attackSubtype: 3,
            dice: null,
            value: 1,
            damageTypeId: 1,
            isMartialArts: true,
            isProficient: true,
            spellRangeType: null,
            displayAsAttack: true,
            range: {
                range: null,
                longRange: null,
                aoeType: null,
                aoeSize: null,
                hasAoeSpecialDescription: false
            },
            activation: {
                activationTime: null,
                activationType: 3
            },
            attackCustomData: {
                name: null,
                notes: null,
                damageBonus: null,
                toHitBonus: null,
                toHit: null,
                isOffhand: null,
                isSilver: null,
                isAdamantine: null,
                isProficient: null,
                saveDcBonus: null,
                saveDc: null,
                weight: null,
                displayAsAttack: null,
                cost: null
            },
            componentId: 227,
            componentTypeId: 12168134
        }],
        feat: []
    },
    modifiers: {
        race: [{
            id: "racialTrait_588347_4156902",
            entityId: 2,
            entityTypeId: 1472902489,
            type: "bonus",
            subType: "dexterity-score",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Bonus",
            friendlySubtypeName: "Dexterity Score",
            isGranted: true,
            bonusTypes: [],
            value: 2,
            componentId: 588347,
            componentTypeId: 1960452172
        }, {
            id: "racialTrait_588393_4157011",
            entityId: 2,
            entityTypeId: 668550506,
            type: "sense",
            subType: "darkvision",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Sense",
            friendlySubtypeName: "Darkvision",
            isGranted: true,
            bonusTypes: [],
            value: 60,
            componentId: 588393,
            componentTypeId: 1960452172
        }, {
            id: "racialTrait_588415_4157034",
            entityId: 5,
            entityTypeId: 1958004211,
            type: "proficiency",
            subType: "stealth",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Stealth",
            isGranted: true,
            bonusTypes: [],
            value: null,
            componentId: 588415,
            componentTypeId: 1960452172
        }, {
            id: "racialTrait_588439_4157060",
            entityId: 1,
            entityTypeId: 906033267,
            type: "language",
            subType: "common",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Language",
            friendlySubtypeName: "Common",
            isGranted: true,
            bonusTypes: [],
            value: null,
            componentId: 588439,
            componentTypeId: 1960452172
        }, {
            id: "racialTrait_588439_4157062",
            entityId: 3,
            entityTypeId: 906033267,
            type: "language",
            subType: "elvish",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Language",
            friendlySubtypeName: "Elvish",
            isGranted: false,
            bonusTypes: [],
            value: null,
            componentId: 588439,
            componentTypeId: 1960452172
        }, {
            id: "racialTrait_588441_4157073",
            entityId: 5,
            entityTypeId: 1472902489,
            type: "bonus",
            subType: "wisdom-score",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Bonus",
            friendlySubtypeName: "Wisdom Score",
            isGranted: true,
            bonusTypes: [],
            value: 1,
            componentId: 588441,
            componentTypeId: 1960452172
        }, {
            id: "racialTrait_588446_4157085",
            entityId: 3,
            entityTypeId: 1782728300,
            type: "proficiency",
            subType: "dagger",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Dagger",
            isGranted: true,
            bonusTypes: [],
            value: null,
            componentId: 588446,
            componentTypeId: 1960452172
        }, {
            id: "racialTrait_588446_4157086",
            entityId: 17,
            entityTypeId: 1782728300,
            type: "proficiency",
            subType: "shortbow",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Shortbow",
            isGranted: true,
            bonusTypes: [],
            value: null,
            componentId: 588446,
            componentTypeId: 1960452172
        }, {
            id: "racialTrait_588449_4157092",
            entityId: null,
            entityTypeId: null,
            type: "set",
            subType: "innate-speed-walking",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Set",
            friendlySubtypeName: "Innate Speed (Walking)",
            isGranted: true,
            bonusTypes: [],
            value: 35,
            componentId: 588449,
            componentTypeId: 1960452172
        }, {
            id: "racialTrait_588415_4180644",
            entityId: 9,
            entityTypeId: 1958004211,
            type: "advantage",
            subType: "nature",
            dice: null,
            restriction: "Beasts Previously Seen",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Advantage",
            friendlySubtypeName: "Nature",
            isGranted: true,
            bonusTypes: [],
            value: null,
            componentId: 588415,
            componentTypeId: 1960452172
        }, {
            id: "racialTrait_588415_4180658",
            entityId: 15,
            entityTypeId: 1958004211,
            type: "advantage",
            subType: "survival",
            dice: null,
            restriction: "Tracking Beast Previously Seen",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Advantage",
            friendlySubtypeName: "Survival",
            isGranted: true,
            bonusTypes: [],
            value: null,
            componentId: 588415,
            componentTypeId: 1960452172
        }],
        class: [{
            id: "classFeature_464_1533",
            entityId: 1,
            entityTypeId: 660121713,
            type: "proficiency",
            subType: "simple-weapons",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Simple Weapons",
            isGranted: true,
            bonusTypes: [],
            value: null,
            componentId: 464,
            componentTypeId: 12168134
        }, {
            id: "classFeature_464_1534",
            entityId: 30,
            entityTypeId: 1782728300,
            type: "proficiency",
            subType: "shortsword",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Shortsword",
            isGranted: true,
            bonusTypes: [],
            value: null,
            componentId: 464,
            componentTypeId: 12168134
        }, {
            id: "classFeature_464_1535",
            entityId: 130,
            entityTypeId: 2103445194,
            type: "proficiency",
            subType: "flute",
            dice: null,
            restriction: "Choose one type of artisan’s tools or one musical instrument",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Flute",
            isGranted: false,
            bonusTypes: [],
            value: null,
            componentId: 464,
            componentTypeId: 12168134
        }, {
            id: "classFeature_464_1536",
            entityId: null,
            entityTypeId: null,
            type: "proficiency",
            subType: "strength-saving-throws",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Strength Saving Throws",
            isGranted: true,
            bonusTypes: [],
            value: null,
            componentId: 464,
            componentTypeId: 12168134
        }, {
            id: "classFeature_464_1537",
            entityId: null,
            entityTypeId: null,
            type: "proficiency",
            subType: "dexterity-saving-throws",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Dexterity Saving Throws",
            isGranted: true,
            bonusTypes: [],
            value: null,
            componentId: 464,
            componentTypeId: 12168134
        }, {
            id: "classFeature_464_1538",
            entityId: 3,
            entityTypeId: 1958004211,
            type: "proficiency",
            subType: "acrobatics",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Acrobatics",
            isGranted: false,
            bonusTypes: [],
            value: null,
            componentId: 464,
            componentTypeId: 12168134
        }, {
            id: "classFeature_464_1539",
            entityId: 2,
            entityTypeId: 1958004211,
            type: "proficiency",
            subType: "athletics",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Athletics",
            isGranted: false,
            bonusTypes: [],
            value: null,
            componentId: 464,
            componentTypeId: 12168134
        }, {
            id: "classFeature_226_2207",
            entityId: null,
            entityTypeId: null,
            type: "set",
            subType: "unarmored-armor-class",
            dice: null,
            restriction: "",
            statId: 5,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Set",
            friendlySubtypeName: "Unarmored Armor Class",
            isGranted: true,
            bonusTypes: [],
            value: null,
            componentId: 226,
            componentTypeId: 12168134
        }],
        background: [{
            id: "background_24186_4130974",
            entityId: 13,
            entityTypeId: 1958004211,
            type: "proficiency",
            subType: "medicine",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Medicine",
            isGranted: false,
            bonusTypes: [],
            value: null,
            componentId: 24186,
            componentTypeId: 1669830167
        }, {
            id: "background_24186_4130980",
            entityId: 123,
            entityTypeId: 2103445194,
            type: "proficiency",
            subType: "herbalism-kit",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Herbalism Kit",
            isGranted: false,
            bonusTypes: [],
            value: null,
            componentId: 24186,
            componentTypeId: 1669830167
        }, {
            id: "background_24186_4130982",
            entityId: 15,
            entityTypeId: 1958004211,
            type: "proficiency",
            subType: "survival",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Survival",
            isGranted: false,
            bonusTypes: [],
            value: null,
            componentId: 24186,
            componentTypeId: 1669830167
        }, {
            id: "background_24186_4131030",
            entityId: 125,
            entityTypeId: 2103445194,
            type: "proficiency",
            subType: "poisoners-kit",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Proficiency",
            friendlySubtypeName: "Poisoner's Kit",
            isGranted: false,
            bonusTypes: [],
            value: null,
            componentId: 24186,
            componentTypeId: 1669830167
        }, {
            id: "background_24186_4131037",
            entityId: 1,
            entityTypeId: 906033267,
            type: "language",
            subType: "common",
            dice: null,
            restriction: "",
            statId: null,
            requiresAttunement: false,
            duration: null,
            friendlyTypeName: "Language",
            friendlySubtypeName: "Common",
            isGranted: false,
            bonusTypes: [],
            value: null,
            componentId: 24186,
            componentTypeId: 1669830167
        }],
        item: [],
        feat: [],
        condition: []
    },
    classSpells: [{
        characterClassId: 5799231,
        spells: []
    }],
    customItems: [],
    campaign: {
        name: "Curse of Strahd",
        description: "",
        link: "/campaigns/251461",
        publicNotes: "",
        dmUserId: 100084432,
        dmUsername: "pyroticblaziken",
        characters: [{
            userId: 101022347,
            username: "Imptea",
            characterId: 5953715,
            characterName: "Farooq al Zarisi",
            characterUrl: "/profile/Imptea/characters/5953715",
            avatarUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/17/932/150/150/636378855806248172.png",
            privacyType: 3
        }, {
            userId: 101344362,
            username: "andi_pandi",
            characterId: 5975457,
            characterName: "Zuri",
            characterUrl: "/profile/andi_pandi/characters/5975457",
            avatarUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/17/926/150/150/636378853242581695.png",
            privacyType: 3
        }, {
            userId: 101344360,
            username: "Lilunsummoner",
            characterId: 5976177,
            characterName: "Oriphanis",
            characterUrl: "/profile/Lilunsummoner/characters/5976177",
            avatarUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/4699/24/195/150/636751623048367905.jpeg",
            privacyType: 3
        }, {
            userId: 101344356,
            username: "KyleRokuKyu",
            characterId: 5976493,
            characterName: "Maii'd Uud",
            characterUrl: "/profile/KyleRokuKyu/characters/5976493",
            avatarUrl: "",
            privacyType: 3
        }, {
            userId: 101294081,
            username: "supremevortex",
            characterId: 5977434,
            characterName: "Billie Jean Murray",
            characterUrl: "/profile/supremevortex/characters/5977434",
            avatarUrl: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/10/85/150/150/636339381754406274.png",
            privacyType: 3
        }]
    },
    creatures: []
};

/* * * * * * * * * * */

glCharID = "";

$(function() {
    $("#grabChar").jqxButton({ width: '150px', height: '35px', theme: 'darkblue' });
    $('#characterJsonHere').jqxTextArea({ theme: 'darkblue', width: 750, height: 150, placeHolder: 'JSON data should be placed here.' });
    $('#textHere').jqxTextArea({ theme: 'darkblue', width: 750, height: 150, placeHolder: 'XML will appear here.' });
    $("#getcharID").jqxInput({ placeHolder: "Enter Character ID", height: '35px', width: 200, minLength: 4, theme: 'darkblue'});
    $("#parseChar").jqxButton({ width: '120px', height: '35px', theme: 'darkblue' });
    $("#dlChar").jqxButton({ width: '120px', height: '35px', theme: 'darkblue' });
    //$("#popCharID").jqxDropDownList({ source: source, placeHolder: "Select Item", width: 250, height: 35, theme: "darkblue"});
    //$('#tabs').jqxTabs({ width: '100%', height: '100%', position: 'top'});   
    
    $('#grabChar').on("click", function() {
        if(!$('#getcharID').val().match(/\d+/)) {
            alert("Um, please enter your Character ID");
        } else {
            $.ajax({
                data: { charID: $('#getcharID').val() },
                url: 'scripts/getChar.php',
                method: 'GET',
                success: function(data) {
                    try {
                        parseCharacter($.parseJSON(data));
                    } catch(e) {
                        alert("Something went wrong, it's us, not you. (Well, it probably is you, but we would never assume that.)");
                        console.error(e);
                    }
                },
                failure: function(msg) {
                    alert("Something happened, I couldn't get any data for " + $('#getcharID').val());
                }
            });
        }
    });

    $('#parseChar').on("click", function() {
        try {
            var data = $('#characterJsonHere').val();
            var dndbJson = $.parseJSON(data);
            var characterJson = dndbJson.character;
            parseCharacter(characterJson);
        } catch(e) {
            alert("Something went wrong, it's us, not you. (Well, it probably is you, but we would never assume that.)");
            console.error(e);
        }
    });

    $("#dlChar").on("click", function() {
        if ($("#textHere").val() == "") {
            alert("You need to load a character first.");
            return;
        }
        var ts = Math.round((new Date()).getTime() / 1000);
        var pcFilename = ts + ".xml";

        var textFile = new Blob([$("#textHere").val()], {
            type: 'text/plain'
        });
        invokeSaveAsDialog(textFile, pcFilename);
    });

    //$("#popCharID").on("change", function(event) {  
    //    var firstNumber = event.args.item.label.indexOf("(");
    //    var secondNumber = event.args.item.label.indexOf(")");
    //    glCharID = event.args.item.label.substring(firstNumber + 1, secondNumber);
    //    $('#getcharID').val(glCharID);
    //});
});

function parseCharacter(inputChar) {
    var character = jQuery.extend(true, {}, inputChar);

    // STR(1): 13
    // DEX(2): 12
    // CON(3): 14
    // INT(4): 9
    // WIS(5): 10
    // CHA(6): 17
    allXML = startXML;
    buildXML = "\t\t<!--" + glCharID + "-->\n";
    buildXML += "\t\t<abilities>\n";
    justAbilities.some(function(thisAbility, i) {
        buildXML += "\t\t\t<" + thisAbility + ">\n";
        buildXML += "\t\t\t\t<bonus type=\"number\">" + parseInt(character.bonusStats[i].value == null ? 0 : character.bonusStats[i].value) + "</bonus>\n";
        //buildXML += "\t\t\t\t<save type=\"number\">" + parseInt(abilCHA[i]) + "</save>\n";
        buildXML += "\t\t\t\t<savemodifier type=\"number\">0</savemodifier>\n";
        character.modifiers.class.some(function(thisMod, i) {
            if(thisMod.subType == thisAbility + "-saving-throws") {
                buildXML += "\t\t\t\t<saveprof type=\"number\">1</saveprof>\n";
            }
        });
        buildXML += "\t\t\t\t<score type=\"number\">" + parseInt(getTotalAbilityScore(character, i + 1)) + "</score>\n";
        buildXML += "\t\t\t</" + thisAbility + ">\n";
    });
    buildXML += "\t\t</abilities>\n";

    buildXML += "\t\t<name type=\"string\">" + character.name + "</name>\n";

    // Alignment
    // 1. Lawful Good
    // 2. Neutral Good
    // 3. Chaotic Good
    // 4. Lawful Neutral
    // 5. Neutral
    // 6. Chaotic Neutral
    // 7. Lawful Evil
    // 8. Neutral Evil
    // 9. Chaotic Evil
    charAlign = "";
    switch(character.alignmentId) {
        case 1:
            charAlign = "Lawful Good";
            break;
        case 2:
            charAlign = "Lawful Good";
            break;
        case 3:
            charAlign = "Lawful Good";
            break;
        case 4:
            charAlign = "Lawful Good";
            break;
        case 5:
            charAlign = "Lawful Good";
            break;
        case 6:
            charAlign = "Lawful Good";
            break;
        case 7:
            charAlign = "Lawful Good";
            break;
        case 8:
            charAlign = "Lawful Good";
            break;
        case 8:
            charAlign = "Lawful Good";
            break;
        default:
            charAlign = "None Selected";
    }
    buildXML += "\t\t<alignment type=\"string\">" + charAlign + "</alignment>\n";    

    charWalk = character.race.weightSpeeds.normal.walk;
    //var speedMods = getObjects(character, 'subType', 'speed');
    buildXML += "\t\t<speed>\n";
    //buildXML += "\t\t\t<armor type=\"number\">0</armor>\n";
    buildXML += "\t\t\t<base type=\"number\">" + parseInt(charWalk) + "</base>\n";
    //buildXML += "\t\t\t<misc type=\"number\">0</misc>\n";
    //buildXML += "\t\t\t<temporary type=\"number\">0</temporary>\n";
    buildXML += "\t\t\t<total type=\"number\">" + parseInt(charWalk) + "</total>\n";
    buildXML += "\t\t</speed>\n";

    if(character.traits.personalityTraits != null) {
        buildXML += "\t\t<personalitytraits type=\"string\">" + fixQuote(character.traits.personalityTraits) + "</personalitytraits>\n";
    }
    if(character.traits.ideals != null) {
        buildXML += "\t\t<ideals type=\"string\">" + fixQuote(character.traits.ideals) + "</ideals>\n";
    }
    if(character.traits.bonds != null) {
        buildXML += "\t\t<bonds type=\"string\">" + fixQuote(character.traits.bonds) + "</bonds>\n";
    }
    if(character.traits.flaws != null) {
        buildXML += "\t\t<flaws type=\"string\">" + fixQuote(character.traits.flaws) + "</flaws>\n";
    }

    var background = '';
    if(character.background.definition != null) background = character.background.definition.name;
    if(background == '' && character.background.customBackground.name != null) background = character.background.customBackground.name;
    buildXML += "\t\t<background type=\"string\">" + background + "</background>\n";
    buildXML += "\t\t<backgroundlink type=\"windowreference\">\n";
    buildXML += "\t\t\t<class>reference_background</class>\n";
    if(background.match(/Artisan \/ Guild/)) {
        background = "Guild Artisan";
    }
    buildXML += "\t\t\t<recordname>reference.backgrounddata." + background.toLowerCase().replace(/\s/g, "") + "@*</recordname>\n";
    buildXML += "\t\t</backgroundlink>\n";

    buildXML += "\t\t<race type=\"string\">" + character.race.baseName + "</race>\n";
    buildXML += "\t\t<racelink type=\"windowreference\">\n";
    buildXML += "\t\t\t<class>reference_race</class>\n";
    buildXML += "\t\t\t<recordname>reference.racedata." + replaceDash(character.race.baseName.toLowerCase()) + "@*</recordname>\n";
    buildXML += "\t\t</racelink>\n";

    // Attempt at skill list
    idCount = 1;
    hasHalf = 0;
    halfProf = false;
    var halfprof = getObjects(character, 'type', 'half-proficiency');
    for (var x in halfprof) {
        var hfprof = halfprof[x];
        var type = hfprof.subType;
        if(type == 'ability-checks') {
            hasHalf = 1;
        }
    }
    buildXML += "\t\t<skilllist>\n";
    skills.some(function(element) {
        thisIteration = pad(idCount, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
        if(element.match(/^sleight/)) {
            buildXML += "\t\t\t\t<name type=\"string\">Sleight of Hand</name>\n";
        } else if(element.match(/animal/)) {
            buildXML += "\t\t\t\t<name type=\"string\">Animal Handling</name>\n";
        } else {
            buildXML += "\t\t\t\t<name type=\"string\">" + capitalizeFirstLetter(element) + "</name>\n";
        }
        buildXML += "\t\t\t\t<stat type=\"string\">" + skillsRef[idCount - 1] + "</stat>\n";

        if(hasHalf == 1) {
            addThisLine = "\t\t\t\t<prof type=\"number\">3</prof>\n";
        } else {
            addThisLine = "\t\t\t\t<prof type=\"number\">0</prof>\n";
        }
        
        var proficiencies = getObjects(character, 'type', 'proficiency');
        if(proficiencies != null) {
            proficiencies.some(function(prof) {
                var skill = prof.subType.replace(/-/g, '_');
                if(skill == element) {
                    addThisLine = "\t\t\t\t<prof type=\"number\">1</prof>\n";
                }
            });
        }
        var exp = getObjects(character, 'type', 'expertise');
        for(var i in exp) {
            var expertise = exp[i];
            var type = expertise.subType.replace(/-/g, '_');
            if(skills.includes(type)){
                addThisLine = "\t\t\t\t<prof type=\"number\">2</prof>\n";
            }
        }
        buildXML += addThisLine;
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
        idCount += 1;
    });
    buildXML += "\t\t</skilllist>\n";

    buildXML += "\t\t<classes>\n";
    totalLevels = 0;
    totalHP = 0;
    character.classes.some(function(current_class, i) {
        thisClass = current_class.definition.name.toLowerCase();
        //console.log(thisClass);
        if(current_class.isStartingClass == true) {
            totalHP += current_class.definition.hitDice + ((current_class.definition.hitDice / 2) + 1) * (current_class.level - 1);
        } else {
            totalHP += ((current_class.definition.hitDice / 2) + 1) * current_class.level;
        }
        //console.log(totalHP);
        totalLevels += current_class.level;
        thisIteration = pad(i + 1, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<hddie type=\"dice\">";
        buildXML += "d" + current_class.definition.hitDice;
        buildXML += "</hddie>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + current_class.definition.name + "</name>\n";
        if(thisClass === "warlock") {
            buildXML += "\t\t\t\t<casterpactmagic type=\"number\">1</casterpactmagic>\n";
        } else {
            buildXML += "\t\t\t\t<casterpactmagic type=\"number\">0</casterpactmagic>\n";
        }
        //console.log(thisClass);
        if((thisClass == "bard") || (thisClass == "cleric") || (thisClass == "druid")  || (thisClass == "sorcerer") || (thisClass == "warlock")  || (thisClass == "wizard")) {
            buildXML += "\t\t\t\t<casterlevelinvmult type=\"number\">1</casterlevelinvmult>\n";
        } else if ((thisClass == "paladin" || thisClass == "ranger") && current_class.level >= 2) {
            buildXML += "\t\t\t\t<casterlevelinvmult type=\"number\">2</casterlevelinvmult>\n";
        } else if ((thisClass == "rogue" || thisClass == "fighter") && current_class.level >= 3) {
            if(current_class.hasOwnProperty("subclassDefinition")) {
                if(current_class.subclassDefinition.name == "Arcane Trickster" || current_class.subclassDefinition.name == "Eldritch Knight") {
                    buildXML += "\t\t\t\t<casterlevelinvmult type=\"number\">3</casterlevelinvmult>\n";
                }
            }
        }
        buildXML += "\t\t\t\t<level type=\"number\">" + current_class.level + "</level>\n";
        buildXML += "\t\t\t\t<shortcut type=\"windowreference\">\n";
        buildXML += "\t\t\t\t\t<class>reference_class</class>\n";
        buildXML += "\t\t\t\t\t<recordname>reference.classdata." + thisClass + "@*</recordname>\n";
        buildXML += "\t\t\t\t</shortcut>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    });
    buildXML += "\t\t</classes>\n";

    idCount = 1;
    hasHalf = 0;
    halfProf = false;
    var halfprof = getObjects(character, 'type', 'half-proficiency');
    for (var x in halfprof) {
        var hfprof = halfprof[x];
        var type = hfprof.subType;
        if(type == "initiative") {
            halfProf = true;
            buildXML += "\t\t\t<initiative>\n";
            switch (totalLevels) {
                case 1: case 2: case 3: case 4:
                    buildXML += "\t\t\t\t<misc type=\"number\">1</misc>\n";
                    buildXML += "\t\t\t\t<profbonus type=\"number\">2</profbonus>\n";
                    break;
                case 5: case 6: case 7: case 8:
                    buildXML += "\t\t\t\t<misc type=\"number\">1</misc>\n";
                    buildXML += "\t\t\t\t<profbonus type=\"number\">3</profbonus>\n";
                    break;
                case 9: case 10: case 11: case 12:
                    buildXML += "\t\t\t\t<misc type=\"number\">2</misc>\n";
                    buildXML += "\t\t\t\t<profbonus type=\"number\">4</profbonus>\n";
                    break;
                case 13: case 14: case 15: case 16:
                    buildXML += "\t\t\t\t<misc type=\"number\">2</misc>\n";
                    buildXML += "\t\t\t\t<profbonus type=\"number\">5</profbonus>\n";
                    break;
                case 17: case 18: case 19: case 20:
                    buildXML += "\t\t\t\t<misc type=\"number\">3</misc>\n";
                    buildXML += "\t\t\t\t<profbonus type=\"number\">6</profbonus>\n";
                    break;
                default:
                    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
            }
			
			buildXML += "\t\t\t\t<temporary type=\"number\">0</temporary>\n";
			//<total type="number">45</total>
		    buildXML += "\t\t\t\t</initiative>\n";
        }
    }

    // baseHitPoints
    //console.log("Total levels: " + totalLevels);
    //console.log("Char CON: " + Math.floor( ( ( getTotalAbilityScore(character, 3) - 10 ) / 2 ) ));
    //console.log("Base HP: " + character.baseHitPoints);
    totalHP += (Math.floor( ( ( getTotalAbilityScore(character, 3) - 10 ) / 2 ) )) * totalLevels;
    buildXML += "\t\t<hp>\n";
    if(character.deathSaves.failCount != null) {
        buildXML += "\t\t\t<deathsavefail type=\"number\">" + character.deathSaves.failCount + "</deathsavefail>\n";
    } else {
        buildXML += "\t\t\t<deathsavefail type=\"number\">0</deathsavefail>\n";
    }
    if(character.deathSaves.successCount != null) {
        buildXML += "\t\t\t<deathsavesuccess type=\"number\">" + character.deathSaves.successCount + "</deathsavesuccess>\n";
    } else {
        buildXML += "\t\t\t<deathsavesuccess type=\"number\">0</deathsavesuccess>\n";
    }
    buildXML += "\t\t\t<total type=\"number\">" + totalHP + "</total>\n";
    buildXML += "\t\t</hp>\n";

    var languages = getObjects(character, 'type', 'language');
    buildXML += "\t\t<languagelist>\n";
    languages.some(function(current_lang, i) {
        thisIteration = pad(i + 1, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + capitalizeFirstLetter(current_lang.subType) + "</name>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    });
    buildXML += "\t\t</languagelist>\n";

    character.race.racialTraits.some(function(current_trait, i) {
        if(current_trait.definition.name == "Darkvision") {
            buildXML += "\t\t<senses type=\"string\">Darkvision 60ft.</senses>\n";
        }
    });
        
    buildXML += "\t\t<traitlist>\n";
    character.race.racialTraits.some(function(current_trait, i) {
        switch (current_trait.definition.name) {
            case "Ability Score Increase": case "Age": case "Alignment": case "Size": case "Speed": case "Darkvision":
                return;
            case "Dwarven Combat Training": case "Tool Proficiency": case "Languages": case "Dwarven Toughness":
                return;
            default:
                break;
        }
        thisIteration = pad(i + 1, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        if (current_trait.definition.snippet != "" || current_trait.definition.snippet != null) {
            buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(current_trait.definition.name).trim() + ": " + remove_tags_traits(fixQuote(current_trait.definition.snippet)) + "</name>\n";
        } else {
            buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(current_trait.definition.name).trim() + "</name>\n";
        }
        buildXML += "\t\t\t\t<source type=\"string\">" + convert_case(replaceDash(character.race.baseName.toLowerCase())) + "</source>\n";
        buildXML += "\t\t\t\t<text type=\"formattedtext\">\n";
        buildXML += "\t\t\t\t\t<p>" + remove_tags_traits(fixQuote(current_trait.definition.description)) + "</p>\n";
        buildXML += "\t\t\t\t</text>\n";
        buildXML += "\t\t\t\t<type type=\"string\">racial</type>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    });
    buildXML += "\t\t</traitlist>\n";

    totalFeatures = 0;
    buildXML += "\t\t<featurelist>\n";
    character.classes.some(function(current_class, i) {
        classLevel = current_class.level;
        current_class.definition.classFeatures.some(function(current_feature, j) {
            //console.log(current_feature.name);
            switch (current_feature.name) {
                case "Hit Points": case "Proficiencies": case "Martial Archetype": case "Fighting Style":
                case "Ability Score Improvement": case "Spellcasting": case "Oath Spells": case "Oath Spells":
                case "Circle Spells": case "Bonus Cantrip": case "Bonus Proficiencies": case "Druidic":
                case "Expanded Spell List": case "Otherwordly Patron": case "Expanded Spell List":
                    return;
                default:
                    break;
            }
            if(parseInt(current_feature.requiredLevel) <= parseInt(classLevel)) {
                if(holdFeatures.includes(current_class.definition.name)) {
                    //Skip this one, it's already in the array
                } else {
                    holdFeatures.push(current_class.definition.name);
                    totalFeatures += 1;
                    thisIteration = pad(totalFeatures, 5);
                    buildXML += "\t\t\t<id-" + thisIteration + ">\n";
                    buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
                    buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(current_feature.name) + "</name>\n";
                    buildXML += "\t\t\t\t<source type=\"string\">" + convert_case(replaceDash(current_class.definition.name.toLowerCase())) + "</source>\n";
                    buildXML += "\t\t\t\t<text type=\"formattedtext\">\n";
                    buildXML += "\t\t\t\t\t<p>" + remove_tags_traits(fixQuote(current_feature.description)) + "</p>\n";
                    buildXML += "\t\t\t\t</text>\n";
                    buildXML += "\t\t\t</id-" + thisIteration + ">\n";
                }
            }
        });
        if(current_class.hasOwnProperty("subclassDefinition")) {
            if(current_class.subclassDefinition != null) {
                if(holdFeatures.includes(current_class.subclassDefinition.name)) {
                    // Skip this one, it's already in the array
                } else {
                    holdFeatures.push(current_class.subclassDefinition.name);
                    totalFeatures += 1;
                    thisIteration = pad(totalFeatures, 5);
                    buildXML += "\t\t\t<id-" + thisIteration + ">\n";
                    buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
                    buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(current_class.subclassDefinition.name) + "</name>\n";
                    //buildXML += "\t\t\t\t<source type=\"string\">" + convert_case(replaceDash(current_class.definition.name.toLowerCase())) + "</source>\n";
                    buildXML += "\t\t\t\t<text type=\"formattedtext\">\n";
                    buildXML += "\t\t\t\t\t<p>" + remove_tags_traits(fixQuote(current_class.subclassDefinition.description)) + "</p>\n";
                    buildXML += "\t\t\t\t</text>\n";
                    buildXML += "\t\t\t</id-" + thisIteration + ">\n";
                }
                current_class.subclassDefinition.classFeatures.some(function(charSubClass, i) {
                    switch (charSubClass.name) {
                        case "Hit Points": case "Proficiencies": case "Martial Archetype": case "Fighting Style":
                        case "Ability Score Improvement": case "Spellcasting": case "Oath Spells": case "Oath Spells":
                        case "Circle Spells": case "Bonus Cantrip": case "Bonus Proficiencies": case "Druidic":
                        case "Expanded Spell List": case "Otherwordly Patron": case "Expanded Spell List":
                            return;
                        default:
                            break;
                    }
                    if(charSubClass.requiredLevel <= parseInt(classLevel)) {
                        if(holdFeatures.includes(charSubClass.name)) {
                            // Skip this one, it's already in the array
                        } else {
                            holdFeatures.push(charSubClass.name);
                            totalFeatures += 1;
                            thisIteration = pad(totalFeatures, 5);
                            buildXML += "\t\t\t<id-" + thisIteration + ">\n";
                            buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
                            buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(charSubClass.name) + "</name>\n";
                            //buildXML += "\t\t\t\t<source type=\"string\">" + convert_case(replaceDash(current_class.definition.name.toLowerCase())) + "</source>\n";
                            buildXML += "\t\t\t\t<text type=\"formattedtext\">\n";
                            buildXML += "\t\t\t\t\t<p>" + remove_tags_traits(fixQuote(charSubClass.description)) + "</p>\n";
                            buildXML += "\t\t\t\t</text>\n";
                            buildXML += "\t\t\t</id-" + thisIteration + ">\n";
                        }
                    }
                });
            }
        }
    });
    const charOptions = character.options.class;
    if (charOptions != null) charOptions.some(function(thisOption, i) {
        //console.log(thisOption.definition.name);
        switch (thisOption.definition.name) {
            case "Hit Points": case "Proficiencies": case "Martial Archetype": case "Fighting Style":
            case "Ability Score Improvement": case "Spellcasting": case "Oath Spells": case "Oath Spells":
            case "Circle Spells": case "Bonus Cantrip": case "Bonus Proficiencies": case "Druidic":
            case "Expanded Spell List": case "Otherwordly Patron": case "Expanded Spell List":
                return;
            default:
                break;
        }
        totalFeatures += 1;
        thisIteration = pad(totalFeatures, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(thisOption.definition.name) + "</name>\n";
        buildXML += "\t\t\t\t<text type=\"formattedtext\">\n";
        buildXML += "\t\t\t\t\t<p>" + remove_tags_traits(fixQuote(thisOption.definition.description)) + "</p>\n";
        buildXML += "\t\t\t\t</text>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    });
    
    buildXML += "\t\t</featurelist>\n";

    // Character Inventory
    var weaponList = [];
    var weaponID = [];
    var weaponName = [];
    var weaponProperties = [];
    var weaponDice = [];
    var weaponType = [];
    buildXML += "\t\t<inventorylist>\n";
    const inventory = character.inventory;
    //console.log(inventory);
    if(inventory != null) inventory.some(function(item, i) {
        thisIteration = pad(i + 1, 5);
        
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<count type=\"number\">" + parseInt(item.quantity) + "</count>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(item.definition.name) + "</name>\n";
        buildXML += "\t\t\t\t<weight type=\"number\">" + parseInt(item.definition.weight) / parseInt(item.definition.bundleSize) + "</weight>\n";
        
        if(item.definition.subType == null) {
            buildXML += "\t\t\t\t<type type=\"string\">" + fixQuote(item.definition.filterType) + "</type>\n";
            if(item.definition.filterType == "Armor") {
                if(item.definition.type != null || item.definition.type != "") {
                    buildXML += "\t\t\t\t<subtype type=\"string\">" + fixQuote(item.definition.type) + "</subtype>\n";
                    buildXML += "\t\t\t\t<ac type=\"number\">" + item.definition.armorClass + "</ac>\n";
                }
                if(item.definition.stealthCheck != null) {
                    if(item.definition.stealthCheck == 2) {
                        buildXML += "\t\t\t\t<stealth type=\"string\">Disadvantage</stealth>\n";
                    } else {
                        buildXML += "\t\t\t\t<stealth type=\"string\">-</stealth>\n";
                    }
                }
                if(item.definition.strengthRequirement != null) {
                    buildXML += "\t\t\t\t<strength type=\"string\">Str " + item.definition.strengthRequirement + "</strength>\n";
                } else {
                    buildXML += "\t\t\t\t<strength type=\"string\">-</strength>\n";
                }
                // We need to find where to find if armor allows dex bonus.
            }
        } else {
            buildXML += "\t\t\t\t<type type=\"string\">" + fixQuote(item.definition.subType) + "</type>\n";
        }
        buildXML += "\t\t\t\t<cost type=\"string\">" + item.definition.cost + " gp" + "</cost>\n";
        buildXML += "\t\t\t\t<rarity type=\"string\">" + item.definition.rarity + "</rarity>\n";
        if(item.equipped == true) {
            buildXML += "\t\t\t\t<carried type=\"number\">2</carried>\n";
        } else {
            buildXML += "\t\t\t\t<carried type=\"number\">1</carried>\n";
        }
        if(item.definition.hasOwnProperty("damage")){
            
            buildXML += "\t\t\t\t<damage type=\"string\">" + item.definition.damage.diceString + " " + item.definition.damageType + "</damage>\n";
            thisProperties = "";
            item.definition.properties.some(function(weapProp, i) {
                if(weapProp.name == "Ammunition" ) {
                    thisProperties += "Ammunition (" + item.definition.range + "/" + item.definition.longRange + "), ";
                } else {
                    thisProperties += weapProp.name + ", ";
                }
            });
            thisProperties = thisProperties.trim().slice(0, -1);
            //console.log("Properties: " + thisProperties);
            buildXML += "\t\t\t\t<properties type=\"string\">" + thisProperties + "</properties>\n";

            // Can we build the Weapon List?
            //console.log(i + 1);
            //console.log("ID: " + (i + 1) + "; " + item.definition.name + " - " + item.definition.damage.diceString + " " + item.definition.damageType + "; " + thisProperties);
            weaponID.push(i + 1);
            weaponName.push(item.definition.name);
            weaponProperties.push(thisProperties);
            weaponDice.push("d" + item.definition.damage.diceValue);
            weaponType.push(item.definition.damageType.toLowerCase());
        }
        
        buildXML += "\t\t\t\t<description type=\"formattedtext\">\n";
		buildXML += "\t\t\t\t\t<p>" + item.definition.description + "</p>\n";
        buildXML += "\t\t\t\t</description>\n";
        thisWeaponName = item.definition.name.toLowerCase().replace(/ /g, "_").replace(/\,/g, "");
        if(simpleRangedWeapon.indexOf(thisWeaponName) != -1) {
            buildXML += "\t\t\t\t<subtype type=\"string\">Simple Ranged Weapon</subtype>\n";
        } else if(simpleMeleeWeapon.indexOf(thisWeaponName) != -1) {
            buildXML += "\t\t\t\t<subtype type=\"string\">Simple Melee Weapon</subtype>\n";
        } else if(martialRangedWeapon.indexOf(thisWeaponName) != -1) {
            buildXML += "\t\t\t\t<subtype type=\"string\">Martial Ranged Weapon</subtype>\n";
        }  else if(martialMeleeWeapon.indexOf(thisWeaponName) != -1) {
            buildXML += "\t\t\t\t<subtype type=\"string\">Martial Melee Weapon</subtype>\n";
        } 
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    });
    buildXML += "\t\t</inventorylist>\n";

    buildXML += "\t\t<weaponlist>\n";
    // weaponID.push(i + 1);
    // weaponName.push(item.definition.name);
    // weaponProperties.push(thisProperties);
    // weaponDice.push(item.definition.damage.diceString);
    // weaponType.push(item.definition.damageType.toLowerCase());
    //weaponID.some(function(thisID, i) {
    //    console.log(weaponID[i]);
    //    console.log(weaponName[i]);
    //    console.log(weaponProperties[i]);
    //    console.log(weaponDice[i]);
    //    console.log(weaponType[i]);
    //});
    for(x = 0; x < weaponID.length; x++) {
        thisIteration = pad(x + 1, 5);
        inventNum = pad(parseInt(weaponID[x]), 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<shortcut type=\"windowreference\">\n";
		buildXML += "\t\t\t\t\t<class>item</class>\n";
		buildXML += "\t\t\t\t\t<recordname>....inventorylist.id-" + inventNum + "</recordname>\n";
		buildXML += "\t\t\t\t</shortcut>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + weaponName[x] + "</name>\n";
        buildXML += "\t\t\t\t<properties type=\"string\">" + weaponProperties[x] + "</properties>\n";
        buildXML += "\t\t\t\t<damagelist>\n";
        buildXML += "\t\t\t\t\t<id-00001>\n";
		buildXML += "\t\t\t\t\t\t<bonus type=\"number\">0</bonus>\n";
		buildXML += "\t\t\t\t\t\t<dice type=\"dice\">" + weaponDice[x] + "</dice>\n";
		buildXML += "\t\t\t\t\t\t<stat type=\"string\">base</stat>\n";
		buildXML += "\t\t\t\t\t\t<type type=\"string\">" + weaponType[x] + "</type>\n";
        buildXML += "\t\t\t\t\t</id-00001>\n";

        buildXML += "\t\t\t\t</damagelist>\n";
        // 0: Melee, 1: Ranged, 2: Thrown
        if(weaponProperties[x].match(/Thrown/)) {
            buildXML += "\t\t\t\t<type type=\"number\">2</type>\n";
        } else if(weaponProperties[x].match(/Range/)) {
            buildXML += "\t\t\t\t<type type=\"number\">1</type>\n";
        } else {
            buildXML += "\t\t\t\t<type type=\"number\">0</type>\n";
        }
        
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }

    buildXML += "\t\t</weaponlist>\n";

    buildXML += "\t\t<featlist>\n";
    const charFeats = character.feats;
    if (charFeats != null) charFeats.some(function(thisFeat, i) {
        thisIteration = pad(i + 1, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(thisFeat.definition.name) + "</name>\n";
        //buildXML += "\t\t\t\t<source type=\"string\">" + convert_case(charBG) + "</source>\n";
        buildXML += "\t\t\t\t<text type=\"formattedtext\">\n";
        buildXML += "\t\t\t\t\t<p>" + remove_tags_traits(fixQuote(thisFeat.definition.description)) + "</p>\n";
        buildXML += "\t\t\t\t</text>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    });
    buildXML += "\t\t</featlist>\n";

    totalProfs = 0;
    buildXML += "\t\t<proficiencylist>\n";
    var proficiencies = getObjects(character, 'type', 'proficiency');
    if(proficiencies != null) proficiencies.some(function(prof, i) {
        if(holdProf.includes(prof.friendlySubtypeName) || (prof.friendlySubtypeName).match(/Saving Throws/)) {
            // Skip this one, it's already in the list, or is a saving throw.
            //console.log("Skipping: " + prof.friendlySubtypeName);
        } else {
            //console.log("Adding: " + prof.friendlySubtypeName);
            holdProf.push(prof.friendlySubtypeName);
            thisIteration = pad(i + 1, 5);
            totalProfs += 1;
            buildXML += "\t\t\t<id-" + thisIteration + ">\n";
            buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(prof.friendlySubtypeName) + "</name>\n";
            buildXML += "\t\t\t</id-" + thisIteration + ">\n";
        }
    });

    buildXML += "\t\t</proficiencylist>\n";

    buildXML += "\t\t<exp type=\"number\">" + character.currentXp + "</exp>\n";
    buildXML += "\t\t<age type=\"string\">" + character.age + "</age>\n";
    buildXML += "\t\t<height type=\"string\">" + fixQuote(character.height) + "</height>\n";
    buildXML += "\t\t<weight type=\"string\">" + character.weight + "</weight>\n";
    buildXML += "\t\t<gender type=\"string\">" + fixQuote(character.gender) + "</gender>\n";
    buildXML += "\t\t<size type=\"string\">" + character.race.size + "</size>\n";
    buildXML += "\t\t<deity type=\"string\">" + fixQuote(character.faith) + "</deity>\n";

    if (character.eyes != null) {
        hasAppear += 1;
    }
    if (character.hair != null) {
        hasAppear += 2;
    }
    if (character.skin != null) {
        hasAppear += 4;
    }

    if (hasAppear == 1) {
        buildXML += "\t\t<appearance type=\"string\">Eyes: " + fixQuote(character.eyes) + "</appearance>\n";
    } else if (hasAppear == 2) {
        buildXML += "\t\t<appearance type=\"string\">Hair: " + fixQuote(character.hair) + "</appearance>\n";
    } else if (hasAppear == 3) {
        buildXML += "\t\t<appearance type=\"string\">Eyes: " + fixQuote(character.eyes) + "\\nHair: " + fixQuote(character.hair) + "</appearance>\n";
    } else if (hasAppear == 4) {
        buildXML += "\t\t<appearance type=\"string\">Skin: " + fixQuote(character.skin) + "</appearance>\n";
    } else if (hasAppear == 5) {
        buildXML += "\t\t<appearance type=\"string\">Eyes: " + fixQuote(character.eyes) + "\\nSkin: " + fixQuote(character.skin) + "</appearance>\n";
    } else if (hasAppear == 6) {
        buildXML += "\t\t<appearance type=\"string\">Hair: " + fixQuote(character.hair) + "\\nSkin: " + fixQuote(character.skin) + "</appearance>\n";
    } else if (hasAppear == 7) {
        buildXML += "\t\t<appearance type=\"string\">Eyes: " + fixQuote(character.eyes) + "\\nHair: " + fixQuote(character.hair) + "\\nSkin: " + fixQuote(character.skin) + "</appearance>\n";
    }

    pactSlots = 0;
    pactLevel = 0;
    character.classes.some(function(current_class, i) {
        charClass = current_class.definition.name.toLowerCase();
        if(charClass === "warlock") {
            pactSlots = getPactMagicSlots(current_class.level);
            pactLevel = current_class.level;
        } else {
            if (current_class.hasOwnProperty("subclassDefinition")) {
                if(current_class.subclassDefinition != null) {
                    getSpellSlots(charClass, current_class.level, current_class.subclassDefinition.name);
                }
            } else {
                getSpellSlots(charClass, current_class.level, null);
            }
        }
    });

    buildXML += "\t\t<powermeta>\n";
    buildXML += "\t\t\t<pactmagicslots1>\n";
    if(pactLevel <= 2) {
        buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(pactSlots) + "</max>\n";
    } else {
        buildXML += "\t\t\t\t<max type=\"number\">0</max>\n";
    }
    buildXML += "\t\t\t</pactmagicslots1>\n";
    buildXML += "\t\t\t<pactmagicslots2>\n";
    if((pactLevel <= 4) && (pactLevel > 2)) {
        buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(pactSlots) + "</max>\n";
    } else {
        buildXML += "\t\t\t\t<max type=\"number\">0</max>\n";
    }
    buildXML += "\t\t\t</pactmagicslots2>\n";
    buildXML += "\t\t\t<pactmagicslots3>\n";
    if((pactLevel <= 6) && (pactLevel > 4)) {
        buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(pactSlots) + "</max>\n";
    } else {
        buildXML += "\t\t\t\t<max type=\"number\">0</max>\n";
    }
    buildXML += "\t\t\t</pactmagicslots3>\n";
    buildXML += "\t\t\t<pactmagicslots4>\n";
    if((pactLevel <= 8) && (pactLevel > 6)) {
        buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(pactSlots) + "</max>\n";
    } else {
        buildXML += "\t\t\t\t<max type=\"number\">0</max>\n";
    }
    buildXML += "\t\t\t</pactmagicslots4>\n";
    buildXML += "\t\t\t<pactmagicslots5>\n";
    if((pactLevel <= 20) && (pactLevel > 8)) {
        buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(pactSlots) + "</max>\n";
    } else {
        buildXML += "\t\t\t\t<max type=\"number\">0</max>\n";
    }
    buildXML += "\t\t\t</pactmagicslots5>\n";
    buildXML += "\t\t\t<pactmagicslots6>\n";
    buildXML += "\t\t\t\t<max type=\"number\">0</max>\n";
    buildXML += "\t\t\t</pactmagicslots6>\n";
    buildXML += "\t\t\t<pactmagicslots7>\n";
    buildXML += "\t\t\t\t<max type=\"number\">0</max>\n";
    buildXML += "\t\t\t</pactmagicslots7>\n";
    buildXML += "\t\t\t<pactmagicslots8>\n";
    buildXML += "\t\t\t\t<max type=\"number\">0</max>\n";
    buildXML += "\t\t\t</pactmagicslots8>\n";
    buildXML += "\t\t\t<pactmagicslots9>\n";
    buildXML += "\t\t\t\t<max type=\"number\">0</max>\n";
    buildXML += "\t\t\t</pactmagicslots9>\n";

    buildXML += "\t\t\t<spellslots1>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + charSpellSlots1 + "</max>\n";
    buildXML += "\t\t\t</spellslots1>\n";
    buildXML += "\t\t\t<spellslots2>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + charSpellSlots2 + "</max>\n";
    buildXML += "\t\t\t</spellslots2>\n";
    buildXML += "\t\t\t<spellslots3>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + charSpellSlots3 + "</max>\n";
    buildXML += "\t\t\t</spellslots3>\n";
    buildXML += "\t\t\t<spellslots4>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + charSpellSlots4 + "</max>\n";
    buildXML += "\t\t\t</spellslots4>\n";
    buildXML += "\t\t\t<spellslots5>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + charSpellSlots5 + "</max>\n";
    buildXML += "\t\t\t</spellslots5>\n";
    buildXML += "\t\t\t<spellslots6>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + charSpellSlots6 + "</max>\n";
    buildXML += "\t\t\t</spellslots6>\n";
    buildXML += "\t\t\t<spellslots7>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + charSpellSlots7 + "</max>\n";
    buildXML += "\t\t\t</spellslots7>\n";
    buildXML += "\t\t\t<spellslots8>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + charSpellSlots8 + "</max>\n";
    buildXML += "\t\t\t</spellslots8>\n";
    buildXML += "\t\t\t<spellslots9>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + charSpellSlots9 + "</max>\n";
    buildXML += "\t\t\t</spellslots9>\n";
    buildXML += "\t\t</powermeta>\n";

    buildXML += "\t\t<coins>\n";
    buildXML += "\t\t\t<slot1>\n";
    buildXML += "\t\t\t\t<amount type=\"number\">" + character.currencies.pp + "</amount>\n";
    buildXML += "\t\t\t\t<name type=\"string\">PP</name>\n";
    buildXML += "\t\t\t</slot1>\n";
    buildXML += "\t\t\t<slot2>\n";
    buildXML += "\t\t\t\t<amount type=\"number\">" + character.currencies.gp + "</amount>\n";
    buildXML += "\t\t\t\t<name type=\"string\">GP</name>\n";
    buildXML += "\t\t\t</slot2>\n";
    buildXML += "\t\t\t<slot3>\n";
    buildXML += "\t\t\t\t<amount type=\"number\">" + character.currencies.ep + "</amount>\n";
    buildXML += "\t\t\t\t<name type=\"string\">EP</name>\n";
    buildXML += "\t\t\t</slot3>\n";
    buildXML += "\t\t\t<slot4>\n";
    buildXML += "\t\t\t\t<amount type=\"number\">" + character.currencies.sp + "</amount>\n";
    buildXML += "\t\t\t\t<name type=\"string\">SP</name>\n";
    buildXML += "\t\t\t</slot4>\n";
    buildXML += "\t\t\t<slot5>\n";
    buildXML += "\t\t\t\t<amount type=\"number\">" + character.currencies.cp + "</amount>\n";
    buildXML += "\t\t\t\t<name type=\"string\">CP</name>\n";
    buildXML += "\t\t\t</slot5>\n";
    buildXML += "\t\t\t<slot6>\n";
    buildXML += "\t\t\t\t<amount type=\"number\">0</amount>\n";
    buildXML += "\t\t\t</slot6>\n";
    buildXML += "\t\t</coins>\n";

    // Power Groups
    buildXML += "\t\t<powergroup>\n";
	buildXML += "\t\t\t<id-00001>\n";
	buildXML += "\t\t\t\t<name type=\"string\">Resistances</name>\n";
	buildXML += "\t\t\t</id-00001>\n";
	buildXML += "\t\t\t<id-00002>\n";
	buildXML += "\t\t\t\t<name type=\"string\">Immunities</name>\n";
	buildXML += "\t\t\t</id-00002>\n";
    buildXML += "\t\t</powergroup>\n";

    // Spells sourceId:
    //    1: Players Handbook?
    //    2: Players Handbook?
    //    3: Dungeon Masters Guide
    //    4: Xanathar's Guide to Everything

    // Activation (casting time)
    // activation.activationTime
    //    null
    //    1
    // activation.activationType
    //    null
    //    1: action
    
    //    3: bonus action
    //    4: reaction
    //    5: second
    //    6: minute
    //    7: hour
    //    8: day
    totalSpells = 0;
    buildXML += "\t\t<powers>\n";
    character.spells.race.some(function(eachSpell, i) {
        totalSpells += 1;
        thisIteration = pad(totalSpells, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";

        castingTime = "";
        if(eachSpell.definition.activation.activationTime == null) {
            castingTime = "";
        } else {
            castingTime = eachSpell.definition.activation.activationTime;
        }
        if(eachSpell.definition.activation.activationType == null) {
            castingTime += "";
        } else if(eachSpell.definition.activation.activationType == 1) {
            castingTime += " action";
        } else if(eachSpell.definition.activation.activationType == 3) {
            castingTime += " bonus action";
        } else if(eachSpell.definition.activation.activationType == 4) {
            castingTime += " reaction"; 
        } else if(eachSpell.definition.activation.activationType == 5) {
                castingTime += " second";
        } else if(eachSpell.definition.activation.activationType == 6) {
            castingTime += " minute";
        } else if(eachSpell.definition.activation.activationType == 7) {
            castingTime += " hour";
        } else if(eachSpell.definition.activation.activationType == 8) {
            castingTime += " day";
        }
        buildXML += "\t\t\t\t<castingtime type=\"string\">" + castingTime + "</castingtime>\n";

        // Components: 1: Verbal; 2: Somatic; 3: Material
        componentList = "";
        if(eachSpell.definition.components.indexOf(1) != -1) {
            componentList += "V, ";
        }
        if(eachSpell.definition.components.indexOf(2) != -1) {
            componentList += "S, ";
        }
        if(eachSpell.definition.components.indexOf(3) != -1) {
            componentList += "M (" + eachSpell.definition.componentsDescription + "), ";
        }
        componentList = componentList.trim().slice(0, -1);
        buildXML += "\t\t\t\t<components type=\"string\">" + componentList + "</components>\n";
		buildXML += "\t\t\t\t<description type=\"formattedtext\">\n";
        buildXML += "\t\t\t\t\t<p>" + remove_tags_traits(fixQuote(eachSpell.definition.description)) + "</p>\n";
        buildXML += "\t\t\t\t</description>\n";
        if(eachSpell.definition.duration.durationType == "Time") {
		    buildXML += "\t\t\t\t<duration type=\"string\">" + eachSpell.definition.duration.durationInterval + " " + eachSpell.definition.duration.durationUnit + "</duration>\n";
        } else if(eachSpell.definition.duration.durationType == "Instantaneous") {
            buildXML += "\t\t\t\t<duration type=\"string\">Instantaneous</duration>\n";
        }
        buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
		buildXML += "\t\t\t\t<level type=\"number\">" + eachSpell.definition.level + "</level>\n";
		buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
		buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(eachSpell.definition.name) + "</name>\n";
        buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
        if (eachSpell.definition.ritual == true) {
            buildXML += "\t\t\t\t<ritual type=\"number\">1</ritual>\n";
        } else {
            buildXML += "\t\t\t\t<ritual type=\"number\">0</ritual>\n";
        }
        if(eachSpell.definition.range.origin == "Ranged") {
            buildXML += "\t\t\t\t<range type=\"string\">" + eachSpell.definition.range.rangeValue + "</range>\n";
        } else if(eachSpell.definition.range.origin == "Touch") {
            buildXML += "\t\t\t\t<range type=\"string\">Touch</range>\n";
        } else if(eachSpell.definition.range.origin == "Self") {
            buildXML += "\t\t\t\t<range type=\"string\">Self</range>\n";
        }
        buildXML += "\t\t\t\t<school type=\"string\">" + fixQuote(eachSpell.definition.school) + "</school>\n";
        buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
		//buildXML += "\t\t\t\t<source type=\"string\">Warlock</source>\n";


        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    });
    character.spells.class.some(function(eachSpell, i) {
        totalSpells += 1;
        thisIteration = pad(totalSpells, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";

        castingTime = "";
        if(eachSpell.definition.activation.activationTime == null) {
            castingTime = "";
        } else {
            castingTime = eachSpell.definition.activation.activationTime;
        }
        if(eachSpell.definition.activation.activationType == null) {
            castingTime += "";
        } else if(eachSpell.definition.activation.activationType == 1) {
            castingTime += " action";
        } else if(eachSpell.definition.activation.activationType == 3) {
            castingTime += " bonus action";
        } else if(eachSpell.definition.activation.activationType == 4) {
            castingTime += " reaction"; 
        } else if(eachSpell.definition.activation.activationType == 5) {
                castingTime += " second";
        } else if(eachSpell.definition.activation.activationType == 6) {
            castingTime += " minute";
        } else if(eachSpell.definition.activation.activationType == 7) {
            castingTime += " hour";
        } else if(eachSpell.definition.activation.activationType == 8) {
            castingTime += " day";
        }
        buildXML += "\t\t\t\t<castingtime type=\"string\">" + castingTime + "</castingtime>\n";
        // Components: 1: Verbal; 2: Somatic; 3: Material
        componentList = "";
        if(eachSpell.definition.components.indexOf(1) != -1) {
            componentList += "V, ";
        }
        if(eachSpell.definition.components.indexOf(2) != -1) {
            componentList += "S, ";
        }
        if(eachSpell.definition.components.indexOf(3) != -1) {
            componentList += "M (" + eachSpell.definition.componentsDescription + "), ";
        }
        componentList = componentList.trim().slice(0, -1);
        buildXML += "\t\t\t\t<components type=\"string\">" + componentList + "</components>\n";
		buildXML += "\t\t\t\t<description type=\"formattedtext\">\n";
        buildXML += "\t\t\t\t\t<p>" + remove_tags_traits(fixQuote(eachSpell.definition.description)) + "</p>\n";
        buildXML += "\t\t\t\t</description>\n";
        if(eachSpell.definition.duration.durationType == "Time") {
		    buildXML += "\t\t\t\t<duration type=\"string\">" + eachSpell.definition.duration.durationInterval + " " + eachSpell.definition.duration.durationUnit + "</duration>\n";
        } else if(eachSpell.definition.duration.durationType == "Instantaneous") {
            buildXML += "\t\t\t\t<duration type=\"string\">Instantaneous</duration>\n";
        }
        buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
		buildXML += "\t\t\t\t<level type=\"number\">" + eachSpell.definition.level + "</level>\n";
		buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
		buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(eachSpell.definition.name) + "</name>\n";
        buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
        if (eachSpell.definition.ritual == true) {
            buildXML += "\t\t\t\t<ritual type=\"number\">1</ritual>\n";
        } else {
            buildXML += "\t\t\t\t<ritual type=\"number\">0</ritual>\n";
        }
        if(eachSpell.definition.range.origin == "Ranged") {
            buildXML += "\t\t\t\t<range type=\"string\">" + eachSpell.definition.range.rangeValue + "</range>\n";
        } else if(eachSpell.definition.range.origin == "Touch") {
            buildXML += "\t\t\t\t<range type=\"string\">Touch</range>\n";
        } else if(eachSpell.definition.range.origin == "Self") {
            buildXML += "\t\t\t\t<range type=\"string\">Self</range>\n";
        }
        buildXML += "\t\t\t\t<school type=\"string\">" + fixQuote(eachSpell.definition.school) + "</school>\n";
        buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
		//buildXML += "\t\t\t\t<source type=\"string\">Warlock</source>\n";


        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    });
    character.classes.some(function(current_class, i) {

        for(var j in character.classSpells) {
            var spells = character.classSpells[j];
            if(character.classSpells[j].characterClassId == current_class.id) {
                character.classSpells[j].spells.some(function(spell) {
                    totalSpells += 1;
                    thisIteration = pad(totalSpells, 5);
                    buildXML += "\t\t\t<id-" + thisIteration + ">\n";

                    castingTime = "";
                    if(spell.definition.activation.activationTime == null) {
                        castingTime = "";
                    } else {
                        castingTime = spell.definition.activation.activationTime;
                    }
                    if(spell.definition.activation.activationType == null) {
                        castingTime += "";
                    } else if(spell.definition.activation.activationType == 1) {
                        castingTime += " action";
                    } else if(spell.definition.activation.activationType == 3) {
                        castingTime += " bonus action";
                    } else if(spell.definition.activation.activationType == 4) {
                        castingTime += " reaction"; 
                    } else if(spell.definition.activation.activationType == 5) {
                            castingTime += " second";
                    } else if(spell.definition.activation.activationType == 6) {
                        castingTime += " minute";
                    } else if(spell.definition.activation.activationType == 7) {
                        castingTime += " hour";
                    } else if(spell.definition.activation.activationType == 8) {
                        castingTime += " day";
                    }
                    buildXML += "\t\t\t\t<castingtime type=\"string\">" + castingTime + "</castingtime>\n";
                    // Components: 1: Verbal; 2: Somatic; 3: Material
                    componentList = "";
                    if(spell.definition.components.indexOf(1) != -1) {
                        componentList += "V, ";
                    }
                    if(spell.definition.components.indexOf(2) != -1) {
                        componentList += "S, ";
                    }
                    if(spell.definition.components.indexOf(3) != -1) {
                        componentList += "M (" + spell.definition.componentsDescription + ")* ";
                    }
                    componentList = componentList.trim().slice(0, -1);

                    buildXML += "\t\t\t\t<components type=\"string\">" + componentList + "</components>\n";
		            buildXML += "\t\t\t\t<description type=\"formattedtext\">\n";
                    buildXML += "\t\t\t\t\t<p>" + remove_tags_traits(fixQuote(spell.definition.description)) + "</p>\n";
                    buildXML += "\t\t\t\t</description>\n";
                    if(spell.definition.duration.durationType == "Time") {
		                buildXML += "\t\t\t\t<duration type=\"string\">" + spell.definition.duration.durationInterval + " " + spell.definition.duration.durationUnit + "</duration>\n";
                    } else if(spell.definition.duration.durationType == "Instantaneous") {
                        buildXML += "\t\t\t\t<duration type=\"string\">Instantaneous</duration>\n";
                    }
                    buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
		            buildXML += "\t\t\t\t<level type=\"number\">" + spell.definition.level + "</level>\n";
		            buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
		            buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(spell.definition.name) + "</name>\n";
                    buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
                    if (spell.definition.ritual == true) {
                        buildXML += "\t\t\t\t<ritual type=\"number\">1</ritual>\n";
                    } else {
                        buildXML += "\t\t\t\t<ritual type=\"number\">0</ritual>\n";
                    }
                    if(spell.definition.range.origin == "Ranged") {
                        buildXML += "\t\t\t\t<range type=\"string\">" + spell.definition.range.rangeValue + "</range>\n";
                    } else if(spell.definition.range.origin == "Touch") {
                        buildXML += "\t\t\t\t<range type=\"string\">Touch</range>\n";
                    } else if(spell.definition.range.origin == "Self") {
                        buildXML += "\t\t\t\t<range type=\"string\">Self</range>\n";
                    }
                    buildXML += "\t\t\t\t<school type=\"string\">" + fixQuote(spell.definition.school) + "</school>\n";
                    buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
                    //buildXML += "\t\t\t\t<source type=\"string\">" + current_class.name + "</source>\n";
                    buildXML += "\t\t\t</id-" + thisIteration + ">\n";
                });
            }
        }
    });
    character.race.racialTraits.some(function(current_trait, i) {
        fixedTrait = current_trait.definition.name.toLowerCase().replace(/ /g, "_");
        //console.log(fixedTrait);
        if(fixedTrait == "hellish_resistance") {
            thisIteration = pad(totalSpells + 1, 5);
            totalSpells += 1;
            buildXML += "\t\t\t<id-" + thisIteration + ">\n";
            buildXML += addTiefHellResist;
            buildXML += "\t\t\t</id-" + thisIteration + ">\n";
        }
    });
    buildXML += "\t\t</powers>\n";

    baseAC = 0;
    shieldYes = 0;
    shieldAC = 0;
    dexBonus = 10;
    armDis = 0;
    armShieldProf = 0;
    // max2DexArmor
    // max3DexArmor
    // fullDexArmor
    // noDexArmor
    character.inventory.some(function(eachInventory, i) {
        if(eachInventory.definition.filterType == "Armor") {
            if(eachInventory.equipped == true) {
                baseAC += eachInventory.definition.armorClass;
                if(eachInventory.definition.type == "Shield") {
                    shieldYes = 1;
                    shieldAC = eachInventory.definition.armorClass;
                    baseAC -= shieldAC;
                    if(holdProf.includes("Shields")) {
                        // Shield is proficient
                    } else {
                        armShieldProf -= 1;
                    }
                } else {
                    if(eachInventory.definition.stealthCheck == 2) {
                        armDis = 1;
                    }
                    thisArmor = eachInventory.definition.name.toLowerCase().replace(/ /g, "_").replace(/-/g, "_");
                    //console.log(thisArmor);
                    //console.log(thisArmor);
                    if(noDexArmor.includes(thisArmor)) {
                        dexBonus = 0;
                        if(holdProf.includes("Heavy Armor")) {
                            // Proficient in heavy armor
                        } else {
                            armShieldProf -= 1;
                        }
                    } else if(max2DexArmor.includes(thisArmor)) {
                        if(dexBonus > 2) {
                            dexBonus = 2;
                        }
                        if(holdProf.includes("Medium Armor")) {
                            // Proficient in medium armor
                        } else {
                            armShieldProf -= 1;
                        }
                    } else if(max3DexArmor.includes(thisArmor)) {
                        if(dexBonus > 3) {
                            dexBonus = 3;
                        }
                    } else if(fullDexArmor.includes(thisArmor)) {
                        if(dexBonus > 4) {
                            dexBonus = 4;
                        }
                        if(holdProf.includes("Light Armor")) {
                            // Proficient in light armor
                        } else {
                            armShieldProf -= 1;
                        }
                    }
                }
            }
        }
    });

    //console.log("Dex bonus: " + dexBonus)

    // We need to figure out dex bonus: full, max 3, max 2, none
    buildXML += "\t\t<defenses>\n";
    buildXML += "\t\t\t<ac>\n";
    if(baseAC == 0) {
        baseAC += 10;
    }
    buildXML += "\t\t\t\t<armor type=\"number\">" + (baseAC - 10) + "</armor>\n";
    switch(dexBonus) {
        case 0:
            buildXML += "\t\t\t\t<dexbonus type=\"string\">no</dexbonus>\n";
            break;
        case 2:
            buildXML += "\t\t\t\t<dexbonus type=\"string\">max2</dexbonus>\n";
            break;
        case 3:
            buildXML += "\t\t\t\t<dexbonus type=\"string\">max3</dexbonus>\n";
            break;
    }
    if(armDis == 1) {
        buildXML += "\t\t\t\t<disstealth type=\"number\">1</disstealth>\n";
    }
	//
    //buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    if(armShieldProf < 0) {
        buildXML += "\t\t\t\t<prof type=\"number\">0</prof>\n";
    } else {
        buildXML += "\t\t\t\t<prof type=\"number\">1</prof>\n";
    }
    if(shieldYes == 1) {
        buildXML += "\t\t\t\t<shield type=\"number\">" + shieldAC + "</shield>\n";
    }
	
	buildXML += "\t\t\t\t<temporary type=\"number\">0</temporary>\n";
	//buildXML += "\t\t\t\t<total type=\"number\">" + baseAC + "</total>\n";
	buildXML += "\t\t\t</ac>\n";
	buildXML += "\t\t</defenses>\n";

    allXML += buildXML + endXML;
    $('#textHere').val(allXML);

   
}

const getTotalAbilityScore = function(character, scoreId) {
    var index = scoreId-1;
    var base = (character.stats[index].value == null ? 10 : character.stats[index].value),
        bonus = (character.bonusStats[index].value == null ? 0 : character.bonusStats[index].value),
        override = (character.overrideStats[index].value == null ? 0 : character.overrideStats[index].value),
        total = base + bonus,
        modifiers = getObjects(character, '', _ABILITY[_ABILITIES[scoreId]] + "-score");
    if(override > 0) total = override;
    if(modifiers.length > 0) {
        var used_ids = [];
        for(var i = 0; i < modifiers.length; i++){
            if(modifiers[i].type == 'bonus' && used_ids.indexOf(modifiers[i].id) == -1) {
                total += modifiers[i].value;
                used_ids.push(modifiers[i].id);
            }
        }
    }

    return total;
};

const getObjects = function(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if (i == key && obj[i] == val || i == key && val == '') { //
            objects.push(obj);
        } else if (obj[i] == val && key == ''){
            //only add if the object is not already in the array
            if (objects.lastIndexOf(obj) == -1){
                objects.push(obj);
            }
        }
    }
    return objects;
};

function replaceDash(str) {
    firstStep = str.replace(/-/g, "_");
    return firstStep.replace(/ /g, "_");
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function pad(num, size) {
    var s = num + "";

    while (s.length < size) s = "0" + s;
    return s;
}

function invokeSaveAsDialog(file, fileName) {
    if (!file) {
        throw 'Blob object is required.';
    }

    if (!file.type) {
        file.type = 'video/webm';
    }

    var fileExtension = file.type.split('/')[1];

    if (fileName && fileName.indexOf('.') !== -1) {
        var splitted = fileName.split('.');
        fileName = splitted[0];
        fileExtension = splitted[1];
    }

    var fileFullName = (fileName || (Math.round(Math.random() * 9999999999) + 888888888)) + '.' + fileExtension;

    if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
        return navigator.msSaveOrOpenBlob(file, fileFullName);
    } else if (typeof navigator.msSaveBlob !== 'undefined') {
        return navigator.msSaveBlob(file, fileFullName);
    }

    var hyperlink = document.createElement('a');
    hyperlink.href = URL.createObjectURL(file);
    hyperlink.target = '_blank';
    hyperlink.download = fileFullName;

    if (!!navigator.mozGetUserMedia) {
        hyperlink.onclick = function() {
            (document.body || document.documentElement).removeChild(hyperlink);
        };
        (document.body || document.documentElement).appendChild(hyperlink);
    }

    var evt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });

    hyperlink.dispatchEvent(evt);

    if (!navigator.mozGetUserMedia) {
        URL.revokeObjectURL(hyperlink.href);
    }
}

function fixQuote(badString) {
    if(badString == "" || badString == null) {
        return "";
    }
    return badString.replace(/\n/g, '\n').replace(/\u2019/g, "'").replace(/\u2014/g, "-").replace(/\"/g, "&#34;").replace(/\u2022/g, ":").replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

function convert_case(str) {
    var lower = str.toLowerCase();
    return lower.replace(/(^| )(w)/g, function(x) {
        return x.toUpperCase();
    });
}

function remove_tags_traits(badString) {
    return badString.replace(/\&lt\;p\&gt\;/g, '').replace(/\&lt\;\/p\&gt\;/g, '').replace(/\&lt\;\/span\&gt\;/g, '').replace(/\&lt\;span\&gt\;/g, '').replace(/\&rsquo\;/g, '\'').replace(/\&lt\;em\&gt\;/g, ' ').replace(/\&lt\;\/em\&gt\;/g, ' ').replace(/&lt\;br&gt\;/g, "\n").replace(/\&lt\;\/strong\&gt\;/g, '').replace(/\&lt\;strong\&gt\;/g, '').replace(/\&lt\;\/h\d\&gt\;/g, '').replace(/\&lt\;h\d\&gt\;/g, '').replace(/\&lt\;\/ul\&gt\;/g, '\n').replace(/\&lt\;ul\&gt\;/g, '\n').replace(/\&lt\;\/li\&gt\;/g, '\n').replace(/\&lt\;li\&gt\;/g, '\n').replace(/\&nbsp\;/g, ' ');
}

//const getFeatureSpells = function(character, traitId, featureType) {
//    var spellsArr = [];
//    if(character.spells[featureType] == null) return spellsArr;
//    if(character.spells[featureType].length > 0) {
//        var options = getObjects(character.options[featureType], 'componentId', traitId);
//        for(var i = 0; i < options.length; i++) {
//            var spells = getObjects(character.spells[featureType], 'componentId', options[i].definition.id);
//            for(var j = 0; j < spells.length; j++) {
//                spellsArr.push(spells[j])
//            }
//        }
//    }
//    return spellsArr;
//};

const getPactMagicSlots = function(level) {

    // 1-2 1st level
    // 3-4 2nd level
    // 5-6 3rd level
    // 7-8 4th level
    // 9+ 5th level

    switch(level){
        case 1:
            return 1;

        case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10:
            return 2;

        case 11: case 12: case 13: case 14: case 15: case 16:
            return 3;

        default:
            return 4;
    }
    return 0;
};

function getSpellSlots(slotClass, slotLevel, slotSubClass) {
    //console.log("Class: " + slotClass);
    //console.log("Level: " + slotLevel);
    if((slotClass === "bard") || (slotClass === "cleric") || (slotClass === "druid") || (slotClass === "sorcerer") || (slotClass === "wizard")) {
        if (slotLevel == 1) {
            charSpellSlots1 = 2;
        } else if (slotLevel == 2) {
            charSpellSlots1 = 3;
        } else if (slotLevel == 3) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 2;
        } else if (slotLevel == 4) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
        } else if (slotLevel == 5) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 2;
        } else if (slotLevel == 6) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
        } else if (slotLevel == 7) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 1;
        } else if (slotLevel == 8) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 2;
        } else if (slotLevel == 9) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 1;
        } else if (slotLevel == 10) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 2;
        } else if (slotLevel == 11) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 2;
            charSpellSlots6 = 1;
        } else if (slotLevel == 12) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 2;
            charSpellSlots6 = 1;
        } else if (slotLevel == 13) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 2;
            charSpellSlots6 = 1;
            charSpellSlots7 = 1;
        } else if (slotLevel == 14) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 2;
            charSpellSlots6 = 1;
            charSpellSlots7 = 1;
        } else if (slotLevel == 15) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 2;
            charSpellSlots6 = 1;
            charSpellSlots7 = 1;
            charSpellSlots8 = 1;
        } else if (slotLevel == 16) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 2;
            charSpellSlots6 = 1;
            charSpellSlots7 = 1;
            charSpellSlots8 = 1;
        } else if (slotLevel == 17) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 2;
            charSpellSlots6 = 1;
            charSpellSlots7 = 1;
            charSpellSlots8 = 1;
            charSpellSlots9 = 1;
        } else if (slotLevel == 18) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 3;
            charSpellSlots6 = 1;
            charSpellSlots7 = 1;
            charSpellSlots8 = 1;
            charSpellSlots9 = 1;
        } else if (slotLevel == 19) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 3;
            charSpellSlots6 = 2;
            charSpellSlots7 = 1;
            charSpellSlots8 = 1;
            charSpellSlots9 = 1;
        } else if (slotLevel == 20) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 3;
            charSpellSlots6 = 2;
            charSpellSlots7 = 2;
            charSpellSlots8 = 1;
            charSpellSlots9 = 1;
        }
    } else if(slotClass === "paladin" || slotClass === "ranger") {
        if (slotLevel == 2) {
            charSpellSlots1 = 2;
        } else if (slotLevel == 3) {
            charSpellSlots1 = 3;
        } else if (slotLevel == 4) {
            charSpellSlots1 = 3;
        } else if (slotLevel == 5) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 2;
        } else if (slotLevel == 6) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 2;
        } else if (slotLevel == 7) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
        } else if (slotLevel == 8) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
        } else if (slotLevel == 9) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 2;
        } else if (slotLevel == 10) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 2;
        } else if (slotLevel == 11) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
        } else if (slotLevel == 12) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
        } else if (slotLevel == 13) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 1;
        } else if (slotLevel == 14) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 1;
        } else if (slotLevel == 15) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 2;
        } else if (slotLevel == 16) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 2;
        } else if (slotLevel == 17) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 1;
        } else if (slotLevel == 18) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 1;
        } else if (slotLevel == 19) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 2;
        } else if (slotLevel == 20) {
            charSpellSlots1 = 4;
            charSpellSlots2 = 3;
            charSpellSlots3 = 3;
            charSpellSlots4 = 3;
            charSpellSlots5 = 2;
        }
    } else if((slotClass === "fighter" || slotClass === "rogue") && slotLevel >= 3 && slotSubClass != null) {
        if(slotSubClass == "ArcaneTrickster" || slotSubClass == "Eldritch Knight") {
            if (slotLevel == 3) {
                charSpellSlots1 = 2;
            } else if (slotLevel == 4) {
                charSpellSlots1 = 3;
            } else if (slotLevel == 5) {
                charSpellSlots1 = 3;
            } else if (slotLevel == 6) {
                charSpellSlots1 = 3;
            } else if (slotLevel == 7) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 2;
            } else if (slotLevel == 8) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 2;
            } else if (slotLevel == 9) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 2;
            } else if (slotLevel == 10) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 3;
            } else if (slotLevel == 11) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 3;
            } else if (slotLevel == 12) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 3;
                charSpellSlots3 = 3;
            } else if (slotLevel == 13) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 3;
                charSpellSlots3 = 2;
            } else if (slotLevel == 14) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 3;
                charSpellSlots3 = 2;
            } else if (slotLevel == 15) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 3;
                charSpellSlots3 = 2;
            } else if (slotLevel == 16) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 3;
                charSpellSlots3 = 3;
            } else if (slotLevel == 17) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 3;
                charSpellSlots3 = 3;
            } else if (slotLevel == 18) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 3;
                charSpellSlots3 = 3;
            } else if (slotLevel == 19) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 3;
                charSpellSlots3 = 3;
                charSpellSlots4 = 1;
            } else if (slotLevel == 20) {
                charSpellSlots1 = 4;
                charSpellSlots2 = 3;
                charSpellSlots3 = 3;
                charSpellSlots4 = 1;
            }
        }
    } else {
        //charSpellSlots1 = 0;
        //charSpellSlots2 = 0;
        //charSpellSlots3 = 0;
        //charSpellSlots4 = 0;
        //charSpellSlots5 = 0;
        //charSpellSlots6 = 0;
        //charSpellSlots7 = 0;
        //charSpellSlots8 = 0;
        //charSpellSlots9 = 0;
    }
}
  
addTiefHellResist = " \
\t\t\t\t<actions>\n \
\t\t\t\t\t<id-00001>\n \
\t\t\t\t\t\t<durmod type=\"number\">0</durmod>\n \
\t\t\t\t\t\t<label type=\"string\">Hellish Resistance; RESIST: fire</label>\n \
\t\t\t\t\t\t<order type=\"number\">1</order>\n \
\t\t\t\t\t\t<targeting type=\"string\">self</targeting>\n \
\t\t\t\t\t\t<type type=\"string\">effect</type>\n \
\t\t\t\t\t</id-00001>\n \
\t\t\t\t</actions>\n \
\t\t\t\t<cast type=\"number\">0</cast>\n \
\t\t\t\t<description type=\"formattedtext\">\n \
\t\t\t\t\t<p>You have resistance to fire damage.</p>\n \
\t\t\t\t</description>\n \
\t\t\t\t<group type=\"string\">Resistances</group>\n \
\t\t\t\t<level type=\"number\">0</level>\n \
\t\t\t\t<locked type=\"number\">1</locked>\n \
\t\t\t\t<name type=\"string\">Tiefling: Hellish Resistance</name>\n \
\t\t\t\t<prepared type=\"number\">0</prepared>\n \
\t\t\t\t<ritual type=\"number\">0</ritual>\n \
\t\t\t\t<source type=\"string\">Tiefling</source>\n \
\t\t\t\t<type type=\"string\">racial</type>\n";