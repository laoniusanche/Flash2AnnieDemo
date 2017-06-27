var input=input||{};
input.F2xAuto_1=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(input.F2xAuto_1,F2xMovieClip);
input.F2xAuto_1.prototype.initUI=function(){
	var s = this;
	var _d0=new input.F2xAuto_0();
	s.a().b(1).c(_d0).b(3).c(_d0,null,[0,0,0,0,1,0,255,0,0]);
};
input.F2xAuto_0=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(input.F2xAuto_0,F2xContainer);
input.F2xAuto_0.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("input","F2xAuto_2");
	s.addChild(_d0);
};
