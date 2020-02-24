const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/api/users', (req, res) => {
    res.send(
        [
            {
                id: 1,
                name: "박동경",
                dsc: "안녕하세요!",
                date: "2020-02-24"
            },
            {
                id: 2,
                name: "서동화",
                dsc: "안녕하세요!",
                date: "2020-02-24"
            },
            {
                id: 3,
                name: "홍길동",
                dsc: "안녕하세요!",
                date: "2020-02-24"
            }
        ]
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));