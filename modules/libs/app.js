// Generated by CoffeeScript 1.3.1
(function() {
  var express, hbs, helpers, start;

  express = require("express");

  hbs = require("handlebars");

  helpers = require("./helpers");

  module.exports = {
    start: start = function(server) {
      var app;
      app = express();
      this.configure.start(app);
      this.routes.registerRoutes(app);
      this.partials.registerPartials(hbs);
      helpers.registerHandlebarsHelpers(hbs);
      return server.on("request", app);
    }
  };

}).call(this);
