var Cat = function(name, src) {
	var self = this;
	self.name = ko.observable(name);
	self.src = ko.observable(src);
	self.clicks = ko.observable(0);
	self.title = ko.pureComputed(function(){
		if (self.clicks() < 10) {
			return 'Infant';
		} else if (self.clicks() < 20) {
			return 'Junior Cat';
		} else {
			return 'Super cat';
		}
	});
};

var cats = [
	new Cat('Cat wrap', 'https://i.ytimg.com/vi/tntOCGkgt98/default.jpg'),
	new Cat('Mini cat', 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg'),
];

var ViewModel = function() {
	var self = this;
	self.currentCat = ko.observable(new Cat());
	self.cats = ko.observableArray(cats);
	self.click = function() {
		self.currentCat().clicks(self.currentCat().clicks()+1);
	};
	self.selectCat = function(cat) {
		console.log(cat);
		self.currentCat(cat);
	};
};