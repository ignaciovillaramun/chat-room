const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: 'Chatroom API',
    description: 'Chatroom API',
  },
  // Host for local testing
  // host: "localhost:8080",
  // Host for deployment
  host: "chat-room-f53d.onrender.com",

  schemes: ["https"],

  securityDefinitions: {
    oauth2: {
      type: 'oauth2',
      // Route for local testing
      // authorizationUrl: 'http://localhost:8080/auth/login',
      // Route for deployment
      authorizationUrl: 'https://chat-room-f53d.onrender.com/auth/login',
      flow: 'accessCode',
    },
  },

};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
