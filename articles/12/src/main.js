const express         = require("express");
const expressGraphQL  = require("express-graphql");
const graphQLData     = require("./graphqlData");
const app             = express();
const port            = process.env.PORT || 3000

app.use("/graphql", expressGraphQL({
  schema:    graphQLData.schema,
  rootValue: graphQLData.rootValue,
  graphiql: true
}));

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => { 
  console.log(`Server ready on port http://localhost:${port}`)
});