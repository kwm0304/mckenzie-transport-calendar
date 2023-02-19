const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleWare } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleWare,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, '../client/build/index.html'));
});

//create a new instance of an Apollo Server with the gql schema
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
        })
    })
};

//call the async function to start
startApolloServer(typeDefs, resolvers);