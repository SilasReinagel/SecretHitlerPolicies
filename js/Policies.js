"use strict";

const titleCased = text => text.charAt(0).toUpperCase() + text.slice(1);
const formatted = text => titleCased(text) + '.'

const randomInt = (max) => Math.floor(Math.random() * max);
const randomIntInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const randomFrom = (items) => items[randomInt(items.length)];
const randomBool = () => Math.random() >= 0.5;
const chance = (percent) => Math.random() <= percent;

const pipeToNext = (a, b) => (arg) => b(a(arg));
const pipe = (...ops) => ops.reduce(pipeToNext);

const tokenized = (token, getTokenReplacement) => val => withReplaced(token, getTokenReplacement, val);

const madLibbed = (val) => 
  withReplaced('[animaladjective]', animalAdjectives,
  withReplaced('[objectadjective]', objectAdjectives,
  withReplaced('[animal]', animals,
  withReplaced('[peopleadjective]', peopleAdjectives,
  withReplaced('[verbpasttense]', verbsPastTense,
  withReplaced('[verbpossessive]', verbsPossessive,
  withReplaced('[context]', contexts,
  withReplaced('[discovered]', discovereds,
  withReplaced('[prohibitedfrom]', prohibitedfroms, 
  withReplaced('[punishment]', punishments, 
  withReplaced('[verbcontinuous]', verbsContinuous, 
  withReplaced('[verb]', verbs, 
  withReplaced('[object]', objects, 
  withReplaced('[peoplegroup]', peopleGroups, 
  withReplaced('[adjective]', adjectives, 
    val.toLowerCase())))))))))))))));

const withReplaced = (token, options, val) => {
  var result = val;
  while (result.includes(token))
    result = result.replace(token, randomFrom(options));
  return result;
}

const fascistPolicies = [
  () => `[peopleadjective] [peoplegroup] [discovered] [verbcontinuous] with [peoplegroup] will be [punishment]`,
  () => `[peoplegroup] [prohibitedfrom] [verb] with [peopleadjective] [peoplegroup]`,
  () => `[object] [prohibitedfrom] be [verbpasttense] [context]`,
  () => `[peopleadjective] [peoplegroup] [prohibitedfrom] be [verbcontinuous] while [verbpossessive] [object]`,
  () => `[peoplegroup] [context] [prohibitedfrom] be [verbpossessive] [adjective] [animal]`,
  () => `[peoplegroup] with [animaladjective] [animal] [prohibitedfrom] [verb] [context]`
]

const liberalPolicies = [
  () => `[peopleadjective] [peoplegroup] shall be given state-supplied [object]`,
  () => `[peoplegroup] [context] [verbpossessive] [object] will receive tax credits`,
  () => `[verbcontinuous] is now permitted for [peopleadjective] [peoplegroup]`
]

const printPolicy = (policyText) => document.getElementById('policy-detail').innerText = formatted(policyText);
const printLiberalPolicy = () => printPolicy(madLibbed(randomFrom(liberalPolicies)()));
const printFascistPolicy = () => printPolicy(madLibbed(randomFrom(fascistPolicies)()));

const verbsPossessive = [
  'holding',
  'having',
  'wielding',
  'possessing',
  'carrying',
  'with',
  'who own'
]

const discovereds = [
  'who are found',
  'found',
  'discovered',
  'seen',
  'caught',
  'observed',
  'noticed',
  'apprehended'
]

const verbsPastTense = [
  'sold',
  'given away',
  'dissected',
  'appreciated',
  'examined',
  'dropped',
  'borrowed',
  'consumed',
  'tolerated'
]

const objects = [
  'dishwashers',
  'toasters',
  'coffee cups',
  'racing cars',
  'televisions',
  'cellphones',
  't-shirts',
  'skin lotion',
  'stereos',
  'trucks',
  'boxes',
  'footballs',
  'measuring tapes',
  'hair brushes',
  'wine glasses',
  'spoons',
  'running shoes',
  'computers',
  'chairs',
  'magazines',
  'guns',
  'knives',
  'trophies',
  'tissues',
  'quilts',
  'shoes',
  'hammers',
  'picture frames',
  'dog treats',
  'smartphones',
  'board games',
  'mailboxes',
  'tea kettles',
  'globes',
  'pencils',
  'filing cabinets',
  'paperwork',
  'house plants',
  'balls of yarn',
]

const objectAdjectives = [  
  "crooked",
  "curved",
  "deep",
  "flat",
  "high",
  "hollow",
  "narrow",
  "refined",
  "round",
  "shallow",
  "skinny",
  "square",
  "steep",
  "straight",
  "wide",
  "big",
  "colossal",
  "fat",
  "gigantic",
  "great",
  "huge",
  "immense",
  "large",
  "little",
  "mammoth",
  "massive",
  "miniature",
  "petite",
  "puny",
  "scrawny",
  "short",
  "small",
  "tall",
  "tiny",
  "ancient",
  "early",
  "fast",
  "future",
  "late",
  "long",
  "old",
  "old-fashioned",
  "prehistoric",
  "quick",
  "rapid",
  "short",
  "slow",
  "swift",
  "young"
]

