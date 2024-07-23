const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const urlBase = "./docs/";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api rest NodeJS",
      description: "Api rest de cascaron para futuros proyectos",
      version: "1.0.0",
    },
  },
  apis: [`${urlBase}usuarios/*.js`, `${urlBase}example/*.js`],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}

module.exports = { swaggerDocs };
