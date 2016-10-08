var home=home||{};
home.Home=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	s.addEventListener(annie.Event.ADD_TO_STAGE, function (e) {
		s.title_mc.y = s.stage.viewRect.y;
	});
	s.title_mc.mouseChildren=false;
};
F2xExtend(home.Home,F2xContainer);
home.Home.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d1=new home.F2xAuto_1();
	_d1.name="title_mc";
	s.title_mc=_d1;
	var _d0=new home.Content();
	_d0.name="con_mc";
	s.con_mc=_d0;
	Flash2x.d(_d0,{y:114});
	s.addChild(_d0);
	s.addChild(_d1);
	//f2x_auto_created_init_end
	
};
