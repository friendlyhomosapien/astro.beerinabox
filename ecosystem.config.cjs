module.exports = {
    apps: [
        {
            name: 'staging',
            script: './dist/server/entry.mjs',
            cwd: `/home/ploi/beerinabox.dev`,
            instances: 'max',
            wait_ready: true,
            max_memory_restart: '1G',
            listen_timeout: 5000,
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
