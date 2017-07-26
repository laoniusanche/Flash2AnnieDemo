var dtimer=dtimer||{};
dtimer.Dtimer=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
	/*
	 **这是将timer类new出来；
	 */
    var timerState=new annie.Timer();
    s.timeNumber=s.loop_mc.number_txt;
    s.timeDelay=s.time_mc.time_txt;
    s.loop_mc.gotoAndStop(2);
    var timerCount=0;
	/*
	 **移除舞台侦听
	 */
    s.addEventListener(annie.Event.REMOVE_TO_STAGE,function (e) {
        timerState.kill();
        s.start_btn.mouseEnable=true;
    });
	/*
	 **关闭点击按钮的孩子，这样避免无限追按钮下面的孩子，可以立即给出反应，
	 */
    s.start_btn.mouseChildren=false;
    s.reset_btn.mouseChildren=false;
    s.pause_btn.mouseChildren=false;
    s.choose_btn.mouseChildren=false;
	/*
	 **这是计时侦听时间，里面是你所要控制的内容，
	 */
    timerState.addEventListener(annie.Event.TIMER,function (e) {
        timerCount++;
        s.outPut_txt.text=timerCount
    });
	/*
	 **侦听完成事件，不需要计时，就在计时完成事件里将kill掉，
	 */
    timerState.addEventListener(annie.Event.TIMER_COMPLETE,function (e) {
        s.outPut_txt.text="完成计数事件触发";
        timerCount=0;
    });
    s.addEventListener(annie.MouseEvent.CLICK,function (e) {
		/*
		 **点击开始按钮，
		 */
           if(e.target.name=="start_btn"){
            s.outPut_txt.text="触发timer事件";
            if(timeTxt(s.timeDelay.text)){
				/*
				 **计时开始
				 */
                if(timeTxt(s.timeNumber.text)){
                    if(timerState.running){
                        timerState.delay=s.timeDelay.text;
                        timerState.repeatCount=s.timeNumber.text;
                        timerState.reset();
                        timerCount=0;
                        timerState.start();
                    }else{
                        timerState.delay=s.timeDelay.text;
                        timerState.repeatCount=s.timeNumber.text;
                        timerState.start();
                    }
                }else if(s.timeNumber.text==""){
                    if(s.choose_btn.currentFrame!=2){
                        timerState.delay=s.timeDelay.text;
                        timerState.repeatCount=3;
                        timerState.start()
                    }else{
                        if (timerState.running){
                            timerState.delay=s.timeDelay.text;
                            timerState.repeatCount=s.timeNumber.text;
                            timerState.reset();
                            timerCount=0;
                            timerState.start()
                        }else{
                            timerState.delay=s.timeDelay.text;
                            timerState.repeatCount=0;
                            timerState.start()
                        }

                    }
                }
            }else{
                s.outPut_txt.text="请输入时间间隔"
            }
        }
		/*
		 **点击暂停按钮，
		 */
        else if(e.target.name=="pause_btn"){
			/*
			 **计时暂停
			 */
            s.outPut_txt.text="计数暂停";
            timerState.stop();
        }
		/*
		 **点击重置按钮，
		 */
        else if(e.target.name=="reset_btn"){
			/*
			 **计时重置，全部清零
			 */
            s.outPut_txt.text="重置计数";
            timerState.reset();
            timerCount=0;
        }
        else if (e.target.name=="choose_btn"){
            if(s.choose_btn.currentFrame==1){
                s.choose_btn.gotoAndStop(2);
                s.loop_mc.gotoAndStop(1);
            }else if(s.choose_btn.currentFrame==2){
                s.choose_btn.gotoAndStop(1);
                s.loop_mc.gotoAndStop(2);
            }
        }
    });
	/*
	 **正整数的验证
	 */
    function timeTxt(e) {
        var re = /^\+?[1-9][0-9]*$/;
        if (re.test(e)) {
            return true;
        } else {
            return false;
        }
    }
};
F2xExtend(dtimer.Dtimer,F2xContainer);
dtimer.Dtimer.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new dtimer.F2xAuto_4();
	_d0.name="reset_btn";
	s.reset_btn=_d0;
	Flash2x.d(_d0,{x:375.1,y:636.7});
	var _d1=new dtimer.F2xAuto_3();
	_d1.name="pause_btn";
	s.pause_btn=_d1;
	Flash2x.d(_d1,{x:235.75,y:637.05});
	var _d3=new dtimer.F2xAuto_11();
	_d3.name="time_mc";
	s.time_mc=_d3;
	Flash2x.d(_d3,{x:206.7,y:448.4});
	var _d2=Flash2x.t(0,decodeURI("%E6%97%B6%E9%97%B4%E9%97%B4%E9%9A%94%EF%BC%9A"),25,"#000000","Adobe Heiti Std R",2,2,137,31.25,27,"center",false,false,"multiline",false);
	Flash2x.d(_d2,{x:70.7,y:450.25});
	var _d5=new dtimer.F2xAuto_10();
	_d5.name="loop_mc";
	s.loop_mc=_d5;
	Flash2x.d(_d5,{x:400.9,y:529.9});
	var _d4=Flash2x.t(0,decodeURI("%E5%BE%AA%E7%8E%AF%E6%AC%A1%E6%95%B0%EF%BC%9A"),25,"#000000","Adobe Heiti Std R",2,2,127,31.25,27,"center",false,false,"multiline",false);
	Flash2x.d(_d4,{x:269.9,y:528.9});
	var _d6=new dtimer.F2xAuto_9();
	_d6.name="choose_btn";
	s.choose_btn=_d6;
	Flash2x.d(_d6,{x:82.7,y:529.9});
	var _d8=Flash2x.t(0,decodeURI(""),25,"#000000","Adobe Heiti Std R",2,2,307,136.2,27,"center",false,false,"multiline",false);
	_d8.name="outPut_txt";
	s.outPut_txt=_d8;
	Flash2x.d(_d8,{x:175,y:262.9});
	var _d7=Flash2x.s({type:0,data:"A4SrsMAwlAAAIAAXZMgwlAAAg"},null,{type:0,color:"#000000",lineWidth:1,caps:"round",joints:"round",miter:"10"});
	Flash2x.d(_d7,{x:331.5,y:336.625});
	var _d9=new dtimer.F2xAuto_8();
	Flash2x.d(_d9,{x:49.9,y:258.1});
	var _d10=new dtimer.F2xAuto_2();
	_d10.name="start_btn";
	s.start_btn=_d10;
	Flash2x.d(_d10,{x:103.1,y:637.05});
	var _d11=new dtimer.F2xAuto_0();
	s.addChild(_d11);
	s.addChild(_d10);
	s.addChild(_d9);
	s.addChild(_d7);
	s.addChild(_d8);
	s.addChild(_d6);
	s.addChild(_d4);
	s.addChild(_d5);
	s.addChild(_d2);
	s.addChild(_d3);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
