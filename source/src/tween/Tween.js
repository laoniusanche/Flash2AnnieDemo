var tween = tween || {};
tween.Tween = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    if (!s.gTimer) {
        s.gTimer = new annie.Timer(100, 1);
        s.gTimer.addEventListener(annie.Event.TIMER, s.gt = function (e) {
            s.start();
        });
        s.gTimer.start();
    }
    function ResetAll() {
        annie.Tween.killAll();
        //killAll()移除掉所有tween事件，也可以用kill()来移除
        s.ball.x = 80;
        s.ball.y = 707;
        s.ball.rotation = 0;
        s.ball.scaleX = 1;
        s.ball.scaleY = 1;
        s.ball.alpha = 1;
    }

//点击事件后通过判断当前帧数改变按钮状态
    s.move_x.addEventListener(annie.MouseEvent.CLICK, function (e) {
        ResetAll();
        if (s.move_x.currentFrame == 1) {
            s.move_x.gotoAndStop(2);
        } else {
            s.move_x.gotoAndStop(1);
        }
        s.gTimer.start();
    });
    s.move_y.addEventListener(annie.MouseEvent.CLICK, function (e) {
        ResetAll();
        if (s.move_y.currentFrame == 1) {
            s.move_y.gotoAndStop(2);
        } else {
            s.move_y.gotoAndStop(1);
        }
        s.gTimer.start();
    });
    s.Useyoyo.addEventListener(annie.MouseEvent.CLICK, function (e) {
        ResetAll();
        if (s.Useyoyo.currentFrame == 1) {
            s.Useyoyo.gotoAndStop(2);
            s.Useloop.gotoAndStop(1);
        } else {
            s.Useyoyo.gotoAndStop(1);
        }
        s.gTimer.start();
    });
    s.Useloop.addEventListener(annie.MouseEvent.CLICK, function (e) {
        ResetAll();
        if (s.Useloop.currentFrame == 1) {
            s.Useloop.gotoAndStop(2);
            s.Useyoyo.gotoAndStop(1);
        } else {
            s.Useloop.gotoAndStop(1);
        }
        s.gTimer.start();
    });
    s.UsebackInOut.addEventListener(annie.MouseEvent.CLICK, function (e) {
        ResetAll();
        if (s.UsebackInOut.currentFrame == 1) {
            s.UsebackInOut.gotoAndStop(2);
        } else {
            s.UsebackInOut.gotoAndStop(1);
        }
        s.gTimer.start();
    });
    s.Rotate.addEventListener(annie.MouseEvent.CLICK, function (e) {
        ResetAll();
        if (s.Rotate.currentFrame == 1) {
            s.Rotate.gotoAndStop(2);
        } else {
            s.Rotate.gotoAndStop(1);
        }
        s.gTimer.start();
    });
    s.bigger.addEventListener(annie.MouseEvent.CLICK, function (e) {
        ResetAll();
        if (s.bigger.currentFrame == 1) {
            s.bigger.gotoAndStop(2);
        } else {
            s.bigger.gotoAndStop(1)
        }
        s.gTimer.start();
    });
    s.miss.addEventListener(annie.MouseEvent.CLICK, function (e) {
        ResetAll();
        if (s.miss.currentFrame == 1) {
            s.miss.gotoAndStop(2);
        } else {
            s.miss.gotoAndStop(1);
        }
        s.gTimer.start();
    })
};
F2xExtend(tween.Tween, F2xContainer);
tween.Tween.prototype.start = function () {
    var s = this;
    var tweenData = {};
    //定义一个空数组，存放点击不同按钮后需要改变的数据
    if (s.move_x.currentFrame == 2) {
        tweenData.x = 586;
        //往x轴方向移动
    }
    if (s.move_y.currentFrame == 2) {
        tweenData.y = 214;
        //往y轴方向移动
    }
    if (s.Useyoyo.currentFrame == 2) {
        tweenData.yoyo = true;
        //来回循环
    }
    if (s.Useloop.currentFrame == 2) {
        tweenData.loop = true;
        //单向循环
    }
    if (s.UsebackInOut.currentFrame == 2) {
        tweenData.ease = annie.Tween.backInOut;
        //使用backInOut缓动类型
    }
    if (s.Rotate.currentFrame == 2) {
        tweenData.rotation = 360
        //旋转角度，数字代表旋转的度数
    }
    if (s.bigger.currentFrame == 2) {
        tweenData.scaleX = 2;
        tweenData.scaleY = 2;
        //缩放图形，数字表示缩放倍数
    }
    if (s.miss.currentFrame == 2) {
        tweenData.alpha = 0;
        //改变图形透明度
    }
    //if判断条件为每个按钮的当前帧数
    annie.Tween.to(s.ball, 1, tweenData);
}
tween.Tween.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
    var _d8 = new tween.F2xAuto_11();
    _d8.name = "miss";
    s.miss = _d8;
    Flash2x.d(_d8, {x: 425.95, y: 821});
    var _d7 = new tween.F2xAuto_10();
    _d7.name = "bigger";
    s.bigger = _d7;
    Flash2x.d(_d7, {x: 314.35, y: 821, a: 1.0001, b: 0.9997});
    var _d6 = new tween.F2xAuto_9();
    _d6.name = "Rotate";
    s.Rotate = _d6;
    Flash2x.d(_d6, {x: 204.7, y: 821});
    var _d5 = Flash2x.t(0, decodeURI("(%E6%9B%B4%E5%A4%9A%E7%BC%93%E5%8A%A8%E7%B1%BB%E5%9E%8B%E8%AF%B7%E6%9F%A5%E7%9C%8BAPI)"), 22, "#666666", "Arial", 2, 2, 275, 24.55, 24, "center", false, true, "multiline", false);
    Flash2x.d(_d5, {x: 246.95, y: 881.1});
    var _d4 = new tween.F2xAuto_6();
    _d4.name = "UsebackInOut";
    s.UsebackInOut = _d4;
    Flash2x.d(_d4, {x: 25.85, y: 874.65, a: 0.9975});
    var _d3 = new tween.F2xAuto_5();
    _d3.name = "Useloop";
    s.Useloop = _d3;
    Flash2x.d(_d3, {x: 28.15, y: 821});
    var _d2 = new tween.F2xAuto_4();
    _d2.name = "Useyoyo";
    s.Useyoyo = _d2;
    Flash2x.d(_d2, {x: 379.8, y: 765.7});
    var _d1 = new tween.F2xAuto_3();
    _d1.name = "move_y";
    s.move_y = _d1;
    Flash2x.d(_d1, {x: 203.7, y: 765.7});
    var _d0 = new tween.F2xAuto_2();
    _d0.name = "move_x";
    s.move_x = _d0;
    Flash2x.d(_d0, {x: 28.15, y: 765.7, a: 0.9999});
    var _d12 = Flash2x.b("tween", "F2xAuto_15");
    Flash2x.d(_d12, {x: 38.6, y: 181.4});
    var _d11 = new tween.F2xAuto_0();
    _d11.name = "ball";
    s.ball = _d11;
    Flash2x.d(_d11, {x: 80, y: 707});
    var _d10 = Flash2x.s({
        type: 0,
        data: "Egsvgq/IAuBeEgrRgrKIheDaEAq4ApXIAHAHIAtApIBEA+EAshApPIg1A4Ig5A+EArTArFIADADEAqjArFIgGAG"
    }, null, {type: 0, color: "#444444", lineWidth: 2, caps: "round", joints: "round", miter: "10"});
    Flash2x.d(_d10, {x: 317.975, y: 482.475});
    var _d9 = Flash2x.s({type: 0, data: "AAUhZIAKAIAguhRIBdBMIhdBWAAeBRIgKAJ"}, null, {
        type: 0,
        color: "#444444",
        lineWidth: 1,
        caps: "round",
        joints: "round",
        miter: "10"
    });
    Flash2x.d(_d9, {x: 591.075, y: 738.875});
    var _d13 = new tween.F2xAuto_12();
    s.addChild(_d13);
    s.addChild(_d9);
    s.addChild(_d10);
    s.addChild(_d11);
    s.addChild(_d12);
    s.addChild(_d0);
    s.addChild(_d1);
    s.addChild(_d2);
    s.addChild(_d3);
    s.addChild(_d4);
    s.addChild(_d5);
    s.addChild(_d6);
    s.addChild(_d7);
    s.addChild(_d8);
    //f2x_auto_created_init_end

};
