var stage=stage||{};
stage.Stage=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(stage.Stage,F2xContainer);
stage.Stage.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new stage.F2xAuto_0();
	_d0.name="check1_mc";
	s.check1_mc=_d0;
	Flash2x.d(_d0,{x:296.9,y:496.9});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
