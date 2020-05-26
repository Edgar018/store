const app = require('./app');
const { createConnection } = require('./database');

async function main() {
    await app.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}`);
}
main();
createConnection();