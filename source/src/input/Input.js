var input=input||{};
input.Input=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(input.Input,F2xContainer);
input.Input.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d2=new input.F2xAuto_1();
	_d2.initButton();
	_d2.name="sure_btn";
	s.sure_btn=_d2;
	Flash2x.d(_d2,{x:254,y:498.7});
	_d2.initButton();
	var _d1=Flash2x.t(2,decodeURI("%E8%AF%B7%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81"),18,"#FF0000","Arial",2,2,213.95,25.2,20,"center",false,false,"password",false);
	_d1.name="pw_txt";
	s.pw_txt=_d1;
	Flash2x.d(_d1,{x:205,y:436.7});
	var _d0=Flash2x.t(2,decodeURI("%E8%AF%B7%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D"),18,"#FF0000","Arial",2,2,214,25.2,20,"center",false,false,"single",false);
	_d0.name="userName_txt";
	s.userName_txt=_d0;
	Flash2x.d(_d0,{x:205,y:380.7});
	s.addChild(_d0);
	s.addChild(_d1);
	s.addChild(_d2);
	//f2x_auto_created_init_end
	
};
