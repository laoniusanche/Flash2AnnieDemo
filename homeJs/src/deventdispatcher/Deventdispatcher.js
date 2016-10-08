var deventdispatcher=deventdispatcher||{};
deventdispatcher.Deventdispatcher=function(){
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

        s.add_btn.addEventListener(annie.MouseEvent.CLICK, addHandler);
        s.remove_btn.addEventListener(annie.MouseEvent.CLICK, removeHandler);
        s.dispact_btn.addEventListener(annie.MouseEvent.CLICK, dispacherHandler);
        s.has_btn.addEventListener(annie.MouseEvent.CLICK, hasHandler);
        s.removeall_btn.addEventListener(annie.MouseEvent.CLICK, removeallHandler);
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'deventdispatcher';
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

    function addHandler(e) {
        s.logo_mc.addEventListener(annie.MouseEvent.CLICK, logoDownHandler);
        s.output_txt.text = 'logo  addEventListener completet!';
    }

    function removeHandler(e) {
        s.logo_mc.removeEventListener(annie.MouseEvent.CLICK, logoDownHandler);
        s.output_txt.text = 'logo  removeEventListener completet!';
    }

    function dispacherHandler(e) {
        if (s.logo_mc.hasEventListener(annie.MouseEvent.CLICK)) {
            s.logo_mc.dispatchEvent(annie.MouseEvent.CLICK);
            s.output_txt.text = 'logo  dispatchEvent completet!';
        } else {
            s.output_txt.text = 'logo  havenotEventListener';
        }
    }

    function hasHandler(e) {
        var isHas = s.logo_mc.hasEventListener(annie.MouseEvent.CLICK);
        trace(isHas);
        s.output_txt.text = isHas == 0 ? 'logo  havenotEventListener' : 'logo  hasEventListener';
        //s.output_txt.text = 'logo  dispatchEvent completet!';
    }

    function removeallHandler(e) {
        s.logo_mc.removeAllEventListener();
        s.output_txt.text = 'logo  removeAllEventListener completet!';
    }

    /**
     * 鼠标事件
     * @param e
     */
    function logoDownHandler(e) {

    }
};
F2xExtend(deventdispatcher.Deventdispatcher,F2xContainer);
deventdispatcher.Deventdispatcher.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new deventdispatcher.F2xAuto_13();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:75.95});
	var _d1=new deventdispatcher.F2xAuto_10();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"output:",21,"#FFCC00","Arial",2,2,384.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:208.05,y:163.75});
	var _d3=new deventdispatcher.F2xAuto_8();
	_d3.name="removeall_btn";
	s.removeall_btn=_d3;
	Flash2x.d(_d3,{x:117.5,y:444.3});
	var _d4=new deventdispatcher.F2xAuto_7();
	_d4.name="has_btn";
	s.has_btn=_d4;
	Flash2x.d(_d4,{x:117.5,y:376.3});
	var _d5=new deventdispatcher.F2xAuto_6();
	_d5.name="dispact_btn";
	s.dispact_btn=_d5;
	Flash2x.d(_d5,{x:117.5,y:312.25});
	var _d6=new deventdispatcher.F2xAuto_5();
	_d6.name="remove_btn";
	s.remove_btn=_d6;
	Flash2x.d(_d6,{x:117.5,y:243.25});
	var _d7=new deventdispatcher.F2xAuto_4();
	_d7.name="add_btn";
	s.add_btn=_d7;
	Flash2x.d(_d7,{x:117.5,y:179.25});
	var _d8=new deventdispatcher.F2xAuto_3();
	_d8.name="logo_mc";
	s.logo_mc=_d8;
	Flash2x.d(_d8,{x:126,y:514.15});
	var _d9=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d9,{x:208.05,y:109});
	var _d10=new deventdispatcher.F2xAuto_12();
	Flash2x.d(_d10,{b:1.1666,o:0.8008});
	var _d11=new deventdispatcher.F2xAuto_15();
	s.addChild(_d11);
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
