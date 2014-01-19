/**
 *  TrinteJS Jade Templates
 *
 *  @project     TrinteJS
 *  @version     0.0.1
 *  @package     trinte-jade
 *  @author      Aleksejs Gordejevs
 *  @created     2013-09-24 03:12:02
 * 
 *  Created by init script
 *  App based on TrinteJS MVC framework
 *  TrinteJS homepage http://www.trintejs.com
 **/
var engine = require('jade');
var fs = require('fs');

/**
 * Library version.
 **/
exports.version = '0.0.1';

/**
 * This file extension will be used by default for all template files
 **/
exports.extension = '.jade';

/**
 * View templating engine
 **/
exports.module = 'jade';

/**
 * Get source template filename
 * @param {String} name
 * @param {String} side
 **/
exports.getTemplate = function(name, side) {
    side = (side === 'frontend') ? 'frontend' : 'backend';
    return __dirname + '/templates/' + side + '/' + name + exports.extension;
};

/**
 * Get template text
 * @param {String} name
 * @param {String} side
 **/
exports.getTemplateText = function (name, side) {
    return fs.readFileSync(exports.getTemplate(name, side)).toString();
};

/**
 * Render template
 * @param {String} name
 * @param {String} side
 * @param {Object} data
 * @return {String}
 **/
exports.render = function(name, side, data) {
    if (typeof data === 'undefined') {
        if (typeof side === 'undefined') {
            return 'data not defined';
        } else if (typeof side === 'object') {
            data = side;
            side = 'backend';
        }
    }
    side = (side === 'frontend') ? 'frontend' : 'backend';
    name = name ? name : 'index';
    var template = fs.readFileSync(exports.getTemplate(name, side)).toString();
    return engine.render(template, {
        locals: data,
        open: "<?",
        close: "?>"
    });
};

/**
 * Set JadeTemplate Engine
 *
 * @param {Object} app
 * @api public
 **/
exports.setEngine = function(app) {
    app.configure(function() {
        app.engine('jade', engine);
        app.set('view engine', 'jade');
    });
};