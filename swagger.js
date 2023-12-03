const swaggerAutogen = require('swagger-autogen')();

const baseSwaggerDocument = {
  info: {
    title: 'Chatroom API',
    description: 'Chatroom API',
  },
  host: 'chat-room-f53d.onrender.com',
  schemes: ['https'],
  securityDefinitions: {
    oauth2: {
      type: 'oauth2',
      authorizationUrl: '{{authorizationUrl}}',
      flow: 'accessCode',
    },
  },
};

const authorizationUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://chat-room-f53d.onrender.com/auth/login'
    : 'http://localhost:8080/auth/login';

const swaggerDocument = { ...baseSwaggerDocument };
swaggerDocument.securityDefinitions.oauth2.authorizationUrl = authorizationUrl;

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, swaggerDocument);
