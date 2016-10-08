var dsprite=dsprite||{};
dsprite.Dsprite=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();

    var logoSprite,
        logoBitmap;
    s.addEventListener(annie.Event.ADD_TO_STAGE, initStage);
    /**
     * 初始化
     * @param e
     */
    function initStage(e) {
        s.removeEventListener(annie.Event.ADD_TO_STAGE, initStage);
        s.back_btn.addEventListener(annie.MouseEvent.CLICK, backHomeHandler);
        s.tip_mc.addEventListener(annie.MouseEvent.CLICK, hideTipLayerHandler);
        var img = new Image();
        img.onload = function () {
            logoBitmap = new annie.Bitmap(img);
            logoSprite = new annie.Sprite();
            logoSprite.name = 'logo';
            logoSprite.x = 160;
            logoSprite.y = 500;
            logoSprite.mouseEnable=false;
            logoSprite.addChild(logoBitmap);
        }
        img.src = '../homeJs/resource/Flash2xLogo.jpg';
        s.addChild_btn.addEventListener(annie.MouseEvent.CLICK, addChildHandler);
        s.addChidAt_btn.addEventListener(annie.MouseEvent.CLICK, addChildAtHandler);
        s.removeChild_btn.addEventListener(annie.MouseEvent.CLICK, removeChildHandler);
        s.removeChidAt_btn.addEventListener(annie.MouseEvent.CLICK, removeChildAtHandler);
        s.getChildAt_btn.addEventListener(annie.MouseEvent.CLICK, getChildAtHandler);
        s.getChildByName_btn.addEventListener(annie.MouseEvent.CLICK, getChildByNameHandler);
    }

    /**
     * 返回范例列表
     * @param e
     */
    function backHomeHandler(e) {
        var backHomeEvent = new annie.Event('backHomeEvent');
        backHomeEvent.origin = 'dsprite';
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
     * 添加一个显示对象到Sprite
     * @param e
     */
    function addChildHandler(e) {
        s.addChild(logoSprite);
        s.output_txt.text = 'child:'+ logoSprite+'   child_name:'+logoSprite.name;
    }

    /**
     * 获取Sprite中指定层级一个child
     * @param e
     */
    function addChildAtHandler(e) {
        s.addChildAt(logoSprite, 1);
        s.output_txt.text = 'child:'+ logoSprite+'   child_name:'+logoSprite.name;
    }

    /**
     * 从Sprite中移除一个child
     * @param e
     */
    function removeChildHandler(e) {
        if(s.getChildByName('logo')){
            s.removeChild(logoSprite);
            s.output_txt.text = 'child:'+ logoSprite+'   child_name:'+logoSprite.name;
        }else{
            alert('请您先addChild添加显示对象！');
        }
    }

    /**
     * 移除指定层级上的孩子
     * @param e
     */
    function removeChildAtHandler(e) {
        s.removeChildAt(1);
    }

    /**
     * 获取Sprite中指定层级一个child
     * @param e
     */
    function getChildAtHandler(e) {
        s.getChildAt(1);
        s.output_txt.text = 'child:'+ s.getChildAt(1)+'   child_name:'+s.getChildAt(1).name;
    }

    /**
     * 通过给displayObject设置的名字来获取一个child,可以使用正则匹配查找
     * @param e
     */
    function getChildByNameHandler(e) {
        if(!s.getChildByName('logo')){
            alert('请您先addChild添加显示对象！');
            return;
        }
        s.output_txt.text = 'child:'+ s.getChildByName('logo')+'     child_name:'+s.getChildByName('logo').name;
    }
};
F2xExtend(dsprite.Dsprite,F2xContainer);
dsprite.Dsprite.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new dsprite.F2xAuto_18();
	_d0.name="back_btn";
	s.back_btn=_d0;
	Flash2x.d(_d0,{x:35.3,y:53.95});
	var _d1=new dsprite.F2xAuto_15();
	_d1.name="tip_mc";
	s.tip_mc=_d1;
	var _d2=Flash2x.t(0,"输出：",21,"#FFCC00","Microsoft YaHei",2,2,389.05,172.3,23,"left",false,false,"multiline");
	_d2.name="output_txt";
	s.output_txt=_d2;
	Flash2x.d(_d2,{x:179.05,y:151.75});
	var _d3=new dsprite.F2xAuto_12();
	_d3.name="getChildByName_btn";
	s.getChildByName_btn=_d3;
	Flash2x.d(_d3,{x:93.5,y:461.55});
	var _d4=new dsprite.F2xAuto_13();
	_d4.name="getChildAt_btn";
	s.getChildAt_btn=_d4;
	Flash2x.d(_d4,{x:93.5,y:399.45});
	var _d5=new dsprite.F2xAuto_11();
	_d5.name="removeChidAt_btn";
	s.removeChidAt_btn=_d5;
	Flash2x.d(_d5,{x:93.5,y:337.4});
	var _d6=new dsprite.F2xAuto_10();
	_d6.name="removeChild_btn";
	s.removeChild_btn=_d6;
	Flash2x.d(_d6,{x:93.5,y:271.35});
	var _d7=new dsprite.F2xAuto_9();
	_d7.name="addChidAt_btn";
	s.addChidAt_btn=_d7;
	Flash2x.d(_d7,{x:93.5,y:211.3});
	var _d8=new dsprite.F2xAuto_8();
	_d8.name="addChild_btn";
	s.addChild_btn=_d8;
	Flash2x.d(_d8,{x:93.5,y:149.25});
	var _d9=Flash2x.t(0,"output:",24,"#333333","Arial",2,2,100,26.85,26,"left",false,false,"single");
	Flash2x.d(_d9,{x:180.95,y:115});
	var _d10=new dsprite.F2xAuto_17();
	Flash2x.d(_d10,{b:1.1761,o:0.8008});
	var _d11=new dsprite.F2xAuto_5();
	_d11.name="world";
	s.world=_d11;
	Flash2x.d(_d11,{x:-43,y:580});
	var _d12=new dsprite.F2xAuto_20();
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
