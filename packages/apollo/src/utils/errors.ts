import { CLIError } from "@oclif/errors";

const errorMessage = [
  "No graph (i.e. service) found to link to Apollo Graph Manager.",
  "In order to run this command, please provide a graph ID using the 'apollo.config.js' file.",
  "\n\nFor more information on configuring the Apollo CLI, please go to",
  "https://www.apollographql.com/docs/devtools/apollo-config/"
].join("\n");
export const graphUndefinedError = new CLIError(errorMessage);
