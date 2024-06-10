const app = require("./src/app");
require("dotenv");

const PORT = process.env.PORT;
console.log(process.env.MYSQL_HOST);
console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_PASSWORD);
console.log(process.env.MYSQL_DATABASE);

app.listen(PORT || 5501, () => {
  console.log(`Server started on port ${PORT}`);
});
