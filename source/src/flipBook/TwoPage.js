var flipBook=flipBook||{};
flipBook.TwoPage=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(flipBook.TwoPage,F2xContainer);
flipBook.TwoPage.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.t(0,decodeURI("%E7%AC%AC0%E9%A1%B5"),36,"#FF0000","Arial",2,2,92.2,50.4,38,"left",false,false,"single",false);
	_d0.name="page_txt";
	s.page_txt=_d0;
	Flash2x.d(_d0,{x:101,y:276.9});
	var _d1=Flash2x.b("flipBook","F2xAuto_21");
	Flash2x.d(_d1,{x:-6.05});
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
