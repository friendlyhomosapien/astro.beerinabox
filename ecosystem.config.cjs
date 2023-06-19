module.exports = {
    apps: [
        {
            name: 'staging',
            script: './dist/server/entry.mjs',
            autorestart: true,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
                APP_ENV: 'staging',
                HOST: '0.0.0.0',
                PORT: 3000
            }
        }
    ]
}
