/*
	CREDITS
	ALL SPRITES USED ARE PROPERTY OF SQUARE ENIX
  GIFS USED HAVE BEEN SOURCED FROM http://www.videogamesprites.net/FinalFantasy6/
*/

/*
	Constants containing information pertaining to FFXIV's in-game lore.
 */
const raceNames = ["Hyur", "Elezen", "Lalafell", "Miqo'te", "Roegadyn", "Au'ra", "Hrothgar", "Viera"];
const clanNames = ["Midlander", "Highlander", "Wildwood", "Duskwight", "Plainsfolk", "Dunesfolk", "Seeker of the Sun", "Keeper of the Moon", "Sea Wolf", "Hellsguard", "Raen", "Xaela", "Helions", "The Lost", "Rava", "Veena"];
//This is not meant to make a statment on gender identity whatsoever. Everyone should be able to express their own gender identity. This is merely meant to denote which body type the player has. Please do not use this code as an excuse to justify violence against trans people. 
const genders = ["♂", "♀"];	
const guardianDeity = ["Halone, The Fury", "Menphina, the Lover", "Thaliak, the Scholar", "Nymeia, the Spinner", "Llymlaen, the Navigator", "Oschon, the Wanderer", "Byregot, the Builder", "Rhalgr, the Destroyer", "Azeyma, the Warden", "Nald'thal, the Traders", "Nophica, the Matron", "Althyk, the Keeper"]
const grandCompanies = ["The Maelstrom", "The Order of the Twin Adder", "The Immortal Flames"];
const gcRanks = [" Private Third Class", " Private Second Class", " Private First Class", " Corporal", " Sergeant Third Class", " Sergeant Second Class", " Sergeant First Class", "Sergeant", "Second ", "First ", " Captain"];
const gcRankMod = ["Storm", "Serpent", "Flame"];
const city = ["Limsa Lominsa", "Gridania", "Ul'dah"];
const cityFlags = ["https://img.finalfantasyxiv.com/lds/h/j/Xlz3DzGOKmwiDGho5aGWaudRNI.png", "https://img.finalfantasyxiv.com/lds/h/u/ZHuDKgNULSbEA_VTXdjeA9MlEs.png", "https://img.finalfantasyxiv.com/lds/h/u/qXfC-BmEzWbXW3sn62HMNnD3kU.png"]
const gcBanners = [
  ["https://img.finalfantasyxiv.com/lds/h/4/J8qi5YRZUoBkxfnCN5NPu7dt18.png", "https://img.finalfantasyxiv.com/lds/h/S/fOkpPsyxEDvRCtWnNBMaSxeqLw.png", "https://img.finalfantasyxiv.com/lds/h/-/A3vAeHsz3ymMyNhFCxwfnm_J4M.png", "https://img.finalfantasyxiv.com/lds/h/v/h4FDBDa-z0woTPM1zcEZj8I_vo.png", "https://img.finalfantasyxiv.com/lds/h/T/ioZagDr8GMwLLLVkG7dk3VUE_c.png", "https://img.finalfantasyxiv.com/lds/h/w/IUksT60Ch_r96CEB79LmstTngQ.png", "https://img.finalfantasyxiv.com/lds/h/w/IUksT60Ch_r96CEB79LmstTngQ.png", "https://img.finalfantasyxiv.com/lds/h/7/DZDUIPdsNRMTPCVIi1sOXA8gjg.png", "https://img.finalfantasyxiv.com/lds/h/e/9oKHHz0kfyA88mREoJobcRFT7w.png"],
  ["https://img.finalfantasyxiv.com/lds/h/e/5tZ-HAT8T1OqiGYCsb_vqbrFOM.png", "https://img.finalfantasyxiv.com/lds/h/h/A9-IV2oQRCHLbcdfuivfmLvzG4.png", "https://img.finalfantasyxiv.com/lds/h/a/OFjYIelrPFzE-Cl0VvSYqFfxg8.png", "https://img.finalfantasyxiv.com/lds/h/x/fshFqqaUsCjrmH7mjLcYVN3n7s.png", "https://img.finalfantasyxiv.com/lds/h/s/kFtEiVe7VKrFiKAaZ2bN7uF1AA.png", "https://img.finalfantasyxiv.com/lds/h/H/_zcxNCd23OmuNDvy3sLXQqAIGA.png", "https://img.finalfantasyxiv.com/lds/h/w/e_Fmv4jCkG6xBXfehBOkftr3pk.png", "https://img.finalfantasyxiv.com/lds/h/x/Gk6Y0_NRz0djgb7_knO0KjoHuI.png", "https://img.finalfantasyxiv.com/lds/h/Z/7xyFk9EAcDABJVaW-i7UADLfOM.png", "https://img.finalfantasyxiv.com/lds/h/Z/2IcE8P6NEDhkLF-iGE2T8XGeGs.png", "https://img.finalfantasyxiv.com/lds/h/O/yMgc1Z4bAOmEzo1JWBP0hs9FQs.png"],
  ["https://img.finalfantasyxiv.com/lds/h/K/kPuVlS8pwn7dJ5EFiZBjebqsYM.png", "https://img.finalfantasyxiv.com/lds/h/B/lHZaBYYdiBaTJTnESCHkZZ9i9g.png", "https://img.finalfantasyxiv.com/lds/h/-/ljnKb1O2GM7Qm4Tiy_Phb114xE.png", "https://img.finalfantasyxiv.com/lds/h/C/XTsRaZ6wYHAF_v0_tCXmsUFxX4.png", "https://img.finalfantasyxiv.com/lds/h/j/wn4YILuyXC-9EwAnP-DsNosL3M.png", "https://img.finalfantasyxiv.com/lds/h/1/KwlnyjGRA_hfJYBc7HPq2BI68Y.png", "https://img.finalfantasyxiv.com/lds/h/M/KWBltSEr4XtOmCFvB0fiB772wk.png", "https://img.finalfantasyxiv.com/lds/h/C/aHHJ02bO3h5nZNkYwNeISsVX80.png", "https://img.finalfantasyxiv.com/lds/h/K/RCtWRMlTFAQh67FRG-QGXryviw.png", "https://img.finalfantasyxiv.com/lds/h/Z/xoUzj9-PpBilPQFcLtcsw0anac.png", "https://img.finalfantasyxiv.com/lds/h/V/tKlwWMAtNLAumnqjI8iNPnMKHc.png"]
];
const classPromotions = {
  "Gladiator": "Paladin",
  "Conjurer": "White Mage",
  "Pugilist": "Monk",
  "Archer": "Bard",
  "Thaumaturge": "Black Mage",
  "Marauder": "Warrior",
  "Lancer": "Dragoon",
  "Rogue": "Ninja"
};

