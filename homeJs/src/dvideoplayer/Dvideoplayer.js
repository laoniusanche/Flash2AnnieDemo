var dvideoplayer = dvideoplayer || {};
dvideoplayer.Dvideoplayer = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    //yours_code_here
    var videoPlayer;
    s.addEventListener(annie.Event.ADD_TO_STAGE, initStage);
    /**
     * 初始化
     * @param e
     */
    function initStage(e) {
        s.removeEventListener(annie.Event.ADD_TO_STAGE, initStage);
        s.back_btn.addEventListener(annie.MouseEvent.CLICK, backHomeHandler);
        s.tip_mc.addEventListener('onMouseDown', hideTipLayerHandler);

        s.play_btn.addEventListener('onMouseDown', playVideoHandler);
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dvideoplayer';
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

    function playVideoHandler(e) {
        if (videoPlayer) {
            return;
        }
        videoPlayer = new annie.VideoPlayer('resource/videoSource', 1, 360, 340);
        s.addChild(videoPlayer);
        videoPlayer.x = 160;
        videoPlayer.y = 460;
        videoPlayer.video.play();
        s.output_txt.text = '视频预加载中，耐心等待一下！';
        //videoPlayer.video.loop=true;
    }
};
F2xExtend(dvideoplayer.Dvideoplayer, F2xContainer);
dvideoplayer.Dvideoplayer.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	var _d0=new dvideoplayer.F2xAuto_9();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:97.95});
	var _d1=new dvideoplayer.F2xAuto_6();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"output:",21,"#FFCC00","Arial",2,2,384.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:188.05,y:185.75});
	var _d3=new dvideoplayer.F2xAuto_3();
	_d3.name="play_btn";
	s.play_btn=_d3;
	Flash2x.d(_d3,{x:107.5,y:201.25});
	var _d4=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d4,{x:188.05,y:131});
	var _d5=new dvideoplayer.F2xAuto_8();
	Flash2x.d(_d5,{o:0.8008});
	var _d6=new dvideoplayer.F2xAuto_11();
	s.addChild(_d6);
	s.addChild(_d5);
	s.addChild(_d4);
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end

};
