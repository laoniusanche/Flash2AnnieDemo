var dsound = dsound || {};
dsound.Dsound = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    //yours_code_here
    var soundPlayer;
    s.addEventListener(annie.Event.ADD_TO_STAGE, initStage, false);
    /**
     * 初始化
     * @param e
     */
    function initStage(e) {
        s.removeEventListener(annie.Event.ADD_TO_STAGE, initStage);
        s.back_btn.addEventListener(annie.MouseEvent.CLICK, backHomeHandler);
        s.tip_mc.addEventListener('onMouseDown', hideTipLayerHandler);
        s.play_btn.addEventListener('onMouseDown', playSoundHandler);
        s.pause_btn.addEventListener('onMouseDown', pauseSoundHandler);
        s.stop_btn.addEventListener('onMouseDown', stopSoundHandler);
    }
    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dsound';
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
     * 播放音乐
     * @param e
     */
    function playSoundHandler(e) {
        if (!soundPlayer) {
            soundPlayer = new annie.Sound('resource/music.mp3');
        }
        soundPlayer.play();
        s.output_txt.text = '播放音乐...';
    }

    /**
     * 暂时音乐
     * @param e
     */
    function pauseSoundHandler(e) {
        if (soundPlayer) {
            soundPlayer.pause(!soundPlayer.media.paused);
        }
        s.output_txt.text = '暂停或者恢复播放音乐...';
    }

    /**
     * 停止音乐
     * @param e
     */
    function stopSoundHandler(e) {
        if (soundPlayer) {
            soundPlayer.stop();
        }
        s.output_txt.text = '停止音乐...';
    }
};
F2xExtend(dsound.Dsound, F2xContainer);
dsound.Dsound.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	var _d0=new dsound.F2xAuto_10();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:97.95});
	var _d1=new dsound.F2xAuto_7();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"output:",21,"#FFCC00","Arial",2,2,384.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:188.05,y:185.75});
	var _d3=new dsound.F2xAuto_5();
	_d3.name="stop_btn";
	s.stop_btn=_d3;
	Flash2x.d(_d3,{x:107.5,y:359.25});
	var _d4=new dsound.F2xAuto_4();
	_d4.name="pause_btn";
	s.pause_btn=_d4;
	Flash2x.d(_d4,{x:107.5,y:280.25});
	var _d5=new dsound.F2xAuto_3();
	_d5.name="play_btn";
	s.play_btn=_d5;
	Flash2x.d(_d5,{x:107.5,y:201.25});
	var _d6=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d6,{x:188.05,y:131});
	var _d7=new dsound.F2xAuto_9();
	Flash2x.d(_d7,{o:0.8008});
	var _d8=new dsound.F2xAuto_12();
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
