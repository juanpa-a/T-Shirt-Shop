const password = process.env.PASSWORD;

module.exports = {
    database: {
        host: 'localhost',
        user: 'root',
        password: password,
        database: 'turing'
    }
}