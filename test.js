import childProcess from 'child_process';
import test from 'ava';

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

test.cb('eduro with author', t => {
	const cp = childProcess.spawn('./cli.js', ['-e', '-u'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 0);
		t.end();
	});
});

test.cb('brainyquote with author', t => {
	const cp = childProcess.spawn('./cli.js', ['-b', '-u'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 0);
		t.end();
	});
});
