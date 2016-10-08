var dfloatdisplay=dfloatdisplay||{};
dfloatdisplay.Dfloatdisplay=function(){
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

        s.showFloatDisplay_btn.addEventListener(annie.MouseEvent.CLICK, function (e) {
            //初始化annie.FloatDisplay浮层类
            var floatDisplay = new annie.FloatDisplay();
            floatDisplay.init(window.document.getElementById('ifr_video'));
            s.addChild(floatDisplay);

            /*html operate*/
            var document = window.document,
                $doc = $(document);
            /******** 回放 ********/
            document.getElementById('sohuplayer').innerHTML = showVrsPlayer({
                vid        : '3216940',
                width      : '90%',
                height     : '400',
                autoplay   : 'false',
                showCtrlBar: 1,
                sogouBtn   : '0',
                getHTML    : 1
            });
            $('#ifr_video').addClass('in');

            $doc.on('touchend', '#video_close_btn', function (e) {
                //floatDisplay.delElement();//直接移除浮层
                $('.video_con').html('');//移除视频
                $('#ifr_video').removeClass('in');//隐藏视频div容器
            });
        });
    }
    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dfloatdisplay';
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
};
F2xExtend(dfloatdisplay.Dfloatdisplay,F2xContainer);
dfloatdisplay.Dfloatdisplay.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new dfloatdisplay.F2xAuto_5();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:85.95});
	var _d1=new dfloatdisplay.F2xAuto_3();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=new dfloatdisplay.F2xAuto_1();
	_d2.name="showFloatDisplay_btn";
	s.showFloatDisplay_btn=_d2;
	Flash2x.d(_d2,{x:311.55,y:405.35,a:1.6,b:1.6});
	var _d4=Flash2x.s({type:0,data:"Egx/hROMBj/AAAMAAACidMhj/AAAg"},null,{type:0,color:"#CCCCCC",lineWidth:1});
	Flash2x.d(_d4,{x:320,y:519.975});
	var _d3=Flash2x.s({type:0,data:"Egx/BRPMAAAiidMBj+AAAMAAACidg"},{type:0,color:"#CCCCCC"},null);
	Flash2x.d(_d3,{x:320,y:519.975});
	s.addChild(_d3);
	s.addChild(_d4);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
