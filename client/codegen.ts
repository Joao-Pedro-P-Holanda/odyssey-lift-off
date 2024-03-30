import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000", //where the graphql runs
  documents: ["src/**/*.tsx"], //checks usage in all tsx files on src
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql", //renaming Code Generator function
      },
    },
  },
  ignoreNoDocuments: true, //generates code even if no GraphQL operation is used
};

export default config;
