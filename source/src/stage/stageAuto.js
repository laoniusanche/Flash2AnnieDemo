var stage=stage||{};
stage.F2xAuto_0=function(){
	var s = this;
	F2xMovieClip.call(s);
	s.initUI();
};
F2xExtend(stage.F2xAuto_0,F2xMovieClip);
stage.F2xAuto_0.prototype.initUI=function(){
	var s = this;
	var _d0=Flash2x.b("stage","F2xAuto_2");
	var _d1=Flash2x.b("stage","F2xAuto_1");
	s.a().b(2);
	s.a().b(1).b(1).c(_d0,{x:12.8,y:14.15});
	s.a().b(2).c(_d1);
	s.as(function(){this.stop();}.bind(this),0);
};
