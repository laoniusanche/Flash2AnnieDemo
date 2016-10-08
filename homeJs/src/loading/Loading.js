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
	var _d0=Flash2x.t(0,"100%",24,"#FFFFFF","Times New Roman",2,2,73.5,26.6,26,"center",false,false,"single");
	_d0.name="per_txt";
	s.per_txt=_d0;
	Flash2x.d(_d0,{x:281.3,y:542.6});
	var _d1=new loading.F2xAuto_0();
	Flash2x.d(_d1,{x:200,y:276.05,a:0.6,b:0.6});
	var _d2=Flash2x.s({type:0,data:"Egx/BRQMAAAiifMBj+AAAMAAACifg"},{type:0,color:"rgba(51,51,51,0.949)"},null);
	Flash2x.d(_d2,{x:320,y:520});
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
