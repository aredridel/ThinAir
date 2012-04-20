module.exports = registerRoutes: (app) ->
  getAction = @router.getAction
  home = @controllers.home
  user = @controllers.user
  project = @controllers.project

  app.get "/", getAction(home, "index")

  app.post "/users/login", getAction(user, "login")
  app.get "/users/logout", getAction(user, "logout")

  app.get "/projects", getAction(project, "list")
  app.get "/projects/new", getAction(project, "new")
  app.get "/projects/edit/:project_code", getAction(project, "editGet")
  app.post "/projects/edit", getAction(project, "editPost")
  app.get "/projects/delete/:project_code", getAction(project, "delete")