const animalAdjectives = [
  "vicious",
  "untrained",
  "chubby",
  "crooked",
  "curved",
  "deep",
  "flat",
  "high",
  "refined",
  "round",
  "shallow",
  "skinny",
  "square",
  "steep",
  "straight",
  "wide",
  "big",
  "colossal",
  "fat",
  "gigantic",
  "great",
  "huge",
  "immense",
  "large",
  "little",
  "mammoth",
  "massive",
  "miniature",
  "petite",
  "puny",
  "scrawny",
  "short",
  "small",
  "tall",
  "tiny",
  "ancient",
  "early",
  "fast",
  "future",
  "late",
  "long",
  "old",
  "old-fashioned",
  "prehistoric",
  "quick",
  "rapid",
  "short",
  "slow",
  "swift",
  "young"
];

const animals = [
  'cats',
  'dogs',
  'sloths',
  'giraffes',
  'dinosaurs',
  'dragons',
  'beavers',
  'wolves',
  'butterflies',
  'whales',
  'dolphins',
  'sea turtles',
  'tortoises',
  'pigeons',
  'rabbits',
  'eagles',
  'foxes',
  'frogs'
]

const contexts = [
  'in public places',
  'at restaurants',
  'in front yards',
  'at state parks',
  'around statues',
  'near police stations',
  'in front of parking garages',
  'on farms',
  'at political rallies',
  'in offices',
  'near sports events',
  'during church',
  'on the freeway',
  'in lobbies',
  'inside their houses',
  'near the water'
]

const verbsContinuous = [
  'dancing',
  'dining',
  'partying',
  'collaborating',
  'talking',
  'researching',
  'studying',
  'planning',
  'conversing',
  'driving',
  'playing',
  'fighting',
  'sleeping',
  'eating',
  'gardening',
  'scheming',
  'plotting',
  'cooking',
  'inventing',
  'racing',
  'resting',
  'complaining',
  'thinking',
  'skating',
  'wrestling',
  'fishing',
  'singing'
]

const verbs = [
  'eat',
  'read',
  'go hunting',
  'go shooting',
  'party',
  'drink',
  'converse',
  'sleep',
  'camp',
  'race',
  'rest',
  'complain',
  'think',
  'skate',
  'fight',
  'wrestle',
  'sing',
  'drive',
  'play',
  'cook',
  'scheme',
  'consume',
  'plot',
  'write',
  'invent',
  'protest',
  'conspire',
  'ride'

]

const adjectives = ["aggressive","agreeable","ambitious","brave","calm","delightful","eager","faithful","gentle","happy","jolly","kind","lively","nice","obedient","polite","proud","silly","thankful","victorious","witty","wonderful","zealous","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","pitiful","repulsive","scary","thoughtless","uptight","worried","broad","chubby","crooked","curved","deep","flat","high","hollow","low","narrow","refined","round","shallow","skinny","square","steep","straight","wide","big","colossal","fat","gigantic","great","huge","immense","large","little","mammoth","massive","microscopic","miniature","petite","puny","scrawny","short","small","tall","teeny","tiny"]

const peopleAdjectives = [
  "aggressive",
  "agreeable",
  "ambitious",
  "brave",
  "calm",
  "delightful",
  "eager",
  "faithful",
  "gentle",
  "happy",
  "jolly",
  "kind",
  "lively",
  "nice",
  "obedient",
  "polite",
  "proud",
  "thankful",
  "victorious",
  "witty",
  "wonderful",
  "zealous",
  "angry",
  "bewildered",
  "clumsy",
  "defeated",
  "embarrassed",
  "fierce",
  "grumpy",
  "helpless",
  "jealous",
  "lazy",
  "mysterious",
  "nervous",
  "pessimistic",
  "panicky",
  "tall",
  "creepy",
  "scary",
  "thoughtless",
  "uptight",
  "worried"
];

const prefixes = [
  'absolutely',
]

const peopleGroups = [
  'lawyers',
  'accountants',
  'senators',
  'factory workers',
  'women',
  'men',
  'psychologists',
  'pop stars',
  'musicians',
  'doctors',
  'engineers',
  'grandmothers',
  'janitors',
  'farmers',
  'lobbyists',
  'technicians',
  'police officers',
  'firefighters',
  'store owners',
  'clerks',
  'soccer players',
  'fathers',
  'teachers',
  'data analysts',
  'pedestrians',
  'children',
  'toddlers',
  'cat-lovers',
  'fugitives',
  'managers',
  'taxpayers',
  'artists',
  'painters'
]

const punishments = [
  'thrown into jail',
  'exiled from the country',
  'heavily taxed',
  'tortured',
  'flogged',
  'hung in public',
  'dismembered',
  'publically humiliated',
  'shamed',
  'spanked'
]

const prohibitedfroms = [
  'may no longer',
  'shall not',
  'must not',
  'cannot',
  'may not'
]

window.onload = printFascistPolicy;