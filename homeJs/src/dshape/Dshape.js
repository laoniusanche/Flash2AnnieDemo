var dshape = dshape || {};
dshape.Dshape = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    //yours_code_here
    var shareManager = new annie.Shape();
    s.addEventListener(annie.Event.ADD_TO_STAGE, initStage);
    /**
     * 初始化
     * @param e
     */
    function initStage(e) {
        s.removeEventListener(annie.Event.ADD_TO_STAGE, initStage);
        s.back_btn.addEventListener(annie.MouseEvent.CLICK, backHomeHandler);
        s.tip_mc.addEventListener('onMouseDown', hideTipLayerHandler);

        s.arc_btn.addEventListener('onMouseDown', arcHandler);
        s.circle_btn.addEventListener('onMouseDown', circleHandler);
        s.bezierCurveTo_btn.addEventListener('onMouseDown', bezierHandler);
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dshape';
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
     * 画弧形
     * @param e
     */
    function arcHandler(e) {
        shareManager.beginStroke('#000', 1, 1);
        shareManager.drawArc(200, 500, 40, 0, 120);
        shareManager.endStroke();
        s.addChild(shareManager);
        s.output_txt.text = '弧线';
    }

    /**
     * 画圆形
     * @param e
     */
    function circleHandler(e) {
        shareManager.beginFill('#000');
        shareManager.drawCircle(360, 500, 40);
        shareManager.endFill();
        s.addChild(shareManager);
        s.output_txt.text = '圆形';
    }

    /**
     * 画三次贝赛尔曲线
     * @param e
     */
    function bezierHandler(e) {
        shareManager.beginStroke('#000', 1, 1)
        shareManager.bezierCurveTo(200, 600, 340, 640, 400, 580);
        shareManager.endStroke();
        s.addChild(shareManager);
        s.output_txt.text = '三次贝赛尔曲线';
    }
};
F2xExtend(dshape.Dshape, F2xContainer);
dshape.Dshape.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	var _d0=new dshape.F2xAuto_10();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:97.95});
	var _d1=new dshape.F2xAuto_7();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"输出：",21,"#FFCC00","Arial",2,2,389.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:179.05,y:185.75});
	var _d3=new dshape.F2xAuto_4();
	_d3.name="bezierCurveTo_btn";
	s.bezierCurveTo_btn=_d3;
	Flash2x.d(_d3,{x:93.5,y:356.35});
	var _d4=new dshape.F2xAuto_5();
	_d4.name="circle_btn";
	s.circle_btn=_d4;
	Flash2x.d(_d4,{x:93.5,y:278.8});
	var _d5=new dshape.F2xAuto_3();
	_d5.name="arc_btn";
	s.arc_btn=_d5;
	Flash2x.d(_d5,{x:93.5,y:201.25});
	var _d6=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d6,{x:180.95,y:131});
	var _d7=new dshape.F2xAuto_9();
	Flash2x.d(_d7,{o:0.8008});
	var _d8=new dshape.F2xAuto_12();
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
