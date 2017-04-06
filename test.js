import childProcess from 'child_process';
import test from 'ava';

test.cb('goodreads', t => {
	const cp = childProcess.spawn('./cli.js', ['-g'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 0);
		t.end();
	});
});

test.cb('eduro', t => {
	const cp = childProcess.spawn('./cli.js', ['-e'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 0);
		t.end();
	});
});

test.cb('brainyquote', t => {
	const cp = childProcess.spawn('./cli.js', ['-b'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 0);
		t.end();
	});
});
