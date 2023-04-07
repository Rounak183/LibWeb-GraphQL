const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// // connect to mlab databse
mongoose.connect('mongodb+srv://Rounak:pass%40123@gql-ninja.jogcm0n.mongodb.net/test')
mongoose.connection.once('open', () => {
    console.log("Connected to database !!!");
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening for requests on port 4000");
});

