var movieClip=movieClip||{};
movieClip.MovieClip=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
    s.control_btn.mouseChildren=false;
    s.play_btn.mouseChildren=false;
    s.check1_mc.mouseChildren=false;
    s.check2_mc.mouseChildren=false;
    s.check3_mc.mouseChildren=false;
    var setTip=function (msg) {
        s.tip_txt.text=msg;
    };
    s.addEventListener(annie.MouseEvent.CLICK,function (e) {
        switch(e.target.name){
            case "play_btn":
                if(e.target.currentFrame==1){
                    s.monkey_mc.stop();
                    e.target.nextFrame();
                }else{
                    s.monkey_mc.play();
                    e.target.prevFrame();
                }
                break;
            case "control_btn":
                if(e.target.currentFrame==1){
                    s.monkey_mc.play(false);
                    e.target.nextFrame();
                }else{
                    s.monkey_mc.play(true);
                    e.target.prevFrame();
                }
                break;
            case "check1_mc":
            case "check2_mc":
            case "check3_mc":
                if(e.target.currentFrame==1){
                    e.target.nextFrame();
                }else{
                    e.target.prevFrame();
                }
                break;
        }
        s.tip_txt.text="";
    });
    s.monkey_mc.addEventListener(annie.Event.END_FRAME,function (e) {
        if(s.check1_mc.currentFrame>1) {
            if (e.data.frameIndex == 1) {
                setTip("倒着播放到第一帧结束事件");
            } else {
                setTip("顺着播放到最后一帧结束事件");
            }
        }
    });
    s.monkey_mc.addEventListener(annie.Event.CALL_FRAME,function (e) {
        if(s.check2_mc.currentFrame>1) {
            setTip("当前帧" + e.data.frameIndex + ";标签名:" + e.data.frameName);
        }
    });
    s.monkey_mc.addFrameScript(14,function () {
        if(s.check3_mc.currentFrame>1) {
            setTip("触发当前事件时，当前帧为" + s.monkey_mc.currentFrame);
        }
    });
};
F2xExtend(movieClip.MovieClip,F2xContainer);
movieClip.MovieClip.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new movieClip.F2xAuto_4();
	_d0.name="check3_mc";
	s.check3_mc=_d0;
	Flash2x.d(_d0,{x:485.9,y:849.3});
	var _d1=new movieClip.F2xAuto_4();
	_d1.name="check2_mc";
	s.check2_mc=_d1;
	Flash2x.d(_d1,{x:485.95,y:791.55});
	var _d2=new movieClip.F2xAuto_4();
	_d2.name="check1_mc";
	s.check1_mc=_d2;
	Flash2x.d(_d2,{x:485.95,y:733.85});
	var _d3=Flash2x.b("movieClip","F2xAuto_11");
	Flash2x.d(_d3,{x:94,y:849.25});
	var _d4=Flash2x.b("movieClip","F2xAuto_10");
	Flash2x.d(_d4,{x:94,y:791.55});
	var _d5=Flash2x.b("movieClip","F2xAuto_9");
	Flash2x.d(_d5,{x:94,y:733.85});
	var _d6=new movieClip.F2xAuto_3();
	_d6.name="control_btn";
	s.control_btn=_d6;
	Flash2x.d(_d6,{x:383.1,y:642.6});
	var _d7=new movieClip.F2xAuto_2();
	_d7.name="play_btn";
	s.play_btn=_d7;
	Flash2x.d(_d7,{x:191.1,y:642.6});
	var _d8=Flash2x.t(0,decodeURI("%E4%B8%80%E5%8F%AA%E7%8C%B4%E5%AD%90"),36,"#000000","Times New Roman",2,2,144.2,39.9,38,"left",false,false,"multiline",false);
	Flash2x.d(_d8,{x:245.9,y:135});
	var _d9=Flash2x.t(0,decodeURI(""),36,"#000000","Times New Roman",2,2,582.95,39.9,38,"center",false,false,"single",false);
	_d9.name="tip_txt";
	s.tip_txt=_d9;
	Flash2x.d(_d9,{x:39,y:554.9});
	var _d10=new movieClip.F2xAuto_6();
	Flash2x.d(_d10,{x:64.35,y:195.55});
	var _d11=new movieClip.monkey_walkcycle_normal();
	_d11.name="monkey_mc";
	s.monkey_mc=_d11;
	Flash2x.d(_d11,{x:352.45,y:346,a:0.7164,b:0.7164});
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
