var hbs = require('handlebars'),
    fs = require('fs')

module.exports = {
    initializeTemplateEngine: function (routil, uri) {
        // registering partials
        registerPartials(hbs)

        routil.config({ templar: getTemplarInstance(routil.Templar, uri) })
    }
}

function getTemplarInstance(templar, path) {
    templar.loadFolder(path)
    
    var engine = {
        compile: function (contents, options) {
            var compiled = hbs.compile(contents, options)

            return function (data) {
                return compiled(data)
            }
        }
    }

    return {
        engine: engine,
        folder: path
    }
}

// registers any partial contained in app/views/partials
function registerPartials(hbs) {
    // read a partial's content
    readPartials = function(err, files) {
        return files.forEach(loadPartial)
    }

    // register the hbs partial
    loadPartial = function(file) {
        var partialName = file.replace('.html', '')
        return hbs.registerPartial(partialName, fs.readFileSync(__dirname + '/../app/views/partials/' + file, 'UTF-8'))
    }

    return fs.readdir(__dirname + '/../app/views/partials', readPartials)
}