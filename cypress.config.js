const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature", // Ruta para los archivos .feature
    supportFile: false,
    stepDefinitions: "cypress/e2e/", // Ubicación de tus definiciones de pasos

viewportWidth: 1280,  //Ancho del viewport
    viewportHeight: 720, //Alto del viewport 
    screenshotOnRunFailure: false, //realiza una captura en caso 
    screenshotsFolder: "cypress/screenshots", // ruta de screenshots   
  },
});