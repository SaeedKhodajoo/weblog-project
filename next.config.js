const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Saeed",
        mongodb_password: "vrzPwXsTG03J7bq1",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "Saeed",
      mongodb_password: "a9R7YYwVtUwv2dv2",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
