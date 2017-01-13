import childProcess from 'child_process';

import test from 'ava';

test.cb(t => {
	childProcess.execFile('./cli.js', ['-g'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === `\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “The capacity for friendship is God's way of apologizing for our families.”\n\n\u001b[?25h`);
		t.end();
	});
});

test.cb('brainy', t => {
	childProcess.execFile('./cli.js', ['-b'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “Man loves company - even if it is only that of a small burning candle.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('eduro', t => {
	childProcess.execFile('./cli.js', ['-e'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “The greatest conflicts are not between two people but between one person and himself.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('love', t => {
	childProcess.execFile('./cli.js', ['-l'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “All mankind love a lover.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('art', t => {
	childProcess.execFile('./cli.js', ['-a'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “Only through art can we emerge from ourselves and know what another person sees.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('nature', t => {
	childProcess.execFile('./cli.js', ['-n'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “The longer one is alone, the easier it is to hear the song of the earth.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('funny', t => {
	childProcess.execFile('./cli.js', ['-f'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “I do not fear computers. I fear the lack of them.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('main', t => {
	const cp = childProcess.spawn('./cli.js', {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 0);
		t.end();
	});
});
