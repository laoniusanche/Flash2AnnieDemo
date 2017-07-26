var dmusic=dmusic||{};
dmusic.Dmusic=function(){
	var s = this;
	F2xContainer.call(s);
	s.initUI();
    var minute = 0;
    //秒钟变量
    var secend = 0;
    //音乐循环状态跳帧变量
    var modeCount = 1;
    //获取音乐的总时长
    dmusic.myVid = Flash2x.getMediaByName("dmusic", "Music").media.duration;
    //音乐大小变化的跳帧变量；
    var voiceFrame = 22;
    //fla里没有stop，这样可以我多写代码，让它多次旋转；
    s.cd_mc.stop();
    s.time_mc.bar_mc.visible = false;
    var musicPlayList = [Flash2x.getMediaByName("dmusic", "Music"), Flash2x.getMediaByName("dmusic", "Music2")];
    s.voice2_mc.gotoAndStop(voiceFrame);
    s.stop_btn.mouseEnable = false;
    s.small_btn.mouseChildren = false;
    s.big_btn.mouseChildren = false;
    s.musicPlay = musicPlayList[0];
    /**
     * 初始化
     * @parame
     */
    s.addEventListener(annie.Event.ADD_TO_STAGE, function () {
        for (var i = 0; i <= 1; i++) {
            s.musicPlay = musicPlayList[i];
            s.musicPlay.addEventListener(annie.Event.ON_PLAY_UPDATE, upDateHandle);
            s.musicPlay.addEventListener(annie.Event.ON_PLAY_END, endHandle);
        }
    });
    /**
     * 移出舞台
     * @parame
     */
    s.addEventListener(annie.Event.REMOVE_TO_STAGE, function (e) {
        s.musicPlay.stop();
    });
    /**
     * UpDate控制时间和进度条
     * @parame
     */

    function upDateHandle(e) {
        secend = Math.floor((e.data.currentTime) % 60);
        minute = (Math.floor((e.data.currentTime) / 60));
        if (secend < 10) {
            s.start_txt.text = "0" + minute + ":" + "0" + secend;
        } else {
            s.start_txt.text = "0" + minute + ":" + secend;
        }
        s.time_mc.bar_mc.scaleX = (e.data.currentTime) / (dmusic.myVid);
    }

    /**
     * 播放结束时间
     */
    function endHandle(e) {
        s.differentHandle();
        s.musicPlay.stop();
        if (modeCount == 1) {
            if (s.musicPlay == musicPlayList[0]) {
                s.musicPlay = musicPlayList[1];
                s.sameHandle();
            } else {
                s.musicPlay = musicPlayList[0];
                s.sameHandle();
            }
        } else if (modeCount == 2) {
            s.sameHandle();
        } else if (modeCount == 3) {
            s.musicPlay = musicPlayList[(Math.floor(Math.random() * 2))];
            s.sameHandle();
        } else if (modeCount == 4) {
            if (s.musicPlay == musicPlayList[0]) {
                s.musicPlay = musicPlayList[1];
                s.sameHandle();
            } else {
                s.musicPlay.stop();
                s.differentHandle();
            }
        }
    }

    /**
     * 侦听CD盘手柄最后一帧
     */
    s.claw_mc.addEventListener(annie.Event.END_FRAME, function () {
        s.claw_mc.stop();
    });

    /**
     * 播放音乐和暂停音乐
     * @parame
     */
    s.play_btn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        if (s.play_btn.currentFrame == 1) {
            s.time_mc.bar_mc.visible = true;
            s.cd_mc.play();
            s.claw_mc.play();
            s.play_btn.gotoAndStop(2);
            s.stop_btn.gotoAndStop(2);
            s.stop_btn.mouseEnable = true;
            dmusic.myVid = s.musicPlay.media.duration;
            s.end_txt.text = "0" + Math.floor((dmusic.myVid) / 60) + ":" + ((dmusic.myVid) - (Math.floor((dmusic.myVid )/ 60)) * 60);
            s.musicPlay.pause(false);
        } else if (s.play_btn.currentFrame == 2) {
            s.musicPlay.pause(true);
            s.cd_mc.stop();
            s.play_btn.gotoAndStop(1);
            s.stop_btn.gotoAndStop(2);
            s.stop_btn.mouseEnable = true;
            s.claw_mc.play(false);
        }
    });

    /**
     * 停止播放音乐
     * @parame
     */
    s.stop_btn.addEventListener(annie.MouseEvent.CLICK, function () {
        if (s.play_btn.currentFrame == 1) {
            s.musicPlay.stop();
            s.stop_btn.alpha = 0.4;
            s.stop_btn.mouseEnable = false;
            secend = 0;
            minute = 0;
            s.start_txt.text = "0" + minute + ":" + "0" + secend;
            s.end_txt.text = "0" + Math.floor((dmusic.myVid) / 60) + ":" + ((dmusic.myVid) - (Math.floor((dmusic.myVid) / 60)) * 60);
        }
        if (s.play_btn.currentFrame == 2) {
            s.differentHandle();
            s.musicPlay.stop();
            secend = 0;
            minute = 0;
            s.start_txt.text = "0" + minute + ":" + "0" + secend;
        }
    });

    /**
     * 上一曲
     * @parame
     */
    s.last_btn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        s.differentHandle();
        s.musicPlay.stop();
        secend = 0;
        minute = 0;
        s.start_txt.text = "0" + minute + ":" + "0" + secend;
        s.musicPlay = musicPlayList[1];
        dmusic.myVid = s.musicPlay.media.duration;
        s.end_txt.text = "0" + Math.floor((dmusic.myVid) / 60) + ":" + ((dmusic.myVid) - (Math.floor((dmusic.myVid) / 60)) * 60);
        s.last_btn.alpha = 0.4;
        s.last_btn.mouseEnable = false;
        s.next_btn.alpha = 1;
        s.next_btn.mouseEnable = true;

    });
    /**
     * 下一曲
     * @parame
     */
    s.next_btn.addEventListener(annie.MouseEvent.CLICK, function () {
        s.musicPlay.stop();
        secend = 0;
        minute = 0;
        s.start_txt.text = "0" + minute + ":" + "0" + secend;
        s.musicPlay = musicPlayList[0];
        dmusic.myVid = s.musicPlay.media.duration;
        s.end_txt.text = "0" + Math.floor((dmusic.myVid) / 60) + ":" + ((dmusic.myVid) - (Math.floor((dmusic.myVid) / 60)) * 60);
        s.last_btn.alpha = 1;
        s.last_btn.mouseEnable = true;
        s.next_btn.alpha = 0.4;
        s.next_btn.mouseEnable = false;
        s.differentHandle();
    });

    /**
     * 声音控制
     * @parame
     */
    s.addEventListener(annie.MouseEvent.CLICK, function (e) {
        if (e.target.name == "small_btn") {
            s.voice2_mc.gotoAndStop(voiceFrame - 2);
            voiceFrame = voiceFrame - 2;
            s.musicPlay.volume -= 0.05;
            if (s.voice2_mc.currentFrame == 2) {
                s.small_btn.alpha = 0.4;
                s.musicPlay.volume = 0;
                s.small_btn.mouseEnable = false;
            }
            s.big_btn.alpha = 1;
            s.big_btn.mouseEnable = true;
        } else if (e.target.name == "big_btn") {
            if((voiceFrame + 2)<=22){
                s.voice2_mc.gotoAndStop(voiceFrame + 2);
            }
            if(s.musicPlay.volume<1){
                s.musicPlay.volume+=0.05
            }
            voiceFrame = voiceFrame + 2;
            s.small_btn.alpha = 1;
            s.small_btn.mouseEnable = true;
            if (s.voice2_mc.currentFrame == 22) {
                s.big_btn.alpha = 0.4;
                s.musicPlay.volume = 1;
                s.big_btn.mouseEnable = false;
            }
        }
    });

    /**
     * 音乐模式变换，只是进行跳帧处理
     * @parame
     */
    s.mode_btn.addEventListener(annie.MouseEvent.CLICK, function () {
        modeCount++;
        if (modeCount < 5) {
            s.mode_btn.gotoAndStop(modeCount);

        } else {
            modeCount = 1;
            s.mode_btn.gotoAndStop(1);
        }
    });
};
F2xExtend(dmusic.Dmusic,F2xContainer);
/**
 * 暂停播放共同代码
 * @parame
 */
