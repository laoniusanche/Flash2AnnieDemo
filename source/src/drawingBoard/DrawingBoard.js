var drawingBoard=drawingBoard||{};
drawingBoard.DrawingBoard=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	var db=new annieUI.DrawingBoard(500,500,"#000000");
	db.drawColor="#ff0000";
	db.drawRadius=10;
	s.addChild(db);
	db.x=60;
	db.y=200;
	s.canel_btn.title_txt.text="撤消";
	s.canel_btn.mouseChildren=false;
	s.canel_btn.addEventListener(annie.MouseEvent.CLICK,function (e) {
		db.cancel(1);
    })
};
F2xExtend(drawingBoard.DrawingBoard,F2xContainer);
drawingBoard.DrawingBoard.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d1=new drawingBoard.Button();
	_d1.name="canel_btn";
	s.canel_btn=_d1;
	Flash2x.d(_d1,{x:220,y:880.95});
	var _d0=Flash2x.t(0,decodeURI("%E7%94%BB%E6%9D%BF%E7%BB%84%E4%BB%B6%EF%BC%8C%E6%94%AF%E6%8C%81%E6%92%A4%E9%94%80%E5%9B%9E%E9%80%80"),24,"#333333","Arial",2,2,520.4,26.85,26,"center",false,false,"multiline",false);
	Flash2x.d(_d0,{x:57.8,y:943});
	s.addChild(_d0);
	s.addChild(_d1);
	//f2x_auto_created_init_end
	
};
