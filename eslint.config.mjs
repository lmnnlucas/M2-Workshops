import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {
    rules: {
      //"no-unused-vars": "warn",
      //"no-undef": "error",
      //semi: "warn",             // Alerte si une ligne ne finit pas par un point virgule
      //"prefer-const": "warn",
      //"for-direction": "error",
      //"no-unreachable": "error"    // Alerte si on peut remplacer let par const pour une variable
    }
  }
];