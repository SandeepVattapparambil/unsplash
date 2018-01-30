const express = require('express');
const React = require('react');
const renderTtoString = require('react-dom/server').renderTtoString;
const Home = require('./client/components/Home').default;
const app = express();

app.get('/', (req, res) => {
const content = renderTtoString(<Home />);
res.send(content);
});
app.listen(3000, () => {
    console.log('App listening on port 3000');
});