var dglobaldispatcher = dglobaldispatcher || {};
dglobaldispatcher.Dglobaldispatcher = function () {
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
        s.tip_mc.addEventListener('onMouseDown', hideTipLayerHandler);

        globalDispatcher.addEventListener('onDispatcherBtnEvent', doHandler)
        s.dispatcher_btn.addEventListener('onMouseDown', dispacherHandler);
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dglobaldispatcher';
        globalDispatcher.dispatchEvent(backHomeEvent);
    }

    /**
     * 隐藏提示浮层
     * @param e
     */
    function hideTipLayerHandler(e) {
        s.tip_mc.removeEventListener('onMouseDown', hideTipLayerHandler);
        s.tip_mc.visible = false;
    }

    function dispacherHandler(e) {
        globalDispatcher.dispatchEvent('onDispatcherBtnEvent');
    }

    function doHandler(e) {
        trace('onDispatcherBtnEvent事件，触发了！');
        s.output_txt.text = 'onDispatcherBtnEvent事件，触发了！ logo透明度发生了变化';
        s.logo_mc.alpha = .5;
    }
};
F2xExtend(dglobaldispatcher.Dglobaldispatcher, F2xContainer);
dglobaldispatcher.Dglobaldispatcher.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	var _d0=new dglobaldispatcher.F2xAuto_14();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:97.95});
	var _d1=new dglobaldispatcher.F2xAuto_11();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"output:",21,"#FFCC00","Arial",2,2,384.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:208.05,y:205.75});
	var _d3=new dglobaldispatcher.F2xAuto_16();
	_d3.name="dispatcher_btn";
	s.dispatcher_btn=_d3;
	Flash2x.d(_d3,{x:117.5,y:221.25});
	var _d4=new dglobaldispatcher.F2xAuto_15();
	_d4.name="logo_mc";
	s.logo_mc=_d4;
	Flash2x.d(_d4,{x:126,y:514.15});
	var _d5=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d5,{x:208.05,y:151});
	var _d6=new dglobaldispatcher.F2xAuto_22();
	Flash2x.d(_d6,{o:0.8008});
	var _d7=new dglobaldispatcher.F2xAuto_24();
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
