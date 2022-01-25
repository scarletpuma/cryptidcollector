const prompt = require('prompt-sync')();
//declaring variable for totalSteps
totalSteps = 0;
//object for pc's info and items
const playerCharacter = {
  pcName: ``,
  health: 20,
  hunger: 20,
  items: {
    healthItems: [`cough syrup`, `bandages`],
    foodItems: [`apple`, `half a sandwich`,],
    sentimentalItems: [`stuffed animal`]
  },
  cryptids: [
  ]
}
//object for surroudings check options
const possibleSurroundings = {
  food: [
    `berries`,
    `dead rabbit`,
    `mushrooms`,
    `apple`,
    `nuts`,
    `dead squirrel`
  ],
  items: [
    `locket with photos of strangers`,
    `notebook`,
    `worn out blanket`,
    `baby rattle`,
    `dog collar`,
    `small bell`,
    `piece of blue ribbon`,
    `red marker`,
    `pink flower`,
    `black feather`,
    `big yellow button`,
    `half of a blunt`
  ],
  health: [
    `aloe`,
    `ripped bandages`,
    `open box of bandaids`,
    `forgotten first aid kit`,
    `cough drops`,
    `bandages`,
    `healing moss`,
    `spruce root & spruce gum`,
    `almost empty bottle of pain killers`
  ],
  threats: [
    {
      name: `wolf`,
      health: 15,
      damage: 5,
      accuracy: [1,2,3,4,5,6]
    },
    {
      name: `human`,
      health: 10,
      damage: 3,
      accuracy: [1,2,3,4,5,6]
    },
    {
      name: `bear`,
      health: 40,
      damage: 5,
      accuracy: [1,2,3,4,5,6]
    },
    {
      name: `coyote family`,
      health: 30,
      damage: 4,
      accuracy: [1,2,3,4,5,6]
    },
    {
      name: `snake`,
      health: 2,
      damage: 2,
      accuracy: [1,2,3,4,5,6]
    },
    {
      name: `rabid racoon`,
      health: 10,
      damage: 2,
      accuracy: [1,2,3,4,5,6]
    },
    {
      name: `swarm of bees`,
      health: 4,
      damage: 6,
      accuracy: [1,2,3,4,5,6]
    }
  ]
}
//object of all the cryptids
const cryptids = [
    {
      name: `big foot`,
      health: 50,
      damage: 7,
      accuracy: [1,2,3,4,5,6],
      intro: `You hear a loud rustling in the bushes next to you. You quickly turn around to find a figure almost two times your size staring down at you. You can't tell if it's friendly or not yet, just that it smells bad.`,
      reveal: `a massive humanoid covered in hair`
    },
    {
      name: `mothman`,
      health: 40,
      damage: 4,
      accuracy: [1,2,3,4,5,6],
      intro: `It seems to be getting darker up ahead. No. There's something standing there. As you get closer the soft glow of two small circles hover in the air.`,
      reveal: `a tall figure. You freeze, realizing how large this creature and its wings are`,
    },
    {
      name: `chupacabra`,
      health: 20,
      damage: 6,
      accuracy: [1,2,3,4,5,6],
      intro: `You hear a gross slurping sound nearby and try your best to not look towards it but when the noise stops it's almost impossible to not take a peak. You see a figure hovering over a dead wolf.`,
      reveal: `a lizard like creature, only a little bit shorter than you`,
    },
    {
      name: `batsquatch`,
      health: 60,
      damage: 6,
      accuracy: [1,2,3,4,5,6],
      intro: `There's a loud crash of a large tree branch falling nearby. Your head shoots in the direction of the noise. A tall being is standing at least 9ft tall over the freshly broken tree branch. `,
      reveal: `that its wings are even bigger than you could have expected. You've never seen a wolf with wings before, let alone one that had 50ft long ones`
    },
    {
      name: `siren head`,
      health: 70,
      damage: 8,
      accuracy: [1,2,3,4,5,6],
      intro: `A loud noise followed by the ground below you shaking has the animals in the woods scurrying away. A deer runs past you, only thinking about getting to safety. The cold twinge of fear in your chest only gets worse when you look up, and up, and up, and..`,
      reveal: `a strange giant creature with speakers on its head. The noises coming out of it are supposed to be terrifying, but they're oddly comforting for you`
    },
    {
      name: `cartoon cat`,
      health: 20,
      damage: 7,
      accuracy: [1,2,3,4,5,6],
      intro: `All seems good and normal until you see something sprinting towards you. You can't see much of it, only its white hands as it gets closer and closer. `,
      reveal: `a humanoid cat. If that's what you can call it. It looks like it's ripped straight out of a comic book in a very uncanny and unsettling way`
    },
    {
      name: `jersey devil`,
      health: 30,
      damage: 4,
      accuracy: [1,2,3,4,5,6],
      intro: `You see a creature up ahead and - as if your night hasn't been hard enough already - from behind it looks like it could be, well, Satan himself.`,
      reveal: `a creature that looks like someone put different animals in a blender and hit 'pulse'. It's kind of cute, in a weird unnerving way`
    },
    {
      name: `hodag`,
      health: 20,
      damage: 6,
      accuracy: [1,2,3,4,5,6],
      intro: `You trip over something in the middle of the path and it takes you a second to get your barings. Once you stand back up, you realize the thing you tripped over was living.`,
      reveal: `a small but terrifying creature, no bigger than a boar, looking up at you. You want to just pick it up and squeeze it but know that may not be the smartest option. Anyone else would be scared`
    },
    {
      name: `wendigo`,
      health: 30,
      damage: 5,
      accuracy: [1,2,3,4,5,6],
      intro: `You are hit with a sudden and alarming chill. The air has been tolerable until now, but you can barely stop yourself from shivering. As you walk forward you start to hear what sounds like a human crying, but there's something off about it. Something inhuman.`,
      reveal: `a women. Not just a woman though, she's different. Taller than the average woman you've seen but also covered in blood. She's naked so you see all of her almost translucent skin, as well as the horns that have started to grow out of her head`
    },
    {
      name: `groot slang`,
      health: 50,
      damage: 5,
      accuracy: [1,2,3,4,5,6],
      intro: `The bushes around you seem to be moving, but you know better by now. You stop and wait for the plants to stop shaking and just as they do, you see something poking out of one of them. A tail. And it's huge.`,
      reveal: `a giant snake-like creature. Its fangs are unfathomably long and its head doesn't look proportional to its body. Maybe you'll get it tattooed on you one day, you think`
    }
]

