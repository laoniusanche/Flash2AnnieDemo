var dstage = dstage || {};
dstage.Dstage = function () {
    var s = this;
    F2xMovieClip.call(s);
    s.initUI();
    var isFirst = true;
    s.addEventListener(annie.Event.ADD_TO_STAGE, initStage);
    /**
     * 初始化
     * @param e
     */
    function initStage(e) {
        s.removeEventListener(annie.Event.ADD_TO_STAGE, initStage);
        s.back_btn.addEventListener(annie.MouseEvent.CLICK, backHomeHandler);
        s.tip_mc.addEventListener(annie.MouseEvent.CLICK, hideTipLayerHandler);
        s.autoResize_btn.addEventListener(annie.MouseEvent.CLICK, setAutoResizeHandler);
        s.autoSteering_btn.addEventListener(annie.MouseEvent.CLICK, setAutoSteeringHandler);
        s.divHeight_btn.addEventListener(annie.MouseEvent.CLICK, showDivHeightHandler);
        s.divWidth_btn.addEventListener(annie.MouseEvent.CLICK, showDivWidthHandler);
        s.rootdiv_btn.addEventListener(annie.MouseEvent.CLICK, showRootDivHandler);
        s.pause_btn.addEventListener(annie.MouseEvent.CLICK, pauseDrawHandler);
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dstage';
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
     * 当设备尺寸更新，或者旋转后是否自动更新尺寸。
     * 设置autoResize值
     * @param e
     */
    function setAutoResizeHandler(e) {
        if (!s.stage.autoResize) {
            s.stage.autoResize = true;
        } else {
            s.stage.autoResize = false;
        }
        s.output_txt.text = 'autoResize:' + s.stage.autoResize + ';  ' + 'autoSteering:' + s.stage.autoSteering;
        if (isFirst) {
            alert('请旋转手机,观看效果');
        }
    }

    /**
     * 当设备尺寸更新，或者旋转后是否自动更新方向 默认不开启
     * 设置AutoSteering值
     * @param e
     */
    function setAutoSteeringHandler(e) {
        if (!s.stage.autoSteering) {
            s.stage.autoSteering = true;
        } else {
            s.stage.autoSteering = false;
        }
        s.output_txt.text = 'autoResize:' + s.stage.autoResize + ';  ' + 'autoSteering:' + s.stage.autoSteering;
        if (isFirst) {
            alert('请旋转手机,观看效果');
        }
    }

    /**
     * 舞台在当前设备中的真实高度
     * @param e
     */
    function showDivHeightHandler(e) {
        s.output_txt.text = 'divHeight:' + s.stage.divHeight + 'px';
    }

    /**
     * 舞台在当前设备中的真实宽度
     * @param e
     */
    function showDivWidthHandler(e) {
        s.output_txt.text = 'divWidth:' + s.stage.divWidth + 'px';
    }

    /**
     *
     * @param e
     */
    function showRootDivHandler(e) {
        //trace(s.stage.rootDiv);
        s.output_txt.text = '<div id="' + s.stage.rootDiv.id + '" ></div>';
    }

    /**
     * 如果值为true则暂停更新当前显示对象及所有子对象
     * @param e
     */
    function pauseDrawHandler(e) {
        if (!s.stage.pause) {
            s.stage.pause = true;
        } else {
            s.stage.pause = false;
        }
        //s.output_txt.text = 'stageDrawStatus:' + s.stage.pause;
    }
};
F2xExtend(dstage.Dstage, F2xMovieClip);
dstage.Dstage.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	var _d0=new dstage.F2xAuto_40();
	_d0.name="back_btn";
	s.back_btn=_d0;
	var _d1=new dstage.F2xAuto_36();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"output:",21,"#FFCC00","Arial",2,2,389.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	var _d3=new dstage.F2xAuto_33();
	_d3.name="pause_btn";
	s.pause_btn=_d3;
	var _d4=new dstage.F2xAuto_34();
	_d4.name="rootdiv_btn";
	s.rootdiv_btn=_d4;
	var _d5=new dstage.F2xAuto_32();
	_d5.name="divWidth_btn";
	s.divWidth_btn=_d5;
	var _d6=new dstage.F2xAuto_31();
	_d6.name="divHeight_btn";
	s.divHeight_btn=_d6;
	var _d7=new dstage.F2xAuto_30();
	_d7.name="autoSteering_btn";
	s.autoSteering_btn=_d7;
	var _d8=new dstage.F2xAuto_29();
	_d8.name="autoResize_btn";
	s.autoResize_btn=_d8;
	var _d9=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	var _d10=new dstage.F2xAuto_38();
	var _d11=new dstage.F2xAuto_39();
	var _d12=new dstage.F2xAuto_72();
	s.a().b(150).c(_d0,{x:35.3,y:67.95});
	s.a().b(150).c(_d1);
	s.a().b(150).c(_d2,{x:179.05,y:191.75});
	s.a().b(150).c(_d3,{x:93.5,y:507.55});
	s.a().b(150).c(_d4,{x:93.5,y:441.45});
	s.a().b(150).c(_d5,{x:93.5,y:379.4});
	s.a().b(150).c(_d6,{x:93.5,y:311.35});
	s.a().b(150).c(_d7,{x:93.5,y:243.3});
	s.a().b(150).c(_d8,{x:93.5,y:175.25});
	s.a().b(150).c(_d9,{x:180.95,y:155});
	s.a().b(150).c(_d10,{b:1.2857,o:0.8008});
	s.a().b(150).c(_d11,{x:134.1,y:553.4,a:0.6,b:0.6});
	s.a().b(150).c(_d12);
	s.as(function(){this.stop();}.bind(this),149);
	//f2x_auto_created_init_end

};
