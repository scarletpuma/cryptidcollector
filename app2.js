//objects
//pc info object
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
//possibleSurroundings object
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
    `half of a blunt`,
    `rubix cube`
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
//cryptid info object
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
