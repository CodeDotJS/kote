import childProcess from 'child_process';

import test from 'ava';

test.cb(t => {
	childProcess.execFile('./cli.js', ['-g'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “I\'m tired of all this nonsense about beauty being only skin-deep. That\'s deep enough. What do you want, an adorable pancreas?”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('brainy', t => {
	childProcess.execFile('./cli.js', ['-b'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “I think and think for months and years. Ninety-nine times, the conclusion is false. The hundredth time I am right.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('eduro', t => {
	childProcess.execFile('./cli.js', ['-e'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “For every minute you are angry you lose sixty seconds of happiness.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('love', t => {
	childProcess.execFile('./cli.js', ['-l'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “People protect what they love.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('art', t => {
	childProcess.execFile('./cli.js', ['-a'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “Minimal art went nowhere.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('nature', t => {
	childProcess.execFile('./cli.js', ['-n'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “But friendship is the breathing rose, with sweets in every fold.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('funny', t => {
	childProcess.execFile('./cli.js', ['-f'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “Marriage is not just spiritual communion, it is also remembering to take out the trash.”\n\n\u001b[?25h');
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
