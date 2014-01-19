/**
 *  TrinteJS Jade Templates
 *
 *  @project     TrinteJS
 *  @version     0.0.3
 *  @package     trinte-jade
 *  @author      Aleksejs Gordejevs
 *  @created     2013-09-24 03:12:02
 * 
 *  Created by init script
 *  App based on TrinteJS MVC framework
 *  TrinteJS homepage http://www.trintejs.com
 **/

var trinteJade = require('./../lib/trinte-jade.js');

exports['Check module version'] = function(test) {
    test.equal(trinteJade.version, require('../package.json').version);
    test.done();
};

exports['Get module extension'] = function(test) {
    test.equal(trinteJade.extension, '.jade');
    test.done();
};

exports['Get templating engine'] = function(test) {
    test.equal(trinteJade.module, 'jade');
    test.done();
};

exports['Get template dir'] = function(test) {
    test.equal(typeof trinteJade.getTemplatesDir, 'function');
    test.equal(typeof trinteJade.getTemplatesDir(), 'string');
    test.done();
};

exports['Get path to template'] = function(test) {
    test.equal(typeof trinteJade.getTemplate, 'function');
    test.equal(typeof trinteJade.getTemplate(), 'string');
    test.done();
};

exports['Get template source'] = function(test) {
    test.equal(typeof trinteJade.getTemplateText, 'function');
    test.equal(typeof trinteJade.getTemplateText('index', 'backend'), 'string');
    test.done();
};