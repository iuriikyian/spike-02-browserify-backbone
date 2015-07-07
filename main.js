var $ = require('zepto'),
	View = require('./view');

$(function(){
	var v = new View({});
	$('.content').append(v.render().el);
});