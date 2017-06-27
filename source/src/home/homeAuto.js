var home=home||{};
home.F2xAuto_4=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(home.F2xAuto_4,F2xContainer);
home.F2xAuto_4.prototype.initUI=function(){
	var s = this;
	var _d0=new home.DownBtn();
	Flash2x.d(_d0,{x:267.2,y:58.8});
	var _d2=Flash2x.t(0,decodeURI("Flash2Annie%E5%BC%95%E6%93%8E%E7%A4%BA%E4%BE%8B"),32,"#000000","Arial",2,2,406.45,44.8,34,"center",false,false,"multiline",false);
	Flash2x.d(_d2,{x:111.8,y:10});
	var _d1=Flash2x.s({type:0,data:"Egx/AAeIAAg6MBj+AAAIAAA6g"},{type:0,color:"#00CC66"},null);
	Flash2x.d(_d1,{x:320,y:101});
	s.addChild(_d1);
	s.addChild(_d2);
	s.addChild(_d0);
};
