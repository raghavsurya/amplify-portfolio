import awsExports from "./aws-exports";
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: awsExports.aws_appsync_graphqlEndpoint
});

export default client;