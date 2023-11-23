const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: 'Chatroom API',
    description: 'Chatroom API',
  },
  host: "chat-room-f53d.onrender.com",
  schemes: ["https"],

  securityDefinitions: {
    oauth2: {
      type: 'oauth2',
      authorizationUrl: 'https://chat-room-f53d.onrender.com/auth/login',
      flow: 'accessCode',
    },
  },

};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
