var ThinAir = require('../../libs/thinair');

module.exports = ThinAir.createController({
    Projects: null,

    setup: function() {
        this.Projects = this.repositories.Projects;
    },

    index: function(req, res, params) {
        this.sendTemplate(req, res, 'index');
    },

    projects: function(req, res, params) {
        var that = this;

        this.Projects.getAll(function(projects) {
            that.sendTemplate(req, res, 'projects', { projects: projects });
        });
    },

    validators: function(req, res, params) {
        var message;

        // response from the form
        if (this.isPost(req)) {
            var that = this;

            this.Projects.save(req.body.project, function(project, errors) {
                if (errors) {
                    console.log('form errors', errors);
                } else {
                    message = 'full of win!';
                }
            });
        }

        this.sendTemplate(req, res, 'validators', { message: message });
    },

    create: function(req, res, params) {
        this.sessions.createSession(res, { userId: 9 }, function(err) { 
            console.log('holy shit', err); 
        });

        res.end();
    },

    get: function(req, res, params) {
        this.sessions.getSession(req, function(err, data) {
            if (data) {
                res.write(JSON.stringify(data));
            }

            res.end();
        });
    }
});