var home=home||{};
home.F2xAuto_1=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(home.F2xAuto_1,F2xContainer);
home.F2xAuto_1.prototype.initUI=function(){
	var s = this;
	var _d2=Flash2x.t(0,"注:所有视觉都在Flash中完成,请用手机浏览",20,"#666666","Arial",2,2,423,28,22,"center",false,false,"single");
	Flash2x.d(_d2,{x:104.95,y:60.8});
	var _d1=Flash2x.t(0,"Flash2Annie引擎示例",32,"#000000","Arial",2,2,406.4,44.8,34,"center",false,false,"single");
	Flash2x.d(_d1,{x:111.8,y:10});
	var _d0=Flash2x.s({type:0,data:"Egx/AAeIAAg6MBj+AAAIAAA6g"},{type:0,color:"#00CC66"},null);
	Flash2x.d(_d0,{x:320,y:101});
	s.addChild(_d0);
	s.addChild(_d1);
	s.addChild(_d2);
};
