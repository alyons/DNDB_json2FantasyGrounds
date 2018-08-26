pdfFileName = "";
xmlFile = "";

PDFJS.workerSrc = 'js/pdf.worker.js';
startXML = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n";
startXML += "<root version=\"3.3\" release=\"8|CoreRPG:3\">\n";
startXML += "\t<character>\n";
endXML = "\t</character>\n</root>\n";

classArray = [];
profBonus = 0;

skillAcro = [0, 0];
skillAnim = [0, 0];
skillArca = [0, 0];
skillAthl = [0, 0];
skillDece = [0, 0];
skillHist = [0, 0];
skillInsi = [0, 0];
skillInti = [0, 0];
skillInve = [0, 0];
skillMedi = [0, 0];
skillNatu = [0, 0];
skillPerc = [0, 0];
skillPerf = [0, 0];
skillPers = [0, 0];
skillReli = [0, 0];
skillSlei = [0, 0];
skillStea = [0, 0];
skillSurv = [0, 0];

var abilSTR = [0, 0, 0, 0, 0];
var abilCHA = [0, 0, 0, 0, 0];
var abilCON = [0, 0, 0, 0, 0];
var abilDEX = [0, 0, 0, 0, 0];
var abilINT = [0, 0, 0, 0, 0];
var abilWIS = [0, 0, 0, 0, 0];

for (xy = 0; xy < 55; xy++) {
    window["EqName" + xy] = "";
    window["EqQty" + xy] = "";
    window["EqWeight" + xy] = "";
}

totalPages = 0;
currentPage = 0;
totalArrayCount = 0;
fullArrayName = [];
fullArrayValue = [];

numClasses = 0;
charName = "";
charBG = "";
charRace = "";
charAlign = "";
charDSS = 0;
charDSF = 0;
charHPmax = 0;
charPassive = 0;
charInit = 0;
charSpeed = "";
charPerTraits = "";
charIdeals = "";
charBonds = "";
charFlaws = "";
charDeity = "";
charLanguages = [];
charTraits = [];
charFeats = [];
charXP = 0;
charFeatures = [];
charProficiencies = [];
charPage1 = [];
charPage2 = [];
charPage3 = [];
charAge = "";
charHeight = "";
charWeight = "";
charGender = "";
charEyes = "";
charSkin = "";
charHair = "";
charCP = "";
charSP = "";
charEP = "";
charGP = "";
charPP = "";
charSenses = "";
charFT1 = "";
charFT2 = "";
charFT3 = "";
charFT4 = "";
charFT5 = "";
charFT6 = "";
charFTfull = "";
startFeatures = 0;
endFeatures = 0;
startTraits = 0;
endTraits = 0;
startFeats = 0;
endFeats = 0;
featTraitArray = [];
allFeatures = [];
allFeaturesDesc = [];
allTraits = [];
allTraitsDesc = [];
allFeats = [];
allFeatsDesc = [];
spellStart = 42;
spellEnd = 43;

moreFeaturesStart = [];
moreFeaturesEnd = [];

charRef = 0;
popCharRace = "";

hasAppear = 0;

charSpell0 = [];
charSpell1 = [];
charSpell2 = [];
charSpell3 = [];
charSpell4 = [];
charSpell5 = [];
charSpell6 = [];
charSpell7 = [];
charSpell8 = [];
charSpell9 = [];
charSpellSlots1 = "";
charSpellSlots2 = "";
charSpellSlots3 = "";
charSpellSlots4 = "";
charSpellSlots5 = "";
charSpellSlots6 = "";
charSpellSlots7 = "";
charSpellSlots8 = "";
charSpellSlots9 = "";

charSpell0Prep = [];
charSpell0Name = [];
charSpell0Src = [];
charSpell0Sav = [];
charSpell0Time = [];
charSpell0Rng = [];
charSpell0Comp = [];
charSpell0Dur = [];
charSpell0Page = [];
charSpell0Note = [];
charSpell1Prep = [];
charSpell1Name = [];
charSpell1Src = [];
charSpell1Sav = [];
charSpell1Time = [];
charSpell1Rng = [];
charSpell1Comp = [];
charSpell1Dur = [];
charSpell1Page = [];
charSpell1Note = [];
charSpell2Prep = [];
charSpell2Name = [];
charSpell2Src = [];
charSpell2Sav = [];
charSpell2Time = [];
charSpell2Rng = [];
charSpell2Comp = [];
charSpell2Dur = [];
charSpell2Page = [];
charSpell2Note = [];
charSpell3Prep = [];
charSpell3Name = [];
charSpell3Src = [];
charSpell3Sav = [];
charSpell3Time = [];
charSpell3Rng = [];
charSpell3Comp = [];
charSpell3Dur = [];
charSpell3Page = [];
charSpell3Note = [];
charSpell4Prep = [];
charSpell4Name = [];
charSpell4Src = [];
charSpell4Sav = [];
charSpell4Time = [];
charSpell4Rng = [];
charSpell4Comp = [];
charSpell4Dur = [];
charSpell4Page = [];
charSpell4Note = [];
charSpell5Prep = [];
charSpell5Name = [];
charSpell5Src = [];
charSpell5Sav = [];
charSpell5Time = [];
charSpell5Rng = [];
charSpell5Comp = [];
charSpell5Dur = [];
charSpell5Page = [];
charSpell5Note = [];
charSpell6Prep = [];
charSpell6Name = [];
charSpell6Src = [];
charSpell6Sav = [];
charSpell6Time = [];
charSpell6Rng = [];
charSpell6Comp = [];
charSpell6Dur = [];
charSpell6Page = [];
charSpell6Note = [];
charSpell7Prep = [];
charSpell7Name = [];
charSpell7Src = [];
charSpell7Sav = [];
charSpell7Time = [];
charSpell7Rng = [];
charSpell7Comp = [];
charSpell7Dur = [];
charSpell7Page = [];
charSpell7Note = [];
charSpell8Prep = [];
charSpell8Name = [];
charSpell8Src = [];
charSpell8Sav = [];
charSpell8Time = [];
charSpell8Rng = [];
charSpell8Comp = [];
charSpell8Dur = [];
charSpell8Page = [];
charSpell8Note = [];
charSpell9Prep = [];
charSpell9Name = [];
charSpell9Src = [];
charSpell9Sav = [];
charSpell9Time = [];
charSpell9Rng = [];
charSpell9Comp = [];
charSpell9Dur = [];
charSpell9Page = [];
charSpell9Note = [];

fullCharArray0 = [];
fullCharArray1 = [];
fullCharArray2 = [];
fullCharArray3 = [];
fullCharArray4 = [];
fullCharArray5 = [];
fullCharArray6 = [];

char0 = 0;
char1 = 0;
char2 = 0;
char3 = 0;
char4 = 0;
char5 = 0;
char6 = 0;
char7 = 0;
char8 = 0;
char9 = 0;

char1Slot = 0;
char2Slot = 0;
char3Slot = 0;
char4Slot = 0;
char5Slot = 0;
char6Slot = 0;
char7Slot = 0;
char8Slot = 0;
char9Slot = 0;

char1Pact = 0;
char2Pact = 0;
char3Pact = 0;
char4Pact = 0;
char5Pact = 0;
char6Pact = 0;
char7Pact = 0;
char8Pact = 0;
char9Pact = 0;

spell0First = -2;
spell1First = -2;
spell2First = -2;
spell3First = -2;
spell4First = -2;
spell5First = -2;
spell6First = -2;
spell7First = -2;
spell8First = -2;
spell9First = -2;

spell0Last = -1;
spell1Last = -1;
spell2Last = -1;
spell3Last = -1;
spell4Last = -1;
spell5Last = -1;
spell6Last = -1;
spell7Last = -1;
spell8Last = -1;
spell9Last = -1;


var spellHash = {};
var highestSpellNum = 0;

$(function() {
    var uploadObj = $("#fileuploader").uploadFile({
        url: "upload.php",
        multiple: false,
        dragDrop: true,
        maxFileCount: 1,
        fileName: "myfile",
        allowedTypes: "pdf",
        onSuccess: function(files, data, xhr, pd) {
            $("#pdfUpload").show();
            pdfFileName = "uploads/" + JSON.parse(data)[0];
            xmlFile = (JSON.parse(data)[0]).replace(/.[^/.]+$/, "");
            fileUploaded(pdfFileName);
        }
    });

    $("#copyoutput").on("click", function() {
        if ($("#textHere").val() == "") {
            alert("You haven't generated the data yet.");
            return;
        }
        var pcFilename = xmlFile + ".xml";

        var textFile = new Blob([$("#textHere").val()], {
            type: 'text/plain'
        });
        invokeSaveAsDialog(textFile, pcFilename);
    });

    $(".clearme").on("click", function() {
        reset_character();
        uploadObj.reset();
    });

    $("input[name=char_ref").on("click", function() {
        switch ($(this).val()) {
            case "no":
                charRef = 0;
                break;
            case "yes":
                charRef = 1;
                break;
            default:
                charRef = 0;
        }
    });

    $("#pdfUpload").hide();
});

function fileUploaded(pdfName) {
    var loadingTask = PDFJS.getDocument(pdfName);
    loadingTask.promise.then(function(pdf) {
        totalPages = pdf.numPages;
        for (r = 0; r < totalPages; r++) {
            pdf.getPage(r + 1).then(function(page) {
                page.getAnnotations().then(function(annotationContent) {
                    charPages = annotationContent;
                    parseCompleteChar(charPages);
                });
            }, function(reason) {
                console.error(reason);
            });
        }
    });
}

