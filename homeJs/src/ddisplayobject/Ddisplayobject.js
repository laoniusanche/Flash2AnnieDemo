var ddisplayobject=ddisplayobject||{};
ddisplayobject.Ddisplayobject=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
    //yours_code_here
    s.addEventListener(annie.Event.ADD_TO_STAGE, initStage);
    /**
     * 初始化
     * @param e
     */
    function initStage(e) {
        s.removeEventListener(annie.Event.ADD_TO_STAGE, initStage);
        s.back_btn.addEventListener(annie.MouseEvent.CLICK, backHomeHandler);
        s.tip_mc.addEventListener(annie.MouseEvent.CLICK, hideTipLayerHandler);

        s.getBounds_btn.addEventListener(annie.MouseEvent.CLICK, getBoundsHandler);
        s.getWH_btn.addEventListener(annie.MouseEvent.CLICK, getWHHandler);
        s.gToL_btn.addEventListener(annie.MouseEvent.CLICK, gToLHandler);
        s.lToG_btn.addEventListener(annie.MouseEvent.CLICK, lToGHandler);
    }
    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'ddisplayobject';
        globalDispatcher.dispatchEvent(backHomeEvent);
    }

    /**
     * 隐藏提示浮层
     * @param e
     */
    function hideTipLayerHandler(e) {
        s.tip_mc.removeEventListener(annie.MouseEvent.CLICK, hideTipLayerHandler);
        s.tip_mc.visible = false;
    }

    /**
     * 获取对象的自身的没有任何形变的原始姿态下的原点坐标及宽高,抽像方法
     * @param e
     */
    function getBoundsHandler(e) {
        var rect = s.logo_mc.getBounds();
        s.output_txt.text = 'logo_Bounds:  x:'+rect.x+',y:'+rect.y+',width:'+rect.width+',height:'+rect.height+'';
    }

    function getWHHandler(e) {
        var h = s.logo_mc.getWH().height,
            w = s.logo_mc.getWH().width;
        s.output_txt.text = 'logo_WH:  width:' + w + ',height:' + h + '';
    }

    function gToLHandler(e) {
        var localPoint = s.logo_mc.globalToLocal(new annie.Point(s.logo_mc.x, s.logo_mc.y));
        s.output_txt.text = 'logo_localPoint:  point:  x:'+localPoint.x+',y:'+localPoint.y+'';
    }

    function lToGHandler(e) {
        var globalPoint = s.logo_mc.localToGlobal(new annie.Point(s.logo_mc.x, s.logo_mc.y));
        s.output_txt.text = 'logo_globalPoint:  point:  x:'+globalPoint.x+',y:'+globalPoint.y+'';
    }
};
F2xExtend(ddisplayobject.Ddisplayobject,F2xContainer);
ddisplayobject.Ddisplayobject.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new ddisplayobject.F2xAuto_12();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:71.95});
	var _d1=new ddisplayobject.F2xAuto_9();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"输出：",21,"#FFCC00","Arial",2,2,389.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:179.05,y:159.75});
	var _d3=new ddisplayobject.F2xAuto_6();
	_d3.name="lToG_btn";
	s.lToG_btn=_d3;
	Flash2x.d(_d3,{x:73.5,y:433.4});
	var _d4=new ddisplayobject.F2xAuto_5();
	_d4.name="gToL_btn";
	s.gToL_btn=_d4;
	Flash2x.d(_d4,{x:83.5,y:350.35});
	var _d5=new ddisplayobject.F2xAuto_7();
	_d5.name="getWH_btn";
	s.getWH_btn=_d5;
	Flash2x.d(_d5,{x:93.5,y:262.8});
	var _d6=new ddisplayobject.F2xAuto_4();
	_d6.name="getBounds_btn";
	s.getBounds_btn=_d6;
	Flash2x.d(_d6,{x:73.5,y:175.25});
	var _d7=new ddisplayobject.F2xAuto_3();
	_d7.name="logo_mc";
	s.logo_mc=_d7;
	Flash2x.d(_d7,{x:126,y:514.15});
	var _d8=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d8,{x:180.95,y:105});
	var _d9=new ddisplayobject.F2xAuto_11();
	Flash2x.d(_d9,{b:1.1239,o:0.8008});
	var _d10=new ddisplayobject.F2xAuto_14();
	s.addChild(_d10);
	s.addChild(_d9);
	s.addChild(_d8);
	s.addChild(_d7);
	s.addChild(_d6);
	s.addChild(_d5);
	s.addChild(_d4);
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
