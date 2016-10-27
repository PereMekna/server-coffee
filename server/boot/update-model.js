module.exports = function(app) {
  app.dataSources.postgres.automigrate('Utilisateur', function(err) {
    if (err) throw err;
  });
};