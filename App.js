const express = require("express");
const path = require ("path");
const app = express()
const userRouter = require ("./routers/userRouter")
const port = 3000;


app.use ("/" , userRouter);
app.use ("/admin" ,userRouter);





  app.get('*', (req, res) => {
    res.send('<h1>Invalid URL</h1>')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

