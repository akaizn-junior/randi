/*!
 * Random Names Generator
 * Data from https://gist.github.com/ijmacdowell/8325491 Erased original nouns index 2210 and other data
 * (c) 2019 Verdexdesign
 */

const { randn } = require('utils');
const { nouns, adjectives } = require('./data');

/**
 * Generates a name from random adjectives and nouns
 * @param {string} separator A character other than white-space to use as separator
 */
function randi(separator = ' ') {
	let randomAjective = adjectives[randn(0, adjectives.length)];
	let randomNoun = nouns[randn(0, nouns.length)];
	randomAjective = randomAjective.trim().replace(/\s/g, separator);
	randomNoun = randomNoun.trim().replace(/\s/g, separator);
	return randomAjective.concat(separator, randomNoun);
}

module.exports = randi;
