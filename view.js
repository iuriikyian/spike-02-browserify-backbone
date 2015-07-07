var Backbone = require('backbone');
var templates = require('./templates.html');

module.exports = Backbone.View.extend({
	className : 'test-view',
	template : templates.view,

	render : function(){
		var $el = $(this.el);
		$el.empty();
		$el.append(this.template({}));
		return this;
	},
});