module.exports = {
    db: {
        user: '',
        host: '',
        database: '',
        password: '',
        port: '',
        ssl: {
            rejectUnauthorized: false
        }
    },
    azure: {
        subscriptionKey: '',
        serviceRegion: ''
    },
    capture: {
        path: './captures/',
    },
    sync: {
        name: 'YOUR SERVER NAME HERE'
    },
};

// Recommended settings:
//
// db.user: komodo-db > .env > MYSQL_USER
// db.host: TODO. Most likely 0.0.0.0 or localhost.
// db.database: komodo-db > .env > MYSQL_DATABASE
// db.password: komodo-db > .env > MYSQL_PASSWORD
// db.port: TODO. Most likely 3306.
// db.ssl.rejectUnauthorized: false by default
//
// azure.subscriptionKey: TODO
// azure.serviceRegion: TODO
//
// capture.path: './captures/' by default
//
// sync.name: the name you wish to call this server.