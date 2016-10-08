var dscrollpage = dscrollpage || {};
dscrollpage.Dscrollpage = function () {
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

        s.vscroll_btn.addEventListener('onMouseDown', vscrollHandler);
        s.hscroll_btn.addEventListener('onMouseDown', hscrollHandler);
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dscrollpage';
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
     * 垂直滚动
     * @param e
     */
    function vscrollHandler(e) {
        if (s.scroll_con.children.length > 0) {
            s.scroll_con.removeAllChildren();
        }
        var img = new Image(),
            vscroll;
        img.onload = function (e) {
            var imgBitmap = new annie.Bitmap(img);
            vscroll = new annieUI.ScrollPage(640, 1040, 2080, true);//纵向滚动
            vscroll.view.addChild(imgBitmap);//把滚动对象添加到scroolPage视图容器view里面
            s.scroll_con.addChild(vscroll);
        }
        img.src = '../homeJs/resource/vscroll.jpg';

    }

    /**
     * 水平滚动
     * @param e
     */
    function hscrollHandler(e) {
        if (s.scroll_con.children.length > 0) {
            s.scroll_con.removeAllChildren();
        }
        var img = new Image(),
            hscroll;
        img.onload = function (e) {
            var imgBitmap = new annie.Bitmap(img);
            hscroll = new annieUI.ScrollPage(640, 1040, 1600, false);//横向滚动
            hscroll.view.addChild(imgBitmap);//把滚动对象添加到scroolPage视图容器view里面
            s.scroll_con.addChild(hscroll);
        }
        img.src = '../homeJs/resource/hscroll.jpg';
    }
};
F2xExtend(dscrollpage.Dscrollpage, F2xContainer);
dscrollpage.Dscrollpage.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
	var _d0=new dscrollpage.F2xAuto_6();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:97.95});
	var _d1=new dscrollpage.F2xAuto_4();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=new dscrollpage.F2xAuto_2();
	_d2.name="hscroll_btn";
	s.hscroll_btn=_d2;
	Flash2x.d(_d2,{x:101.55,y:269.2});
	var _d3=new dscrollpage.F2xAuto_1();
	_d3.name="vscroll_btn";
	s.vscroll_btn=_d3;
	Flash2x.d(_d3,{x:101.55,y:193.2});
	var _d4=new dscrollpage.F2xAuto_0();
	_d4.name="scroll_con";
	s.scroll_con=_d4;
	var _d6=Flash2x.s({type:0,data:"Egx/hRPMBj/AAAMAAACifMhj/AAAg"},null,{type:0,color:"#CCCCCC",lineWidth:1});
	Flash2x.d(_d6,{x:320,y:520});
	var _d5=Flash2x.s({type:0,data:"Egx/BRQMAAAiifMBj+AAAMAAACifg"},{type:0,color:"#999999"},null);
	Flash2x.d(_d5,{x:320,y:520});
	s.addChild(_d5);
	s.addChild(_d6);
	s.addChild(_d4);
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end

};
