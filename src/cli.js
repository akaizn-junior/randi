#! /usr/bin/env node

const randi = require('./randi');
const CAR = require('@verdebydesign/car');

function help() {
	console.log([
		'Random Names Generator',
		'',
		'Format',
		'-s, --sep       provide a separator for the generated string other than space\n',
		'Misc',
		'-h, --help      command\'s help',
		'Get involved    https://github.com/verdebydesign/randi'
	].join('\n'));
}

const defined = {
	'-h': {
		flag: true,
		cb: help,
		combine: false
	},
	'-s': {
		var: true,
	}
};

const longform = {
	'--sep': '-s',
	'--help': '-h'
};

const validated = CAR(defined, longform, err => console.log(err));

(function() {
	console.log(randi(validated['-s'] || ' '));
})();
