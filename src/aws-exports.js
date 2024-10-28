const awsConfig = {
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_9SbT07Pl0",
    userPoolWebClientId: "oaehg86bn94hjtk4uu5pb6ng5",
    identityPoolId: "us-east-1:52000fc2-9db3-4b0f-892f-d85b314c8d77",
  },
  API: {
    endpoints: [
      {
        name: "GraphQLAPI",
        endpoint: "https://ybtxpg4qirfc7d4ixd6ak4ssd4.appsync-api.us-east-1.amazonaws.com/graphql",
        region: "us-east-1",
      },
    ],
  },
};

export default awsConfig;