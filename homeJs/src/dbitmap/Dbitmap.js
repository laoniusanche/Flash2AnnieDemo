var dbitmap=dbitmap||{};
dbitmap.Dbitmap=function(){
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
        s.tip_mc.addEventListener(annie.MouseEvent.CLICK, hideTipLayerHandler);


        s.creatBitmap_btn.addEventListener(annie.MouseEvent.CLICK, creatBitmapHandler);
        s.creatBitmapRect_btn.addEventListener(annie.MouseEvent.CLICK, creatBitmapWhitRectHandler);

    }
    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dbitmap';
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
    function creatBitmapHandler(e){
        var hxmSprite,
            hxmBitmap;
        var img = new Image();
        img.onload = function () {
            hxmBitmap = new annie.Bitmap(img);
            hxmSprite = new annie.Sprite();
            hxmSprite.name = 'hxm';
            hxmSprite.x = 100;
            hxmSprite.y = 460;
            hxmSprite.mouseEnable=false;
            hxmSprite.addChild(hxmBitmap);
            s.addChild(hxmSprite);
        }
        img.src = '../homeJs/resource/Flash2xLogo.jpg';
        s.output_txt.text = '原图宽高100%画图;'
    }
    function creatBitmapWhitRectHandler(e){
        var hxmSprite,
            hxmBitmap;
        var img = new Image();
        img.onload = function () {
            hxmBitmap = new annie.Bitmap(img,new annie.Rectangle(0,0,100,200));
            hxmSprite = new annie.Sprite();
            hxmSprite.name = 'hxm';
            hxmSprite.x = 180;
            hxmSprite.y = 240;
            hxmSprite.mouseEnable=false;
            hxmSprite.addChild(hxmBitmap);
            s.addChild(hxmSprite);
        }
        img.src = '../homeJs/resource/Flash2xLogo.jpg';
        s.output_txt.text = '指定矩形区域画图;'
    }
};
F2xExtend(dbitmap.Dbitmap,F2xContainer);
dbitmap.Dbitmap.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new dbitmap.F2xAuto_14();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:97.95});
	var _d1=new dbitmap.F2xAuto_11();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"output:",21,"#FFCC00","Arial",2,2,389.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:179.05,y:185.75});
	var _d3=new dbitmap.F2xAuto_9();
	_d3.name="creatBitmapRect_btn";
	s.creatBitmapRect_btn=_d3;
	Flash2x.d(_d3,{x:93.5,y:305.3});
	var _d4=new dbitmap.F2xAuto_3();
	_d4.name="creatBitmap_btn";
	s.creatBitmap_btn=_d4;
	Flash2x.d(_d4,{x:93.5,y:201.25});
	var _d5=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d5,{x:180.95,y:131});
	var _d6=new dbitmap.F2xAuto_13();
	Flash2x.d(_d6,{o:0.8008});
	var _d7=new dbitmap.F2xAuto_16();
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
