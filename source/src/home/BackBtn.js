var home=home||{};
home.BackBtn=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(home.BackBtn,F2xContainer);
home.BackBtn.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.b("home","F2xAuto_4");
	Flash2x.d(_d0,{y:10});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
