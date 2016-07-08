import childProcess from 'child_process';

import test from 'ava';

test.cb(t => {
	childProcess.execFile('./cli.js', ['-g'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “Each of us has a unique part to play in the healing of the world.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('brainy', t => {
	childProcess.execFile('./cli.js', ['-b'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “Hope is but the dream of those who wake.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('eduro', t => {
	childProcess.execFile('./cli.js', ['-e'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “See the invisible. Believe the incredible. Attempt the impossible!”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('love', t => {
	childProcess.execFile('./cli.js', ['-l'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “O, thou art fairer than the evening air clad in the beauty of a thousand stars.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('art', t => {
	childProcess.execFile('./cli.js', ['-a'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “My love of fine art increased - the more of it I saw, the more of it I wanted to see.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('nature', t => {
	childProcess.execFile('./cli.js', ['-n'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “When I have a terrible need of - shall I say the word - religion. Then I go out and paint the stars.”\n\n\u001b[?25h');
		t.end();
	});
});

test.cb('funny', t => {
	childProcess.execFile('./cli.js', ['-f'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '\u001b[?25l\n\u001b[?25l\u001b[1000D\u001b[K\u001b[1A\u001b[1000D\u001b[K\n› “I, Joan Crawford, I believe in the dollar. Everything I earn, I spend.”\n\n\u001b[?25h');
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
