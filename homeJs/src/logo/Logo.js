var logo=logo||{};
logo.Logo=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(logo.Logo,F2xContainer);
logo.Logo.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	Flash2x.getMediaByName("logo","music").play(0,1);
	var _d0=new logo.F2xAuto_0();
	_d0.name="logo_mc";
	s.logo_mc=_d0;
	Flash2x.d(_d0,{x:228,y:614.1,a:0.5,b:0.5});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
