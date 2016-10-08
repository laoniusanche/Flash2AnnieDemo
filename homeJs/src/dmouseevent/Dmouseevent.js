var dmouseevent = dmouseevent || {};
dmouseevent.Dmouseevent = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    //yours_code_here
    s.addEventListener(annie.Event.ADD_TO_STAGE, initStage, false);
    /**
     * 初始化
     * @param e
     */
    function initStage(e) {
        s.removeEventListener(annie.Event.ADD_TO_STAGE, initStage);
        s.back_btn.addEventListener(annie.MouseEvent.CLICK, backHomeHandler);
        s.tip_mc.addEventListener('onMouseDown', hideTipLayerHandler);

        s.logo_mc.addEventListener('onMouseDown', mouseEventHandler);
        s.logo_mc.addEventListener('onMouseClick', mouseEventHandler);
        s.logo_mc.addEventListener('onMouseOver', mouseEventHandler);
        s.logo_mc.addEventListener('onMouseOut', mouseEventHandler);
        s.logo_mc.addEventListener('onMouseUp', mouseEventHandler);
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dInputText';
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

    /**
     * 鼠标事件
     * @param e
     */
    function mouseEventHandler(e) {
        s.output_txt.text = 'event:' + e.type + '\n' + 'target:' + e.currentTarget.name + '\n' + 'stageX:' + e.stageX + '\n' + 'stageY:' + e.stageY;
        //var type = e.type;
        //switch (type) {
        //    case 'onMouseDown':
        //        break;
        //    case 'click':
        //        break;
        //    case 'onMouseOver':
        //        break;
        //    case 'onMouseOut':
        //        break;
        //    case 'onMouseMove':
        //        break;
        //    default :
        //        break;
        //}
    }
};
F2xExtend(dmouseevent.Dmouseevent, F2xContainer);
dmouseevent.Dmouseevent.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	var _d0=new dmouseevent.F2xAuto_13();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:91.95});
	var _d1=new dmouseevent.F2xAuto_10();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"output:",21,"#FFCC00","Arial",2,2,384.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:128.05,y:219.75});
	var _d3=new dmouseevent.F2xAuto_3();
	_d3.name="logo_mc";
	s.logo_mc=_d3;
	Flash2x.d(_d3,{x:126,y:514.15});
	var _d4=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d4,{x:128.05,y:165});
	var _d5=new dmouseevent.F2xAuto_12();
	Flash2x.d(_d5,{o:0.8008});
	var _d6=new dmouseevent.F2xAuto_15();
	s.addChild(_d6);
	s.addChild(_d5);
	s.addChild(_d4);
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end

};
