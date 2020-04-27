const lyrics = [
   "Three Rings for the Elven-kings under the sky",
   "Seven for the Dwarf-lords in their halls of stone",
   "Nine for Mortal Men doomed to die",
   "One for the Dark Lord on his dark throne",
   "In the Land of Mordor where the Shadows lie",
   "One Ring to rule them all, One Ring to find them",
    "One Ring to bring them all, and in the darkness bind them",
    "In the Land of Mordor where the Shadows lie",
    "Roads go ever ever on",
    "Over rock and under tree",
    "By caves where never sun has shone",
    "By streams that never find the sea",
    "Over snow by winter sown",
    "And through the merry flowers of June",
    "Over grass and over stone",
    "And under mountains of the moon",
    
    "Roads go ever ever on",
    "Under cloud and under star",
    "Yet feet that wandering have gone",
    "Turn at last to home afar",
    "Eyes that fire and sword have seen",
    "And horror in the halls of stone",
    "Look at last on meadows green",
    "Upon the hearth the fire is red",
    "Beneath the roof there is a bed",
    "But not yet weary are our feet",
    "Still round the corner we may meet",
    "A sudden tree or standing stone",
    "That none have seen but we alone",
    "Tree and flower and leaf and grass",
    "Let them pass! Let them pass!",
    "Hill and water under sky",
    "Pass them by! Pass them by!",
    "Still round the corner there may wait",
    "A new road or a secret gate",
    "And though we pass them by today",
    "Tomorrow we may come this way",
    "And take the hidden paths that run",
    "Towards the Moon or to the Sun",
    "Apple, thorn, and nut and sloe",
    "Let them go! Let them go!",
    "Sand and stone and pool and dell",
    "Fare you well! Fare you well!",
    "Farewell we call to hearth and hall!",
    "Though wind may blow and rain may fall",
    "We must away ere break of day",
    "Far over wood and mountain tall",
    "To Rivendell, where Elves yet dwell",
    "In glades beneath the misty fell",
    "Through moor and waste we ride in haste",
    "And whither then we cannot tell",
    "With foes ahead, behind us dread",
    "Beneath the sky shall be our bed",
    "Until at last our toil be passed",
    "Our journey done, our errand sped",  
    "We must away! We must away!",
    "We ride before the break of day!",
    "Ah! like gold fall the leaves in the wind",
    "long years numberless as the wings of trees!",
    "The years have passed like swift draughts",
    "of the sweet mead in lofty halls beyond the West",
    "beneath the blue vaults of Varda",
    "wherein the stars tremble in the song of her voice, holy and queenly",
    "Who now shall refill the cup for me?",
    "For now the Kindler, Varda, the Queen of the Stars",
    "from Mount Everwhite has uplifted her hands like clouds",
    "and all paths are drowned deep in shadow",
    "and out of a grey country darkness",
    "lies on the foaming waves between us",
    "and mist covers the jewels of Calacirya for ever",
    "Now lost, lost to those from the East is Valimar!",
    "Farewell! Maybe thou shalt find Valimar",
    "Maybe even thou shalt find it. Farewell!",
  ]

  console.log('Welcome to my LOTR app!')

  let poemArea1 = document.querySelector('.poem1')
  let poemArea2 = document.querySelector('.poem2')

  const generate = () => {
    let firstHalf = lyrics.slice(0, 50)
    let secondHalf = lyrics.slice(50)

    poemArea1.value = getHalf(firstHalf)
    poemArea2.value = getHalf(secondHalf)
  }

  function getHalf(halfLyrics) {
    let halfPoem = ""
    let total = halfLyrics.length
    for (i = 0; i < total; i++) {
      let pick = Math.floor(Math.random() * total)
      const phrase = halfLyrics[pick]
      let upperPhrase = phrase.charAt(0).toUpperCase() + phrase.slice(1)
      halfLyrics.splice(pick, 1)
      console.log("We removed item " + pick + " from lyrics: " + halfLyrics)
      if((total % 4) == 0 ) {
        halfPoem = halfPoem + '\n' + upperPhrase + '\n'
      } else {
        halfPoem = halfPoem + '\n' + upperPhrase
      }
      total-- 
    }
    return halfPoem
  }

  let poemButton = document.querySelector('button')
  poemButton.addEventListener("click", generate);