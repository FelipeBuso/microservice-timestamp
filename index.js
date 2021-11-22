const PORT = process.env.PORT || 3000

const app = require('./src/api/app');

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));