var colorFilter=colorFilter||{};
colorFilter.logo=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(colorFilter.logo,F2xContainer);
colorFilter.logo.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("colorFilter","Test");
	s.addChild(_d0);
};
