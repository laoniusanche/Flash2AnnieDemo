var drag=drag||{};
drag.F2xAuto_0=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(drag.F2xAuto_0,F2xContainer);
drag.F2xAuto_0.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("drag","F2xAuto_1");
	Flash2x.d(_d0,{x:-152.5,y:-170});
	s.addChild(_d0);
};
