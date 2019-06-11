const app = require('./src/app');

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running at ${process.env.PORT || 5000}`);
})