module.exports = {
    apps: [{
        name: 'VoiceLog',
        script: './dist',
        // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
        // args: 'one two',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '512M',
        env_production: {
            NODE_ENV: 'production'
        }
    }],

    deploy: {
        production: {
            user: 'node',
            ref: 'origin/master',
            repo: 'https://github.com/jimchen5209/Discord-Voice-log.git',
            path: '/var/www/production',
            'post-deploy': 'yarn install && yarn build:prod && pm2 reload ecosystem.config.js --env production'
        }
    }
};
