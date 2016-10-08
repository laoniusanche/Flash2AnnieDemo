var dmovieclip = dmovieclip || {};
dmovieclip.Dmovieclip = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    //self_init
    s.addEventListener(annie.Event.ADD_TO_STAGE, initStage);
    /**
     * 初始化
     * @param e
     */
    function initStage(e) {
        s.removeEventListener(annie.Event.ADD_TO_STAGE, initStage);
        s.back_btn.addEventListener(annie.MouseEvent.CLICK, backHomeHandler);
        s.tip_mc.addEventListener('onMouseDown', hideTipLayerHandler);

        s.gotoAndPlay_btn.addEventListener('onMouseDown', gotoAndPlayHandler);
        s.gotoAndStop_btn.addEventListener('onMouseDown', gotoAndStopHandler);
        s.nextFrame_btn.addEventListener('onMouseDown', nextFrameHandler);
        s.prevFrame_btn.addEventListener('onMouseDown', prevFrameHandler);
        s.play_btn.addEventListener('onMouseDown', playHandler);
        s.stop_btn.addEventListener('onMouseDown', stopHandler);
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dmovieclip';
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

    function gotoAndPlayHandler(e) {
        s.animation_mc.gotoAndPlay(4);
        s.output_txt.text = 'animation_mc从第4帧开始播放;'
    }

    function gotoAndStopHandler(e) {
        s.animation_mc.gotoAndStop(8);
        s.output_txt.text = 'animation_mc停在第8帧播放头;'
    }

    function nextFrameHandler(e) {
        s.animation_mc.nextFrame();
        s.output_txt.text = 'animation_mc播放下一帧;'
    }

    function prevFrameHandler(e) {
        s.animation_mc.prevFrame();
        s.output_txt.text = 'animation_mc播放前一帧;'
    }

    function playHandler(e) {
        s.animation_mc.play();
        s.output_txt.text = 'animation_mc在当前位置继续播放;'
    }

    function stopHandler(e) {
        s.animation_mc.stop();
        s.output_txt.text = 'animation_mc停止播放;'
    }
};
F2xExtend(dmovieclip.Dmovieclip, F2xContainer);
dmovieclip.Dmovieclip.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	var _d0=new dmovieclip.F2xAuto_38();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:59.95});
	var _d1=new dmovieclip.F2xAuto_34();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"output:",21,"#FFCC00","Arial",2,2,389.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:179.05,y:153.75});
	var _d3=new dmovieclip.F2xAuto_31();
	_d3.name="stop_btn";
	s.stop_btn=_d3;
	Flash2x.d(_d3,{x:93.5,y:479.55});
	var _d4=new dmovieclip.F2xAuto_32();
	_d4.name="play_btn";
	s.play_btn=_d4;
	Flash2x.d(_d4,{x:93.5,y:414.65});
	var _d5=new dmovieclip.F2xAuto_30();
	_d5.name="prevFrame_btn";
	s.prevFrame_btn=_d5;
	Flash2x.d(_d5,{x:93.5,y:349.8});
	var _d6=new dmovieclip.F2xAuto_29();
	_d6.name="nextFrame_btn";
	s.nextFrame_btn=_d6;
	Flash2x.d(_d6,{x:93.5,y:284.95});
	var _d7=new dmovieclip.F2xAuto_28();
	_d7.name="gotoAndStop_btn";
	s.gotoAndStop_btn=_d7;
	Flash2x.d(_d7,{x:93.5,y:220.1});
	var _d8=new dmovieclip.F2xAuto_27();
	_d8.name="gotoAndPlay_btn";
	s.gotoAndPlay_btn=_d8;
	Flash2x.d(_d8,{x:93.5,y:155.25});
	var _d9=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d9,{x:180.95,y:117});
	var _d10=new dmovieclip.F2xAuto_36();
	Flash2x.d(_d10,{b:1.2146,o:0.8008});
	var _d11=new dmovieclip.Content();
	_d11.name="animation_mc";
	s.animation_mc=_d11;
	Flash2x.d(_d11,{x:-3.05,y:541.25,a:0.5729,b:0.5729});
	var _d12=new dmovieclip.F2xAuto_56();
	s.addChild(_d12);
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
