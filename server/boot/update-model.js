module.exports = function(app) {
  app.dataSources.postgres.automigrate('User', function(err) {
    if (err) throw err;
  });
};