dmusic.Dmusic.prototype.differentHandle = function () {
    var s=this;
    if (s.claw_mc.currentFrame != 1) {
        s.claw_mc.play(false);
    }
    s.time_mc.bar_mc.scaleX=0.01;
    s.cd_mc.stop();
    s.play_btn.gotoAndPlay(1);
    s.stop_btn.gotoAndPlay(1);
    s.stop_btn.mouseEnable = false;
};
/**
 * 播放共同代码
 * @parame
 */
dmusic.Dmusic.prototype.sameHandle = function () {
    var s=this;
    s.musicPlay.play();
    setTimeout(function () {
        s.cd_mc.play();
        s.claw_mc.play();
    }, 1000);
    s.play_btn.gotoAndStop(2);
    s.stop_btn.gotoAndStop(2);
    s.last_btn.alpha = 1;
    s.next_btn.alpha = 1;
    s.last_btn.mouseEnable = true;
    s.next_btn.mouseEnable = true;
    s.stop_btn.mouseEnable = true;
    dmusic.myVid = s.musicPlay.media.duration;
    s.end_txt.text = "0" + Math.floor((dmusic.myVid) / 60) + ":" + ((dmusic.myVid) - (Math.floor((dmusic.myVid) / 60)) * 60);
};
dmusic.Dmusic.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d0=new dmusic.F2xAuto_22();
	_d0.name="claw_mc";
	s.claw_mc=_d0;
	Flash2x.d(_d0,{x:335.9,y:179.5});
	var _d1=new dmusic.F2xAuto_35();
	_d1.name="cd_mc";
	s.cd_mc=_d1;
	Flash2x.d(_d1,{x:41.9,y:171.25});
	var _d2=Flash2x.t(0,decodeURI("00:00"),30,"#FF0000","Arial",2,2,81.15,33.5,32,"left",false,false,"single",false);
	_d2.name="start_txt";
	s.start_txt=_d2;
	Flash2x.d(_d2,{x:67.8,y:762.5});
	var _d3=Flash2x.t(0,decodeURI("00:00"),30,"#FF0000","Arial",2,2,78.55,33.5,32,"left",false,false,"single",false);
	_d3.name="end_txt";
	s.end_txt=_d3;
	Flash2x.d(_d3,{x:485.4,y:762.5});
	var _d6=new dmusic.F2xAuto_31();
	_d6.name="big_btn";
	s.big_btn=_d6;
	Flash2x.d(_d6,{x:416.9,y:928.5});
	var _d5=new dmusic.F2xAuto_30();
	_d5.name="small_btn";
	s.small_btn=_d5;
	Flash2x.d(_d5,{x:162.65,y:927.35});
	var _d4=new dmusic.F2xAuto_19();
	_d4.name="voice2_mc";
	s.voice2_mc=_d4;
	Flash2x.d(_d4,{x:204.5,y:940.8,a:0.2738});
	var _d7=new dmusic.F2xAuto_14();
	_d7.name="mode_btn";
	s.mode_btn=_d7;
	Flash2x.d(_d7,{x:63.65,y:834.2});
	var _d8=new dmusic.F2xAuto_9();
	_d8.name="play_btn";
	s.play_btn=_d8;
	Flash2x.d(_d8,{x:401.45,y:833.3});
	var _d9=new dmusic.F2xAuto_8();
	_d9.name="stop_btn";
	s.stop_btn=_d9;
	Flash2x.d(_d9,{x:313.65,y:833.3});
	var _d10=new dmusic.F2xAuto_7();
	_d10.name="next_btn";
	s.next_btn=_d10;
	Flash2x.d(_d10,{x:475.05,y:827.6});
	var _d11=new dmusic.F2xAuto_6();
	_d11.name="last_btn";
	s.last_btn=_d11;
	Flash2x.d(_d11,{x:219.65,y:833.95});
	var _d12=new dmusic.F2xAuto_38();
	_d12.name="time_mc";
	s.time_mc=_d12;
	Flash2x.d(_d12,{x:104.95,y:741.95});
	var _d13=new dmusic.F2xAuto_3();
	Flash2x.d(_d13,{a:0.7356,b:0.9155});
	s.addChild(_d13);
	s.addChild(_d12);
	s.addChild(_d11);
	s.addChild(_d10);
	s.addChild(_d9);
	s.addChild(_d8);
	s.addChild(_d7);
	s.addChild(_d4);
	s.addChild(_d5);
	s.addChild(_d6);
	s.addChild(_d3);
	s.addChild(_d2);
	s.addChild(_d1);
	s.addChild(_d0);
	//f2x_auto_created_init_end
	
};
