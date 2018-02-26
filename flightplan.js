var plan = require('flightplan');



// Config
plan.target('dev', {
    host: 'darknik.tk',
    port: 2222,
    username: 'darknik',
    // password: 'bessoulini',
    agent: process.env.SSH_AUTH_SOCK
});



// Plans
plan.remote('deploy', function(remote) {
    remote.with('cd ~/bessy/puppies', function () {
        remote.log('* Syncing the project code');
        remote.exec('git checkout master');
        remote.exec('git pull origin master');

        remote.log('* Making sure NPM packages are up to date');
        remote.exec('npm install');

        // remote.log('* Building client with WebPack');
        // remote.exec('npm run build');

        remote.log('* [Re]Starting Server...');
        remote.exec('forever stopall');
        remote.exec('forever start app.js');
    });
});
