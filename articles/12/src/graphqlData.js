const { buildSchema } = require("graphql");
const data            = require("./data");

const schema = buildSchema(`

  type Query {
    language(id: Int!):          Language
    languages(paradigm: String): [Language]
  },

  type Language {
    id:         Int
    name:       String
    createdBy:  String
    year:       Int
    paradigm:   String
    complexity: Int
  }

`);

function getLanguage(args) {
  return data.filter((language) => {
    return language.id = args.id;
  })[0];
}

function getLanguages(args) {
  return args.paradigm
         ? data.filter((language) => language.paradigm === args.paradigm)
         : data
}

const rootValue = {
  language:  getLanguage,
  languages: getLanguages
}

module.exports = {
  schema,
  getLanguage,
  getLanguages,
  rootValue
}