import express from 'express'


const PORT = 3000;
const app = express();

app.use(express.static(__dirname + '/static'))


app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`)
});