function parseCompleteChar(charArray) {
    //window["fullCharArray" + currentPage] = charArray.slice(0);
    fullCharArray0 = fullCharArray0.concat(charArray.slice(0));
    currentPage += 1;
    while (charArray.length < 1) {}
    for (var i = 0; i < charArray.length; i++) {
        //$('textarea')[0].value += charArray[i].fieldName + "-->" + charArray[i].fieldValue + "\n";
        totalArrayCount += 1;
        spellHash[charArray[i].fieldName] = charArray[i].fieldValue;
        //fullArrayName[totalArrayCount] = charArray[i].fieldName;
        //fullArrayValue[totalArrayCount] = charArray[i].fieldValue;
        switch (charArray[i].fieldName) {
            case "CHamod":
                abilCHA[0] = charArray[i].fieldValue;
                break;
            case "STRmod":
                abilSTR[0] = charArray[i].fieldValue;
                break;
            case "CONmod":
                abilCON[0] = charArray[i].fieldValue;
                break;
            case "INTmod":
                abilINT[0] = charArray[i].fieldValue;
                break;
            case "WISmod":
                abilWIS[0] = charArray[i].fieldValue;
                break;
            case "DEXmod ":
                abilDEX[0] = charArray[i].fieldValue;
                break;
            case "CHAmod":
                abilCHA[4] = charArray[i].fieldValue;
                break;
            case "STR":
                abilSTR[4] = charArray[i].fieldValue;
                break;
            case "CON":
                abilCON[4] = charArray[i].fieldValue;
                break;
            case "INT":
                abilINT[4] = charArray[i].fieldValue;
                break;
            case "WIS":
                abilWIS[4] = charArray[i].fieldValue;
                break;
            case "DEX":
                abilDEX[4] = charArray[i].fieldValue;
                break;
            case "ST Charisma":
                abilCHA[1] = charArray[i].fieldValue;
                break;
            case "ST Strength":
                abilSTR[1] = charArray[i].fieldValue;
                break;
            case "ST Constitution":
                abilCON[1] = charArray[i].fieldValue;
                break;
            case "ST Intelligence":
                abilINT[1] = charArray[i].fieldValue;
                break;
            case "ST Wisdom":
                abilWIS[1] = charArray[i].fieldValue;
                break;
            case "ST Dexterity":
                abilDEX[1] = charArray[i].fieldValue;
                break;
            case "StrProf":
                if (charArray[i].fieldValue.charCodeAt(0) == 8226) {
                    abilSTR[3] = "1";
                } else {
                    abilSTR[3] = "0";
                }
                break;
            case "DexProf":
                if (charArray[i].fieldValue.charCodeAt(0) == 8226) {
                    abilDEX[3] = "1";
                } else {
                    abilDEX[3] = "0";
                }
                break;
            case "ConProf":
                if (charArray[i].fieldValue.charCodeAt(0) == 8226) {
                    abilCON[3] = "1";
                } else {
                    abilCON[3] = "0";
                }
                break;
            case "IntProf":
                if (charArray[i].fieldValue.charCodeAt(0) == 8226) {
                    abilINT[3] = "1";
                } else {
                    abilINT[3] = "0";
                }
                break;
            case "WisProf":
                if (charArray[i].fieldValue.charCodeAt(0) == 8226) {
                    abilWIS[3] = "1";
                } else {
                    abilWIS[3] = "0";
                }
                break;
            case "ChaProf":
                if (charArray[i].fieldValue.charCodeAt(0) == 8226) {
                    abilCHA[3] = "1";
                } else {
                    abilCHA[3] = "0";
                }
                break;
            case "CharacterName":
                charName = charArray[i].fieldValue;
                break;
            case "CLASS  LEVEL":
                classString = charArray[i].fieldValue;
                classArray = classString.split("/");
                numClasses = parseInt(classArray.length);
                break;
            case "ProfBonus":
                profBonus = charArray[i].fieldValue;
                break;
            case "Acrobatics":
                skillAcro[0] = charArray[i].fieldValue;
                break;
            case "Animal":
                skillAnim[0] = charArray[i].fieldValue;
                break;
            case "Arcana":
                skillArca[0] = charArray[i].fieldValue;
                break;
            case "Athletics":
                skillAthl[0] = charArray[i].fieldValue;
                break;
            case "Deception ":
                skillDece[0] = charArray[i].fieldValue;
                break;
            case "History ":
                skillHist[0] = charArray[i].fieldValue;
                break;
            case "Insight":
                skillInsi[0] = charArray[i].fieldValue;
                break;
            case "Intimidation":
                skillInti[0] = charArray[i].fieldValue;
                break;
            case "Investigation":
                skillInve[0] = charArray[i].fieldValue;
                break;
            case "Medicine":
                skillMedi[0] = charArray[i].fieldValue;
                break;
            case "Nature":
                skillNatu[0] = charArray[i].fieldValue;
                break;
            case "Perception ":
                skillPerc[0] = charArray[i].fieldValue;
                break;
            case "Performance":
                skillPerf[0] = charArray[i].fieldValue;
                break;
            case "Persuasion":
                skillPers[0] = charArray[i].fieldValue;
                break;
            case "Religion":
                skillReli[0] = charArray[i].fieldValue;
                break;
            case "SleightofHand":
                skillSlei[0] = charArray[i].fieldValue;
                break;
            case "Stealth ":
                skillStea[0] = charArray[i].fieldValue;
                break;
            case "Survival":
                skillSurv[0] = charArray[i].fieldValue;
                break;
            case "AcrobaticsProf":
                if (charArray[i].fieldValue == "P") {
                    skillAcro[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillAcro[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillAcro[1] = "2";
                }
                break;
            case "AnimalHandlingProf":
                if (charArray[i].fieldValue == "P") {
                    skillAnim[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillAnim[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillAnim[1] = "2";
                }
                break;
            case "ArcanaProf":
                if (charArray[i].fieldValue == "P") {
                    skillArca[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillArca[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillArca[1] = "2";
                }
                break;
            case "AthleticsProf":
                if (charArray[i].fieldValue == "P") {
                    skillAthl[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillAthl[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillAthl[1] = "2";
                }
                break;
            case "DeceptionProf":
                if (charArray[i].fieldValue == "P") {
                    skillDece[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillDece[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillDece[1] = "2";
                }
                break;
            case "HistoryProf":
                if (charArray[i].fieldValue == "P") {
                    skillHist[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillHist[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillHist[1] = "2";
                }
                break;
            case "InsightProf":
                if (charArray[i].fieldValue == "P") {
                    skillInsi[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillInsi[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillInsi[1] = "2";
                }
                break;
            case "IntimidationProf":
                if (charArray[i].fieldValue == "P") {
                    skillInti[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillInti[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillInti[1] = "2";
                }
                break;
            case "InvestigationProf":
                if (charArray[i].fieldValue == "P") {
                    skillInve[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillInve[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillInve[1] = "2";
                }
                break;
            case "MedicineProf":
                if (charArray[i].fieldValue == "P") {
                    skillMedi[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillMedi[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillMedi[1] = "2";
                }
                break;
            case "NatureProf":
                if (charArray[i].fieldValue == "P") {
                    skillNatu[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillNatu[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillNatu[1] = "2";
                }
                break;
            case "PerceptionProf":
                if (charArray[i].fieldValue == "P") {
                    skillPerc[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillPerc[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillPerc[1] = "2";
                }
                break;
            case "PerformanceProf":
                if (charArray[i].fieldValue == "P") {
                    skillPerf[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillPerf[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillPerf[1] = "2";
                }
                break;
            case "PersuasionProf":
                if (charArray[i].fieldValue == "P") {
                    skillPers[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillPers[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillPers[1] = "2";
                }
                break;
            case "ReligionProf":
                if (charArray[i].fieldValue == "P") {
                    skillReli[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillReli[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillReli[1] = "2";
                }
                break;
            case "SleightOfHandProf":
                if (charArray[i].fieldValue == "P") {
                    skillSlei[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillSlei[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillSlei[1] = "2";
                }
                break;
            case "StealthProf":
                if (charArray[i].fieldValue == "P") {
                    skillStea[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillStea[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillStea[1] = "2";
                }
                break;
            case "SurvivalProf":
                if (charArray[i].fieldValue == "P") {
                    skillSurv[1] = "1";
                } else if (charArray[i].fieldValue == "H") {
                    skillSurv[1] = "3";
                } else if (charArray[i].fieldValue == "E") {
                    skillSurv[1] = "2";
                }
                break;
            case "BACKGROUND":
                charBG = charArray[i].fieldValue;
                break;
            case "RACE":
                charRace = charArray[i].fieldValue;

                isSingleRace = charRace.split(" ");
                if (isSingleRace.length == 1) {
                    popCharRace = isSingleRace[0];
                } else {
                    if (charRace == "Variant Human") {
                        popCharRace = "human variant";
                    } else {
                        popCharRace = isSingleRace[1];
                    }
                }
                break;
            case "Alignment":
                charAlign = charArray[i].fieldValue;
                break;
            case "Check Box 12":
                if (charArray[i].fieldValue == "Yes")
                    charDSS += 1;
                break;
            case "Check Box 13":
                if (charArray[i].fieldValue == "Yes")
                    charDSS += 1;
                break;
            case "Check Box 14":
                if (charArray[i].fieldValue == "Yes")
                    charDSS += 1;
                break;
            case "Check Box 15":
                if (charArray[i].fieldValue == "Yes")
                    charDSF += 1;
                break;
            case "Check Box 16":
                if (charArray[i].fieldValue == "Yes")
                    charDSF += 1;
                break;
            case "Check Box 17":
                if (charArray[i].fieldValue == "Yes")
                    charDSF += 1;
                break;
            case "MaxHP":
                charHPmax = charArray[i].fieldValue;
                break;
            case "Passive1":
                charPassive = charArray[i].fieldValue;
                break;
            case "Init":
                charInit = charArray[i].fieldValue;
                break;
            case "Speed":
                charSpeed = charArray[i].fieldValue;
                break;
            case "PersonalityTraits ":
                charPerTraits = charArray[i].fieldValue;
                break;
            case "Ideals":
                charIdeals = charArray[i].fieldValue;
                break;
            case "Bonds":
                charBonds = charArray[i].fieldValue;
                break;
            case "Flaws":
                charFlaws = charArray[i].fieldValue;
                break;
            case "ProficienciesLang":
                var pickles;
                pickles = charArray[i].fieldValue.split("\n");
                for (b = 0; b < pickles.length; b++) {
                    if (pickles[b] == "=== LANGUAGES === ") {
                        charLanguages = pickles[b + 1].split(', ');
                    } else if (pickles[b] == "=== ARMOR === ") {
                        charProficiencies.push("Armor: " + pickles[b + 1]);
                    } else if (pickles[b] == "=== WEAPONS === ") {
                        charProficiencies.push("Weapons: " + pickles[b + 1]);
                    } else if (pickles[b] == "=== TOOLS === ") {
                        charProficiencies.push("Tools: " + pickles[b + 1]);
                    }
                }
                break;
            case "XP":
                charXP = charArray[i].fieldValue;
                break;
            case "CP":
                charCP = charArray[i].fieldValue;
                break;
            case "SP":
                charSP = charArray[i].fieldValue;
                break;
            case "EP":
                charEP = charArray[i].fieldValue;
                break;
            case "GP":
                charGP = charArray[i].fieldValue;
                break;
            case "PP":
                charPP = charArray[i].fieldValue;
                break;
            case "AdditionalSenses":
                charSenses = charArray[i].fieldValue;
                break;
            case "Age":
                charAge = charArray[i].fieldValue;
                break;
            case "Height":
                charHeight = fixQuote(charArray[i].fieldValue);
                break;
            case "Weight":
                charWeight = fixQuote(charArray[i].fieldValue);
                break;
            case "Eyes":
                charEyes = fixQuote(charArray[i].fieldValue);
                break;
            case "Skin":
                charSkin = fixQuote(charArray[i].fieldValue);
                break;
            case "Hair":
                charHair = fixQuote(charArray[i].fieldValue);
                break;
            case "CP":
                charCP = charArray[i].fieldValue;
                break;
            case "SP":
                charSP = charArray[i].fieldValue;
                break;
            case "EP":
                charEP = charArray[i].fieldValue;
                break;
            case "GP":
                charGP = charArray[i].fieldValue;
                break;
            case "PP":
                charPP = charArray[i].fieldValue;
                break;
            case "FeaturesTraits1":
                charFT1 = charArray[i].fieldValue;
                break;
            case "FeaturesTraits2":
                charFT2 = charArray[i].fieldValue;
                break;
            case "FeaturesTraits3":
                charFT3 = charArray[i].fieldValue;
                break;
            case "FeaturesTraits4":
                charFT4 = charArray[i].fieldValue;
                break;
            case "FeaturesTraits5":
                charFT5 = charArray[i].fieldValue;
                break;
            case "FeaturesTraits6":
                charFT6 = charArray[i].fieldValue;
                break;
            case "AGE":
                charAge = charArray[i].fieldValue;
                break;
            case "HEIGHT":
                charHeight = fixQuote(charArray[i].fieldValue);
                break;
            case "WEIGHT":
                charWeight = fixQuote(charArray[i].fieldValue);
                break;
            case "EYES":
                charEyes = fixQuote(charArray[i].fieldValue);
                break;
            case "SKIN":
                charSkin = fixQuote(charArray[i].fieldValue);
                break;
            case "HAIR":
                charHair = fixQuote(charArray[i].fieldValue);
                break;
            case "GENDER":
                charGender = fixQuote(charArray[i].fieldValue);
                break;
            case "PersonalityTraits":
                charPerTraits = charArray[i].fieldValue;
                break;
            case "Ideals":
                charIdeals = charArray[i].fieldValue;
                break;
            case "Bonds":
                charBonds = charArray[i].fieldValue;
                break;
            case "Flaws":
                charFlaws = charArray[i].fieldValue;
                break;
            case "ALIGNMENT":
                charAlign = charArray[i].fieldValue;
                break;
            case "FAITH":
                charDeity = charArray[i].fieldValue;
                break;
            case "Eq Name0":
                EqName0 = charArray[i].fieldValue;
                break;
            case "Eq Qty0":
                EqQty0 = charArray[i].fieldValue;
                break;
            case "Eq Weight0":
                EqWeight0 = charArray[i].fieldValue;
                break;
            case "Eq Name1":
                EqName1 = charArray[i].fieldValue;
                break;
            case "Eq Qty1":
                EqQty1 = charArray[i].fieldValue;
                break;
            case "Eq Weight1":
                EqWeight1 = charArray[i].fieldValue;
                break;
            case "Eq Name2":
                EqName2 = charArray[i].fieldValue;
                break;
            case "Eq Qty2":
                EqQty2 = charArray[i].fieldValue;
                break;
            case "Eq Weight2":
                EqWeight2 = charArray[i].fieldValue;
                break;
            case "Eq Name3":
                EqName3 = charArray[i].fieldValue;
                break;
            case "Eq Qty3":
                EqQty3 = charArray[i].fieldValue;
                break;
            case "Eq Weight3":
                EqWeight3 = charArray[i].fieldValue;
                break;
            case "Eq Name4":
                EqName4 = charArray[i].fieldValue;
                break;
            case "Eq Qty4":
                EqQty4 = charArray[i].fieldValue;
                break;
            case "Eq Weight4":
                EqWeight4 = charArray[i].fieldValue;
                break;
            case "Eq Name5":
                EqName5 = charArray[i].fieldValue;
                break;
            case "Eq Qty5":
                EqQty5 = charArray[i].fieldValue;
                break;
            case "Eq Weight5":
                EqWeight5 = charArray[i].fieldValue;
                break;
            case "Eq Name6":
                EqName6 = charArray[i].fieldValue;
                break;
            case "Eq Qty6":
                EqQty6 = charArray[i].fieldValue;
                break;
            case "Eq Weight6":
                EqWeight6 = charArray[i].fieldValue;
                break;
            case "Eq Name7":
                EqName7 = charArray[i].fieldValue;
                break;
            case "Eq Qty7":
                EqQty7 = charArray[i].fieldValue;
                break;
            case "Eq Weight7":
                EqWeight7 = charArray[i].fieldValue;
                break;
            case "Eq Name8":
                EqName8 = charArray[i].fieldValue;
                break;
            case "Eq Qty8":
                EqQty8 = charArray[i].fieldValue;
                break;
            case "Eq Weight8":
                EqWeight8 = charArray[i].fieldValue;
                break;
            case "Eq Name9":
                EqName9 = charArray[i].fieldValue;
                break;
            case "Eq Qty9":
                EqQty9 = charArray[i].fieldValue;
                break;
            case "Eq Weight9":
                EqWeight9 = charArray[i].fieldValue;
                break;
            case "Eq Name10":
                EqName10 = charArray[i].fieldValue;
                break;
            case "Eq Qty10":
                EqQty10 = charArray[i].fieldValue;
                break;
            case "Eq Weight10":
                EqWeight10 = charArray[i].fieldValue;
                break;
            case "Eq Name11":
                EqName11 = charArray[i].fieldValue;
                break;
            case "Eq Qty11":
                EqQty11 = charArray[i].fieldValue;
                break;
            case "Eq Weight11":
                EqWeight11 = charArray[i].fieldValue;
                break;
            case "Eq Name12":
                EqName12 = charArray[i].fieldValue;
                break;
            case "Eq Qty12":
                EqQty12 = charArray[i].fieldValue;
                break;
            case "Eq Weight12":
                EqWeight12 = charArray[i].fieldValue;
                break;
            case "Eq Name13":
                EqName13 = charArray[i].fieldValue;
                break;
            case "Eq Qty13":
                EqQty13 = charArray[i].fieldValue;
                break;
            case "Eq Weight13":
                EqWeight13 = charArray[i].fieldValue;
                break;
            case "Eq Name14":
                EqName14 = charArray[i].fieldValue;
                break;
            case "Eq Qty14":
                EqQty14 = charArray[i].fieldValue;
                break;
            case "Eq Weight14":
                EqWeight14 = charArray[i].fieldValue;
                break;
            case "Eq Name15":
                EqName15 = charArray[i].fieldValue;
                break;
            case "Eq Qty15":
                EqQty15 = charArray[i].fieldValue;
                break;
            case "Eq Weight15":
                EqWeight15 = charArray[i].fieldValue;
                break;
            case "Eq Name16":
                EqName16 = charArray[i].fieldValue;
                break;
            case "Eq Qty16":
                EqQty16 = charArray[i].fieldValue;
                break;
            case "Eq Weight16":
                EqWeight16 = charArray[i].fieldValue;
                break;
            case "Eq Name17":
                EqName17 = charArray[i].fieldValue;
                break;
            case "Eq Qty17":
                EqQty17 = charArray[i].fieldValue;
                break;
            case "Eq Weight17":
                EqWeight17 = charArray[i].fieldValue;
                break;
            case "Eq Name18":
                EqName18 = charArray[i].fieldValue;
                break;
            case "Eq Qty18":
                EqQty18 = charArray[i].fieldValue;
                break;
            case "Eq Weight18":
                EqWeight18 = charArray[i].fieldValue;
                break;
            case "Eq Name19":
                EqName19 = charArray[i].fieldValue;
                break;
            case "Eq Qty19":
                EqQty19 = charArray[i].fieldValue;
                break;
            case "Eq Weight19":
                EqWeight19 = charArray[i].fieldValue;
                break;
            case "Eq Name20":
                EqName20 = charArray[i].fieldValue;
                break;
            case "Eq Qty20":
                EqQty20 = charArray[i].fieldValue;
                break;
            case "Eq Weight20":
                EqWeight20 = charArray[i].fieldValue;
                break;
            case "Eq Name21":
                EqName21 = charArray[i].fieldValue;
                break;
            case "Eq Qty21":
                EqQty21 = charArray[i].fieldValue;
                break;
            case "Eq Weight21":
                EqWeight21 = charArray[i].fieldValue;
                break;
            case "Eq Name22":
                EqName22 = charArray[i].fieldValue;
                break;
            case "Eq Qty22":
                EqQty22 = charArray[i].fieldValue;
                break;
            case "Eq Weight22":
                EqWeight22 = charArray[i].fieldValue;
                break;
            case "Eq Name23":
                EqName23 = charArray[i].fieldValue;
                break;
            case "Eq Qty23":
                EqQty23 = charArray[i].fieldValue;
                break;
            case "Eq Weight23":
                EqWeight23 = charArray[i].fieldValue;
                break;
            case "Eq Name24":
                EqName24 = charArray[i].fieldValue;
                break;
            case "Eq Qty24":
                EqQty24 = charArray[i].fieldValue;
                break;
            case "Eq Weight24":
                EqWeight24 = charArray[i].fieldValue;
                break;
            case "Eq Name25":
                EqName25 = charArray[i].fieldValue;
                break;
            case "Eq Qty25":
                EqQty25 = charArray[i].fieldValue;
                break;
            case "Eq Weight25":
                EqWeight25 = charArray[i].fieldValue;
                break;
            case "Eq Name26":
                EqName26 = charArray[i].fieldValue;
                break;
            case "Eq Qty26":
                EqQty26 = charArray[i].fieldValue;
                break;
            case "Eq Weight26":
                EqWeight26 = charArray[i].fieldValue;
                break;
            case "Eq Name27":
                EqName27 = charArray[i].fieldValue;
                break;
            case "Eq Qty27":
                EqQty27 = charArray[i].fieldValue;
                break;
            case "Eq Weight27":
                EqWeight27 = charArray[i].fieldValue;
                break;
            case "Eq Name28":
                EqName28 = charArray[i].fieldValue;
                break;
            case "Eq Qty28":
                EqQty28 = charArray[i].fieldValue;
                break;
            case "Eq Weight28":
                EqWeight28 = charArray[i].fieldValue;
                break;
            case "Eq Name29":
                EqName29 = charArray[i].fieldValue;
                break;
            case "Eq Qty29":
                EqQty29 = charArray[i].fieldValue;
                break;
            case "Eq Weight29":
                EqWeight29 = charArray[i].fieldValue;
                break;
            case "Eq Name30":
                EqName30 = charArray[i].fieldValue;
                break;
            case "Eq Qty30":
                EqQty30 = charArray[i].fieldValue;
                break;
            case "Eq Weight30":
                EqWeight30 = charArray[i].fieldValue;
                break;
            case "Eq Name31":
                EqName31 = charArray[i].fieldValue;
                break;
            case "Eq Qty31":
                EqQty31 = charArray[i].fieldValue;
                break;
            case "Eq Weight31":
                EqWeight31 = charArray[i].fieldValue;
                break;
            case "Eq Name32":
                EqName32 = charArray[i].fieldValue;
                break;
            case "Eq Qty32":
                EqQty32 = charArray[i].fieldValue;
                break;
            case "Eq Weight32":
                EqWeight32 = charArray[i].fieldValue;
                break;
            case "Eq Name33":
                EqName33 = charArray[i].fieldValue;
                break;
            case "Eq Qty33":
                EqQty33 = charArray[i].fieldValue;
                break;
            case "Eq Weight33":
                EqWeight33 = charArray[i].fieldValue;
                break;
            case "Eq Name34":
                EqName34 = charArray[i].fieldValue;
                break;
            case "Eq Qty34":
                EqQty34 = charArray[i].fieldValue;
                break;
            case "Eq Weight34":
                EqWeight34 = charArray[i].fieldValue;
                break;
            case "Eq Name35":
                EqName35 = charArray[i].fieldValue;
                break;
            case "Eq Qty35":
                EqQty35 = charArray[i].fieldValue;
                break;
            case "Eq Weight35":
                EqWeight35 = charArray[i].fieldValue;
                break;
            case "Eq Name36":
                EqName36 = charArray[i].fieldValue;
                break;
            case "Eq Qty36":
                EqQty36 = charArray[i].fieldValue;
                break;
            case "Eq Weight36":
                EqWeight36 = charArray[i].fieldValue;
                break;
            case "Eq Name37":
                EqName37 = charArray[i].fieldValue;
                break;
            case "Eq Qty37":
                EqQty37 = charArray[i].fieldValue;
                break;
            case "Eq Weight37":
                EqWeight37 = charArray[i].fieldValue;
                break;
            case "Eq Name38":
                EqName38 = charArray[i].fieldValue;
                break;
            case "Eq Qty38":
                EqQty38 = charArray[i].fieldValue;
                break;
            case "Eq Weight38":
                EqWeight38 = charArray[i].fieldValue;
                break;
            case "Eq Name39":
                EqName39 = charArray[i].fieldValue;
                break;
            case "Eq Qty39":
                EqQty39 = charArray[i].fieldValue;
                break;
            case "Eq Weight39":
                EqWeight39 = charArray[i].fieldValue;
                break;
            case "Eq Name40":
                EqName40 = charArray[i].fieldValue;
                break;
            case "Eq Qty40":
                EqQty40 = charArray[i].fieldValue;
                break;
            case "Eq Weight40":
                EqWeight40 = charArray[i].fieldValue;
                break;
            case "Eq Name41":
                EqName41 = charArray[i].fieldValue;
                break;
            case "Eq Qty41":
                EqQty41 = charArray[i].fieldValue;
                break;
            case "Eq Weight41":
                EqWeight41 = charArray[i].fieldValue;
                break;
            case "Eq Name42":
                EqName42 = charArray[i].fieldValue;
                break;
            case "Eq Qty42":
                EqQty42 = charArray[i].fieldValue;
                break;
            case "Eq Weight42":
                EqWeight42 = charArray[i].fieldValue;
                break;
            case "Eq Name43":
                EqName43 = charArray[i].fieldValue;
                break;
            case "Eq Qty43":
                EqQty43 = charArray[i].fieldValue;
                break;
            case "Eq Weight43":
                EqWeight43 = charArray[i].fieldValue;
                break;
            case "Eq Name44":
                EqName44 = charArray[i].fieldValue;
                break;
            case "Eq Qty44":
                EqQty44 = charArray[i].fieldValue;
                break;
            case "Eq Weight44":
                EqWeight44 = charArray[i].fieldValue;
                break;
            case "Eq Name45":
                EqName45 = charArray[i].fieldValue;
                break;
            case "Eq Qty45":
                EqQty45 = charArray[i].fieldValue;
                break;
            case "Eq Weight45":
                EqWeight45 = charArray[i].fieldValue;
                break;
            case "Eq Name46":
                EqName46 = charArray[i].fieldValue;
                break;
            case "Eq Qty46":
                EqQty46 = charArray[i].fieldValue;
                break;
            case "Eq Weight46":
                EqWeight46 = charArray[i].fieldValue;
                break;
            case "Eq Name47":
                EqName47 = charArray[i].fieldValue;
                break;
            case "Eq Qty47":
                EqQty47 = charArray[i].fieldValue;
                break;
            case "Eq Weight47":
                EqWeight47 = charArray[i].fieldValue;
                break;
            case "Eq Name48":
                EqName48 = charArray[i].fieldValue;
                break;
            case "Eq Qty48":
                EqQty48 = charArray[i].fieldValue;
                break;
            case "Eq Weight48":
                EqWeight48 = charArray[i].fieldValue;
                break;
            case "Eq Name49":
                EqName49 = charArray[i].fieldValue;
                break;
            case "Eq Qty49":
                EqQty49 = charArray[i].fieldValue;
                break;
            case "Eq Weight49":
                EqWeight49 = charArray[i].fieldValue;
                break;
            case "Eq Name50":
                EqName50 = charArray[i].fieldValue;
                break;
            case "Eq Qty50":
                EqQty05 = charArray[i].fieldValue;
                break;
            case "Eq Weight50":
                EqWeight50 = charArray[i].fieldValue;
                break;
            case "Eq Name51":
                EqName51 = charArray[i].fieldValue;
                break;
            case "Eq Qty51":
                EqQty51 = charArray[i].fieldValue;
                break;
            case "Eq Weight51":
                EqWeight51 = charArray[i].fieldValue;
                break;
            case "Eq Name52":
                EqName52 = charArray[i].fieldValue;
                break;
            case "Eq Qty52":
                EqQty52 = charArray[i].fieldValue;
                break;
            case "Eq Weight52":
                EqWeight52 = charArray[i].fieldValue;
                break;
            case "Eq Name53":
                EqName53 = charArray[i].fieldValue;
                break;
            case "Eq Qty53":
                EqQty53 = charArray[i].fieldValue;
                break;
            case "Eq Weight53":
                EqWeight53 = charArray[i].fieldValue;
                break;
            case "Eq Name54":
                EqName54 = charArray[i].fieldValue;
                break;
            case "Eq Qty54":
                EqQty54 = charArray[i].fieldValue;
                break;
            case "Eq Weight54":
                EqWeight54 = charArray[i].fieldValue;
                break;
            case "Eq Name55":
                EqName55 = charArray[i].fieldValue;
                break;
            case "Eq Qty55":
                EqQty55 = charArray[i].fieldValue;
                break;
            case "Eq Weight55":
                EqWeight55 = charArray[i].fieldValue;
                break;
            case "spellCastingAbility0":
                spellStart = i;
                break;
            //case "Notes49":
            //    spellEnd = i;
            //    break;
            default:
        }
    }

    
    //if (currentPage == totalPages + 2) {
    if (currentPage == totalPages) {
        //console.log("Spell start: " + spellStart);
        //console.log("Spell end: " + spellEnd);


        // Find the end of spells, we really should be doing this after all the pages have loaded
        // Otherwise our length won't be correct
        spellEnd = totalArrayCount;
        //console.log("A field: " + spellHash["spellName47"]);

        highestLevelSpells = 0;

        for (tz = 0; tz < 10; tz++) {
            if (spellHash["spellHeader" + tz] == undefined) {
                break;
            } else {
                highestLevelSpells = tz;
            }
        }

        highestSpellNum = 0;
        for(mj = 0; mj < 150; mj++) {
            if (spellHash["spellName" + mj] == undefined) {
                break;
            } else {
                highestSpellNum = mj;
            }
        }
        //console.log("Highest spell: " + highestSpellNum);

        for (ug = 1; ug <= highestLevelSpells; ug++) {
            slots = spellHash["spellSlotHeader" + ug].split(" ")[0];
            if (spellHash["spellSlotHeader" + ug].match(/Pact/)) {
                window["char" + ug + "Pact"] = slots;
                window["char" + ug + "Slot"] = 0;
            } else if (spellHash["spellSlotHeader" + ug].match(/Slots/)){
                window["char" + ug + "Pact"] = 0;
                window["char" + ug + "Slot"] = slots;
            }
        }


        charFTfull = charFT1 + " " + charFT2 + " " + charFT3 + " " + charFT4 + " " + charFT5 + " " + charFT6;
        featTraitArray = charFTfull.split("\n");
        featureCount = 0;
        for (c = 0; c < featTraitArray.length; c++) {
            if (featTraitArray[c].includes("FEATURES ===")) {
                moreFeaturesStart[featureCount] = c + 2;
                myCounter = c + 1;
                while (!featTraitArray[myCounter].match(/^===/)) {
                    if (myCounter >= featTraitArray.length) {
                        myCounter = featTraitArray.length;
                        break;
                    }
                    myCounter += 1;
                }
                moreFeaturesEnd[featureCount] = myCounter - 2;
                featureCount += 1;
            }
            if (featTraitArray[c].includes("TRAITS")) {
                startTraits = c + 2;
                tempCounter = c + 2;
                while (!featTraitArray[tempCounter].match(/===/)) {
                    if (tempCounter >= featTraitArray.length - 1) {
                        tempCounter = featTraitArray.length;
                        break;
                    }
                    tempCounter += 1;
                }
                endTraits = tempCounter;
            }
            if (featTraitArray[c].includes("FEATS")) {
                startFeats = c + 2;
                tempCounter = c + 2;
                while (!featTraitArray[tempCounter].match(/===/)) {
                    if (tempCounter >= featTraitArray.length - 1) {
                        tempCounter = featTraitArray.length;
                        break;
                    }
                    tempCounter += 1;
                }
                endFeats = tempCounter;
            }
        }
        for (b = 0; b < moreFeaturesStart.length; b++) {
            charFeatures = charFeatures.concat(featTraitArray.slice(moreFeaturesStart[b], moreFeaturesEnd[b]));
        }
        charTraits = featTraitArray.slice(startTraits, endTraits);
        charFeats = featTraitArray.slice(startFeats, endFeats);
        
        featureArray = [];
        traitArray = [];
        featArray = [];
        patt = new RegExp(/^\*/);
        for (d = 0; d < charFeatures.length; d++) {
            if (patt.test(charFeatures[d])) {
                featureArray.push(d);
            }
        }
        for (j = 0; j < charTraits.length; j++) {
            if (patt.test(charTraits[j])) {
                traitArray.push(j);
            }
        }
        for (p = 0; p < charFeats.length; p++) {
            if (patt.test(charFeats[p])) {
                featArray.push(p);
            }
        }

        for (f = 0; f < featureArray.length; f++) {
            thisDesc = "";
            thisName = "";
            if (featureArray[f + 1] === undefined) {
                lastEntry = charFeatures.length;
            } else {
                lastEntry = featureArray[f + 1];
            }
            for (g = featureArray[f]; g < lastEntry; g++) {
                if (g <= lastEntry) {
                    if (charFeatures[g] == "") {
                        continue;
                    } else {
                        if (charFeatures[g].match(/^\*/)) {
                            thisName = fixQuote(charFeatures[g]).replace("|", "").trim();
                        } else {
                            thisDesc += fixQuote(charFeatures[g]).replace("|", "").trim() + "\n";
                        }
                    }
                } else {
                    continue;
                }
            }
            allFeatures.push(thisName);
            allFeaturesDesc.push(thisDesc);
        }

        for (g = 0; g < traitArray.length; g++) {
            thisName = "";
            thisDesc = "";
            if (traitArray[g + 1] === undefined) {
                lastEntry = charTraits.length;
            } else {
                lastEntry = traitArray[g + 1];
            }
            for (j = traitArray[g]; j < lastEntry; j++) {
                if (j <= lastEntry) {
                    if (charTraits[j] == "") {
                        continue;
                    } else {
                        if(charTraits[j].match(/^\*/)) {
                            thisName = fixQuote(charTraits[j]).replace("|", "").trim() + "\n";
                        } else {
                            thisDesc += fixQuote(charTraits[j]).replace("|", "").trim() + "\n";
                        }
                    }
                } else {
                    continue;
                }
            }
            allTraits.push(thisName);
            allTraitsDesc.push(thisDesc);
        }

        for (m = 0; m < featArray.length; m++) {
            thisName = "";
            thisDesc = "";
            if (featArray[m + 1] === undefined) {
                lastEntry = charFeats.length;
            } else {
                lastEntry = featArray[m + 1];
            }
            for (n = featArray[m]; n < lastEntry; n++) {
                if (n <= lastEntry) {
                    if (charFeats[n] == "") {
                        continue;
                    } else {
                        if(charFeats[n].match(/^\*/)) {
                            thisName = fixQuote(charFeats[n]).replace("|", "").trim() + "\n";
                        } else {
                            thisDesc += fixQuote(charFeats[n]).replace("|", "").trim() + "\n";
                        }
                    }
                } else {
                    continue;
                }
            }
            allFeats.push(thisName);
            allFeatsDesc.push(thisDesc);
        }
        buildOutput();
    }
}

function buildOutput() {

    var canTrip1st = 0;
    // Test finding starting spells
    //window["fullCharArray" + currentPage] = charArray.slice(0);
    //console.log("Full array: " + fullCharArray0.length);
    for (myC = 0; myC < fullCharArray0.length - 1; myC++) {
        //if (fullCharArray0[myC].fieldValue.match(/=== CANTRIPS ===/)) {
        //    canTrip1st = myC + 10;
        //}
        //console.log("Value: " + fullCharArray0[myC].fieldValue);
        if (fullCharArray0[myC].fieldValue != undefined) {
            //console.log("Counter: " + myC);
            if (fullCharArray0[myC].fieldValue.match(/=== CANTRIPS ===/)) {
                spell0First = myC + 10;
            } else if (fullCharArray0[myC].fieldValue.match(/=== 1st LEVEL ===/)) {
                spell1First = myC + 10;
                spell0Last = myC - 20;
            } else if (fullCharArray0[myC].fieldValue.match(/=== 2nd LEVEL ===/)) {
                spell2First = myC + 10;
                spell1Last = myC - 20;
            } else if (fullCharArray0[myC].fieldValue.match(/=== 3rd LEVEL ===/)) {
                spell3First = myC + 10;
                spell2Last = myC - 20;
            } else if (fullCharArray0[myC].fieldValue.match(/=== 4th LEVEL ===/)) {
                spell4First = myC + 10;
                spell3Last = myC - 20;
            } else if (fullCharArray0[myC].fieldValue.match(/=== 5th LEVEL ===/)) {
                spell5First = myC + 10;
                spell4Last = myC - 20;
            } else if (fullCharArray0[myC].fieldValue.match(/=== 6th LEVEL ===/)) {
                spell6First = myC + 10;
                spell5Last = myC - 20;
            } else if (fullCharArray0[myC].fieldValue.match(/=== 7th LEVEL ===/)) {
                spell7First = myC + 10;
                spell6Last = myC - 20;
            } else if (fullCharArray0[myC].fieldValue.match(/=== 8th LEVEL ===/)) {
                spell8First = myC + 10;
                spell7Last = myC - 20;
            } else if (fullCharArray0[myC].fieldValue.match(/=== 9th LEVEL ===/)) {
                spell9First = myC + 10;
                spell8Last = myC - 20;
                spell9Last = fullCharArray0.length - 11;
            } 
        }
    }
    if (window["spell" + highestLevelSpells + "Last"] == -1) {
        for (zz = 0; zz < fullCharArray0.length; zz++) {
            if (fullCharArray0[zz].fieldName != undefined) {
                if(fullCharArray0[zz].fieldName.match("spellName" + highestSpellNum)) {
                    window["spell" + highestLevelSpells + "Last"] = zz;
                }
            }
        }
    }
    //console.log(fullCharArray0[spell3First].fieldValue);
    //spell3Top
    //charSpell3Prep = [];
    //charSpell3Name = [];
    //charSpell3Src = [];
    //charSpell3Sav = [];
    //charSpell3Time = [];
    //charSpell3Rng = [];
    //charSpell3Comp = [];
    //charSpell3Dur = [];
    //charSpell3Page = [];
    //charSpell3Note = [];
    if (spell0First > spell0Last) {
        for (x = spell0First; x < fullCharArray0.length; x += 10) {
            charSpell0Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell0Name.push(fullCharArray0[x].fieldValue);
            charSpell0Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell0Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell0Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell0Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell0Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell0Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell0Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell0Note.push(fullCharArray0[x + 8].fieldValue);

        }
        for (x = spell1First - 30; x > 0; x -= 10) {
            if (fullCharArray0[x].fieldName.match(/^spellName\d+/)) {
                charSpell0Prep.push(fullCharArray0[x - 1].fieldValue);
                charSpell0Name.push(fullCharArray0[x].fieldValue);A
                charSpell0Src.push(fullCharArray0[x + 1].fieldValue);
                charSpell0Sav.push(fullCharArray0[x + 2].fieldValue);
                charSpell0Time.push(fullCharArray0[x + 3].fieldValue);
                charSpell0Rng.push(fullCharArray0[x + 4].fieldValue);
                charSpell0Comp.push(fullCharArray0[x + 5].fieldValue);
                charSpell0Dur.push(fullCharArray0[x + 6].fieldValue);
                charSpell0Page.push(fullCharArray0[x + 7].fieldValue);
                charSpell0Note.push(fullCharArray0[x + 8].fieldValue);
            }
        }
    } else if (spell0First != -2) {
        for (x = spell0First; x <= spell0Last; x += 10) {
            charSpell0Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell0Name.push(fullCharArray0[x].fieldValue);
            charSpell0Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell0Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell0Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell0Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell0Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell0Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell0Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell0Note.push(fullCharArray0[x + 8].fieldValue);
        }
    }
    if (spell1First > spell1Last) {
        for (x = spell1First; x < fullCharArray0.length; x += 10) {
            charSpell1Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell1Name.push(fullCharArray0[x].fieldValue);
            charSpell1Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell1Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell1Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell1Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell1Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell1Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell1Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell1Note.push(fullCharArray0[x + 8].fieldValue);

        }
        for (x = spell2First - 30; x > 0; x -= 10) {
            if (fullCharArray0[x].fieldName.match(/^spellName\d+/)) {
                charSpell1Prep.push(fullCharArray0[x - 1].fieldValue);
                charSpell1Name.push(fullCharArray0[x].fieldValue);
                charSpell1Src.push(fullCharArray0[x + 1].fieldValue);
                charSpell1Sav.push(fullCharArray0[x + 2].fieldValue);
                charSpell1Time.push(fullCharArray0[x + 3].fieldValue);
                charSpell1Rng.push(fullCharArray0[x + 4].fieldValue);
                charSpell1Comp.push(fullCharArray0[x + 5].fieldValue);
                charSpell1Dur.push(fullCharArray0[x + 6].fieldValue);
                charSpell1Page.push(fullCharArray0[x + 7].fieldValue);
                charSpell1Note.push(fullCharArray0[x + 8].fieldValue);
            }
        }
    } else if (spell1First != -2) {
        for (x = spell1First; x <= spell1Last; x += 10) {
            charSpell1Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell1Name.push(fullCharArray0[x].fieldValue);
            charSpell1Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell1Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell1Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell1Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell1Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell1Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell1Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell1Note.push(fullCharArray0[x + 8].fieldValue);
        }
    }
    if (spell2First > spell2Last) {
        for (x = spell2First; x < fullCharArray0.length; x += 10) {
            charSpell2Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell2Name.push(fullCharArray0[x].fieldValue);
            charSpell2Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell2Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell2Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell2Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell2Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell2Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell2Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell2Note.push(fullCharArray0[x + 8].fieldValue);

        }
        for (x = spell3First - 30; x > 0; x -= 10) {
            if (fullCharArray0[x].fieldName.match(/^spellName\d+/)) {
                charSpell2Prep.push(fullCharArray0[x - 1].fieldValue);
                charSpell2Name.push(fullCharArray0[x].fieldValue);
                charSpell2Src.push(fullCharArray0[x + 1].fieldValue);
                charSpell2Sav.push(fullCharArray0[x + 2].fieldValue);
                charSpell2Time.push(fullCharArray0[x + 3].fieldValue);
                charSpell2Rng.push(fullCharArray0[x + 4].fieldValue);
                charSpell2Comp.push(fullCharArray0[x + 5].fieldValue);
                charSpell2Dur.push(fullCharArray0[x + 6].fieldValue);
                charSpell2Page.push(fullCharArray0[x + 7].fieldValue);
                charSpell2Note.push(fullCharArray0[x + 8].fieldValue);
            }
        }
    } else if (spell2First != -2) {
        for (x = spell2First; x <= spell2Last; x += 10) {
            charSpell2Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell2Name.push(fullCharArray0[x].fieldValue);
            charSpell2Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell2Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell2Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell2Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell2Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell2Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell2Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell2Note.push(fullCharArray0[x + 8].fieldValue);
        }
    }
    if (spell3First > spell3Last) {
        for (x = spell3First; x < fullCharArray0.length; x += 10) {
            charSpell3Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell3Name.push(fullCharArray0[x].fieldValue);
            charSpell3Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell3Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell3Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell3Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell3Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell3Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell3Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell3Note.push(fullCharArray0[x + 8].fieldValue);

        }
        for (x = spell4First - 30; x > 0; x -= 10) {
            if (fullCharArray0[x].fieldName.match(/^spellName\d+/)) {
                charSpell3Prep.push(fullCharArray0[x - 1].fieldValue);
                charSpell3Name.push(fullCharArray0[x].fieldValue);
                charSpell3Src.push(fullCharArray0[x + 1].fieldValue);
                charSpell3Sav.push(fullCharArray0[x + 2].fieldValue);
                charSpell3Time.push(fullCharArray0[x + 3].fieldValue);
                charSpell3Rng.push(fullCharArray0[x + 4].fieldValue);
                charSpell3Comp.push(fullCharArray0[x + 5].fieldValue);
                charSpell3Dur.push(fullCharArray0[x + 6].fieldValue);
                charSpell3Page.push(fullCharArray0[x + 7].fieldValue);
                charSpell3Note.push(fullCharArray0[x + 8].fieldValue);
            }
        }
    } else if (spell3First != -2) {
        for (x = spell3First; x <= spell3Last; x += 10) {
            charSpell3Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell3Name.push(fullCharArray0[x].fieldValue);
            charSpell3Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell3Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell3Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell3Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell3Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell3Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell3Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell3Note.push(fullCharArray0[x + 8].fieldValue);
        }
    }
    if (spell4First > spell4Last) {
        for (x = spell4First; x < fullCharArray0.length; x += 10) {
            charSpell4Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell4Name.push(fullCharArray0[x].fieldValue);
            charSpell4Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell4Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell4Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell4Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell4Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell4Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell4Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell4Note.push(fullCharArray0[x + 8].fieldValue);

        }
        for (x = spell5First - 30; x > 0; x -= 10) {
            if (fullCharArray0[x].fieldName.match(/^spellName\d+/)) {
                charSpell4Prep.push(fullCharArray0[x - 1].fieldValue);
                charSpell4Name.push(fullCharArray0[x].fieldValue);
                charSpell4Src.push(fullCharArray0[x + 1].fieldValue);
                charSpell4Sav.push(fullCharArray0[x + 2].fieldValue);
                charSpell4Time.push(fullCharArray0[x + 3].fieldValue);
                charSpell4Rng.push(fullCharArray0[x + 4].fieldValue);
                charSpell4Comp.push(fullCharArray0[x + 5].fieldValue);
                charSpell4Dur.push(fullCharArray0[x + 6].fieldValue);
                charSpell4Page.push(fullCharArray0[x + 7].fieldValue);
                charSpell4Note.push(fullCharArray0[x + 8].fieldValue);
            }
        }
    } else if (spell4First != -2) {
        for (x = spell4First; x <= spell4Last; x += 10) {
            charSpell4Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell4Name.push(fullCharArray0[x].fieldValue);
            charSpell4Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell4Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell4Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell4Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell4Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell4Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell4Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell4Note.push(fullCharArray0[x + 8].fieldValue);
        }
    }
    if (spell5First > spell5Last) {
        for (x = spell5First; x < fullCharArray0.length; x += 10) {
            charSpell5Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell5Name.push(fullCharArray0[x].fieldValue);
            charSpell5Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell5Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell5Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell5Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell5Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell5Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell5Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell5Note.push(fullCharArray0[x + 8].fieldValue);

        }
        for (x = spell6First - 30; x > 0; x -= 10) {
            if (fullCharArray0[x].fieldName.match(/^spellName\d+/)) {
                charSpell5Prep.push(fullCharArray0[x - 1].fieldValue);
                charSpell5Name.push(fullCharArray0[x].fieldValue);A
                charSpell5Src.push(fullCharArray0[x + 1].fieldValue);
                charSpell5Sav.push(fullCharArray0[x + 2].fieldValue);
                charSpell5Time.push(fullCharArray0[x + 3].fieldValue);
                charSpell5Rng.push(fullCharArray0[x + 4].fieldValue);
                charSpell5Comp.push(fullCharArray0[x + 5].fieldValue);
                charSpell5Dur.push(fullCharArray0[x + 6].fieldValue);
                charSpell5Page.push(fullCharArray0[x + 7].fieldValue);
                charSpell5Note.push(fullCharArray0[x + 8].fieldValue);
            }
        }
    } else if (spell5First != -2) {
        for (x = spell5First; x <= spell5Last; x += 10) {
            charSpell5Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell5Name.push(fullCharArray0[x].fieldValue);
            charSpell5Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell5Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell5Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell5Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell5Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell5Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell5Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell5Note.push(fullCharArray0[x + 8].fieldValue);
        }
    }
    if (spell6First > spell6Last) {
        for (x = spell6First; x < fullCharArray0.length; x += 10) {
            charSpell6Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell6Name.push(fullCharArray0[x].fieldValue);
            charSpell6Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell6Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell6Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell6Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell6Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell6Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell6Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell6Note.push(fullCharArray0[x + 8].fieldValue);

        }
        for (x = spell7First - 30; x > 0; x -= 10) {
            if (fullCharArray0[x].fieldName.match(/^spellName\d+/)) {
                charSpell6Prep.push(fullCharArray0[x - 1].fieldValue);
                charSpell6Name.push(fullCharArray0[x].fieldValue);A
                charSpell6Src.push(fullCharArray0[x + 1].fieldValue);
                charSpell6Sav.push(fullCharArray0[x + 2].fieldValue);
                charSpell6Time.push(fullCharArray0[x + 3].fieldValue);
                charSpell6Rng.push(fullCharArray0[x + 4].fieldValue);
                charSpell6Comp.push(fullCharArray0[x + 5].fieldValue);
                charSpell6Dur.push(fullCharArray0[x + 6].fieldValue);
                charSpell6Page.push(fullCharArray0[x + 7].fieldValue);
                charSpell6Note.push(fullCharArray0[x + 8].fieldValue);
            }
        }
    } else if (spell6First != -2) {
        for (x = spell6First; x <= spell6Last; x += 10) {
            charSpell6Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell6Name.push(fullCharArray0[x].fieldValue);
            charSpell6Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell6Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell6Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell6Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell6Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell6Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell6Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell6Note.push(fullCharArray0[x + 8].fieldValue);
        }
    }
    if (spell7First > spell7Last) {
        for (x = spell7First; x < fullCharArray0.length; x += 10) {
            charSpell7Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell7Name.push(fullCharArray0[x].fieldValue);
            charSpell7Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell7Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell7Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell7Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell7Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell7Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell7Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell7Note.push(fullCharArray0[x + 8].fieldValue);

        }
        for (x = spell8First - 30; x > 0; x -= 10) {
            if (fullCharArray0[x].fieldName.match(/^spellName\d+/)) {
                charSpell7Prep.push(fullCharArray0[x - 1].fieldValue);
                charSpell7Name.push(fullCharArray0[x].fieldValue);A
                charSpell7Src.push(fullCharArray0[x + 1].fieldValue);
                charSpell7Sav.push(fullCharArray0[x + 2].fieldValue);
                charSpell7Time.push(fullCharArray0[x + 3].fieldValue);
                charSpell7Rng.push(fullCharArray0[x + 4].fieldValue);
                charSpell7Comp.push(fullCharArray0[x + 5].fieldValue);
                charSpell7Dur.push(fullCharArray0[x + 6].fieldValue);
                charSpell7Page.push(fullCharArray0[x + 7].fieldValue);
                charSpell7Note.push(fullCharArray0[x + 8].fieldValue);
            }
        }
    } else if (spell7First != -2) {
        for (x = spell7First; x <= spell7Last; x += 10) {
            charSpell7Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell7Name.push(fullCharArray0[x].fieldValue);
            charSpell7Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell7Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell7Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell7Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell7Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell7Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell7Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell7Note.push(fullCharArray0[x + 8].fieldValue);
        }
    }
    if (spell8First > spell8Last) {
        for (x = spell8First; x < fullCharArray0.length; x += 10) {
            charSpell8Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell8Name.push(fullCharArray0[x].fieldValue);
            charSpell8Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell8Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell8Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell8Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell8Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell8Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell8Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell8Note.push(fullCharArray0[x + 8].fieldValue);

        }
        for (x = spell9First - 30; x > 0; x -= 10) {
            if (fullCharArray0[x].fieldName.match(/^spellName\d+/)) {
                charSpell8Prep.push(fullCharArray0[x - 1].fieldValue);
                charSpell8Name.push(fullCharArray0[x].fieldValue);A
                charSpell8Src.push(fullCharArray0[x + 1].fieldValue);
                charSpell8Sav.push(fullCharArray0[x + 2].fieldValue);
                charSpell8Time.push(fullCharArray0[x + 3].fieldValue);
                charSpell8Rng.push(fullCharArray0[x + 4].fieldValue);
                charSpell8Comp.push(fullCharArray0[x + 5].fieldValue);
                charSpell8Dur.push(fullCharArray0[x + 6].fieldValue);
                charSpell8Page.push(fullCharArray0[x + 7].fieldValue);
                charSpell8Note.push(fullCharArray0[x + 8].fieldValue);
            }
        }
    } else if (spell8First != -2) {
        for (x = spell8First; x <= spell8Last; x += 10) {
            charSpell8Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell8Name.push(fullCharArray0[x].fieldValue);
            charSpell8Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell8Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell8Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell8Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell8Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell8Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell8Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell8Note.push(fullCharArray0[x + 8].fieldValue);
        }
    }
    if (spell9First > spell9Last) {
        for (x = spell9First; x < fullCharArray0.length; x += 10) {
            charSpell9Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell9Name.push(fullCharArray0[x].fieldValue);
            charSpell9Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell9Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell9Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell9Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell9Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell9Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell9Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell9Note.push(fullCharArray0[x + 8].fieldValue);

        }
        for (x = fullCharArray0.length - 11; x > 0; x -= 10) {
            if (fullCharArray0[x].fieldName.match(/^spellName\d+/)) {
                charSpell9Prep.push(fullCharArray0[x - 1].fieldValue);
                charSpell9Name.push(fullCharArray0[x].fieldValue);A
                charSpell9Src.push(fullCharArray0[x + 1].fieldValue);
                charSpell9Sav.push(fullCharArray0[x + 2].fieldValue);
                charSpell9Time.push(fullCharArray0[x + 3].fieldValue);
                charSpell9Rng.push(fullCharArray0[x + 4].fieldValue);
                charSpell9Comp.push(fullCharArray0[x + 5].fieldValue);
                charSpell9Dur.push(fullCharArray0[x + 6].fieldValue);
                charSpell9Page.push(fullCharArray0[x + 7].fieldValue);
                charSpell9Note.push(fullCharArray0[x + 8].fieldValue);
            }
        }
    } else if (spell9First != -2) {
        for (x = spell9First; x <= spell9Last; x += 10) {
            charSpell9Prep.push(fullCharArray0[x - 1].fieldValue);
            charSpell9Name.push(fullCharArray0[x].fieldValue);
            charSpell9Src.push(fullCharArray0[x + 1].fieldValue);
            charSpell9Sav.push(fullCharArray0[x + 2].fieldValue);
            charSpell9Time.push(fullCharArray0[x + 3].fieldValue);
            charSpell9Rng.push(fullCharArray0[x + 4].fieldValue);
            charSpell9Comp.push(fullCharArray0[x + 5].fieldValue);
            charSpell9Dur.push(fullCharArray0[x + 6].fieldValue);
            charSpell9Page.push(fullCharArray0[x + 7].fieldValue);
            charSpell9Note.push(fullCharArray0[x + 8].fieldValue);
        }
    }

    allXML = startXML;
    buildXML = "";
    buildXML += "\t\t<abilities>\n";
    buildXML += "\t\t\t<charisma>\n";
    buildXML += "\t\t\t\t<bonus type=\"number\">" + parseInt(abilCHA[4]) + "</bonus>\n";
    buildXML += "\t\t\t\t<save type=\"number\">" + parseInt(abilCHA[1]) + "</save>\n";
    buildXML += "\t\t\t\t<savemodifier type=\"number\">0</savemodifier>\n";
    buildXML += "\t\t\t\t<saveprof type=\"number\">" + parseInt(abilCHA[3]) + "</saveprof>\n";
    buildXML += "\t\t\t\t<score type=\"number\">" + parseInt(abilCHA[0]) + "</score>\n";
    buildXML += "\t\t\t</charisma>\n";
    buildXML += "\t\t\t<strength>\n";
    buildXML += "\t\t\t\t<savemodifier type=\"number\">0</savemodifier>\n";
    buildXML += "\t\t\t\t<score type=\"number\">" + parseInt(abilSTR[0]) + "</score>\n";
    buildXML += "\t\t\t\t<save type=\"number\">" + parseInt(abilSTR[1]) + "</save>\n";
    buildXML += "\t\t\t\t<bonus type=\"number\">" + parseInt(abilSTR[4]) + "</bonus>\n";
    buildXML += "\t\t\t\t<saveprof type=\"number\">" + parseInt(abilSTR[3]) + "</saveprof>\n";
    buildXML += "\t\t\t</strength>\n";
    buildXML += "\t\t\t<constitution>\n";
    buildXML += "\t\t\t\t<savemodifier type=\"number\">0</savemodifier>\n";
    buildXML += "\t\t\t\t<score type=\"number\">" + parseInt(abilCON[0]) + "</score>\n";
    buildXML += "\t\t\t\t<save type=\"number\">" + parseInt(abilCON[1]) + "</save>\n";
    buildXML += "\t\t\t\t<bonus type=\"number\">" + parseInt(abilCON[4]) + "</bonus>\n";
    buildXML += "\t\t\t\t<saveprof type=\"number\">" + parseInt(abilCON[3]) + "</saveprof>\n";
    buildXML += "\t\t\t</constitution>\n";
    buildXML += "\t\t\t<dexterity>\n";
    buildXML += "\t\t\t\t<savemodifier type=\"number\">0</savemodifier>\n";
    buildXML += "\t\t\t\t<score type=\"number\">" + parseInt(abilDEX[0]) + "</score>\n";
    buildXML += "\t\t\t\t<save type=\"number\">" + parseInt(abilDEX[1]) + "</save>\n";
    buildXML += "\t\t\t\t<bonus type=\"number\">" + parseInt(abilDEX[4]) + "</bonus>\n";
    buildXML += "\t\t\t\t<saveprof type=\"number\">" + parseInt(abilDEX[3]) + "</saveprof>\n";
    buildXML += "\t\t\t</dexterity>\n";
    buildXML += "\t\t\t<intelligence>\n";
    buildXML += "\t\t\t\t<savemodifier type=\"number\">0</savemodifier>\n";
    buildXML += "\t\t\t\t<score type=\"number\">" + parseInt(abilINT[0]) + "</score>\n";
    buildXML += "\t\t\t\t<save type=\"number\">" + parseInt(abilINT[1]) + "</save>\n";
    buildXML += "\t\t\t\t<bonus type=\"number\">" + parseInt(abilINT[4]) + "</bonus>\n";
    buildXML += "\t\t\t\t<saveprof type=\"number\">" + parseInt(abilINT[3]) + "</saveprof>\n";
    buildXML += "\t\t\t</intelligence>\n";
    buildXML += "\t\t\t<wisdom>\n";
    buildXML += "\t\t\t\t<savemodifier type=\"number\">0</savemodifier>\n";
    buildXML += "\t\t\t\t<score type=\"number\">" + parseInt(abilWIS[0]) + "</score>\n";
    buildXML += "\t\t\t\t<save type=\"number\">" + parseInt(abilWIS[1]) + "</save>\n";
    buildXML += "\t\t\t\t<bonus type=\"number\">" + parseInt(abilWIS[4]) + "</bonus>\n";
    buildXML += "\t\t\t\t<saveprof type=\"number\">" + parseInt(abilWIS[3]) + "</saveprof>\n";
    buildXML += "\t\t\t</wisdom>\n";
    buildXML += "\t\t</abilities>\n";
    buildXML += "\t\t<name type=\"string\">" + charName + "</name>\n";
    buildXML += "\t\t<background type=\"string\">" + charBG + "</background>\n";

    if (charRef > 0) {
        buildXML += "\t\t<backgroundlink type=\"windowreference\">\n";
        buildXML += "\t\t\t<class>reference_background</class>\n";
        buildXML += "\t\t\t<recordname>reference.backgrounddata." + charBG.toLowerCase().replace(/\s/g, "") + "@*</recordname>\n";
        buildXML += "\t\t</backgroundlink>\n";
    }

    buildXML += "\t\t<alignment type=\"string\">" + charAlign + "</alignment>\n";
    buildXML += "\t\t<race type=\"string\">" + charRace + "</race>\n";
    if (charRef > 0) {
        buildXML += "\t\t<racelink type=\"windowreference\">\n";
        buildXML += "\t\t\t<class>reference_race</class>\n";
        buildXML += "\t\t\t<recordname>reference.racedata." + replaceDash(popCharRace.toLowerCase()) + "@*</recordname>\n";
        buildXML += "\t\t</racelink>\n";
    }
    buildXML += "\t\t<senses type=\"string\">" + charSenses + "</senses>\n";
    buildXML += "\t\t<perception type=\"number\">" + parseInt(charPassive) + "</perception>\n";

    buildXML += "\t\t<hp>\n";
    buildXML += "\t\t\t<deathsavefail type=\"number\">" + parseInt(charDSF) + "</deathsavefail>\n";
    buildXML += "\t\t\t<deathsavesuccess type=\"number\">" + parseInt(charDSS) + "</deathsavesuccess>\n";
    buildXML += "\t\t\t<total type=\"number\">" + parseInt(charHPmax) + "</total>\n";
    buildXML += "\t\t</hp>\n";

    buildXML += "\t\t<initiative>\n";
    buildXML += "\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t<temporary type=\"number\">0</temporary>\n";
    buildXML += "\t\t\t<total type=\"number\">" + parseInt(charInit) + "</total>\n";
    buildXML += "\t\t</initiative>\n";

    buildXML += "\t\t<speed>\n";
    buildXML += "\t\t\t<armor type=\"number\">0</armor>\n";
    buildXML += "\t\t\t<base type=\"number\">" + parseInt(charSpeed) + "</base>\n";
    buildXML += "\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t<temporary type=\"number\">0</temporary>\n";
    buildXML += "\t\t\t<total type=\"number\">" + parseInt(charSpeed) + "</total>\n";
    buildXML += "\t\t</speed>\n";

    buildXML += "\t\t<personalitytraits type=\"string\">" + fixQuote(charPerTraits) + "</personalitytraits>\n";
    buildXML += "\t\t<ideals type=\"string\">" + fixQuote(charIdeals) + "</ideals>\n";
    buildXML += "\t\t<bonds type=\"string\">" + fixQuote(charBonds) + "</bonds>\n";
    buildXML += "\t\t<flaws type=\"string\">" + fixQuote(charFlaws) + "</flaws>\n";

    buildXML += "\t\t<classes>\n";
    for (var i = 0; i < numClasses; i++) {
        thisIteration = pad(i + 1, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        thisClass = trim1(classArray[i]);
        thisClass = thisClass.split(" ");
        className = thisClass[0];
        classLevel = thisClass[1];

        buildXML += "\t\t\t\t<hddie type=\"dice\">";

        if (className == "Fighter") {
            buildXML += "d10";
        } else if (className == "Barbarian") {
            buildXML += "d12";
        } else if (className == "Bard") {
            buildXML += "d8";
        } else if (className == "Cleric") {
            buildXML += "d8";
        } else if (className == "Druid") {
            buildXML += "d8";
        } else if (className == "Monk") {
            buildXML += "d8";
        } else if (className == "Paladin") {
            buildXML += "d10";
        } else if (className == "Ranger") {
            buildXML += "d10";
        } else if (className == "Rogue") {
            buildXML += "d8";
        } else if (className == "Sorcerer") {
            buildXML += "d6";
        } else if (className == "Warlock") {
            buildXML += "d8";
        } else if (className == "Wizard") {
            buildXML += "d6";
        }
        buildXML += "</hddie>\n";
        buildXML += "\t\t\t\t<profbonus type=\"number\">" + parseInt(profBonus) + "</profbonus>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + thisClass[0] + "</name>\n";
        buildXML += "\t\t\t\t<level type=\"number\">" + thisClass[1] + "</level>\n";
        if (charRef > 0) {
            buildXML += "\t\t\t\t<shortcut type=\"windowreference\">\n";
            buildXML += "\t\t\t\t\t<class>reference_class</class>\n";
            buildXML += "\t\t\t\t\t<recordname>reference.classdata." + className.toLowerCase() + "@*</recordname>\n";
            buildXML += "\t\t\t\t</shortcut>\n";
        }
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    buildXML += "\t\t</classes>\n";

    buildXML += "\t\t<skilllist>\n";
    buildXML += "\t\t\t<id-00001>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Perception</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillPerc[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">wisdom</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillPerc[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00001>\n";
    buildXML += "\t\t\t<id-00002>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Insight</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillInsi[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">wisdom</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillInsi[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00002>\n";
    buildXML += "\t\t\t<id-00003>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Religion</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillReli[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">intelligence</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillReli[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00003>\n";
    buildXML += "\t\t\t<id-00004>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Animal Handling</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillAnim[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">wisdom</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillAnim[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00004>\n";
    buildXML += "\t\t\t<id-00005>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Nature</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillNatu[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">intelligence</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillNatu[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00005>\n";
    buildXML += "\t\t\t<id-00006>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Arcana</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillArca[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">intelligence</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillArca[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00006>\n";
    buildXML += "\t\t\t<id-00007>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Persuasion</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillPers[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">charisma</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillPers[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00007>\n";
    buildXML += "\t\t\t<id-00008>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Medicine</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillMedi[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">wisdom</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillMedi[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00008>\n";
    buildXML += "\t\t\t<id-00009>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Survival</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillSurv[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">wisdom</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillSurv[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00009>\n";
    buildXML += "\t\t\t<id-00010>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Performance</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillPerf[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">charisma</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillPerf[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00010>\n";
    buildXML += "\t\t\t<id-00011>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Acrobatics</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillAcro[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">dexterity</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillAcro[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00011>\n";
    buildXML += "\t\t\t<id-00012>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Athletics</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillAthl[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">strength</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillAthl[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00012>\n";
    buildXML += "\t\t\t<id-00013>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Sleight of Hand</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillSlei[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">dexterity</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillSlei[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00013>\n";
    buildXML += "\t\t\t<id-00014>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Intimidation</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillInti[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">charisma</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillInti[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00014>\n";
    buildXML += "\t\t\t<id-00015>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Deception</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillDece[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">charisma</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillDece[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00015>\n";
    buildXML += "\t\t\t<id-00016>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Investigation</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillInve[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">intelligence</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillInve[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00016>\n";
    buildXML += "\t\t\t<id-00017>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">Stealth</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillStea[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">dexterity</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillStea[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00017>\n";
    buildXML += "\t\t\t<id-00018>\n";
    buildXML += "\t\t\t\t<misc type=\"number\">0</misc>\n";
    buildXML += "\t\t\t\t<name type=\"string\">History</name>\n";
    buildXML += "\t\t\t\t<prof type=\"number\">" + parseInt(skillHist[1]) + "</prof>\n";
    buildXML += "\t\t\t\t<stat type=\"string\">intelligence</stat>\n";
    buildXML += "\t\t\t\t<total type=\"number\">" + parseInt(skillHist[0]) + "</total>\n";
    buildXML += "\t\t\t</id-00018>\n";
    buildXML += "\t\t</skilllist>\n";

    buildXML += "\t\t<languagelist>\n";
    for (l = 0; l < charLanguages.length; l++) {
        thisIteration = pad(l + 1, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + charLanguages[l] + "</name>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    buildXML += "\t\t</languagelist>\n";

    buildXML += "\t\t<traitlist>\n";
    for (m = 0; m < allTraits.length; m++) {
        thisIteration = pad(m + 1, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + allTraits[m].trim() + "</name>\n";
        buildXML += "\t\t\t\t<source type=\"string\">" + convert_case(popCharRace) + "</source>\n";
        buildXML += "\t\t\t\t<text type=\"formattedtext\">\n";
        fullDescription = allTraitsDesc[m].split("\n");
        for(pn = 0; pn < fullDescription.length - 1; pn++) {
            buildXML += "\t\t\t\t\t<p>" + fixQuote(fullDescription[pn]) + "</p>\n";
        }
        buildXML += "\t\t\t\t</text>\n";
        buildXML += "\t\t\t\t<type type=\"string\">racial</type>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    buildXML += "\t\t</traitlist>\n";

    buildXML += "\t\t<featurelist>\n";
    for (n = 0; n < allFeatures.length; n++) {
        thisIteration = pad(n + 1, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(allFeatures[n]) + "</name>\n";
        buildXML += "\t\t\t\t<source type=\"string\">" + convert_case(charBG) + "</source>\n";
        buildXML += "\t\t\t\t<text type=\"formattedtext\">\n";
        fullDescription = allFeaturesDesc[n].split("\n");
        for(mj = 0; mj < fullDescription.length - 1; mj++) {
            buildXML += "\t\t\t\t\t<p>" + fixQuote(fullDescription[mj]) + "</p>\n";
        }
		buildXML += "\t\t\t\t</text>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    buildXML += "\t\t</featurelist>\n";

    buildXML += "\t\t<inventorylist>\n";
    for (yz = 0; yz < 55; yz++) {
        thisIteration = pad(yz + 1, 5);
        if (window["EqName" + yz] == "") {
            break;
        }
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<count type=\"number\">" + window["EqQty" + yz] + "</count>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + window["EqName" + yz] + "</name>\n";
        buildXML += "\t\t\t\t<weight type=\"number\">" + window["EqWeight" + yz].replace(/\s+lb\./, "") + "</weight>\n";
        buildXML += "\t\t\t\t<isidentified type=\"number\">1</isidentified>\n";
        //buildXML += "\t\t\t\t"
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    buildXML += "\t\t</inventorylist>\n";

    buildXML += "\t\t<featlist>\n";
    for (n = 0; n < allFeats.length; n++) {
        thisIteration = pad(n + 1, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(allFeats[n]) + "</name>\n";
        buildXML += "\t\t\t\t<source type=\"string\">" + convert_case(charBG) + "</source>\n";
        buildXML += "\t\t\t\t<text type=\"formattedtext\">\n";
        fullDescription = allFeatsDesc[n].split("\n");
        for(qn = 0; qn < fullDescription.length - 1; qn++) {
            buildXML += "\t\t\t\t\t<p>" + fixQuote(fullDescription[qn]) + "</p>\n";
        }
        buildXML += "\t\t\t\t</text>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    buildXML += "\t\t</featlist>\n";

    buildXML += "\t\t<proficiencylist>\n";
    for (o = 0; o < charProficiencies.length; o++) {
        thisIteration = pad(o + 1, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(charProficiencies[o]) + "</name>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    buildXML += "\t\t</proficiencylist>\n";

    buildXML += "\t\t<exp type=\"number\">" + parseInt(charXP) + "</exp>\n";
    buildXML += "\t\t<age type=\"string\">" + fixQuote(charAge) + "</age>\n";
    buildXML += "\t\t<height type=\"string\">" + fixQuote(charHeight) + "</height>\n";
    buildXML += "\t\t<weight type=\"string\">" + fixQuote(charWeight) + "</weight>\n";
    buildXML += "\t\t<gender type=\"string\">" + fixQuote(charGender) + "</gender>\n";

    if (charEyes != "") {
        hasAppear += 1;
    }
    if (charHair != "") {
        hasAppear += 2;
    }
    if (charSkin != "") {
        hasAppear += 4;
    }

    if (hasAppear == 1) {
        buildXML += "\t\t<appearance type=\"string\">Eyes: " + fixQuote(charEyes) + "</appearance>\n";
    } else if (hasAppear == 2) {
        buildXML += "\t\t<appearance type=\"string\">Hair: " + fixQuote(charHair) + "</appearance>\n";
    } else if (hasAppear == 3) {
        buildXML += "\t\t<appearance type=\"string\">Eyes: " + fixQuote(charEyes) + "\\nHair: " + fixQuote(charHair) + "</appearance>\n";
    } else if (hasAppear == 4) {
        buildXML += "\t\t<appearance type=\"string\">Skin: " + fixQuote(charSkin) + "</appearance>\n";
    } else if (hasAppear == 5) {
        buildXML += "\t\t<appearance type=\"string\">Eyes: " + fixQuote(charEyes) + "\\nSkin: " + fixQuote(charSkin) + "</appearance>\n";
    } else if (hasAppear == 6) {
        buildXML += "\t\t<appearance type=\"string\">Hair: " + fixQuote(charHair) + "\\nSkin: " + fixQuote(charSkin) + "</appearance>\n";
    } else if (hasAppear == 7) {
        buildXML += "\t\t<appearance type=\"string\">Eyes: " + fixQuote(charEyes) + "\\nHair: " + fixQuote(charHair) + "\\nSkin: " + fixQuote(charSkin) + "</appearance>\n";
    }

    buildXML += "\t\t<coins>\n";
    buildXML += "\t\t\t<slot1>\n";
    buildXML += "\t\t\t\t<amount type=\"number\">" + parseInt(charPP) + "</amount>\n";
    buildXML += "\t\t\t\t<name type=\"string\">PP</name>\n";
    buildXML += "\t\t\t</slot1>\n";
    buildXML += "\t\t\t<slot2>\n";
    buildXML += "\t\t\t\t<amount type=\"number\">" + parseInt(charGP) + "</amount>\n";
    buildXML += "\t\t\t\t<name type=\"string\">GP</name>\n";
    buildXML += "\t\t\t</slot2>\n";
    buildXML += "\t\t\t<slot3>\n";
    buildXML += "\t\t\t\t<amount type=\"number\">" + parseInt(charEP) + "</amount>\n";
    buildXML += "\t\t\t\t<name type=\"string\">EP</name>\n";
    buildXML += "\t\t\t</slot3>\n";
    buildXML += "\t\t\t<slot4>\n";
    buildXML += "\t\t\t\t<amount type=\"number\">" + parseInt(charSP) + "</amount>\n";
    buildXML += "\t\t\t\t<name type=\"string\">SP</name>\n";
    buildXML += "\t\t\t</slot4>\n";
    buildXML += "\t\t\t<slot5>\n";
    buildXML += "\t\t\t\t<amount type=\"number\">" + parseInt(charCP) + "</amount>\n";
    buildXML += "\t\t\t\t<name type=\"string\">CP</name>\n";
    buildXML += "\t\t\t</slot5>\n";
    buildXML += "\t\t\t<slot6>\n";
    buildXML += "\t\t\t\t<amount type=\"number\">0</amount>\n";
    buildXML += "\t\t\t</slot6>\n";
    buildXML += "\t\t</coins>\n";

    buildXML += "\t\t<deity type=\"string\">" + fixQuote(charDeity) + "</deity>\n";

    if ((popCharRace == "halfling") || (popCharRace == "gnome")) {
        buildXML += "\t\t<size type=\"string\">Small</size>\n";
    } else {
        buildXML += "\t\t<size type=\"string\">Medium</size>\n";
    }

    buildXML += "\t\t<powers>\n";

    charTotalSpells = 0;
    //for (x = spell0First; x <= spell0Last; x += 10) {
    //    charTotalSpells += 1;
    //    thisIteration = pad(charTotalSpells, 5);
    //    buildXML += "\t\t\t<id-" + thisIteration + ">\n";
    //    buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
    //    buildXML += "\t\t\t\t<level type=\"number\">0</level>\n";
    //    buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
    //    buildXML += "\t\t\t\t<name type=\"string\">" + fullCharArray0[x].fieldValue + "</name>\n";
    //    if (fullCharArray0[x - 1] == "P") {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
    //    } else {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
    //    }
    //    buildXML += "\t\t\t\t<source type=\"string\">" + fullCharArray0[x+1].fieldValue + "</source>\n";
    //    buildXML += "\t\t\t\t<components type=\"string\">" + fullCharArray0[x+5].fieldValue + "</components>\n";
    //    buildXML += "\t\t\t\t<range type=\"string\">" + fullCharArray0[x+4].fieldValue + "</range>\n";
    //    buildXML += "\t\t\t\t<duration type=\"string\">" + fullCharArray0[x+6].fieldValue + "</duration>\n";
    //    buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
    //    buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    //}
    //for (x = spell1First; x <= spell1Last; x+= 10) {
    //    charTotalSpells += 1;
    //    thisIteration = pad(charTotalSpells, 5);
    //    buildXML += "\t\t\t<id-" + thisIteration + ">\n";
    //    buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
    //    buildXML += "\t\t\t\t<level type=\"number\">1</level>\n";
    //    buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
    //    buildXML += "\t\t\t\t<name type=\"string\">" + fullCharArray0[x].fieldValue + "</name>\n";
    //    if (fullCharArray0[x - 1] == "P") {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
    //    } else {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
    //    }
    //    buildXML += "\t\t\t\t<source type=\"string\">" + fullCharArray0[x+1].fieldValue + "</source>\n";
    //    buildXML += "\t\t\t\t<components type=\"string\">" + fullCharArray0[x+5].fieldValue + "</components>\n";
    //    buildXML += "\t\t\t\t<range type=\"string\">" + fullCharArray0[x+4].fieldValue + "</range>\n";
    //    buildXML += "\t\t\t\t<duration type=\"string\">" + fullCharArray0[x+6].fieldValue + "</duration>\n";
    //    buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
    //    buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    //}
    //for (x = spell2First; x <= spell2Last; x+= 10) {
    //    charTotalSpells += 1;
    //    thisIteration = pad(charTotalSpells, 5);
    //    buildXML += "\t\t\t<id-" + thisIteration + ">\n";
    //    buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
    //    buildXML += "\t\t\t\t<level type=\"number\">2</level>\n";
    //    buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
    //    buildXML += "\t\t\t\t<name type=\"string\">" + fullCharArray0[x].fieldValue + "</name>\n";
    //    if (fullCharArray0[x - 1] == "P") {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
    //    } else {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
    //    }
    //    buildXML += "\t\t\t\t<source type=\"string\">" + fullCharArray0[x+1].fieldValue + "</source>\n";
    //    buildXML += "\t\t\t\t<components type=\"string\">" + fullCharArray0[x+5].fieldValue + "</components>\n";
    //    buildXML += "\t\t\t\t<range type=\"string\">" + fullCharArray0[x+4].fieldValue + "</range>\n";
    //    buildXML += "\t\t\t\t<duration type=\"string\">" + fullCharArray0[x+6].fieldValue + "</duration>\n";
    //    buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
    //    buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    //}
    //for (x = spell3First; x <= spell3Last; x += 10) {
    //    charTotalSpells += 1;
    //    thisIteration = pad(charTotalSpells, 5);
    //    buildXML += "\t\t\t<id-" + thisIteration + ">\n";
    //    buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
    //    buildXML += "\t\t\t\t<level type=\"number\">3</level>\n";
    //    buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
    //    buildXML += "\t\t\t\t<name type=\"string\">" + fullCharArray0[x].fieldValue + "</name>\n";
    //    if (fullCharArray0[x - 1] == "P") {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
    //    } else {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
    //    }
    //    buildXML += "\t\t\t\t<source type=\"string\">" + fullCharArray0[x+1].fieldValue + "</source>\n";
    //    buildXML += "\t\t\t\t<components type=\"string\">" + fullCharArray0[x+5].fieldValue + "</components>\n";
    //    buildXML += "\t\t\t\t<range type=\"string\">" + fullCharArray0[x+4].fieldValue + "</range>\n";
    //    buildXML += "\t\t\t\t<duration type=\"string\">" + fullCharArray0[x+6].fieldValue + "</duration>\n";
    //    buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
    //    buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    //}
    //charSpell3Name.push(fullCharArray0[x-1].fieldValue);
    //charSpell3Prep.push(fullCharArray0[x].fieldValue);
    //charSpell3Name.push(fullCharArray0[x+1].fieldValue);
    //charSpell3Src.push(fullCharArray0[x+2].fieldValue);
    //charSpell3Sav.push(fullCharArray0[x+2].fieldValue);
    //charSpell3Time.push(fullCharArray0[x+3].fieldValue);
    //charSpell3Rng.push(fullCharArray0[x+4].fieldValue);
    //charSpell3Comp.push(fullCharArray0[x+5].fieldValue);
    //charSpell3Dur.push(fullCharArray0[x+6].fieldValue);
    //charSpell3Page.push(fullCharArray0[x+7].fieldValue);
    //charSpell3Note.push(fullCharArray0[x+8].fieldValue);
    for (x = 0; x < charSpell0Prep.length; x++) {
        charTotalSpells += 1;
        thisIteration = pad(charTotalSpells, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
        buildXML += "\t\t\t\t<level type=\"number\">0</level>\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(charSpell0Name[x]) + "</name>\n";
        if (charSpell0Prep[x] == "P") {
            buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
        } else {
            buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
        }
        buildXML += "\t\t\t\t<source type=\"string\">" + charSpell0Src[x] + "</source>\n";
        buildXML += "\t\t\t\t<components type=\"string\">" + charSpell0Comp[x] + "</components>\n";
        buildXML += "\t\t\t\t<range type=\"string\">" + charSpell0Rng[x] + "</range>\n";
        buildXML += "\t\t\t\t<duration type=\"string\">" + charSpell0Dur[x] + "</duration>\n";
        buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    for (x = 0; x < charSpell1Prep.length; x++) {
        charTotalSpells += 1;
        thisIteration = pad(charTotalSpells, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
        buildXML += "\t\t\t\t<level type=\"number\">1</level>\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(charSpell1Name[x]) + "</name>\n";
        if (charSpell1Prep[x] == "P") {
            buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
        } else {
            buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
        }
        buildXML += "\t\t\t\t<source type=\"string\">" + charSpell1Src[x] + "</source>\n";
        buildXML += "\t\t\t\t<components type=\"string\">" + charSpell1Comp[x] + "</components>\n";
        buildXML += "\t\t\t\t<range type=\"string\">" + charSpell1Rng[x] + "</range>\n";
        buildXML += "\t\t\t\t<duration type=\"string\">" + charSpell1Dur[x] + "</duration>\n";
        buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    for (x = 0; x < charSpell2Prep.length; x++) {
        charTotalSpells += 1;
        thisIteration = pad(charTotalSpells, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
        buildXML += "\t\t\t\t<level type=\"number\">2</level>\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(charSpell2Name[x]) + "</name>\n";
        if (charSpell2Prep[x] == "P") {
            buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
        } else {
            buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
        }
        buildXML += "\t\t\t\t<source type=\"string\">" + charSpell2Src[x] + "</source>\n";
        buildXML += "\t\t\t\t<components type=\"string\">" + charSpell2Comp[x] + "</components>\n";
        buildXML += "\t\t\t\t<range type=\"string\">" + charSpell2Rng[x] + "</range>\n";
        buildXML += "\t\t\t\t<duration type=\"string\">" + charSpell2Dur[x] + "</duration>\n";
        buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    for (x = 0; x < charSpell3Prep.length; x++) {
        charTotalSpells += 1;
        thisIteration = pad(charTotalSpells, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
        buildXML += "\t\t\t\t<level type=\"number\">3</level>\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(charSpell3Name[x]) + "</name>\n";
        if (charSpell3Prep[x] == "P") {
            buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
        } else {
            buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
        }
        buildXML += "\t\t\t\t<source type=\"string\">" + charSpell3Src[x] + "</source>\n";
        buildXML += "\t\t\t\t<components type=\"string\">" + charSpell3Comp[x] + "</components>\n";
        buildXML += "\t\t\t\t<range type=\"string\">" + charSpell3Rng[x] + "</range>\n";
        buildXML += "\t\t\t\t<duration type=\"string\">" + charSpell3Dur[x] + "</duration>\n";
        buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    for (x = 0; x < charSpell4Prep.length; x++) {
        charTotalSpells += 1;
        thisIteration = pad(charTotalSpells, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
        buildXML += "\t\t\t\t<level type=\"number\">4</level>\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(charSpell4Name[x]) + "</name>\n";
        if (charSpell4Prep[x] == "P") {
            buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
        } else {
            buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
        }
        buildXML += "\t\t\t\t<source type=\"string\">" + charSpell4Src[x] + "</source>\n";
        buildXML += "\t\t\t\t<components type=\"string\">" + charSpell4Comp[x] + "</components>\n";
        buildXML += "\t\t\t\t<range type=\"string\">" + charSpell4Rng[x] + "</range>\n";
        buildXML += "\t\t\t\t<duration type=\"string\">" + charSpell4Dur[x] + "</duration>\n";
        buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    for (x = 0; x < charSpell5Prep.length; x++) {
        charTotalSpells += 1;
        thisIteration = pad(charTotalSpells, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
        buildXML += "\t\t\t\t<level type=\"number\">5</level>\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(charSpell5Name[x]) + "</name>\n";
        if (charSpell5Prep[x] == "P") {
            buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
        } else {
            buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
        }
        buildXML += "\t\t\t\t<source type=\"string\">" + charSpell5Src[x] + "</source>\n";
        buildXML += "\t\t\t\t<components type=\"string\">" + charSpell5Comp[x] + "</components>\n";
        buildXML += "\t\t\t\t<range type=\"string\">" + charSpell5Rng[x] + "</range>\n";
        buildXML += "\t\t\t\t<duration type=\"string\">" + charSpell5Dur[x] + "</duration>\n";
        buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    for (x = 0; x < charSpell6Prep.length; x++) {
        charTotalSpells += 1;
        thisIteration = pad(charTotalSpells, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
        buildXML += "\t\t\t\t<level type=\"number\">6</level>\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(charSpell6Name[x]) + "</name>\n";
        if (charSpell6Prep[x] == "P") {
            buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
        } else {
            buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
        }
        buildXML += "\t\t\t\t<source type=\"string\">" + charSpell6Src[x] + "</source>\n";
        buildXML += "\t\t\t\t<components type=\"string\">" + charSpell6Comp[x] + "</components>\n";
        buildXML += "\t\t\t\t<range type=\"string\">" + charSpell6Rng[x] + "</range>\n";
        buildXML += "\t\t\t\t<duration type=\"string\">" + charSpell6Dur[x] + "</duration>\n";
        buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    for (x = 0; x < charSpell7Prep.length; x++) {
        charTotalSpells += 1;
        thisIteration = pad(charTotalSpells, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
        buildXML += "\t\t\t\t<level type=\"number\">7</level>\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(charSpell7Name[x]) + "</name>\n";
        if (charSpell7Prep[x] == "P") {
            buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
        } else {
            buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
        }
        buildXML += "\t\t\t\t<source type=\"string\">" + charSpell7Src[x] + "</source>\n";
        buildXML += "\t\t\t\t<components type=\"string\">" + charSpell7Comp[x] + "</components>\n";
        buildXML += "\t\t\t\t<range type=\"string\">" + charSpell7Rng[x] + "</range>\n";
        buildXML += "\t\t\t\t<duration type=\"string\">" + charSpell7Dur[x] + "</duration>\n";
        buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    for (x = 0; x < charSpell8Prep.length; x++) {
        charTotalSpells += 1;
        thisIteration = pad(charTotalSpells, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
        buildXML += "\t\t\t\t<level type=\"number\">8</level>\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(charSpell8Name[x]) + "</name>\n";
        if (charSpell8Prep[x] == "P") {
            buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
        } else {
            buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
        }
        buildXML += "\t\t\t\t<source type=\"string\">" + charSpell8Src[x] + "</source>\n";
        buildXML += "\t\t\t\t<components type=\"string\">" + charSpell8Comp[x] + "</components>\n";
        buildXML += "\t\t\t\t<range type=\"string\">" + charSpell8Rng[x] + "</range>\n";
        buildXML += "\t\t\t\t<duration type=\"string\">" + charSpell8Dur[x] + "</duration>\n";
        buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    for (x = 0; x < charSpell9Prep.length; x++) {
        charTotalSpells += 1;
        thisIteration = pad(charTotalSpells, 5);
        buildXML += "\t\t\t<id-" + thisIteration + ">\n";
        buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
        buildXML += "\t\t\t\t<level type=\"number\">9</level>\n";
        buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
        buildXML += "\t\t\t\t<name type=\"string\">" + fixQuote(charSpell9Name[x]) + "</name>\n";
        if (charSpell9Prep[x] == "P") {
            buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
        } else {
            buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
        }
        buildXML += "\t\t\t\t<source type=\"string\">" + charSpell9Src[x] + "</source>\n";
        buildXML += "\t\t\t\t<components type=\"string\">" + charSpell9Comp[x] + "</components>\n";
        buildXML += "\t\t\t\t<range type=\"string\">" + charSpell9Rng[x] + "</range>\n";
        buildXML += "\t\t\t\t<duration type=\"string\">" + charSpell9Dur[x] + "</duration>\n";
        buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
        buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    }
    //for (x = spell4First; x <= spell4Last; x += 10) {
    //    charTotalSpells += 1;
    //    thisIteration = pad(charTotalSpells, 5);
    //    buildXML += "\t\t\t<id-" + thisIteration + ">\n";
    //    buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
    //    buildXML += "\t\t\t\t<level type=\"number\">4</level>\n";
    //    buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
    //    buildXML += "\t\t\t\t<name type=\"string\">" + fullCharArray0[x].fieldValue + "</name>\n";
    //    if (fullCharArray0[x - 1] == "P") {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
    //    } else {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
    //    }
    //    buildXML += "\t\t\t\t<source type=\"string\">" + fullCharArray0[x+1].fieldValue + "</source>\n";
    //    buildXML += "\t\t\t\t<components type=\"string\">" + fullCharArray0[x+5].fieldValue + "</components>\n";
    //    buildXML += "\t\t\t\t<range type=\"string\">" + fullCharArray0[x+4].fieldValue + "</range>\n";
    //    buildXML += "\t\t\t\t<duration type=\"string\">" + fullCharArray0[x+6].fieldValue + "</duration>\n";
    //    buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
    //    buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    //}
    //for (x = spell5First; x <= spell5Last; x += 10) {
    //    charTotalSpells += 1;
    //    thisIteration = pad(charTotalSpells, 5);
    //    buildXML += "\t\t\t<id-" + thisIteration + ">\n";
    //    buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
    //    buildXML += "\t\t\t\t<level type=\"number\">5</level>\n";
    //    buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
    //    buildXML += "\t\t\t\t<name type=\"string\">" + fullCharArray0[x].fieldValue + "</name>\n";
    //    if (fullCharArray0[x - 1] == "P") {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
    //    } else {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
    //    }
    //    buildXML += "\t\t\t\t<source type=\"string\">" + fullCharArray0[x+1].fieldValue + "</source>\n";
    //    buildXML += "\t\t\t\t<components type=\"string\">" + fullCharArray0[x+5].fieldValue + "</components>\n";
    //    buildXML += "\t\t\t\t<range type=\"string\">" + fullCharArray0[x+4].fieldValue + "</range>\n";
    //    buildXML += "\t\t\t\t<duration type=\"string\">" + fullCharArray0[x+6].fieldValue + "</duration>\n";
    //    buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
    //    buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    //}
    //for (x = spell6First; x <= spell6Last; x += 10) {
    //    charTotalSpells += 1;
    //    thisIteration = pad(charTotalSpells, 5);
    //    buildXML += "\t\t\t<id-" + thisIteration + ">\n";
    //    buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
    //    buildXML += "\t\t\t\t<level type=\"number\">6</level>\n";
    //    buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
    //    buildXML += "\t\t\t\t<name type=\"string\">" + fullCharArray0[x].fieldValue + "</name>\n";
    //    if (fullCharArray0[x - 1] == "P") {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
    //    } else {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
    //    }
    //    buildXML += "\t\t\t\t<source type=\"string\">" + fullCharArray0[x+1].fieldValue + "</source>\n";
    //    buildXML += "\t\t\t\t<components type=\"string\">" + fullCharArray0[x+5].fieldValue + "</components>\n";
    //    buildXML += "\t\t\t\t<range type=\"string\">" + fullCharArray0[x+4].fieldValue + "</range>\n";
    //    buildXML += "\t\t\t\t<duration type=\"string\">" + fullCharArray0[x+6].fieldValue + "</duration>\n";
    //    buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
    //    buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    //}
    //for (x = spell7First; x <= spell7Last; x += 10) {
    //    charTotalSpells += 1;
    //    thisIteration = pad(charTotalSpells, 5);
    //    buildXML += "\t\t\t<id-" + thisIteration + ">\n";
    //    buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
    //    buildXML += "\t\t\t\t<level type=\"number\">7</level>\n";
    //    buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
    //    buildXML += "\t\t\t\t<name type=\"string\">" + fullCharArray0[x].fieldValue + "</name>\n";
    //    if (fullCharArray0[x - 1] == "P") {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
    //    } else {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
    //    }
    //    buildXML += "\t\t\t\t<source type=\"string\">" + fullCharArray0[x+1].fieldValue + "</source>\n";
    //    buildXML += "\t\t\t\t<components type=\"string\">" + fullCharArray0[x+5].fieldValue + "</components>\n";
    //    buildXML += "\t\t\t\t<range type=\"string\">" + fullCharArray0[x+4].fieldValue + "</range>\n";
    //    buildXML += "\t\t\t\t<duration type=\"string\">" + fullCharArray0[x+6].fieldValue + "</duration>\n";
    //    buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
    //    buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    //}
    //for (x = spell8First; x <= spell8Last; x += 10) {
    //    charTotalSpells += 1;
    //    thisIteration = pad(charTotalSpells, 5);
    //    buildXML += "\t\t\t<id-" + thisIteration + ">\n";
    //    buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
    //    buildXML += "\t\t\t\t<level type=\"number\">8</level>\n";
    //    buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
    //    buildXML += "\t\t\t\t<name type=\"string\">" + fullCharArray0[x].fieldValue + "</name>\n";
    //    if (fullCharArray0[x - 1] == "P") {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
    //    } else {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
    //    }
    //    buildXML += "\t\t\t\t<source type=\"string\">" + fullCharArray0[x+1].fieldValue + "</source>\n";
    //    buildXML += "\t\t\t\t<components type=\"string\">" + fullCharArray0[x+5].fieldValue + "</components>\n";
    //    buildXML += "\t\t\t\t<range type=\"string\">" + fullCharArray0[x+4].fieldValue + "</range>\n";
    //    buildXML += "\t\t\t\t<duration type=\"string\">" + fullCharArray0[x+6].fieldValue + "</duration>\n";
    //    buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
    //    buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    //}
    //for (x = spell9First; x <= spell9Last; x += 10) {
    //    charTotalSpells += 1;
    //    thisIteration = pad(charTotalSpells, 5);
    //    buildXML += "\t\t\t<id-" + thisIteration + ">\n";
    //    buildXML += "\t\t\t\t<group type=\"string\">Spells</group>\n";
    //    buildXML += "\t\t\t\t<level type=\"number\">9</level>\n";
    //    buildXML += "\t\t\t\t<locked type=\"number\">1</locked>\n";
    //    buildXML += "\t\t\t\t<name type=\"string\">" + fullCharArray0[x].fieldValue + "</name>\n";
    //    if (fullCharArray0[x - 1] == "P") {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">1</prepared>\n";
    //    } else {
    //        buildXML += "\t\t\t\t<prepared type=\"number\">0</prepared>\n";
    //    }
    //    buildXML += "\t\t\t\t<source type=\"string\">" + fullCharArray0[x+1].fieldValue + "</source>\n";
    //    buildXML += "\t\t\t\t<components type=\"string\">" + fullCharArray0[x+5].fieldValue + "</components>\n";
    //    buildXML += "\t\t\t\t<range type=\"string\">" + fullCharArray0[x+4].fieldValue + "</range>\n";
    //    buildXML += "\t\t\t\t<duration type=\"string\">" + fullCharArray0[x+6].fieldValue + "</duration>\n";
    //    buildXML += "\t\t\t\t<parse type=\"number\">1</parse>\n";
    //    buildXML += "\t\t\t</id-" + thisIteration + ">\n";
    //}
    
    buildXML += "\t\t</powers>\n";

    buildXML += "\t\t<powermeta>\n";

    buildXML += "\t\t\t<spellslots1>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char1Slot) + "</max>\n";
    buildXML += "\t\t\t</spellslots1>\n";
    buildXML += "\t\t\t<spellslots2>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char2Slot) + "</max>\n";
    buildXML += "\t\t\t</spellslots2>\n";
    buildXML += "\t\t\t<spellslots3>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char3Slot) + "</max>\n";
    buildXML += "\t\t\t</spellslots3>\n";
    buildXML += "\t\t\t<spellslots4>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char4Slot) + "</max>\n";
    buildXML += "\t\t\t</spellslots4>\n";
    buildXML += "\t\t\t<spellslots5>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char5Slot) + "</max>\n";
    buildXML += "\t\t\t</spellslots5>\n";
    buildXML += "\t\t\t<spellslots6>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char6Slot) + "</max>\n";
    buildXML += "\t\t\t</spellslots6>\n";
    buildXML += "\t\t\t<spellslots7>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char7Slot) + "</max>\n";
    buildXML += "\t\t\t</spellslots7>\n";
    buildXML += "\t\t\t<spellslots8>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char8Slot) + "</max>\n";
    buildXML += "\t\t\t</spellslots8>\n";
    buildXML += "\t\t\t<spellslots9>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char9Slot) + "</max>\n";
    buildXML += "\t\t\t</spellslots9>\n";

    buildXML += "\t\t\t<pactmagicslots1>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char1Pact) + "</max>\n";
    buildXML += "\t\t\t</pactmagicslots1>\n";
    buildXML += "\t\t\t<pactmagicslots2>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char2Pact) + "</max>\n";
    buildXML += "\t\t\t</pactmagicslots2>\n";
    buildXML += "\t\t\t<pactmagicslots3>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char3Pact) + "</max>\n";
    buildXML += "\t\t\t</pactmagicslots3>\n";
    buildXML += "\t\t\t<pactmagicslots4>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char4Pact) + "</max>\n";
    buildXML += "\t\t\t</pactmagicslots4>\n";
    buildXML += "\t\t\t<pactmagicslots5>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char5Pact) + "</max>\n";
    buildXML += "\t\t\t</pactmagicslots5>\n";
    buildXML += "\t\t\t<pactmagicslots6>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char6Pact) + "</max>\n";
    buildXML += "\t\t\t</pactmagicslots6>\n";
    buildXML += "\t\t\t<pactmagicslots7>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char7Pact) + "</max>\n";
    buildXML += "\t\t\t</pactmagicslots7>\n";
    buildXML += "\t\t\t<pactmagicslots8>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char8Pact) + "</max>\n";
    buildXML += "\t\t\t</pactmagicslots8>\n";
    buildXML += "\t\t\t<pactmagicslots9>\n";
    buildXML += "\t\t\t\t<max type=\"number\">" + parseInt(char9Pact) + "</max>\n";
    buildXML += "\t\t\t</pactmagicslots9>\n";

    buildXML += "\t\t</powermeta>\n";

    allXML += buildXML + endXML;
    $('#textHere').val(allXML);
}

function trim1(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function pad(num, size) {
    var s = num + "";

    while (s.length < size) s = "0" + s;
    return s;
}

function fixQuote(badString) {
    return badString.replace(/\n/g, '\n').replace(/\u2019/g, "'").replace(/\u2014/g, "-").replace(/\"/g, "&#34;").replace(/\u2022/g, ":").replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();

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

function convert_case(str) {
    var lower = str.toLowerCase();
    return lower.replace(/(^| )(w)/g, function(x) {
        return x.toUpperCase();
    });
}

function replaceDash(str) {
    firstStep = str.replace(/-/g, "_");
    return firstStep.replace(/ /g, "_");
}

function removeEntry(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}

function reset_character() {
    pdfFileName = "";
    xmlFile = "";
    classArray = [];
    profBonus = 0;
    skillAcro = [0, 0];
    skillAnim = [0, 0];
    skillArca = [0, 0];
    skillAthl = [0, 0];
    skillDece = [0, 0];
    skillHist = [0, 0];
    skillInsi = [0, 0];
    skillInti = [0, 0];
    skillInve = [0, 0];
    skillMedi = [0, 0];
    skillNatu = [0, 0];
    skillPerc = [0, 0];
    skillPerf = [0, 0];
    skillPers = [0, 0];
    skillReli = [0, 0];
    skillSlei = [0, 0];
    skillStea = [0, 0];
    skillSurv = [0, 0];
    var abilSTR = [0, 0, 0, 0, 0];
    var abilCHA = [0, 0, 0, 0, 0];
    var abilCON = [0, 0, 0, 0, 0];
    var abilDEX = [0, 0, 0, 0, 0];
    var abilINT = [0, 0, 0, 0, 0];
    var abilWIS = [0, 0, 0, 0, 0];
    numClasses = 0;
    charName = "";
    charBG = "";
    charRace = "";
    charAlign = "";
    charDSS = 0;
    charDSF = 0;
    charHPmax = 0;
    charPassive = 0;
    charInit = 0;
    charSpeed = "";
    charPerTraits = "";
    charIdeals = "";
    charBonds = "";
    charFlaws = "";
    charDeity = "";
    charLanguages = [];
    charTraits = [];
    charFeats = [];
    charXP = 0;
    charFeatures = [];
    charProficiencies = [];
    charRef = 0;
    popCharRace = "";
    charAge = "";
    charHeight = "";
    charWeight = "";
    charGender = "";
    charEyes = "";
    charSkin = "";
    charHair = "";
    hasAppear = 0;
    charSpellSlots1 = "";
    charSpellSlots2 = "";
    charSpellSlots3 = "";
    charSpellSlots4 = "";
    charSpellSlots5 = "";
    charSpellSlots6 = "";
    charSpellSlots7 = "";
    charSpellSlots8 = "";
    charSpellSlots9 = "";

    $("#textHere").val('');
    $("#pdfUpload").hide();
}

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
