var gameData = {
    emotes: 0,
    emotesPerClick: 1,
    faces: [";)", ":D", ";D"],
    faceIndex: 0,
    autoEmote: 0,
    version: 1,
    doubleUpgradeCost: 100
  }
function emote() {
    gameData.emotes += gameData.emotesPerClick
    document.getElementById("emotesAdded").innerHTML = gameData.emotes + " Emotes Emoted"
  }
function doubleUpgrade() {
    if (gameData.emotes >= 100){
        gameData.emotes -= 100
        document.getElementById("emotesAdded").innerHTML = gameData.emotes + " Emotes Emoted"
        gameData.emotesPerClick = gameData.emotesPerClick * 2
        document.getElementById("face").innerHTML = gameData.faces[gameData.faceIndex]
        gameData.faceIndex += 1
        document.getElementById("emotesPerClick").innerHTML = "Emotes Per Click: " + gameData.emotesPerClick
    }
}
function autoEmote(){
    gameData.emotes = gameData.autoEmote + gameData.emotes;
    document.getElementById("emotesAdded").innerHTML = gameData.emotes + " Emotes Emoted"
}

var mainGameLoop = window.setInterval(function() {
    autoEmote()
  }, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("asciiClickerSave", JSON.stringify(gameData))
  }, 15000)

var savegame = JSON.parse(localStorage.getItem("asciiClickerSave"))
  if (savegame !== null) {
    if(savegame.version == undefined){
        console.log("in if")
        console.log(savegame.version)
        if (savegame.version == undefined){
            console.log("made it")
            gameData.version = savegame.version;
        } 
    }else{
        console.log("in else")
        gameData = savegame
    }
    gameData = savegame
  }
