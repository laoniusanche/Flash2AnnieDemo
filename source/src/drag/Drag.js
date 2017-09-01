var drag=drag||{};
drag.Drag=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
    //限制范围
    // s.test_mc.startDrag(true,new annie.Rectangle(200,200,200,200));
    //跟随中心点
    s.test_mc.startDrag(true);
    //不跟中心点
    // s.test_mc.startDrag();
};
F2xExtend(drag.Drag,F2xContainer);
drag.Drag.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new drag.F2xAuto_0();
	_d0.name="test_mc";
	s.test_mc=_d0;
	Flash2x.d(_d0,{x:320,y:520});
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