const pageTitles = {
	doWMJobs: "Disciples of War & Magic",
  doHLJobs: "Disciples of the Hand & Land",
  mountTable: "Mounts",
  minionTable: "Minions"
};

/*
	Character-Based Fields
*/
var charInfo, classList, charAttr, lodestoneID, charName, gender, title, grandCompany, rank, fcName, fcTag;
var minions = [],
  mounts = [],
  classes = [];
var minionStep = 0,
  mountStep = 0;
var classLevels = {
  1: 1,
  3: 1,
  32: 30,
  37: 60,
  2: 1,
  4: 1,
  29: 1,
  34: 50,
  6: 1,
  26: 1,
  33: 30,
  5: 1,
  31: 1,
  38: 30,
  7: 1,
  35: 50,
  36: 1,
  8: 1,
  9: 1,
  10: 1,
  11: 1,
  12: 1,
  13: 1,
  14: 1,
  15: 1,
  16: 1,
  17: 1,
  18: 1
};
var fcPortrait = ["", "", ""];
var classMaxLevels = {};
var doWMClasses = [],
  doHLClasses = [];

/*
	Application-Based Fields
*/
var doWMJobs = document.getElementById("doWMJobs"),
  doHLJobs = document.getElementById("doHLJobs");
var mountTable, minionTable;
var doWMNav = document.getElementById("doWMNav"),
  doHLNav = document.getElementById("doHLNav");
