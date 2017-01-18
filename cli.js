#!/usr/bin/env node

'use strict';

const dns = require('dns');
const got = require('got');
const cheerio = require('cheerio');
const chalk = require('chalk');
const ora = require('ora');
const logUpdate = require('log-update');

const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({pkg}).notify();

const spinner = ora();

const arg = process.argv[2];
const pre = `${chalk.bold.cyan('›')} `;

const showMessage = () => {
	logUpdate();
	spinner.text = `${chalk.dim('Fetching')} ${chalk.bold('Quote of the day')}`;
	spinner.start();
	return;
};

const showError = () => {
	logUpdate(`\n${pre} ${chalk.dim('Could not find the Quote. Please try again!')}\n`);
	process.exit(1);
};

const showQuotes = arg => {
	logUpdate();
	console.log(`${pre}${arg}`);
	console.log();
	spinner.stop();
	return;
};

const quoteOftheDay = () => {
	return chalk.dim('Quote of the Day');
};

const dnsBrainy = () => {
	dns.lookup('brainyquote.com', err => {
		if (err) {
			logUpdate(`\n${chalk.bold.red('› ')}${chalk.dim('Please check your internet connection')}\n`);
			process.exit(1);
		}
	});
};

const args = ['-g', '--goodreads', '-b', '--brainyquote', '-e', '--eduro', '-l', '--love', '-a', '--art', '-n', '--nature', '-f', '--funny', '-v', '--version', '-s', '--source'];

if (!arg || arg === '-h' || arg === '--help' || args.indexOf(arg) === -1) {
	console.log(`
 ${chalk.cyan('Usage:')} kote <command>

 ${chalk.cyan('Command: ')}
  -g, --goodreads        ${quoteOftheDay()} : GoodReads
  -b, --brainyquote      ${quoteOftheDay()} : BrainyQuotes
  -e, --eduro            ${quoteOftheDay()} : Eduro

 ${chalk.cyan('Extra :')}
  -l, --love             ${quoteOftheDay()} : Love
  -a, --art              ${quoteOftheDay()} : Art
  -n, --nature           ${quoteOftheDay()} : Nature
  -f, --funny            ${quoteOftheDay()} : Funny

 ${chalk.cyan('Kote: ')}
  -h, --help             display help
  -s, --soruce           extra information
  -v, --version          display kote's version
		`);
}

if (arg === '-s' || arg === '--source') {
	console.log(`
  ${chalk.bold.green('⚫')} ${chalk.bold('GoodReads')}
  ${chalk.bold.cyan('⚫')} ${chalk.bold('BrainyQuotes')}
  ${chalk.bold.red('⚫')} ${chalk.bold('Eduro')}
		`);
}

if (arg === '-g' || arg === '--goodreads') {
	dns.lookup('goodreads.com', err => {
		if (err) {
			logUpdate(`\n${chalk.bold.red('› ')}${chalk.dim('Please check your internet connection')}\n`);
			process.exit(1);
		}
	});
	const url = 'https://www.goodreads.com/quotes_of_the_day';
	showMessage();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		let quote = $('.quoteText').text().trim();
		quote = quote.split('//<!')[0].trim().split('―')[0].trim();
		showQuotes(quote);
	}).catch(err => {
		if (err) {
			showError();
		}
	});
}

if (arg === '-b' || arg === '--brainyquote') {
	dnsBrainy();
	const url = 'http://www.brainyquote.com/quotes_of_the_day.html';
	showMessage();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		const quote = $('.bqQuoteLink').eq(0).text().trim();
		showQuotes(`"${quote}"`);
	}).catch(err => {
		if (err) {
			showError();
		}
	});
}

if (arg === '-e' || arg === '--eduro') {
	dns.lookup('eduro.com', err => {
		if (err) {
			logUpdate(`\n${chalk.bold.red('› ')}${chalk.dim('Please check your internet connection')}\n`);
			process.exit(1);
		}
	});
	const url = 'http://www.eduro.com/';
	showMessage();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		const quote = $('.article dailyquote p').eq(0).text().trim();
		showQuotes(`"${quote}"`);
	}).catch(err => {
		if (err) {
			showError();
		}
	});
}

if (arg === '-l' || arg === '--love') {
	dnsBrainy();
	const url = 'http://www.brainyquote.com/quotes_of_the_day.html';
	logUpdate();
	spinner.text = `${chalk.dim('Fetching')} ${chalk.bold('Love quote of the day')}`;
	spinner.start();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		const quote = $('.bqQuoteLink').eq(1).text().trim();
		showQuotes(`"${quote}"`);
	}).catch(err => {
		if (err) {
			showError();
		}
	});
}

if (arg === '-a' || arg === '--art') {
	dnsBrainy();
	const url = 'http://www.brainyquote.com/quotes_of_the_day.html';
	logUpdate();
	spinner.text = `${chalk.dim('Fetching')} ${chalk.bold('Art quote of the day')}`;
	spinner.start();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		const quote = $('.bqQuoteLink').eq(2).text().trim();
		showQuotes(`"${quote}"`);
	}).catch(err => {
		if (err) {
			showError();
		}
	});
}

if (arg === '-n' || arg === '--nature') {
	dnsBrainy();
	const url = 'http://www.brainyquote.com/quotes_of_the_day.html';
	logUpdate();
	spinner.text = `${chalk.dim('Fetching')} ${chalk.bold('Nature quote of the day')}`;
	spinner.start();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		const quote = $('.bqQuoteLink').eq(3).text().trim();
		showQuotes(`"${quote}"`);
	}).catch(err => {
		if (err) {
			showError();
		}
	});
}

if (arg === '-f' || arg === '--funny') {
	dnsBrainy();
	const url = 'http://www.brainyquote.com/quotes_of_the_day.html';
	logUpdate();
	spinner.text = `${chalk.dim('Fetching')} ${chalk.bold('Funny quote of the day')}`;
	spinner.start();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		const quote = $('.bqQuoteLink').eq(4).text().trim();
		showQuotes(`"${quote}"`);
	}).catch(err => {
		if (err) {
			showError();
		}
	});
}

if (arg === '--version' || arg === '-v') {
	console.log(`\n${pre}Current kote version:`, require('./package.json').version, `\n`);
}
