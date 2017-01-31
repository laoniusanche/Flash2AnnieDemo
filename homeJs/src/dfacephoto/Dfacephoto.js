var dfacephoto=dfacephoto||{};
dfacephoto.Dfacephoto=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
    //yours_code start here
    s.addEventListener(annie.Event.ADD_TO_STAGE, initStage);
    /**
     * 初始化
     * @param e
     */
    function initStage(e) {
        s.removeEventListener(annie.Event.ADD_TO_STAGE, initStage);
        s.back_btn.addEventListener(annie.MouseEvent.CLICK, backHomeHandler);
        s.tip_mc.addEventListener(annie.MouseEvent.CLICK, hideTipLayerHandler);

        s.circleFacel_btn.addEventListener(annie.MouseEvent.CLICK, circleFacelHandler);
        s.rectFace_btn.addEventListener('onMouseClick', rectFaceHandler);
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dfacephoto';
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
     * 圆形头像
     * @param e
     */
    function circleFacelHandler(e) {
        trace(e.type);
        var facePhoto = new annieUI.FacePhoto();
        facePhoto.init('resource/Flash2xLogo.jpg',200,0);
        facePhoto.x=100;
        facePhoto.y=460;
        s.addChild(facePhoto);
    }

    /**
     * 方形头像
     * @param e
     */
    function rectFaceHandler(e) {
        trace(e.type);
        var facePhoto = new annieUI.FacePhoto();
        facePhoto.init('resource/Flash2xLogo.jpg',200,1);
        facePhoto.x=200;
        facePhoto.y=200;
        s.addChild(facePhoto);
    }
};
F2xExtend(dfacephoto.Dfacephoto,F2xContainer);
dfacephoto.Dfacephoto.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new dfacephoto.F2xAuto_9();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:104});
	var _d1=new dfacephoto.F2xAuto_7();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=new dfacephoto.F2xAuto_5();
	_d2.name="rectFace_btn";
	s.rectFace_btn=_d2;
	Flash2x.d(_d2,{x:101.55,y:305.2});
	var _d3=new dfacephoto.F2xAuto_4();
	_d3.name="circleFacel_btn";
	s.circleFacel_btn=_d3;
	Flash2x.d(_d3,{x:101.55,y:229.2});
	var _d4=new dfacephoto.F2xAuto_11();
	s.addChild(_d4);
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