var minionsNav = document.getElementById("minionsNav"),
  mountsNav = document.getElementById("mountsNav");
var modalButton = document.getElementById("modalButton");
var modal = document.getElementById("myModal");
var section = document.getElementById("section");
var contentHolder = [doWMJobs, doHLJobs, minionTable, mountTable];

/*
	Initialization
*/
doHLJobs.remove();

/*
	Utility Functions
*/

/**
 	 This function will convert all name strings passed to it by
 	 returning the substring following the double slashes in the
   URL's frequently passed by XIVAPI
 
   @returns a capitalized and chopped version of the name string.
 */
function convertName(nameText) {
  var n = nameText.indexOf("\/") + 2;
  var name = nameText.substr(n);
  
  return capitalize(name);
}

/**
 	 This function will convert all passed name strings by
 	 Removing all special characters, implementing camel case,
 	 and adding a '#' to the string to be utilized with JQuery.
 
 	 @returns the converted name with a '#' prefacing the string.
 */
function convertNameForHtml(nameText) {
	//Creates CamelCase
  var startingChar = nameText.charAt(0);
  startingChar = startingChar.toLowerCase();
  var className = startingChar + nameText.substr(1);
  
  //Removes all special characters or the LimitedJob string
  className = className.replaceAll(/[ `~!@#$%^&*()|+\-=?;:'",.<>\{\}\\\/]/gi, "");
  className = className.replaceAll("LimitedJob", "");
  
  return "#" + className;
}

/**
  This function will convert lodestone URL's into their raw numeric form
  
  @returns the lodestone ID
 */
function checkLodestoneID(text) {
  var n = text.includes(lodestoneURL);

  if (n) {
    var index = text.indexOf(lodestoneURL);
    return text.substr(index + lodestoneURL.length);
  }
}

/*
	This function will calculate the number of rows to be displayed 
  in the Minion/Mount menu. Each row can hold 15 MIMO elements.
  
  @returns the number of rows 
*/
function calculateRows(number) {
  var rows = number / 15;
  
  //If there is a remainder, we need another row.
  if (number % 15 != 0)
    rows++;

  return rows;
}

/*
	This function will determine whether or not a passed class
  is promoted or not based on its given name in the XIVAPI
*/
function isPromoted(battleClass) {
  var nameText = battleClass.Name.toString();
  var names = nameText.split(" / ");
  var actualName = battleClass.UnlockedState.Name.replaceAll(" (Limited Job)", "").toLowerCase();
  return names[1].includes(actualName);
}

/**
 * Capitalizes first letters of words in string.
 * @param {string} str String to be modified
 * @param {boolean=false} lower Whether all other letters should be lowercased
 * @return {string}
 * @usage
 *   capitalize('fix this string');     // -> 'Fix This String'
 *   capitalize('javaSCrIPT');          // -> 'JavaSCrIPT'
 *   capitalize('javaSCrIPT', true);    // -> 'Javascript'
 */
const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());


/*
	Data-Processing & Gathering Methods
*/

/*
	This function is the "main" function that is called when the modal
  is submitted. This method will usher out a series of functions
  that will gather and display data sourced from XIVAPI
*/
function getCharacterInfo() {
	//Creates URL
  var userURL = 'https://xivapi.com/character/' + lodestoneID + "?data=CJ,MIMO";
  
  //Queries URL
  $.ajax({
    url: userURL,
    complete: function(response) {
      charInfo = JSON.parse(response.responseText);
      charAttr = charInfo.Character;
      classList = charAttr.ClassJobs;
      charName = charAttr.Name;
      gender = charAttr.Gender;
      grandCompany = charAttr.GrandCompany.NameID - 1;
      rank = charAttr.GrandCompany.RankID - 1;
      setUpSidePanel();
      getClassInfo();
      populateMimo(charInfo.Minions);
      populateMimo(charInfo.Mounts);
      minionTable.remove();
      mountTable.remove();
      animateClasses(doWMClasses);
    },
    error: function() {
      $('#output').html('Bummer: there was an error!');
    },
  });
}

/*
	This function will gather information for each class in the 
  passed classlist. The classes will then be pushed out to their appropriate
  lists.
*/
function getClassInfo() {

	//For each class in the list, check if promoted
  classList.forEach(function(charClass) {
    if (!isPromoted(charClass))
      charClass.UnlockedState.Name = classPromotions[charClass.UnlockedState.Name];
    // If ID is in the non-combat threshold from XIVAPI, then push to correct list.
    if (charClass.ClassID >= 8 && charClass.ClassID <= 18)
      doHLClasses.push(charClass);
    else
      doWMClasses.push(charClass);
  });
}

/*
	This function will create a string-based rank for a player's 
  Grand Company based on the numerical rank value.
*/
function createGrandCompanyRank() {

  var rankTitle;
	
  //If the rank is lower than 7, you can just concat the strings
  if (rank < 7) {
    rankTitle = gcRankMod[grandCompany] + gcRanks[rank];
  } else if (rank == 7) {
    rankTitle = "Chief " + gcRankMod[grandCompany] + gcRanks[rank];
  } else if (rank < 10) {
    rankTitle = gcRanks[rank] + gcRankMod[grandCompany] + " Lieutenant";
  } else
    rankTitle = gcRankMod[grandCompany] + gcRanks[rank];

	//Properly formats the ending s/ apostraphe based on the Grand Company's name.
  if (grandCompany < 2)
    return grandCompanies[grandCompany] + "'s<br>" + rankTitle;
  else
    return grandCompanies[grandCompany] + "'<br>" + rankTitle;
}

/*
	This function will create the player's title based upon the passed title 
  number. A seperate ajax query will be utilized to get the title's information
  from the XIVAPI.
*/
function getTitleInfo(titleNum) {
	//creates URL for title
  var titleURL = 'https://xivapi.com/title/' + titleNum;
  
  //Queries URL
  $.ajax({
    url: titleURL,
    async: false,
    complete: function(response) {
			
      var titleInfo = JSON.parse(response.responseText);
      
			//Uses gender-specific titles if supplied in XIVAPI
      if (gender == 1)
        title = titleInfo.Name;
      else
        title = titleInfo.NameFemale;
    }
  });
}

function getFreeCompanyInfo(fcNum) {
  var fcURL = 'https://xivapi.com/freecompany/' + fcNum;
  $.ajax({
    url: fcURL,
    async: false,
    complete: function(response) {

      var fcInfo = JSON.parse(response.responseText);
      fcPortrait = fcInfo.FreeCompany.Crest;
      fcName = fcInfo.FreeCompany.Name;
      fcTag = fcInfo.FreeCompany.Tag;
      console.log(fcTag)
    }
  });
  return fcName + "<br>" + fcTag;
}

/*
	Animation Methods
*/

/*
	This function will iterate through the classList that is passed
  (being either DOHLJobs or DOWMJobs) and call the animateBar function on each class.
*/
function animateClasses(currClassList) {

  currClassList.forEach(function(currClass) {
    animateBar(currClass);
  });
}

/*
	This function will animate the bar of each class to reflect the
  user-achieved level & experience utilizing recursive calls.
*/
function animateBar(battleClass) {

	//HTML-based variable declaration.
  var htmlName = convertNameForHtml(battleClass.UnlockedState.Name);
  var container = htmlName + "Container";
  var levelBar = htmlName + "LevelBar";
  var levelValue = htmlName + "Level";
  
  //Back-end-based variable declaration.
  var startLevel = classLevels[battleClass.ClassID];
  var speed = 12 * startLevel + 300;
  var barWidth = parseInt($(".levelBarBack").css("width"));
  var containerElem = document.getElementById(container);
  var displayedLevel = $(levelValue).html();
  var keepGoing;
  
  // Check asserting which class table to look for in the section.
  if (battleClass.ClassID >= 8 && battleClass.ClassID <= 18)
  	keepGoing = $.contains(section, doHLJobs);
  else
  	keepGoing = $.contains(section, doWMJobs);

	//If this class has not leveled yet and their achieved level in XIVAPI is greater than 0 (not unlocked).
  if (displayedLevel == "--") {
    if (battleClass.Level > 0) {
      animateLevelValue(battleClass, levelValue);
      animateBar(battleClass);
    } else
    	return;
	// If the class has reached the user achieved level, then scale earned EXP (0 if at max level) on the bar's inner compartment.
  } else if (parseInt(displayedLevel) == battleClass.Level) {
    percentage = battleClass.ExpLevel / battleClass.ExpLevelMax;
    var newWidth = percentage * 180;
    $(levelBar).animate({
      width: newWidth
    }, 1000);
  // Otherwise, animate a full level & the icon jumps.
  } else if (keepGoing) {
    $(levelBar).animate({
      width: 180
    }, speed, function() {
      $(levelBar).animate({
        width: 0
      }, speed);
      //Calls animateLevelValue to increment the displayed level.
      animateLevelValue(battleClass, levelValue);
      
      //Makes the icons jump by altering their height in HTML.
      $(container).animate({
        top: '50px'
      }, 90);
      $(container).animate({
        top: '-40px'
      }, 90, function() {
        $(container).animate({
          top: '50px'
        }, 90, function() {
        	//Calls itself when animation is finished.
          animateBar(battleClass);
        });
      });
    });
  }
}

/*
	This function will animate a specified class' level value when called by animateBar.
*/
function animateLevelValue(battleClass, levelValue) {
  var htmlValue = $(levelValue).html();
  var level;

	//If intial value, then set the value to the starting level.
  if (htmlValue == "--") {
    level = classLevels[battleClass.ClassID];
    $(levelValue).html(level);
  } else {
  	//Otherwise increment and display
    level = parseInt(htmlValue);
    var newLevel = parseInt(level + 1);
    $(levelValue).html(newLevel);
    classLevels[battleClass.ClassID] = newLevel;
  }
}

/*
	This function exists for the sole purpose of populating the side
  panel with information relevant to the user's character. 
*/
function setUpSidePanel() {

  var rawImgURL = charAttr.Portrait;
  var imgURL = rawImgURL.replace("\/", "/")
  var raceInfo = raceNames[charAttr.Race - 1] + ", " + clanNames[charAttr.Tribe - 1] + " " + genders[--gender];
  var deity = guardianDeity[charAttr.GuardianDeity - 1];
  var grandCompanyValue = createGrandCompanyRank();

	//Updates character portrait
  $('#portrait').attr('src', imgURL);
  $('#portrait').attr('border', "5px solid");
  document.getElementById("portrait").style.borderColor = "white";

	//Updates character's title
  getTitleInfo(charAttr.Title);
  
	// Certain titles in the game have different placements that are tracked by XIVAPI. This takes that into account
  if (charAttr.TitleTop == true) {
    $('#titleTop').html(title);
  } else {
    $('#titleBottom').html(title);
  }
	
  //Populates the character's name, server, guardian, birthday and ranking
  $('#charName').html(charName);
  $('#server').html(charAttr.Server);
  $("#guardian").html(deity);
  $('#cityStatePic').attr("src", cityFlags[charAttr.Town - 1]);
  $('#city').html(city[charAttr.Town - 1] + "\t\t");
  $(".iconDiv").css("visibility", "visible");
  $(".guardianInfo").css("visibility", "visible");
  $('#nameday').html(charAttr.Nameday);
  $('#raceInfo').html(raceInfo);
  $("gcRankIcon").attr("src", gcBanners[grandCompany][rank]);
  $('#grandCompanyRank').html(grandCompanyValue);

	//If the character has a free company (by having a numeric company ID), populate the panel
  if ($.isNumeric(charAttr.FreeCompanyId)) {
    $("#freeCompanyName").html(getFreeCompanyInfo(charAttr.FreeCompanyId));
    $(".freeCompanyBG").attr("src", fcPortrait[0]);
    $(".freeCompanyFG").attr("src", fcPortrait[1]);
    $(".freeCompanyPic").attr("src", fcPortrait[2]);
  } else {
    $("#fcInfo").css("visibility", "hidden")
  }
}

/*
	This function exists to populate the two holders that contain the minion and mount icons.
  The function is able to run by checking which array was passed.
*/
function populateMimo (mimoArray) {

	//Initializing document elements to be populated with MIMO's
  var table = document.createElement('table');
  var mimoHolder = document.createElement('div');
  var counter = document.createElement('div');
  var rows = calculateRows(charInfo.Mounts.length);
  var position = 0;
  var counterString, tableString;
  
  // Creates the proper counters
  if (mimoArray == charInfo.Mounts) {
  	counterString = "mount";
    mimoStack = mounts;
  } else {
  	counterString = "minion";
    mimoStack = minions;
  }
  
  // Sends to elements
  tableString = counterString += "Table";
  counterString += "Counter";
  counter.setAttribute("class", "counter");
  counter.setAttribute("id", counterString);
  mimoHolder.setAttribute("class", "mimoTable");
  table.setAttribute("id", tableString);

	// Goes through the number of distributed rows after calculating
  for (var x = 0; x < rows; x++) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for (var y = 0; y < 21; y++) {
    	//if at the end, leave.
      mimo = mimoArray[position];
      if (mimo === undefined)
        return;

			//Otherwise, increment to next position and update accordingly
      position++;
      var td = document.createElement('td');
      var img = document.createElement('img');
			var name = convertNameForHtml(mimo.Name);
      var id = name.substr(1);
      
      // update elements accordingly
      img.setAttribute("class", "mimo");
      mimoStack.push(name);
      img.setAttribute("id", id);
      img.setAttribute("src", mimo.Icon);
      img.style.display = "none";
      td.appendChild(img);
      table.appendChild(td);
      tr.appendChild(td);


    }
    //Adds newly created element to table
    table.appendChild(tr);
  }

  var counterHolder = document.createElement("div");
  
  // Creates counter holder (adds gifs) and updates the proper table
  if (mimoArray == charInfo.Mounts) {
  	createMountCounterHolder(counterHolder, counter);
    mountTable = mimoHolder;
  } else {
  	createMinionCounterHolder(counterHolder, counter);
    minionTable = mimoHolder;
  }
	
  // Adds the counter
  mimoHolder.appendChild(counterHolder);
  
  // If mounts, then no need for excessive spacing
  if (mimoArray == charInfo.Mounts)
 		mimoHolder.appendChild(document.createElement("br"));
  // If minions, then add extra spacing to account for smaller gifs. 
  else
  	for (var x = 0; x < 5; x++)
    	mimoHolder.appendChild(document.createElement("br"));
  
  
  mimoHolder.appendChild(table)
  section.appendChild(mimoHolder);
  mountTable = mimoHolder;
}

/*
	This function exists to populate the minion counter with the proper gifs that are intended to represent minions
*/
function createMinionCounterHolder(counterHolder, counter) {
	$(counterHolder).prepend(document.createElement("br"));
  $(counterHolder).prepend($('<img>', {
    id: 'dragonGif',
    src: 'http://www.videogamesprites.net/FinalFantasy6/NPCs/Nonhuman/Red%20Dragon%20-%20Fly%20(Front).gif',
    width: '50px',
    height: '60px',
    align: 'right'
  }).css('transform', 'scaleX(-1)'));
  $(counterHolder).prepend($('<img>', {
    id: 'turtleGif',
    src: 'http://www.videogamesprites.net/FinalFantasy6/Party/Mog/Mog%20-%20Victory%20(Front).gif',
    width: '50px',
    height: '60px',
    align: 'right',
    top: '100px',
    position: 'relative'
  }));
  $(counterHolder).prepend($('<img>', {
    id: 'ultrosGif',
    src: 'http://www.videogamesprites.net/FinalFantasy6/NPCs/Nonhuman/Ultros%20-%20Walk%20(Front).gif',
    width: '60px',
    height: '60px',
    align: 'right',
    textAlign: "middle"
  }));
  $(counterHolder).prepend($('<img>', {
    id: 'bunnyGif',
    src: 'http://www.videogamesprites.net/FinalFantasy6/NPCs/Nonhuman/Lagomorph.gif',
    width: '50px',
    height: '70px',
    align: 'right',
    textAlign: "middle"
  }));
  counterHolder.style.paddingRight = "35px";
  $(counter).text("");
  $(counterHolder).prepend(counter);
  $(counterHolder).prepend($('<img>', {
    id: 'dragonGif',
    src: 'http://www.videogamesprites.net/FinalFantasy6/NPCs/Nonhuman/Ramuh%20-%20Staff%20Raise.gif',
    width: '50px',
    height: '60px',
    align: 'left'
  }));
  $(counterHolder).prepend($('<img>', {
    id: 'dragonGif',
    src: 'http://www.videogamesprites.net/FinalFantasy6/NPCs/Nonhuman/Fairy%20Esper%20-%20Fly%20(Front).gif',
    width: '40px',
    height: '40px',
    align: 'left'
  }));

  $(counterHolder).prepend($('<img>', {
    id: 'dragonGif',
    src: 'http://www.videogamesprites.net/FinalFantasy6/NPCs/Nonhuman/Esper%20Elder%20-%20Walk%20(Left).gif',
    width: '50px',
    height: '60px',
    align: 'left'
  }).css('transform', 'scaleX(-1)'));
  $(counterHolder).prepend($('<img>', {
    id: 'dragonGif',
    src: 'http://www.videogamesprites.net/FinalFantasy6/Party/Imp/Imp%20-%20Finger.gif',
    width: '45px',
    height: '60px',
    align: 'left'
  }));
}

/*
	This function exists to populate the mount counter with the proper gifs that are intended to represent mounts
*/
function createMountCounterHolder(counterHolder, counter) {
$(counterHolder).prepend($('<img>', {
    id: 'chocoboGif',
    src: 'http://www.videogamesprites.net/FinalFantasy6/NPCs/Nonhuman/Chocobo%20-%20Walk%20(Left).gif',
    width: '100px',
    height: '100px',
    align: 'right'
  }).css('transform', 'scaleX(-1)'));
  $(counterHolder).prepend($('<img>', {
    id: 'magitekGif',
    src: 'http://www.videogamesprites.net/FinalFantasy6/Party/Vicks/Vicks%20-%20M-Tek%20-%20Walk%20(Front).gif',
    width: '100px',
    height: '100px',
    align: 'right'
  }));
  counterHolder.style.paddingRight = "35px";
  $(counter).text("");
  $(counterHolder).prepend(counter);
  $(counterHolder).prepend($('<img>', {
    id: 'chocoboGif',
    src: 'http://www.videogamesprites.net/FinalFantasy6/NPCs/Nonhuman/Chocobo%20-%20Walk%20(Left).gif',
    width: '100px',
    height: '100px'
  }));
  $(counterHolder).prepend($('<img>', {
    id: 'tankGif',
    src: 'http://www.videogamesprites.net/FinalFantasy6/Party/Vicks/Vicks%20-%20M-Tek%20-%20Walk%20(Front).gif',
    width: '100px',
    height: '100px'
  }));
}

/*
	This function will animate the user's minion and mount icons based upon which array is passed to the function
  The function requires a pointer(counter) due to the fact that is animates recursively
*/
function animateMimo(array, pointer) {
	// Grabs the element from the array
  var mimoElement = array[pointer]
  // If the element exists, 
  if (mimoElement != null) {
  	//Show the element and expand it
    $(mimoElement).show(300, function() {
      $(mimoElement).animate({
        width: "50px",
        height: "50px"
      }, function() {
      
      	//On completion, increment the counter
        pointer++;
        var counterUnit;
        var counter;

				//If the array is mounts, then add the proper string to the current iterator
        if (array == mounts) {
          counterUnit = " mount"
          mountStep = pointer;
          counter = "#mountTableCounter";
        } else {
          counterUnit = " minion";
          minionStep = pointer;
          counter = "#minionTableCounter";
        }

				//Accounts for proper grammer regarding multiples
        if (pointer > 1)
          counterUnit += "s!";
        else
          counterUnit += "!";

        $(counter).text(pointer + counterUnit); 
        animateMimo(array, pointer);
      });
    })
  }
}


/*
	This function will iterate through each minion in the table and animate all of them
*/
function animateMinions() {
  $(document).ready(function() {
    animateMimo(minions, minionStep);

    if (minionStep >= minions.length) {
      animateMimo(minions, minionStep);
    }
  });
}

/*
	This function will iterate through the mount table and animate all of them 
*/
function animateMounts() {
  $(document).ready(function() {
    
    animateMimo(mounts, mountStep);

    if (mountStep >= mounts.length)
      animateMimo(mounts, mountStep);
  });
}

/*
	Button-Based Functions
*/

//This function exists to update the displayed section when the Disciples of War & Magic button is clicked
doWMNav.onclick = function() {
  if (!$.contains(section, doWMJobs)) {
    document.getElementById("section").appendChild(doWMJobs);
    $("#sectionTitle").html("Disciples of War & Magic");
    $("#sectionTitle").css({
      left: "485px"
    });
  }
  doHLJobs.remove();
  minionTable.remove();
  mountTable.remove();

  $(".levelBar").clearQueue().finish();
  animateClasses(doWMClasses);
}

//This function exists to update the displayed section when the Disciples of the Hand & Land button is clicked
doHLNav.onclick = function() {
  if (!$.contains(section, doHLJobs)) {
    document.getElementById("section").appendChild(doHLJobs);
    $("#sectionTitle").html("Disciples of Hand & Land");
    $("#sectionTitle").css({
      left: "485px"
    });
  }
  doWMJobs.remove();
  minionTable.remove();
  mountTable.remove();

  $(".levelBar").clearQueue().finish();
  animateClasses(doHLClasses);
}

//This function exists to update the displayed section when the Mounts button is clicked
mountsNav.onclick = function() {
  if (!$.contains($("section"), mountTable)) {
    document.getElementById("section").appendChild(mountTable);
    $("#sectionTitle").html("Mounts");
    $("#sectionTitle").css({
      left: "575px"
    });
  }

	doHLJobs.remove();
  doWMJobs.remove();
  minionTable.remove();

  $(".levelBar").clearQueue().finish();
  animateMounts();
}

//This function exists to update the displayed section when the Minions button is clicked
minionsNav.onclick = function() {
  if (!$.contains(section, minionTable)) {
    document.getElementById("section").appendChild(minionTable);
    $("#sectionTitle").html("Minions");
    $("#sectionTitle").css({
      left: "585px"
    });
   }

  doWMJobs.remove();
  doHLJobs.remove();
  mountTable.remove();

  $(".levelBar").clearQueue().finish();
  animateMinions();
}


modalButton.onclick = function() {
  lodestoneID = document.getElementById("fname").value;
  getCharacterInfo();
  modal.style.display = "none";
}
