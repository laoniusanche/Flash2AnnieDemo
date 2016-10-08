var dtween=dtween||{};
dtween.Dtween=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
    //yours_code_here
    var myTween,
        logoInitX;
    s.addEventListener(annie.Event.ADD_TO_STAGE, initStage, false);
    /**
     * 初始化
     * @param e
     */
    function initStage(e) {
        s.removeEventListener(annie.Event.ADD_TO_STAGE, initStage);
        s.back_btn.addEventListener(annie.MouseEvent.CLICK, backHomeHandler);
        s.tip_mc.addEventListener('onMouseDown', hideTipLayerHandler);

        s.to_btn.addEventListener('onMouseDown', toTweenHandler);
        s.from_btn.addEventListener('onMouseDown', fromTweenHandler);
        s.kill_btn.addEventListener('onMouseDown', killTweenHandler);
        s.killall_btn.addEventListener('onMouseDown', killallTweenHandler);
        logoInitX= s.logo_mc.x;
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dtween';
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
     * Tween.to
     * ease缓动类型：backIn backInOut backOut.....详细列表请自行查看Tween api
     * @param e
     */
    function toTweenHandler(e) {
        if (!myTween) {
            myTween = annie.Tween;
        }
        s.logo_mc.x=logoInitX;
        myTween.to(s.logo_mc, .4, {x: 400, ease: annie.Tween.backInOut});
        s.output_txt.text = 'Tween.to';
    }

    /**
     * Tween.form
     * 从某个位置移动到当前位置
     * @param e
     */
    function fromTweenHandler(e) {
        if (!myTween) {
            myTween = annie.Tween;
        }
        s.logo_mc.x=logoInitX;
        myTween.from(s.logo_mc, .4, {x: 400, ease: annie.Tween.backInOut});
        s.output_txt.text = 'Tween.from';
    }

    /**
     * 移除Tween
     * @param e
     */
    function killTweenHandler(e) {
        annie.Tween.kill(myTween);
        myTween = null;
        s.output_txt.text = 'Tween.kill complete!';
    }

    /**
     * 移除所有Tween
     * @param e
     */
    function killallTweenHandler(e) {
        annie.Tween.killAll();
        myTween = null;
        s.output_txt.text = 'Tween.killAll complete!';
    }
};
F2xExtend(dtween.Dtween,F2xContainer);
dtween.Dtween.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new dtween.F2xAuto_13();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:75.95});
	var _d1=new dtween.F2xAuto_10();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"output:",21,"#FFCC00","Arial",2,2,384.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:188.05,y:163.75});
	var _d3=new dtween.F2xAuto_8();
	_d3.name="killall_btn";
	s.killall_btn=_d3;
	Flash2x.d(_d3,{x:86.7,y:391.3});
	var _d4=new dtween.F2xAuto_7();
	_d4.name="kill_btn";
	s.kill_btn=_d4;
	Flash2x.d(_d4,{x:90.5,y:321.5});
	var _d5=new dtween.F2xAuto_5();
	_d5.name="to_btn";
	s.to_btn=_d5;
	Flash2x.d(_d5,{x:90.5,y:182});
	var _d6=new dtween.F2xAuto_4();
	_d6.name="from_btn";
	s.from_btn=_d6;
	Flash2x.d(_d6,{x:90.5,y:251.75});
	var _d7=new dtween.F2xAuto_3();
	_d7.name="logo_mc";
	s.logo_mc=_d7;
	Flash2x.d(_d7,{x:43.95,y:614.15,a:0.5,b:0.5});
	var _d8=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d8,{x:188.05,y:109});
	var _d9=new dtween.F2xAuto_12();
	Flash2x.d(_d9,{o:0.8008});
	var _d10=new dtween.F2xAuto_15();
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
