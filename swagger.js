const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: 'Chatroom API',
    description: 'Chatroom API',
  },
  host: "localhost:8080",
  schemes: ["http"],

  securityDefinitions: {
    oauth2: {
      type: 'oauth2',
      authorizationUrl: 'http://localhost:8080/auth/login',
      flow: 'accessCode',
    },
  },

};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
