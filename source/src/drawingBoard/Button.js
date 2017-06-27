var drawingBoard=drawingBoard||{};
drawingBoard.Button=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
};
F2xExtend(drawingBoard.Button,F2xContainer);
drawingBoard.Button.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d1=Flash2x.t(0,decodeURI("title"),24,"#FFFFFF","Arial",2,2,176,26.85,21.5,"center",false,false,"single",false);
	_d1.name="title_txt";
	s.title_txt=_d1;
	Flash2x.d(_d1,{x:10,y:6.4});
	var _d0=Flash2x.s({type:0,data:"AvnDcIAAm3IfOAAIAAG3g"},{type:0,color:"#666666"},null);
	Flash2x.d(_d0,{x:100,y:22});
	s.addChild(_d0);
	s.addChild(_d1);
	//f2x_auto_created_init_end
	
};