//array of cryptids
const cryptidArr = [`big foot`, `moth man`, `chupacabra`, `batsquatch`, `siren head`, `cartoon cat`, `jersey devil`, `hodag`,`wendigo`,`groot slang`]


//game over function
const gameOver = () => {
  console.log(`Come back soon.`);
  process.exit();
}

//try again function
const tryAgain = () => {
  const tryAgainOptions = prompt(`Try again? 1: yes. | 2: no. `)
  if (tryAgainOptions == 1){
    gameStart();
  }else{
    gameOver();
  }
}
//character intro function
const chooseName = () => {
  playerCharacter.pcName = prompt(`What is your name? `);
};
//game start function
const gameStart = () => {
  chooseName();
  //wincondition
  if (totalSteps === 250 && playerCharacter.cryptids.length > 3) {
    console.log(`Up ahead you can see where the world seems to get brighter. You walk closer to the light and when you turn around you notice your new friends are not walking with you anymore. They can't come with you. This is their home. They helped you through it and it's time to say goodbye. You give each of them one last hug (yes, even the slimey ones) and promise them that you'll come back again. You walk towards the break in the trees, wondering if you were telling the truth. You'll have to survive the real world now.`);
    tryAgain();
  }
  //game intro
  console.log(`Hello, ${playerCharacter.pcName}. You are running from something. What are you running from? That's not our business but you will need help along the way. You are at the beginning of the dark woods. All you know about them is no one that has gone in has ever come out, but you don't have much of a choice anymore. Do you enter the woods or do you accept your fate and be caught?  `)
  const gameIntro = prompt(`1 = Enter the woods. | 2 = Let yourself be caught. `)
  if (gameIntro == 1){
    console.log(`Your adventure has begun. You are starting with ${playerCharacter.items.foodItems}, ${playerCharacter.items.healthItems}, and ${playerCharacter.items.sentimentalItems}.`);
  }else if (gameIntro == 2){
    console.log(`You hear the shouts of the people behind you get louder. You have no way of getting to safety. Game over.`);
    tryAgain();
  }else{
    console.log(`Invalid choice.`);
    gameStart();
  }
  //game round function
  const roundStart = () => {
    console.log(`Your health is ${playerCharacter.health} and your hunger is ${playerCharacter.hunger}. Keep this in mind.`);
    console.log(`What will you do?`)
    const roundChoice = prompt(`1: Walk deeper into the woods. | 2: Eat something. | 3: Heal your wounds. 4: Check your surroundings. 5: Quit the game. `);
    //function to find cryptid
    const findCryptid = (a) => {
      console.log(`${a.intro}`);
      const bigChoice = prompt(`What will you do? 1: Speak to it gently | 2: Offer it one of your items | 3: Run. `);
      if (bigChoice == 1){
        console.log(`You speak in a soft, quiet voice "Hey, big guy," you stutter over your words slightly in fear. When it hears you speak, it steps forward to reveal ${a.reveal}. "Wait.." you pause, looking at the creature who seems just as confused as you. "Are you ${a.name}?" It looks over at your bag with curiosity.`);
        const keepCryptid = prompt(`What do you do? 1: Offer it an item | 2: Run away. `)
        if(keepCryptid == 1) {
          console.log(`You give the creature your ${playerCharacter.items.sentimentalItems[0]}. It seems to smile while holding your gift in its hands. You stand in shock for a moment, watching the creature play with your ${playerCharacter.items.sentimentalItems[0]}. "Okay, bye then, buddy," when you go to walk away, it follows you. It seems you've made a friend.`);
          playerCharacter.items.sentimentalItems.shift()
          playerCharacter.cryptids.push(a);
          let newCryptid = cryptids.indexOf(a)
          cryptids.splice(newCryptid, 1);
          roundStart();
        }else{
          console.log(`You run away from the beast and it seems sad to see you go. You wonder if you will ever see it again.`);
          roundStart();
        }
      }else if(bigChoice == 2) {
        console.log(`You give the creature your ${playerCharacter.items.sentimentalItems[0]}. It seems to smile while holding your gift in its hands. "Wait, are you ${a.name}?" you stand in shock for a moment, watching the creature play with your ${playerCharacter.items.sentimentalItems[0]}. "Okay, bye then buddy," when you go to walk away, it follows you. It seems you've made a friend.`);
        playerCharacter.cryptids.push(a);
        let newCryptid = cryptids.indexOf(a)
        cryptids.splice(newCryptid, 1);
        roundStart();
      }else{
        console.log(`You run away from the beast and it seems sad to see you go. You wonder if you will ever see it again.`);
        roundStart();
      }
    }

  //function to walk deeper
  const roundChoice1 = () => {
    let steps = Math.floor(Math.random() * 10);
    totalSteps = steps + totalSteps;
    console.log(`You took ${steps} steps. You are now ${totalSteps} steps deep into the woods.`);
    if (totalSteps % 3 === 0){
      let i = Math.floor(Math.random() * cryptids.length);
      findCryptid(cryptids[i]);
    }else{
      roundStart();
    }
  }

  //function to eat
  const roundChoice2 = () => {
    console.log(`You have ${playerCharacter.items.foodItems} Would you like to eat something?`);
    const eatSomething = prompt(`1 = Yes. 2 = No. `);
    if(playerCharacter.items.foodItems.length == 0){
      console.log(`You have no food to eat.`);
      roundStart();
    }else if(eatSomething == 1){
      let hungerRecovered = Math.floor(Math.random() * 4);
      playerCharacter.hunger = hungerRecovered + playerCharacter.hunger;
      playerCharacter.items.foodItems.shift();
      console.log(`You have eaten ${playerCharacter.items.foodItems[0]}. You have recovered ${hungerRecovered}. You now have ${playerCharacter.hunger} hunger. You have ${playerCharacter.items.foodItems.length} food items left.`);
      roundStart();
    }else{
      console.log(`You have decided not to eat anything.`);
      roundStart();
    }
  }

  //function to heal
  const roundChoice3 = () => {
    console.log(`You have ${playerCharacter.items.healthItems} Would you like to heal?`);
    const healSelf = prompt(`1 = Yes. 2 = No. `);
    if(playerCharacter.items.healthItems.length == 0){
      console.log(`You have no way to heal.`);
      roundStart();
    }else if (healSelf == 1){
      let healthRecovered = Math.floor(Math.random() * 4)
      playerCharacter.health = healthRecovered + playerCharacter.health;
      playerCharacter.items.healthItems.shift();
      console.log(`You have healed yourself with ${playerCharacter.items.foodItems[0]}. You have recovered ${healthRecovered}. You now have ${playerCharacter.health} health. You have ${playerCharacter.items.healthItems.length} healing items left.`);
      roundStart()
    }else {
      console.log(`You have decided not to heal.`);
      roundStart();
    }
  }

  //fight function
  const fightCreature = (creature) => {
    let i = Math.floor(Math.random() * playerCharacter.cryptids.length)
    console.log(`${playerCharacter.cryptids[i].name} will protect you from the ${creature.name}.`);
    while(creature.health > 0 && playerCharacter.cryptids[i].health > 0) {
      let cryptidHit = Math.floor(Math.random() * creature.accuracy)
      if (cryptidHit == 1 || 3 || 5) {
        creature.health = creature.health - playerCharacter.cryptids[i].damage;
        console.log(`${playerCharacter.cryptids[i].name} hit ${creature.name} for ${playerCharacter.cryptids[i].damage}`);
      }else{
        console.log(`${playerCharacter.cryptids[i].name} missed! The ${creature.name} will be able to attack you instead`);
        playerCharacter.health = playerCharacter.health - creature.damage;
        console.log(`${creature.name} hit you for ${creature.damage}.`);
      }
      let creatureHit = Math.floor(Math.random() * creature.accuracy);
      if (creatureHit == 1 || 3 || 5) {
        playerCharacter.cryptids[i].health = playerCharacter.cryptids[i].health - creature.damage;
        console.log(`${creature.name} hit ${playerCharacter.cryptids[i].name} for ${creature.damage}`);
      }else{
        console.log(`The ${creature.name} missed!`);
      }
    }
    if (creature.health <= 0) {
      console.log(`The ${playerCharacter.cryptids[i].name} was able to defeat the ${creature.name}! ${playerCharacter.cryptids[i].name} now has ${playerCharacter.cryptids[i].health} HP.`);
      const healCryptid = prompt(`Would you like to heal ${playerCharacter.cryptids[i].name}? 1: yes | 2: no`);
      if (healCryptid == 1){
        let healthRecovered = Math.floor(Math.random() * 4)
        playerCharacter.cryptids[i].health = healthRecovered + playerCharacter.cryptids[i].health;
        playerCharacter.items.healthItems.shift();
        console.log(`You were able to heal ${playerCharacter.cryptids[i].name} for ${healthRecovered}`);
        roundStart();
      }else{
        roundStart();
      }
    }
  }

  //function if you find food when checking surroundings
  const foundFood = () => {
    if(playerCharacter.items.foodItems.length >= 5) {
      console.log(`Your bag is too full to pick up anything else.`);
    }else {
      i = Math.floor(Math.random() * possibleSurroundings.food.length);
      playerCharacter.items.foodItems.push(possibleSurroundings.food[i]);
      console.log(`You have found ${possibleSurroundings.food[i]}. You now have ${playerCharacter.items.foodItems}`);
      roundStart();
    }
  }

  //function if you find an item when checking surroundings
  const foundItem = () => {
    if(playerCharacter.items.sentimentalItems.length >= 5) {
      console.log(`Your bag is too full to pick up anything else.`);
    }else {
      i = Math.floor(Math.random() * possibleSurroundings.items.length);
      playerCharacter.items.sentimentalItems.push(possibleSurroundings.items[i]);
      possibleSurroundings.items.splice(i,1);
      console.log(`You have found ${possibleSurroundings.items[i]}. You now have ${playerCharacter.items.sentimentalItems}`);
      roundStart();
    }
  }
  //function if you find a health item when checking surroundings
  const foundHealth = () => {
    if(playerCharacter.items.healthItems.length >= 5) {
      console.log(`Your bag is too full to pick up anything else.`);
    }else {
      i = Math.floor(Math.random() * possibleSurroundings.health.length);
      playerCharacter.items.healthItems.push(possibleSurroundings.health[i]);
      console.log(`You have found ${possibleSurroundings.health[i]}. You now have ${playerCharacter.items.healthItems}.`);
      roundStart();
    }
  }
    //function if you find a threat when checking surroundings
  const foundThreat = () => {
    let i = Math.floor(Math.random() * possibleSurroundings.threats.length);
    console.log(`You have found a ${possibleSurroundings.threats[i].name}.`);
    fightCreature(possibleSurroundings.threats[i]);
  }
  //function to check surroundings
  const roundChoice4 = () => {
    //you can find food, find an item, or find a threat
    let found = Math.floor(Math.random()*5)
    if(found == 0){
      console.log(`You see nothing worth investigating.`);
      roundStart();
    }else if(found == 1){
      foundFood();
    }else if(found == 2){
      foundItem();
    }else if(found == 3){
      foundHealth();
    }else{
      foundThreat();
    }
  }
  const roundChoice5 = () => {
    gameOver();
  }
  if (roundChoice == 1){
    roundChoice1();
  }else if(roundChoice == 2){
    roundChoice2();
  }else if(roundChoice == 3) {
    roundChoice3();
  }else if(roundChoice == 4) {
    roundChoice4();
  }else if(roundChoice == 5) {
    gameOver();
  }
  roundChoice1();
  roundChoice2();
  roundChoice3();
  roundChoice4();
  roundChoice5();
  }
  roundStart();
}
gameStart();
gameOver();
