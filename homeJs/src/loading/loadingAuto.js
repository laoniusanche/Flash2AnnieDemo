var loading=loading||{};
loading.F2xAuto_0=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(loading.F2xAuto_0,F2xContainer);
loading.F2xAuto_0.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("loading","Flash2xLogo");
	s.addChild(_d0);
};
