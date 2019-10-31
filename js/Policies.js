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

const createFascistPolicy = () => madLibbed(randomFrom(fascistPolicies)());

const tokenized = (token, getTokenReplacement) => val => withReplaced(token, getTokenReplacement, val);

const madLibbed = (val) => 
  withReplaced('[context]', context,
  withReplaced('[discovered]', discovered,
  withReplaced('[prohibitedfrom]', prohibitedfrom, 
  withReplaced('[punishment]', punishment, 
  withReplaced('[verbcontinuous]', verbContinuous, 
  withReplaced('[verb]', verb, 
  withReplaced('[object]', object, 
  withReplaced('[peoplegroup]', peopleGroup, 
  withReplaced('[adjective]', adjective, 
    val.toLowerCase())))))))));

const withReplaced = (token, getTokenReplacement, val) => {
  var result = val;
  while (result.includes(token))
    result = result.replace(token, getTokenReplacement());
  return result;
}

const adjective = () => randomFrom(adjectives);
const peopleGroup = () => randomFrom(peopleGroups);
const object = () => randomFrom(objects);
const verbContinuous = () => randomFrom(verbsContinuous);
const verb = () => randomFrom(verbs);
const punishment = () => randomFrom(punishments);
const prohibitedfrom = () => randomFrom(prohibitedfroms);
const discovered = () => randomFrom(discovereds);
const context = () => randomFrom(contexts);

const fascistPolicies = [
  () => `[adjective] [peoplegroup] [discovered] [verbcontinuous] with [adjective] [object] will be [punishment]`,
  () => `[peoplegroup] [prohibitedfrom] [verb] with [adjective] [peoplegroup]`,
  () => `[object] [prohibitedfrom] be sold [context]`
]

const createLiberalPolicy = () => "free donuts for everyone";

const printPolicy = (policyText) => document.getElementById('policy-detail').innerText = formatted(policyText);
const printLiberalPolicy = () => printPolicy(createLiberalPolicy());
const printFascistPolicy = () => printPolicy(createFascistPolicy());

const discovereds = [
  'who are found',
  'found',
  'discovered',
  'seen',
  'caught'
]

const objects = [
  'cats',
  'dishwashers',
  'toasters',
  'coffee',
  'dinosaurs',
  'racing cars'
]

const contexts = [
  'in public places',
  'at restaurants',
  'in front yards'
]

const verbsContinuous = [
  'dancing',
  'dining',
  'partying',
  'collaborating',
  'flamboyant'
]

const verbs = [
  'eat',
  'read',
  'hunt',
  'shoot',
  'party',
  'drink'
]

const adjectives = ["aggressive","agreeable","ambitious","brave","calm","delightful","eager","faithful","gentle","happy","jolly","kind","lively","nice","obedient","polite","proud","silly","thankful","victorious","witty","wonderful","zealous","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","pitiful","repulsive","scary","thoughtless","uptight","worried","broad","chubby","crooked","curved","deep","flat","high","hollow","low","narrow","refined","round","shallow","skinny","square","steep","straight","wide","big","colossal","fat","gigantic","great","huge","immense","large","little","mammoth","massive","microscopic","miniature","petite","puny","scrawny","short","small","tall","teeny","tiny"]

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
  'grandmothers'
]

const punishments = [
  'thrown into jail',
  'exiled',
  'heavily taxed',
  'tortured',
]

const prohibitedfroms = [
  'may no longer',
  'shall not',
  'are forbbiden from',
]