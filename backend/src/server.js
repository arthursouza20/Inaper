const app = require('./app');
require('dotenv').config();

const PORT = process.env.MYSQL_PORT;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});