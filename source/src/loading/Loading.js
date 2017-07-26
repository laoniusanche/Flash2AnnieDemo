var loading=loading||{};
loading.Loading=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(loading.Loading,F2xContainer);
loading.Loading.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=Flash2x.t(0,decodeURI("100%25"),24,"#000000","Times New Roman",2,2,73.5,26.6,26,"center",false,false,"single",true);
	_d0.name="per_txt";
	s.per_txt=_d0;
	Flash2x.d(_d0,{x:281.3,y:504.7});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
