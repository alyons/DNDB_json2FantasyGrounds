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

var fullChar = "";
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

var charName = "";
var charGender = "";
var charDeity = "";
var charAge = "";
var charEyes = "";
var charHair = "";
var charSkin = "";
var charHeight = "";
var charWeight = "";
var hasAppear = 0;

/* * * * * * * * */
const _ABILITIES = {1:'STR',2:'DEX',3:'CON',4:'INT',5:'WIS',6:'CHA'};
const _ABILITY = {'STR': 'strength', 'DEX': 'dexterity', 'CON': 'constitution', 'INT': 'intelligence', 'WIS': 'wisdom', 'CHA': 'charisma'}
const skills = ['acrobatics', 'animal_handling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'sleight_of_hand', 'stealth', 'survival']
const skillsRef = ['dexterity', 'wisdom', 'intelligence', 'strength', 'charisma', 'intelligence', 'wisdom', 'charisma', 'intelligence', 'wisdom', 'intelligence', 'wisdom', 'charisma', 'charisma', 'intelligence', 'dexterity', 'dexterity', 'wisdom'];
const simpleMeleeWeapon = ["club","dagger","greatclub","handaxe","javelin","light_hammer","mace","quartrsfaff","sickle","spear"];
const simpleRangedWeapon = ["crossbow_light","dart","showtbow","sling"];
const martialMeleeWeapon = ["battleaxe","flail","glaive","greataxe","greatsword","halberd","lance","longsword","maul","morningstar","pike","rapier","scimitar","shortsword","trident","war_pick","warhammer","whip"];
const martialRangedWeapon = ["blowgun","crossbow_hand","crossbow_heavy","longbow","net"];
var class_spells = [];
var beyond_caller = {};
var object;

/* * * * * * * * * * */

$(function() {
    //$('#charJSON').val(barakas);
    $('#get-data').click(function () {
        inputData = $.parseJSON($('#charJSON').val());
        //console.log(inputData);
        //$.getJSON('LightfootHalflingBard.json', function (data) {
        //$.getJSON('barakas.json', function (data) {
        //$.getJSON(inputData, function (data) {
        //    parseCharacter(data);
        //});
        parseCharacter(inputData);
    });

    $("#dlChar").on("click", function() {
        if ($("#textHere").val() == "") {
            alert("You need to parse the URL first.");
            return;
        }
        var ts = Math.round((new Date()).getTime() / 1000);
        var pcFilename = ts + ".xml";

        var textFile = new Blob([$("#textHere").val()], {
            type: 'text/plain'
        });
        invokeSaveAsDialog(textFile, pcFilename);
    });
    //$('pre').hide();
});



function parseCharacter(inputChar) {
    //console.log(input);
    //var thisChar = JSON.stringify(input);
    var character = inputChar.character;

    // STR(1): 13
    // DEX(2): 12
    // CON(3): 14
    // INT(4): 9
    // WIS(5): 10
    // CHA(6): 17
    //console.log(input.character.name);
    allXML = startXML;
    buildXML = "";
    buildXML += "\t\t<abilities>\n";
    buildXML += "\t\t\t<strength>\n";
    buildXML += "\t\t\t\t<bonus type=\"number\">" + parseInt((character.bonusStats[0].value == null ? 0 : character.bonusStats[0].value)) + "</bonus>\n";
    //buildXML += "\t\t\t\t<save type=\"number\">" + parseInt(abilCHA[1]) + "</save>\n";
    buildXML += "\t\t\t\t<savemodifier type=\"number\">0</savemodifier>\n";
    //buildXML += "\t\t\t\t<saveprof type=\"number\">" + parseInt(abilCHA[3]) + "</saveprof>\n";
    buildXML += "\t\t\t\t<score type=\"number\">" + parseInt(getTotalAbilityScore(character, 1)) + "</score>\n";
    buildXML += "\t\t\t</strength>\n";
    buildXML += "\t\t\t<dexterity>\n";
    buildXML += "\t\t\t\t<bonus type=\"number\">" + parseInt(character.bonusStats[1].value == null ? 0 : character.bonusStats[1].value) + "</bonus>\n";
    //buildXML += "\t\t\t\t<save type=\"number\">" + parseInt(abilCHA[1]) + "</save>\n";
    buildXML += "\t\t\t\t<savemodifier type=\"number\">0</savemodifier>\n";
    //buildXML += "\t\t\t\t<saveprof type=\"number\">" + parseInt(abilCHA[3]) + "</saveprof>\n";
    buildXML += "\t\t\t\t<score type=\"number\">" + parseInt(getTotalAbilityScore(character, 2)) + "</score>\n";
    buildXML += "\t\t\t</dexterity>\n";
    buildXML += "\t\t\t<constitution>\n";
    buildXML += "\t\t\t\t<bonus type=\"number\">" + parseInt(character.bonusStats[2].value == null ? 0 : character.bonusStats[2].value) + "</bonus>\n";
    //buildXML += "\t\t\t\t<save type=\"number\">" + parseInt(abilCHA[1]) + "</save>\n";
    buildXML += "\t\t\t\t<savemodifier type=\"number\">0</savemodifier>\n";
    //buildXML += "\t\t\t\t<saveprof type=\"number\">" + parseInt(abilCHA[3]) + "</saveprof>\n";
    buildXML += "\t\t\t\t<score type=\"number\">" + parseInt(getTotalAbilityScore(character, 3)) + "</score>\n";
    buildXML += "\t\t\t</constitution>\n";
    buildXML += "\t\t\t<intelligence>\n";
    buildXML += "\t\t\t\t<bonus type=\"number\">" + parseInt(character.bonusStats[3].value == null ? 0 : character.bonusStats[3].value) + "</bonus>\n";
    //buildXML += "\t\t\t\t<save type=\"number\">" + parseInt(abilCHA[1]) + "</save>\n";
    buildXML += "\t\t\t\t<savemodifier type=\"number\">0</savemodifier>\n";
    //buildXML += "\t\t\t\t<saveprof type=\"number\">" + parseInt(abilCHA[3]) + "</saveprof>\n";
    buildXML += "\t\t\t\t<score type=\"number\">" + parseInt(getTotalAbilityScore(character, 4)) + "</score>\n";
    buildXML += "\t\t\t</intelligence>\n";
    buildXML += "\t\t\t<wisdom>\n";
    buildXML += "\t\t\t\t<bonus type=\"number\">" + parseInt(character.bonusStats[4].value == null ? 0 : character.bonusStats[4].value) + "</bonus>\n";
    //buildXML += "\t\t\t\t<save type=\"number\">" + parseInt(abilCHA[1]) + "</save>\n";
    buildXML += "\t\t\t\t<savemodifier type=\"number\">0</savemodifier>\n";
    //buildXML += "\t\t\t\t<saveprof type=\"number\">" + parseInt(abilCHA[3]) + "</saveprof>\n";
    buildXML += "\t\t\t\t<score type=\"number\">" + parseInt(getTotalAbilityScore(character, 5)) + "</score>\n";
    buildXML += "\t\t\t</wisdom>\n";
    buildXML += "\t\t\t<charisma>\n";
    buildXML += "\t\t\t\t<bonus type=\"number\">" + parseInt(character.bonusStats[5].value == null ? 0 : character.bonusStats[5].value) + "</bonus>\n";
    //buildXML += "\t\t\t\t<save type=\"number\">" + parseInt(abilCHA[1]) + "</save>\n";
    buildXML += "\t\t\t\t<savemodifier type=\"number\">0</savemodifier>\n";
    //buildXML += "\t\t\t\t<saveprof type=\"number\">" + parseInt(abilCHA[3]) + "</saveprof>\n";
    buildXML += "\t\t\t\t<score type=\"number\">" + parseInt(getTotalAbilityScore(character, 6)) + "</score>\n";
    buildXML += "\t\t\t</charisma>\n";
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

    // baseHitPoints
    buildXML += "\t\t<hp>\n";
    //buildXML += "\t\t\t<deathsavefail type=\"number\">" + parseInt(charDSF) + "</deathsavefail>\n";
    //buildXML += "\t\t\t<deathsavesuccess type=\"number\">" + parseInt(charDSS) + "</deathsavesuccess>\n";
    buildXML += "\t\t\t<total type=\"number\">" + parseInt(character.baseHitPoints) + "</total>\n";
    buildXML += "\t\t</hp>\n";

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
    var halfprof = getObjects(character, 'type', 'half-proficiency');
    for (var x in halfprof) {
        var hfprof = halfprof[x];
        var type = hfprof.subType
        if(type == 'ability-checks') {
            hasHalf = 1;
        }
    }
    buildXML += "\t\t<skilllist>\n";
    skills.forEach(function(element) {
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
            proficiencies.forEach(function(prof) {
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
    character.classes.forEach(function(current_class, i) {
        thisClass = current_class.definition.name.toLowerCase();
        totalLevels += 1;
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
        }

        buildXML += "\t\t\t\t<level type=\"number\">" + current_class.level + "</level>\n";
        buildXML += "\t\t\t\t<shortcut type=\"windowreference\">\n";
        buildXML += "\t\t\t\t\t<class>reference_class</class>\n";
        buildXML += "\t\t\t\t\t<recordname>reference.classdata." + thisClass + "@*</recordname>\n";
        buildXML += "\t\t\t\t</shortcut>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    });
    buildXML += "\t\t</classes>\n";

    var languages = getObjects(character, 'type', 'language');
    buildXML += "\t\t<languagelist>\n";
    languages.forEach(function(current_lang, i) {
        thisIteration = pad(i + 1, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + capitalizeFirstLetter(current_lang.subType) + "</name>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    });
    buildXML += "\t\t</languagelist>\n";


    buildXML += "\t\t<traitlist>\n";
    character.race.racialTraits.forEach(function(current_trait, i) {
        thisIteration = pad(i + 1, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(current_trait.definition.name).trim() + ": " + remove_tags_traits(fixQuote(current_trait.definition.snippet)) + "</name>\n";
        buildXML += "\t\t\t\t<source type=\"string\">" + convert_case(replaceDash(character.race.baseName.toLowerCase())) + "</source>\n";
        buildXML += "\t\t\t\t<text type=\"formattedtext\">\n";
        buildXML += "\t\t\t\t\t<p>" + remove_tags_traits(fixQuote(current_trait.definition.description)) + "</p>\n";
        buildXML += "\t\t\t\t</text>\n";
        buildXML += "\t\t\t\t<type type=\"string\">racial</type>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    });
    buildXML += "\t\t</traitlist>\n";

    buildXML += "\t\t<featurelist>\n";
    character.classes.forEach(function(current_class, i) {
        classLevel = current_class.level;
        current_class.definition.classFeatures.forEach(function(current_feature, j) {
            if(parseInt(current_feature.requiredLevel) <= parseInt(classLevel)) {
                thisIteration = pad((j + 1) * (i + 1), 5);
                buildXML += "\t\t\t<id-" + thisIteration + ">\n";
                buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
                buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(current_feature.name) + "</name>\n";
                buildXML += "\t\t\t\t<source type=\"string\">" + convert_case(replaceDash(current_class.definition.name.toLowerCase())) + "</source>\n";
                buildXML += "\t\t\t\t<text type=\"formattedtext\">\n";
                buildXML += "\t\t\t\t\t<p>" + remove_tags_traits(fixQuote(current_feature.description)) + "</p>\n";
                buildXML += "\t\t\t\t</text>\n";
                buildXML += "\t\t\t</id-" + thisIteration + ">\n";
            }
        });
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
    if(inventory != null) inventory.forEach(function(item, i) {
        thisIteration = pad(i + 1, 5);
        
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<count type=\"number\">" + parseInt(item.quantity) + "</count>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(item.definition.name) + "</name>\n";
        buildXML += "\t\t\t\t<weight type=\"number\">" + parseInt(item.definition.weight) / parseInt(item.definition.bundleSize) + "</weight>\n";
        
        if(item.definition.subType == null) {
            buildXML += "\t\t\t\t<type type=\"string\">" + fixQuote(item.definition.filterType) + "</type>\n";
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
            item.definition.properties.forEach(function(weapProp, i) {
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
    //weaponID.forEach(function(thisID, i) {
    //    console.log(weaponID[i]);
    //    console.log(weaponName[i]);
    //    console.log(weaponProperties[i]);
    //    console.log(weaponDice[i]);
    //    console.log(weaponType[i]);
    //});
    for(x = 0; x < weaponID.length; x++) {
        thisIteration = pad(x + 1, 5);
        inventNum = pad(parseInt(weaponID[x]), 5)
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
    if (charFeats != null) charFeats.forEach(function(thisFeat, i) {
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


    buildXML += "\t\t<proficiencylist>\n";
    var proficiencies = getObjects(character, 'type', 'proficiency');
    if(proficiencies != null) proficiencies.forEach(function(prof, i) {
        thisIteration = pad(i + 1, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(prof.friendlySubtypeName) + "</name>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
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
    character.classes.forEach(function(current_class, i) {
        charClass = current_class.definition.name.toLowerCase();
        if(charClass === "warlock"){
            pactSlots = getPactMagicSlots(current_class.level);
            pactLevel = current_class.level;
        } else {
            getSpellSlots(charClass, current_class.level);
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
    character.spells.race.forEach(function(eachSpell, i) {
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
    character.spells.class.forEach(function(eachSpell, i) {
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
    character.classes.forEach(function(current_class, i) {

        for(var i in character.classSpells) {
            var spells = character.classSpells[i];
            if(character.classSpells[i].characterClassId == current_class.id) {
                character.classSpells[i].spells.forEach(function(spell) {
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
    buildXML += "\t\t</powers>\n";

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
    return badString.replace(/\&lt\;p\&gt\;/g, '').replace(/\&lt\;\/p\&gt\;/g, '').replace(/\&lt\;\/span\&gt\;/g, '').replace(/\&lt\;span\&gt\;/g, '').replace(/\&rsquo\;/g, '\'').replace(/\&lt\;em\&gt\;/g, ' ').replace(/\&lt\;\/em\&gt\;/g, ' ').replace(/&lt\;br&gt\;/g, "\n").replace(/\&lt\;\/strong\&gt\;/g, '').replace(/\&lt\;strong\&gt\;/g, '').replace(/\&lt\;\/h\d\&gt\;/g, '').replace(/\&lt\;h\d\&gt\;/g, '').replace(/\&lt\;\/ul\&gt\;/g, '\n').replace(/\&lt\;ul\&gt\;/g, '\n').replace(/\&lt\;\/li\&gt\;/g, '\n').replace(/\&lt\;li\&gt\;/g, '\n')
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
            break;

        case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10:
            return 2;
            break;

        case 11: case 12: case 13: case 14: case 15: case 16:
            return 3;
            break;

        default:
            return 4;
            break;
    }
    return 0;
};

function getSpellSlots(slotClass, slotLevel) {
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