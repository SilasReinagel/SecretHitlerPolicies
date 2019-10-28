"use strict";

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

const adjectives = [
  'black',
  'red',
  'fast', 
  'slow', 
  'large', 
  'powerful', 
  'political', 
  'noisy',
  'religious'
];

const prefixes = [
  'absolutely',
]

const forbidding = [
  'no',
]

const append = (n, val, reducer) => Array(n).fill().reduce(reducer, val);
const deduped = x => [...new Set(x)];
const titleCased = text => text.charAt(0).toUpperCase() + text.slice(1);
const formatted = text => titleCased(text) + '.'

const randomInt = (max) => Math.floor(Math.random() * max);
const randomIntInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const randomFrom = (items) => items[randomInt(items.length)];
const randomBool = () => Math.random() >= 0.5;
const chance = (percent) => Math.random() <= percent;

const withObject = (val) => val.concat(randomFrom(objects));
const withContext = (val) => val.concat(randomFrom(contexts));
const withMaybePrefix = (val) => chance(0.16) ? val.concat(randomFrom(prefixes)) : val;
const withAdjectives = (n, val) => append(n, val, (prev, _) => prev.concat(randomFrom(adjectives)));
const withForbidding = (val)  => val.concat(randomFrom(forbidding));

const createFascistPolicy = () => 
    deduped(
      withContext(
        withObject(
          withAdjectives(randomInt(2), 
            withForbidding(
              withMaybePrefix(new Array()))))))    
                .join(' ');

const createLiberalPolicy = () => "free donuts for everyone";

const printPolicy = (policyText) => document.getElementById('policy-detail').innerText = formatted(policyText);
const printLiberalPolicy = () => printPolicy(createLiberalPolicy());
const printFascistPolicy = () => printPolicy(createFascistPolicy());
