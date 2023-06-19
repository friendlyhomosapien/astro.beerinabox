module.exports = {
    apps: [
        {
            name: 'staging',
            script: './dist/server/entry.mjs',
            autorestart: true,
            watch: true,
            max_memory_restart: '1G',
            exec_mode: 'cluster',
            env: {
                NODE_ENV: 'production',
                APP_ENV: 'staging',
                HOST: '0.0.0.0',
                PORT: 3000
            }
        }
    ]
}
