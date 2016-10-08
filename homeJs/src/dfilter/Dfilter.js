var dfilter=dfilter||{};
dfilter.Dfilter=function(){
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

        s.blur_btn.addEventListener(annie.MouseEvent.CLICK, blurHandler);
        s.color_btn.addEventListener(annie.MouseEvent.CLICK, colorHandler);

    }
    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dfilter';
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
     * 模糊滤镜
     * @param e
     */
    function blurHandler(e){
        var bFilter=new annie.BlurFilter(100,100,20);
        s.logo_mc.filters=[bFilter];
        s.output_txt.text ='logo 模糊了';
    }

    /**
     * 颜色滤镜
     * @param e
     */
    function colorHandler(e){
        var cFilter=new annie.ColorFilter(104,126,148,20,201,168,138,20);
        s.logo_mc.filters=[cFilter];
        s.output_txt.text ='logo 变成颜色块了'
    }
};
F2xExtend(dfilter.Dfilter,F2xContainer);
dfilter.Dfilter.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new dfilter.F2xAuto_10();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:118});
	var _d1=new dfilter.F2xAuto_7();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"output:",21,"#FFCC00","Arial",2,2,384.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:188.05,y:205.75});
	var _d3=new dfilter.F2xAuto_5();
	_d3.name="color_btn";
	s.color_btn=_d3;
	Flash2x.d(_d3,{x:107.5,y:304.25});
	var _d4=new dfilter.F2xAuto_4();
	_d4.name="blur_btn";
	s.blur_btn=_d4;
	Flash2x.d(_d4,{x:107.5,y:221.25});
	var _d5=new dfilter.F2xAuto_3();
	_d5.name="logo_mc";
	s.logo_mc=_d5;
	Flash2x.d(_d5,{x:126,y:514.15});
	var _d6=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d6,{x:188.05,y:151});
	var _d7=new dfilter.F2xAuto_9();
	Flash2x.d(_d7,{o:0.8008});
	var _d8=new dfilter.F2xAuto_12();
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
