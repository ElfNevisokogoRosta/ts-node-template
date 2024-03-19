import express from 'express';

const app = express();
const port = 3333; //Replace with any available value

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Server is started on the port ${port}`);
});
