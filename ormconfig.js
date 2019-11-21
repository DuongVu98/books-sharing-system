(function(){
    if (process.env.NODE_ENV == "deploy") {
        module.exports = {
            "type": "postgres",
            "host": process.env.DEPLOY_DB_HOST,
            "port": process.env.DEPLOY_DB_PORT,
            "username": process.env.DEPLOY_DB_USER,
            "password": process.env.DEPLOY_DB_PASSWORD,
            "database": process.env.DEPLOY_DB_DATABASE,
            "synchronize": true,
            "logging": true,
            "entities": ["./src/**/*.entity.ts", "./dist/**/*.entity.ts"]
        };
    } else {
        module.exports = {
            "type": "postgres",
            "host": process.env.LOCAL_DB_HOST,
            "port": process.env.LOCAL_DB_PORT,
            "username": process.env.LOCAL_DB_USER,
            "password": process.env.LOCAL_DB_PASSWORD,
            "database": process.env.LOCAL_DB_DATABASE,
            "synchronize": true,
            "logging": true,
            "entities": ["./src/**/*.entity.ts", "./dist/**/*.entity.ts"]
        };
    }
}());