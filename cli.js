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

if (!arg || arg === '-h' || arg === '--help') {
	console.log(`
 ${chalk.bold.cyan('Usage:')} kote <command>

 ${chalk.bold.cyan('Command: ')}
  -g, --goodreads        fetch quote of the day from goodread      ${chalk.bold.green('⚫')} 
  -b, --brainyquote      fetch quote of the day from brainyquotes  ${chalk.bold.cyan('⚫')} 
  -e, --eduro            quote of the day by eduro                 ${chalk.bold.red('⚫')} 
  -l, --love             romantic quote of the day                 ${chalk.bold.cyan('⚫')} 
  -a, --art              art quote of the day                      ${chalk.bold.cyan('⚫')} 
  -n, --nature           nature quote of the day                   ${chalk.bold.cyan('⚫')} 
  -f, --funny            funny quote of the day                    ${chalk.bold.cyan('⚫')} 

 ${chalk.bold.cyan('Kote: ')}
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
		if (err && err.code === 'ENOTFOUND') {
			logUpdate(`\n${chalk.bold.red('› ')}${chalk.dim('Please check your internet connection')}\n`);
			process.exit(1);
		}
	});
	const url = 'https://www.goodreads.com/quotes_of_the_day';
	logUpdate();
	spinner.text = `${chalk.dim('Fetching')} ${chalk.bold('Quote of the day')}`;
	spinner.start();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		let quote = $('.quoteText').text().trim();
		quote = quote.split('//<!')[0].trim().split('―')[0].trim();
		logUpdate();
		console.log(`${pre}${quote}`);
		console.log();
		spinner.stop();
	});
}

if (arg === '-b' || arg === '--brainyquote') {
	dns.lookup('brainyquote.com', err => {
		if (err && err.code === 'ENOTFOUND') {
			logUpdate(`\n${chalk.bold.red('› ')}${chalk.dim('Please check your internet connection')}\n`);
			process.exit(1);
		}
	});
	const url = 'http://www.brainyquote.com/quotes_of_the_day.html';
	logUpdate();
	spinner.text = `${chalk.dim('Fetching')} ${chalk.bold('Quote of the day')}`;
	spinner.start();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		const quote = $('.bqQuoteLink').eq(0).text().trim();
		logUpdate();
		console.log(`${pre}“${quote}”`);
		console.log();
		spinner.stop();
	});
}

if (arg === '-e' || arg === '--eduro') {
	dns.lookup('eduro.com', err => {
		if (err && err.code === 'ENOTFOUND') {
			logUpdate(`\n${chalk.bold.red('› ')}${chalk.dim('Please check your internet connection')}\n`);
			process.exit(1);
		}
	});
	const url = 'http://www.eduro.com/';
	logUpdate();
	spinner.text = `${chalk.dim('Fetching')} ${chalk.bold('Quote of the day')}`;
	spinner.start();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		const quote = $('.article dailyquote p').eq(0).text().trim();
		logUpdate();
		console.log(`${pre}“${quote}”`);
		console.log();
		spinner.stop();
	});
}

if (arg === '-l' || arg === '--love') {
	dns.lookup('brainyquote.com', err => {
		if (err && err.code === 'ENOTFOUND') {
			logUpdate(`\n${chalk.bold.red('› ')}${chalk.dim('Please check your internet connection')}\n`);
			process.exit(1);
		}
	});
	const url = 'http://www.brainyquote.com/quotes_of_the_day.html';
	logUpdate();
	spinner.text = `${chalk.dim('Fetching')} ${chalk.bold('Love quote of the day')}`;
	spinner.start();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		const quote = $('.bqQuoteLink').eq(1).text().trim();
		logUpdate();
		console.log(`${pre}“${quote}”`);
		console.log();
		spinner.stop();
	});
}

if (arg === '-a' || arg === '--art') {
	dns.lookup('brainyquote.com', err => {
		if (err && err.code === 'ENOTFOUND') {
			logUpdate(`\n${chalk.bold.red('› ')}${chalk.dim('Please check your internet connection')}\n`);
			process.exit(1);
		}
	});
	const url = 'http://www.brainyquote.com/quotes_of_the_day.html';
	logUpdate();
	spinner.text = `${chalk.dim('Fetching')} ${chalk.bold('Art quote of the day')}`;
	spinner.start();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		const quote = $('.bqQuoteLink').eq(2).text().trim();
		logUpdate();
		console.log(`${pre}“${quote}”`);
		console.log();
		spinner.stop();
	});
}

if (arg === '-n' || arg === '--nature') {
	dns.lookup('brainyquote.com', err => {
		if (err && err.code === 'ENOTFOUND') {
			logUpdate(`\n${chalk.bold.red('› ')}${chalk.dim('Please check your internet connection')}\n`);
			process.exit(1);
		}
	});
	const url = 'http://www.brainyquote.com/quotes_of_the_day.html';
	logUpdate();
	spinner.text = `${chalk.dim('Fetching')} ${chalk.bold('Nature quote of the day')}`;
	spinner.start();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		const quote = $('.bqQuoteLink').eq(3).text().trim();
		logUpdate();
		console.log(`${pre}“${quote}”`);
		console.log();
		spinner.stop();
	});
}

if (arg === '-f' || arg === '--funny') {
	dns.lookup('brainyquote.com', err => {
		if (err && err.code === 'ENOTFOUND') {
			logUpdate(`\n${chalk.bold.red('› ')}${chalk.dim('Please check your internet connection')}\n`);
			process.exit(1);
		}
	});
	const url = 'http://www.brainyquote.com/quotes_of_the_day.html';
	logUpdate();
	spinner.text = `${chalk.dim('Fetching')} ${chalk.bold('Funny quote of the day')}`;
	spinner.start();
	got(url).then(res => {
		const $ = cheerio.load(res.body);
		const quote = $('.bqQuoteLink').eq(4).text().trim();
		logUpdate();
		console.log(`${pre}“${quote}”`);
		console.log();
		spinner.stop();
	});
}

if (arg === '--version' || arg === '-v') {
	console.log(chalk.bold.cyan(`\n${pre}Current kote version:`, require('./package.json').version, `\n`));
}
